#!/usr/bin/env python3
"""Recursively convert Coptic text inside CopticReader XML Language tags.

By default this walks the v3 decrypted include folder and overwrites only XML
files that change. It converts text found under:

    <Language id="Coptic">...</Language>

The conversion logic is imported from fixCoptic.py so it uses the same Copt font
mapping, UTF-8 mojibake repair, control cleanup, and overline handling.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

from fixCoptic import convert_xml_text


DEFAULT_ROOT = Path(
    r"D:\AppDev\LiturgicalText\CopticReaderFiles\version3.0"
    r"\decrypted_assets\documents\include"
)
DEFAULT_MAP = Path(__file__).with_name("copt_map.json")
CR_NAMESPACE = "http://www.suscopts.org/CopticReader"


def local_name(tag: str) -> str:
    if "}" in tag:
        return tag.rsplit("}", 1)[-1]
    return tag


def is_target_coptic_language(elem: ET.Element) -> bool:
    return local_name(elem.tag) == "Language" and (elem.get("id") or "") == "Coptic"


def convert_coptic_language_tags(root: ET.Element, mapping: dict[str, str] | None) -> int:
    converted_tags = 0
    cache: dict[str, str] = {}

    for elem in root.iter():
        if not is_target_coptic_language(elem):
            continue
        convert_xml_text(elem, cache, mapping=mapping)
        converted_tags += 1

    return converted_tags


def resolve_output_path(input_path: Path, root_dir: Path, output_dir: Path | None) -> Path:
    if output_dir is None:
        return input_path
    return output_dir / input_path.relative_to(root_dir)


def process_file(
    input_path: Path,
    root_dir: Path,
    output_dir: Path | None,
    mapping: dict[str, str] | None,
    dry_run: bool,
) -> tuple[bool, int]:
    original = input_path.read_bytes()

    try:
        root = ET.fromstring(original)
    except ET.ParseError as exc:
        print(f"Skipping invalid XML: {input_path} ({exc})", file=sys.stderr)
        return False, 0

    converted_tags = convert_coptic_language_tags(root, mapping)
    if converted_tags == 0:
        return False, 0

    ET.register_namespace("", CR_NAMESPACE)
    converted = ET.tostring(root, encoding="utf-8", xml_declaration=True)
    changed = converted != original

    if changed and not dry_run:
        output_path = resolve_output_path(input_path, root_dir, output_dir)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_bytes(converted)

    return changed, converted_tags


def load_mapping(map_path: Path | None) -> dict[str, str] | None:
    if map_path is None:
        return None
    if not map_path.exists():
        raise SystemExit(f"Mapping file not found: {map_path}")
    return json.loads(map_path.read_text(encoding="utf-8"))


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Recursively convert text inside <Language id=\"Coptic\"> tags "
            "in CopticReader XML files."
        )
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=DEFAULT_ROOT,
        help=f"Folder to scan recursively. Default: {DEFAULT_ROOT}",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Write converted files to a parallel output folder instead of overwriting.",
    )
    default_map = str(DEFAULT_MAP) if DEFAULT_MAP.exists() else None
    parser.add_argument(
        "--map",
        dest="map_path",
        default=default_map,
        help=(
            "Character mapping JSON to use for offline conversion. "
            "Defaults to CRFiles/scripts/copt_map.json if present. "
            "Pass --map none to use the online converter endpoint."
        ),
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Report what would change without writing files.",
    )
    args = parser.parse_args()

    root_dir = args.root.resolve()
    if not root_dir.exists():
        raise SystemExit(f"Root folder not found: {root_dir}")

    map_path = Path(args.map_path) if args.map_path else None
    if args.map_path and args.map_path.lower() == "none":
        map_path = None
    mapping = load_mapping(map_path)

    files_seen = 0
    files_changed = 0
    tags_seen = 0

    for input_path in sorted(root_dir.rglob("*.xml")):
        files_seen += 1
        changed, converted_tags = process_file(
            input_path=input_path,
            root_dir=root_dir,
            output_dir=args.output_dir.resolve() if args.output_dir else None,
            mapping=mapping,
            dry_run=args.dry_run,
        )
        tags_seen += converted_tags
        if changed:
            files_changed += 1
            action = "Would update" if args.dry_run else "Updated"
            print(f"{action}: {input_path} ({converted_tags} Coptic Language tags)")

    print(
        f"Scanned {files_seen} XML files; found {tags_seen} Coptic Language tags; "
        f"{'would update' if args.dry_run else 'updated'} {files_changed} files."
    )


if __name__ == "__main__":
    main()
