from __future__ import annotations

import copy
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
STRUCTURED_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
MANIFEST_PATH = ROOT / "data" / "logos" / "saas_holy_week_manifest.json"
EXPORTS_DIR = ROOT / "data" / "logos" / "saas_holy_week_exports"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_saas_logos.json"
REPORT_PATH = ROOT / "reports" / "holyWeek_saas_logos_report.json"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def is_reference_only_line(text: str) -> bool:
    normalized = normalize_spaces(text).replace("\ufeff", "")
    pattern = (
        r"^(?:[1-3]\s+)?[A-Z][A-Z\s]+"
        r"\s+\d+:\d+(?:-\d+|(?:,\s*\d+:\d+(?:-\d+)?))*"
        r"(?:\s*\(LXX\))?"
        r"(?:\s*\[SELECTION\])?"
        r"(?:,\s*\d+:\d+(?:-\d+)?(?:\s*\[SELECTION\])?)*"
        r"(?:,\s*END)?$"
    )
    return bool(re.match(pattern, normalized))


def parse_export_line(line: str) -> tuple[str, str] | None:
    text = line.replace("\ufeff", "").strip()
    if not text:
        return None
    if is_reference_only_line(text):
        return None

    if "\t" in text:
        left, right = text.split("\t", 1)
        left = normalize_spaces(left)
        right = normalize_spaces(right)
        if left and right:
            return left, right

    patterns = [
        r"^(?P<label>\d+:\d+:)\s+(?P<text>.+)$",
        r"^(?P<label>\d+:)\s+(?P<text>.+)$",
        r"^(?P<label>\d+:\d+)\s+(?P<text>.+)$",
        r"^(?P<label>\d+)\s+(?P<text>.+)$",
        r"^(?P<label>[1-3]?\s?[A-Za-z][A-Za-z .()'-]*\s+\d+:\d+)\s+(?P<text>.+)$",
    ]
    for pattern in patterns:
        match = re.match(pattern, text)
        if match:
            return normalize_spaces(match.group("label")), normalize_spaces(match.group("text"))

    return None


def load_exports(manifest: list[dict[str, Any]]) -> tuple[dict[str, list[dict[str, str]]], list[dict[str, str]]]:
    verses_by_reference: dict[str, list[dict[str, str]]] = {}
    parse_issues: list[dict[str, str]] = []

    for item in manifest:
        export_path = EXPORTS_DIR / item["export_file"]
        if not export_path.exists():
            continue

        verses: list[dict[str, str]] = []
        for raw_line in export_path.read_text(encoding="utf-8").splitlines():
            parsed = parse_export_line(raw_line)
            if parsed is None:
                if raw_line.strip():
                    parse_issues.append(
                        {
                            "reference": item["reference"],
                            "file": str(export_path),
                            "line": raw_line,
                        }
                    )
                continue
            label, text = parsed
            verses.append({"verse": label, "english": text})

        if verses:
            verses_by_reference[item["reference"]] = verses

    return verses_by_reference, parse_issues


def make_text_row(english: str, verse_label: str) -> dict[str, Any]:
    return {
        "row-class": "text",
        "cells": [
            {
                "english": english,
                "verse": verse_label,
            }
        ],
    }


def replace_table_text(table: dict[str, Any], verses: list[dict[str, str]]) -> dict[str, Any]:
    new_table = copy.deepcopy(table)
    rows = new_table["tbodies"][0]["rows"]
    kept_rows = [row for row in rows if row.get("row-class") != "text"]
    verse_rows = [make_text_row(item["english"], item["verse"]) for item in verses]
    new_table["tbodies"][0]["rows"] = kept_rows + verse_rows
    return new_table


def main() -> None:
    structured = load_json(STRUCTURED_PATH)
    manifest = load_json(MANIFEST_PATH)
    verses_by_reference, parse_issues = load_exports(manifest)

    output = copy.deepcopy(structured)
    reports: list[dict[str, Any]] = []
    replaced_tables = 0
    missing_exports = 0
    skipped_tables = 0

    for service in output:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                section_name = section["title"]
                new_tables = []
                for table in section["tables"]:
                    rows = table.get("tbodies", [{}])[0].get("rows", [])
                    reference = ""
                    text_rows = []
                    for row in rows:
                        if row.get("row-class") == "reference":
                            reference = normalize_spaces(row["cells"][0].get("english", ""))
                        if row.get("row-class") == "text":
                            text_rows.append(row)

                    report = {
                        "service": service_name,
                        "hour": hour_name,
                        "section": section_name,
                        "table": table.get("title"),
                        "reference": reference,
                        "status": "skipped",
                        "reason": None,
                    }

                    if not reference:
                        report["reason"] = "no_reference"
                        skipped_tables += 1
                        reports.append(report)
                        new_tables.append(table)
                        continue

                    if len(text_rows) != 1:
                        report["reason"] = "table_not_single_text_block"
                        skipped_tables += 1
                        reports.append(report)
                        new_tables.append(table)
                        continue

                    verses = verses_by_reference.get(reference)
                    if not verses:
                        report["reason"] = "missing_logos_export"
                        missing_exports += 1
                        reports.append(report)
                        new_tables.append(table)
                        continue

                    report["status"] = "replaced"
                    report["reason"] = None
                    report["verse_count"] = len(verses)
                    reports.append(report)
                    replaced_tables += 1
                    new_tables.append(replace_table_text(table, verses))

                section["tables"] = new_tables

    save_json(OUTPUT_PATH, output)
    save_json(
        REPORT_PATH,
        {
            "summary": {
                "replaced_tables": replaced_tables,
                "missing_exports": missing_exports,
                "skipped_tables": skipped_tables,
                "total_tables": replaced_tables + missing_exports + skipped_tables,
                "parse_issues": len(parse_issues),
            },
            "parse_issues": parse_issues,
            "reports": reports,
        },
    )

    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {REPORT_PATH}")
    print(f"Replaced tables: {replaced_tables}")
    print(f"Missing exports: {missing_exports}")
    print(f"Skipped tables: {skipped_tables}")
    print(f"Parse issues: {len(parse_issues)}")


if __name__ == "__main__":
    main()
