#!/usr/bin/env python3
"""
Convert Copt-encoded text in JSON ("coptic" fields) to Unicode by using
the CopticChurch.net converter endpoint, optionally caching a per-character
mapping for faster offline conversion.

Usage:
  python scripts/fixCoptic.py path/to/input.json --output path/to/output.json
  python scripts/fixCoptic.py path/to/input.json --map scripts/copt_map.json --build-map

If --output is omitted, the input file is overwritten.
"""

from __future__ import annotations

import argparse
import json
from html.parser import HTMLParser
from pathlib import Path
import re
from typing import Optional
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
import xml.etree.ElementTree as ET


CONVERT_URL = "https://www.copticchurch.net/coptic_language/fonts/convert"
FROM_FONT = "Copt"
ENCODING = "unicode"
OVERLINE = "\u0305"
INVISIBLE_COPTIC_CONTROLS = ("\u200d", "\u200c", "\ufeff")


class _ConvertedTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._capture = False
        self.value = ""

    def handle_starttag(self, tag, attrs):
        if tag != "textarea":
            return
        attr_map = dict(attrs)
        if attr_map.get("id") == "converted":
            self._capture = True

    def handle_endtag(self, tag):
        if tag == "textarea" and self._capture:
            self._capture = False

    def handle_data(self, data):
        if self._capture:
            self.value += data


def convert_text(text: str) -> str:
    payload = urlencode(
        {
            "from": FROM_FONT,
            "encoding": ENCODING,
            "data": text,
            "action": "translate",
        }
    ).encode("utf-8")
    request = Request(CONVERT_URL, data=payload, method="POST")
    request.add_header("Content-Type", "application/x-www-form-urlencoded")
    request.add_header(
        "User-Agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    )
    request.add_header("Referer", CONVERT_URL)
    try:
        with urlopen(request, timeout=30) as response:
            html = response.read().decode("utf-8", errors="replace")
    except HTTPError as exc:
        raise RuntimeError(
            f"Converter request failed with HTTP {exc.code}. "
            "The remote endpoint may be blocking automated requests."
        ) from exc
    except URLError as exc:
        raise RuntimeError(f"Converter request failed: {exc}") from exc

    parser = _ConvertedTextParser()
    parser.feed(html)
    if not parser.value:
        raise ValueError("Failed to extract converted text from response.")
    return apply_overline_markers(parser.value)


def apply_overline_markers(text: str) -> str:
    if "#" not in text:
        return text
    out = []
    for ch in text:
        if ch == "#":
            out.append(OVERLINE)
        else:
            out.append(ch)
    return "".join(out)


def normalize_legacy_coptic_controls(text: str) -> str:
    if not text:
        return text
    for marker in INVISIBLE_COPTIC_CONTROLS:
        text = text.replace(marker, "")
    return text


def coptic_char_count(text: str) -> int:
    return sum(1 for ch in text if 0x2C80 <= ord(ch) <= 0x2CFF)


def looks_like_utf8_mojibake(text: str) -> bool:
    # Common mojibake lead bytes when UTF-8 was decoded as cp1252/latin-1.
    return any(ch in text for ch in ("â", "Ã", "Ï", "Ì"))


def repair_utf8_mojibake(text: str) -> str:
    if not text or not looks_like_utf8_mojibake(text):
        return text

    byte_run = re.compile(r"[\x00-\xff]{2,}")
    repaired = text

    # Multiple passes help when text was mojibake'd more than once.
    for _ in range(2):
        changed = False

        def fix_run(match: re.Match[str]) -> str:
            nonlocal changed
            run = match.group(0)
            best = run
            best_score = coptic_char_count(run)
            for encoding in ("cp1252", "latin-1"):
                try:
                    candidate = run.encode(encoding).decode("utf-8")
                except UnicodeError:
                    continue
                score = coptic_char_count(candidate)
                if score > best_score:
                    best = candidate
                    best_score = score
            if best != run:
                changed = True
            return best

        repaired = byte_run.sub(fix_run, repaired)
        if not changed:
            break

    return repaired


def is_unicode_coptic_text(text: str) -> bool:
    return coptic_char_count(text) > 0


def has_replacement_chars(text: str) -> bool:
    return "\ufffd" in text


def convert_with_map(text: str, mapping: dict[str, str]) -> str:
    mapped = "".join(mapping.get(ch, ch) for ch in text)
    return apply_overline_markers(mapped)


def collect_coptic_chars(obj, chars: set[str]) -> None:
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "coptic" and isinstance(v, str):
                chars.update(v)
            else:
                collect_coptic_chars(v, chars)
        return
    if isinstance(obj, list):
        for v in obj:
            collect_coptic_chars(v, chars)


def convert(obj, cache, mapping=None):
    if isinstance(obj, dict):
        converted = {}
        for k, v in obj.items():
            if k == "coptic" and isinstance(v, str):
                v = normalize_legacy_coptic_controls(v)
                if mapping is not None:
                    converted[k] = convert_with_map(v, mapping)
                else:
                    if v in cache:
                        converted[k] = cache[v]
                    else:
                        cache[v] = convert_text(v)
                        converted[k] = cache[v]
            else:
                converted[k] = convert(v, cache, mapping)
        return converted
    if isinstance(obj, list):
        return [convert(v, cache, mapping) for v in obj]
    return obj


def local_name(tag: str) -> str:
    if "}" in tag:
        return tag.rsplit("}", 1)[-1]
    return tag


def is_coptic_language_id(lang_id: str) -> bool:
    value = (lang_id or "").strip().lower()
    return value in {"coptic", "copticreading"}


def has_coptic_class(elem: ET.Element) -> bool:
    class_value = elem.get("class") or ""
    classes = {token.strip().lower() for token in class_value.split() if token.strip()}
    return "coptic" in classes


def convert_xml_text(node: ET.Element, cache: dict[str, str], mapping=None) -> None:
    def convert_chunk(text: str) -> str:
        text = normalize_legacy_coptic_controls(text)
        repaired = repair_utf8_mojibake(text)
        if is_unicode_coptic_text(repaired):
            return apply_overline_markers(repaired)
        if has_replacement_chars(repaired):
            # Data loss already occurred upstream; avoid compounding corruption.
            return apply_overline_markers(repaired)
        if mapping is not None:
            return convert_with_map(repaired, mapping)
        if repaired in cache:
            return cache[repaired]
        cache[repaired] = convert_text(repaired)
        return cache[repaired]

    if node.text:
        node.text = convert_chunk(node.text)
    for child in list(node):
        convert_xml_text(child, cache, mapping)
        if child.tail:
            child.tail = convert_chunk(child.tail)


def convert_span_text(node: ET.Element, cache: dict[str, str], mapping=None) -> None:
    # Convert all text within this span subtree, including tails of nested tags.
    convert_xml_text(node, cache, mapping)


def convert_coptic_spans_in_language(
    language_node: ET.Element, cache: dict[str, str], mapping=None
) -> None:
    for elem in language_node.iter():
        if local_name(elem.tag) == "span" and has_coptic_class(elem):
            convert_span_text(elem, cache, mapping)


def convert_xml(root: ET.Element, cache: dict[str, str], mapping=None) -> None:
    for elem in root.iter():
        if local_name(elem.tag) != "Language":
            continue
        if is_coptic_language_id(elem.get("id") or ""):
            convert_xml_text(elem, cache, mapping)
            continue
        convert_coptic_spans_in_language(elem, cache, mapping)


def collect_coptic_chars_xml(root: ET.Element, chars: set[str]) -> None:
    def collect_node_text(node: ET.Element) -> None:
        for item in node.iter():
            if item.text:
                chars.update(item.text)
            if item.tail:
                chars.update(item.tail)

    for elem in root.iter():
        if local_name(elem.tag) != "Language":
            continue
        if is_coptic_language_id(elem.get("id") or ""):
            collect_node_text(elem)
            continue
        for sub in elem.iter():
            if local_name(sub.tag) == "span" and has_coptic_class(sub):
                collect_node_text(sub)


def main():
    parser = argparse.ArgumentParser(
        description="Convert Copt-encoded Coptic text in JSON or XML to Unicode."
    )
    parser.add_argument(
        "input",
        nargs="?",
        help="Path to the source JSON or XML file. If omitted, you will be prompted.",
    )
    parser.add_argument(
        "--output",
        help="Where to write the converted file. Defaults to overwriting the input file.",
    )
    parser.add_argument(
        "--map",
        dest="map_path",
        help="Path to a JSON mapping file (single-character keys).",
    )
    parser.add_argument(
        "--build-map",
        action="store_true",
        help="Build a mapping file from the input JSON using the converter endpoint.",
    )
    args = parser.parse_args()

    if args.input:
        input_path = Path(args.input)
    else:
        user_input = input("Enter path to the source JSON or XML file: ").strip()
        if not user_input:
            raise SystemExit("No input file provided.")
        input_path = Path(user_input)
    output_path = Path(args.output) if args.output else input_path

    if not input_path.exists():
        raise SystemExit(f"Input file not found: {input_path}")

    mapping = None
    if args.map_path:
        map_path = Path(args.map_path)
        if map_path.exists():
            mapping = json.loads(map_path.read_text(encoding="utf-8"))
    ext = input_path.suffix.lower()

    if ext == ".json":
        try:
            data = json.loads(input_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            raise SystemExit(
                f"Invalid JSON in {input_path}: {exc}. "
                "If this is an XML file, pass a .xml path instead."
            ) from exc

        if args.map_path and args.build_map:
            chars = set()
            collect_coptic_chars(data, chars)
            chars = sorted(chars)
            mapping = mapping or {}
            for idx, ch in enumerate(chars, start=1):
                if ch in mapping:
                    continue
                if ch == "#":
                    mapping[ch] = OVERLINE
                else:
                    mapping[ch] = convert_text(ch)
                if idx % 20 == 0:
                    print(f"Mapped {idx}/{len(chars)} characters")
            map_path.write_text(
                json.dumps(mapping, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"Mapping written to {map_path}")

        converted = convert(data, cache={}, mapping=mapping)
        output_path.write_text(
            json.dumps(converted, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"Converted JSON written to {output_path}")
        return

    if ext == ".xml":
        try:
            tree = ET.parse(input_path)
        except ET.ParseError as exc:
            raise SystemExit(f"Invalid XML in {input_path}: {exc}") from exc

        root = tree.getroot()
        if args.map_path and args.build_map:
            chars = set()
            collect_coptic_chars_xml(root, chars)
            chars = sorted(chars)
            mapping = mapping or {}
            for idx, ch in enumerate(chars, start=1):
                if ch in mapping:
                    continue
                if ch == "#":
                    mapping[ch] = OVERLINE
                else:
                    mapping[ch] = convert_text(ch)
                if idx % 20 == 0:
                    print(f"Mapped {idx}/{len(chars)} characters")
            map_path.write_text(
                json.dumps(mapping, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"Mapping written to {map_path}")

        convert_xml(root, cache={}, mapping=mapping)
        tree.write(output_path, encoding="utf-8", xml_declaration=True)
        print(f"Converted XML written to {output_path}")
        return

    raise SystemExit(
        f"Unsupported file type: {input_path.suffix or '<none>'}. "
        "Use a .json or .xml file."
    )


if __name__ == "__main__":
    main()
