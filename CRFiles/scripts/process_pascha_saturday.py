#!/usr/bin/env python3
from __future__ import annotations

import argparse
import copy
import re
import sqlite3
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path


NS_URI = "http://www.suscopts.org/CopticReader"
BIBLE_DB = Path(r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_db_test\copticreader.xml")
DEFAULT_SOURCE_DIR = Path(r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_xml\pascha\saturday")
DEFAULT_DECRYPTED_XML_ROOT = Path(r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_xml")
DEFAULT_OUTPUT_DIR = Path(r"D:\AppDev\LiturgicalText\LiturgicalBooks\CRFiles")


def qn(local: str) -> str:
    return f"{{{NS_URI}}}{local}"


def local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1] if "}" in tag else tag


REF_RE = re.compile(
    r"^(?P<book>.+?)\s+(?P<c1>\d+)(?::(?P<v1>\d+))?(?:-(?:(?P<c2>\d+):)?(?P<v2>\d+))?$"
)


def parse_reference(reference: str) -> tuple[str, int, int | None, int | None, int | None]:
    m = REF_RE.match(reference.strip())
    if not m:
        raise ValueError(f"Unsupported BibleReference format: {reference!r}")
    book = m.group("book").strip()
    c1 = int(m.group("c1"))
    v1 = int(m.group("v1")) if m.group("v1") else None
    c2 = int(m.group("c2")) if m.group("c2") else None
    v2 = int(m.group("v2")) if m.group("v2") else None
    return book, c1, v1, c2, v2


def fetch_verses(conn: sqlite3.Connection, reference: str):
    book, c1, v1, c2, v2 = parse_reference(reference)
    cur = conn.cursor()

    if v1 is None and v2 is None:
        cur.execute(
            """
            SELECT Chapter, Verse, English, Arabic
            FROM Bible
            WHERE Book=? AND Chapter=?
            ORDER BY Chapter, Verse
            """,
            (book, c1),
        )
        return cur.fetchall()

    if v1 is not None and v2 is None and c2 is None:
        cur.execute(
            """
            SELECT Chapter, Verse, English, Arabic
            FROM Bible
            WHERE Book=? AND Chapter=? AND Verse=?
            ORDER BY Chapter, Verse
            """,
            (book, c1, v1),
        )
        return cur.fetchall()

    if c2 is None and v2 is not None:
        cur.execute(
            """
            SELECT Chapter, Verse, English, Arabic
            FROM Bible
            WHERE Book=? AND Chapter=? AND Verse BETWEEN ? AND ?
            ORDER BY Chapter, Verse
            """,
            (book, c1, v1, v2),
        )
        return cur.fetchall()

    if c2 is not None and v2 is not None and v1 is not None:
        cur.execute(
            """
            SELECT Chapter, Verse, English, Arabic
            FROM Bible
            WHERE Book=? AND (
                (Chapter=? AND Verse>=?) OR
                (Chapter=? AND Verse<=?) OR
                (Chapter>? AND Chapter<?)
            )
            ORDER BY Chapter, Verse
            """,
            (book, c1, v1, c2, v2, c1, c2),
        )
        return cur.fetchall()

    raise ValueError(f"Unsupported BibleReference format: {reference!r}")


def resolve_include(path_value: str, decrypted_xml_root: Path) -> Path:
    rel = path_value.replace("/", "\\")
    if not rel.lower().endswith(".xml"):
        rel += ".xml"
    return decrypted_xml_root / rel


def expand_tree(root: ET.Element, conn: sqlite3.Connection, decrypted_xml_root: Path, include_stack: list[Path]) -> None:
    for child in list(root):
        name = local_name(child.tag)
        if name == "InsertDocument":
            path_value = child.get("path", "").strip()
            if not path_value:
                root.remove(child)
                continue
            include_path = resolve_include(path_value, decrypted_xml_root).resolve()
            if include_path in include_stack:
                root.remove(child)
                continue
            if not include_path.exists():
                print(f"[WARN] Missing include: {include_path}")
                root.remove(child)
                continue

            include_tree = ET.parse(include_path)
            include_root = include_tree.getroot()
            expand_tree(include_root, conn, decrypted_xml_root, include_stack + [include_path])
            children = list(include_root)
            idx = list(root).index(child)
            root.remove(child)
            for offset, sub in enumerate(children):
                root.insert(idx + offset, copy.deepcopy(sub))
            continue

        if name == "BibleReference":
            ref = (child.get("reference") or "").strip()
            idx = list(root).index(child)
            root.remove(child)
            if not ref:
                continue
            verses = fetch_verses(conn, ref)
            if not verses:
                print(f"[WARN] No verses found for reference: {ref}")
                continue
            for offset, (_chapter, verse, english, arabic) in enumerate(verses):
                text_el = ET.Element(qn("Text"))
                text_el.set("verse", str(verse))

                en_el = ET.SubElement(text_el, qn("Language"))
                en_el.set("id", "English")
                en_el.text = english or ""

                ar_el = ET.SubElement(text_el, qn("Language"))
                ar_el.set("id", "Arabic")
                ar_el.text = arabic or ""

                root.insert(idx + offset, text_el)
            continue

        expand_tree(child, conn, decrypted_xml_root, include_stack)


def run_cmd(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True)


def process_file(
    source_xml: Path,
    output_dir: Path,
    decrypted_xml_root: Path,
    bible_db: Path,
    fix_coptic_script: Path,
    map_file: Path,
    xml_to_json_script: Path,
) -> tuple[Path, Path, Path]:
    base = source_xml.stem
    include_out = output_dir / f"{base}.include.xml"
    fixed_out = output_dir / f"{base}.fixed.xml"
    json_out = output_dir / f"{base}.json"

    tree = ET.parse(source_xml)
    root = tree.getroot()

    with sqlite3.connect(bible_db) as conn:
        expand_tree(root, conn, decrypted_xml_root, [source_xml.resolve()])

    ET.register_namespace("", NS_URI)
    tree.write(include_out, encoding="utf-8", xml_declaration=True)

    run_cmd(
        [
            sys.executable,
            str(fix_coptic_script),
            str(include_out),
            "--output",
            str(fixed_out),
            "--map",
            str(map_file),
        ]
    )
    run_cmd(
        [
            sys.executable,
            str(xml_to_json_script),
            "--input",
            str(fixed_out),
            "--output",
            str(json_out),
        ]
    )
    return include_out, fixed_out, json_out


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Expand includes/Bible refs, fix Coptic, and convert Saturday Pascha XML files to JSON."
    )
    parser.add_argument(
        "--input-file",
        action="append",
        default=[],
        help="Specific XML file(s) to process. Can be used multiple times.",
    )
    parser.add_argument("--source-dir", default=str(DEFAULT_SOURCE_DIR))
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT_DIR))
    parser.add_argument("--decrypted-xml-root", default=str(DEFAULT_DECRYPTED_XML_ROOT))
    parser.add_argument("--bible-db", default=str(BIBLE_DB))
    parser.add_argument(
        "--exclude",
        nargs="*",
        default=["Vigil of the Apocalypse - Midnight Praises.xml"],
        help="Source filenames to skip.",
    )
    args = parser.parse_args()

    source_dir = Path(args.source_dir)
    output_dir = Path(args.output_dir)
    decrypted_xml_root = Path(args.decrypted_xml_root)
    bible_db = Path(args.bible_db)

    fix_coptic_script = Path(__file__).with_name("fixCoptic.py")
    map_file = Path(__file__).with_name("copt_map.json")
    xml_to_json_script = Path(__file__).with_name("xmlToJsonSingle.py")

    output_dir.mkdir(parents=True, exist_ok=True)

    if args.input_file:
        files = sorted(Path(p) for p in args.input_file)
    else:
        files = sorted(
            p
            for p in source_dir.glob("*.xml")
            if p.name not in set(args.exclude)
        )
    if not files:
        raise SystemExit("No source XML files found to process.")

    for f in files:
        if not f.exists():
            raise SystemExit(f"Source XML not found: {f}")

    for src in files:
        print(f"[INFO] Processing: {src.name}")
        include_out, fixed_out, json_out = process_file(
            src,
            output_dir,
            decrypted_xml_root,
            bible_db,
            fix_coptic_script,
            map_file,
            xml_to_json_script,
        )
        print(f"[OK] include: {include_out}")
        print(f"[OK] fixed:   {fixed_out}")
        print(f"[OK] json:    {json_out}")


if __name__ == "__main__":
    main()
