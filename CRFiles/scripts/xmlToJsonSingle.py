import html
import json
import os
import argparse
import xml.etree.ElementTree as ET

INPUT_FILE = r"D:\AppDev\LiturgicalText\LiturgicalBooks\CRFiles\Vigil.of.apoc.include_test.fixed.xml"
OUTPUT_PATH = r"D:\AppDev\LiturgicalText\LiturgicalBooks\CRFiles\Vigil.of.apoc.include_test.fixed.json"
BASE_DIR = r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_xml"

NS = {"cr": "http://www.suscopts.org/CopticReader"}


def clean_text(text):
    if text is None:
        return ""
    return " ".join(html.unescape(text).split())


def parse_languages(parent):
    collected = {}
    if parent is None:
        return collected

    for lang in parent.findall("cr:Language", NS):
        lang_id = lang.get("id")
        if not lang_id:
            continue
        text = clean_text("".join(lang.itertext()))
        if text:
            collected[lang_id.lower()] = text

    ordered = {}
    for key in ("english", "coptic", "arabic"):
        if key in collected:
            ordered[key] = collected[key]
    for key, value in collected.items():
        if key not in ordered:
            ordered[key] = value
    return ordered


def local_name(tag):
    if "}" in tag:
        return tag.rsplit("}", 1)[-1]
    return tag


def resolve_include_path(include_path: str):
    path = include_path.replace("/", os.sep)
    if not path.lower().endswith(".xml"):
        path = f"{path}.xml"
    return os.path.join(BASE_DIR, path)


def build_header_table_from_title(title_node, seasons):
    """
    Turns:
      <Title><Language id="English">...</Language><Language id="Arabic">...</Language></Title>
    into:
      { english_title, arabic_title, caption_class: "header-table", ... }
    """
    title_langs = parse_languages(title_node)
    if not title_langs:
        return None

    data = {
        "english_title": title_langs.get("english", ""),
        "arabic_title": title_langs.get("arabic", ""),
        "coptic_title": title_langs.get("coptic", ""),
        "caption_class": "header-table",
    }
    if seasons:
        data["seasons"] = seasons
    return data


def build_section(section, seasons=None, fallback_title=None):
    title_node = section.find("cr:Title", NS)
    title_langs = parse_languages(title_node) if title_node is not None else {}

    english_title = title_langs.get("english")
    arabic_title = title_langs.get("arabic")
    coptic_title = title_langs.get("coptic")

    if not english_title and fallback_title:
        english_title = fallback_title
    title = english_title or arabic_title or coptic_title

    rows = []
    for text_node in iter_section_text_nodes(section):
        cell = parse_languages(text_node)
        if not cell:
            continue
        rows.append({"row-class": "text", "cells": [cell]})

    data = {
        "english_title": english_title,
        "coptic_title": coptic_title,
        "arabic_title": arabic_title,
        "title": title,
    }
    if seasons:
        data["seasons"] = seasons
    data["tbodies"] = [{"rows": rows}]
    return data


def iter_section_text_nodes(section):
    """
    Yield Text nodes inside this Section, including nested containers (e.g. Role),
    but do not descend into nested Section elements to avoid cross-section bleed.
    """
    stack = list(section)
    while stack:
        node = stack.pop(0)
        name = local_name(node.tag)
        if name == "Section":
            continue
        if name == "Text":
            yield node
            continue
        stack = list(node) + stack


def build_text_section(text_node, seasons, fallback_title=None):
    cell = parse_languages(text_node)
    if not cell:
        return None

    if fallback_title:
        english_title = fallback_title
        title = fallback_title
    else:
        english_title = None
        title = None

    data = {
        "english_title": english_title,
        "coptic_title": None,
        "arabic_title": None,
        "title": title,
    }
    if seasons:
        data["seasons"] = seasons
    data["tbodies"] = [{"rows": [{"row-class": "text", "cells": [cell]}]}]
    return data


def extract_rows_from_document(file_path):
    """
    Legacy behavior used for InsertDocument directly under a non-silent Section:
    flatten all .//Text nodes into rows.
    """
    tree = ET.parse(file_path)
    root = tree.getroot()
    rows = []
    for text_node in root.findall(".//cr:Text", NS):
        cell = parse_languages(text_node)
        if not cell:
            continue
        rows.append({"row-class": "text", "cells": [cell]})
    return rows


def _normalize_path(p: str) -> str:
    return os.path.normpath(p).lower()


def split_season_id(season_id: str):
    """
    Basic support for:
      "A | B | C"  => ["A","B","C"]
    Does NOT parse full boolean expressions like:
      "(A | B) ^ C" or "!A"
    Those will be returned as-is (single string) unless they contain '|'.
    """
    if not season_id:
        return []
    if "|" in season_id:
        return [p.strip() for p in season_id.split("|") if p.strip()]
    return [season_id.strip()]


def collect_sections_from_node(
    node,
    include_stack,
    active_seasons,
    in_section,
    suppress_comments,
    fallback_title,
):
    sections = []

    for child in list(node):
        name = local_name(child.tag)

        # --- TITLE => header-table when under a Season context ---
        if name == "Title":
            if active_seasons:
                header = build_header_table_from_title(child, active_seasons)
                if header:
                    sections.append(header)
            continue

        # --- INSERTDOCUMENT => ALWAYS processed inline (anywhere) ---
        if name == "InsertDocument":
            include_path = child.get("path")
            if not include_path:
                continue

            resolved = resolve_include_path(include_path)
            if not os.path.exists(resolved):
                print(f"Missing include: {resolved}")
                continue

            resolved_norm = _normalize_path(resolved)
            stack_norm = [_normalize_path(p) for p in include_stack]
            if resolved_norm in stack_norm:
                print(f"Skipping recursive include (cycle): {resolved}")
                continue

            sections.extend(
                parse_document(
                    resolved,
                    include_stack + [resolved],
                    active_seasons,
                    in_section,
                    suppress_comments,
                )
            )
            continue

        # --- SECTION ---
        if name == "Section":
            silent = (child.get("silent") or "").lower() == "true"

            if silent:
                # Treat silent sections as containers: recurse so Group/Season/Title/InsertDocument work
                sections.extend(
                    collect_sections_from_node(
                        child,
                        include_stack,
                        active_seasons,
                        True,  # now inside a section container
                        suppress_comments,
                        fallback_title,
                    )
                )
            else:
                # Normal behavior: build section from direct Title/Text children
                section_data = build_section(child, active_seasons, fallback_title)

                # Keep legacy behavior: direct InsertDocument children append flattened Text rows
                for sub in list(child):
                    if local_name(sub.tag) == "InsertDocument":
                        include_path = sub.get("path")
                        if not include_path:
                            continue
                        resolved = resolve_include_path(include_path)
                        if not os.path.exists(resolved):
                            print(f"Missing include: {resolved}")
                            continue
                        section_data["tbodies"][0]["rows"].extend(
                            extract_rows_from_document(resolved)
                        )

                sections.append(section_data)

            continue

        # --- COMMENT (still suppressed like your original script) ---
        if name == "Comment":
            continue

        # --- SEASON (accumulates; supports simple A|B|C split) ---
        if name == "Season":
            season_id_raw = (child.get("id") or "").strip()
            parts = split_season_id(season_id_raw)
            next_seasons = active_seasons + parts if parts else active_seasons

            sections.extend(
                collect_sections_from_node(
                    child,
                    include_stack,
                    next_seasons,
                    in_section,
                    True,  # preserve your previous behavior
                    fallback_title,
                )
            )
            continue

        # --- FORCESEASON (overrides) ---
        if name == "ForceSeason":
            season_id_raw = (child.get("id") or "").strip()
            parts = split_season_id(season_id_raw)
            next_seasons = parts if parts else active_seasons

            sections.extend(
                collect_sections_from_node(
                    child,
                    include_stack,
                    next_seasons,
                    in_section,
                    suppress_comments,
                    fallback_title,
                )
            )
            continue

        # --- TEXT outside Section => becomes its own section ---
        if name == "Text":
            if not in_section:
                text_section = build_text_section(child, active_seasons, fallback_title)
                if text_section:
                    sections.append(text_section)
            continue

        # --- default: recurse into unknown containers like Document/Group/etc. ---
        sections.extend(
            collect_sections_from_node(
                child,
                include_stack,
                active_seasons,
                in_section,
                suppress_comments,
                fallback_title,
            )
        )

    return sections


def parse_document(file_path, include_stack, active_seasons, in_section, suppress_comments):
    try:
        with open(file_path, "rb") as handle:
            content = handle.read()
        if not content.strip():
            print(f"Skipping empty XML file: {file_path}")
            return []
        tree = ET.parse(file_path)
    except ET.ParseError as exc:
        print(f"Failed to parse XML file: {file_path} ({exc})")
        return []

    root = tree.getroot()
    fallback_title = os.path.splitext(os.path.basename(file_path))[0]

    return collect_sections_from_node(
        root,
        include_stack,
        active_seasons,
        in_section,
        suppress_comments,
        fallback_title,
    )


def main():
    parser = argparse.ArgumentParser(
        description="Convert a single CopticReader XML document to JSON."
    )
    parser.add_argument(
        "--input",
        default=INPUT_FILE,
        help=f"Input XML path. Defaults to: {INPUT_FILE}",
    )
    parser.add_argument(
        "--output",
        default=OUTPUT_PATH,
        help=f"Output JSON path. Defaults to: {OUTPUT_PATH}",
    )
    args = parser.parse_args()

    input_file = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output)

    if not os.path.isfile(input_file):
        raise FileNotFoundError(f"Input XML not found: {input_file}")

    sections = parse_document(input_file, [input_file], [], False, False)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(sections, f, ensure_ascii=False, indent=2)
        f.write("\n")


if __name__ == "__main__":
    main()
