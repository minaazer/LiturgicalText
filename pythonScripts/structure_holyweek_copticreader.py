from __future__ import annotations

import copy
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
CANONICAL_PATH = ROOT / "data" / "jsons" / "holyWeek.json"
SOURCE_PATH = ROOT / "data" / "jsons" / "readings" / "holyweek_copticreader_all_readings_unicode.json"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyweek_copticreader_structured.json"
REPORT_PATH = ROOT / "reports" / "holyweek_copticreader_structured_report.json"


DOC_TO_HOUR = {
    "sunday/Sunday - 9th Hour.xml": ("DAY of Sunday", "NINTH Hour"),
    "sunday/Sunday - 11th Hour.xml": ("DAY of Sunday", "ELEVENTH Hour"),
    "monday/Monday Eve - 1st Hour.xml": ("EVE of Monday", "FIRST Hour"),
    "monday/Monday Eve - 3rd Hour.xml": ("EVE of Monday", "THIRD Hour"),
    "monday/Monday Eve - 6th Hour.xml": ("EVE of Monday", "SIXTH Hour"),
    "monday/Monday Eve - 9th Hour.xml": ("EVE of Monday", "NINTH Hour"),
    "monday/Monday Eve - 11th Hour.xml": ("EVE of Monday", "ELEVENTH Hour"),
    "monday/Monday - 1st Hour.xml": ("DAY of Monday", "FIRST Hour"),
    "monday/Monday - 3rd Hour.xml": ("DAY of Monday", "THIRD Hour"),
    "monday/Monday - 6th Hour.xml": ("DAY of Monday", "SIXTH Hour"),
    "monday/Monday - 9th Hour.xml": ("DAY of Monday", "NINTH Hour"),
    "monday/Monday - 11th Hour.xml": ("DAY of Monday", "ELEVENTH Hour"),
    "tuesday/Tuesday Eve - 1st Hour.xml": ("EVE of Tuesday", "FIRST Hour"),
    "tuesday/Tuesday Eve - 3rd Hour.xml": ("EVE of Tuesday", "THIRD Hour"),
    "tuesday/Tuesday Eve - 6th Hour.xml": ("EVE of Tuesday", "SIXTH Hour"),
    "tuesday/Tuesday Eve - 9th Hour.xml": ("EVE of Tuesday", "NINTH Hour"),
    "tuesday/Tuesday Eve - 11th Hour.xml": ("EVE of Tuesday", "ELEVENTH Hour"),
    "tuesday/Tuesday - 1st Hour.xml": ("DAY of Tuesday", "FIRST Hour"),
    "tuesday/Tuesday - 3rd Hour.xml": ("DAY of Tuesday", "THIRD Hour"),
    "tuesday/Tuesday - 6th Hour.xml": ("DAY of Tuesday", "SIXTH Hour"),
    "tuesday/Tuesday - 9th Hour.xml": ("DAY of Tuesday", "NINTH Hour"),
    "tuesday/Tuesday - 11th Hour.xml": ("DAY of Tuesday", "ELEVENTH Hour"),
    "wednesday/Wednesday Eve - 1st Hour.xml": ("EVE of Wednesday", "FIRST Hour"),
    "wednesday/Wednesday Eve - 3rd Hour.xml": ("EVE of Wednesday", "THIRD Hour"),
    "wednesday/Wednesday Eve - 6th Hour.xml": ("EVE of Wednesday", "SIXTH Hour"),
    "wednesday/Wednesday Eve - 9th Hour.xml": ("EVE of Wednesday", "NINTH Hour"),
    "wednesday/Wednesday Eve - 11th Hour.xml": ("EVE of Wednesday", "ELEVENTH Hour"),
    "wednesday/Wednesday - 1st Hour.xml": ("DAY of Wednesday", "FIRST Hour"),
    "wednesday/Wednesday - 3rd Hour.xml": ("DAY of Wednesday", "THIRD Hour"),
    "wednesday/Wednesday - 6th Hour.xml": ("DAY of Wednesday", "SIXTH Hour"),
    "wednesday/Wednesday - 9th Hour.xml": ("DAY of Wednesday", "NINTH Hour"),
    "wednesday/Wednesday - 11th Hour.xml": ("DAY of Wednesday", "ELEVENTH Hour"),
    "thursday/Thursday Eve - 1st Hour.xml": ("EVE of Covenant Thursday", "FIRST Hour"),
    "thursday/Thursday Eve - 3rd Hour.xml": ("EVE of Covenant Thursday", "THIRD Hour"),
    "thursday/Thursday Eve - 6th Hour.xml": ("EVE of Covenant Thursday", "SIXTH Hour"),
    "thursday/Thursday Eve - 9th Hour.xml": ("EVE of Covenant Thursday", "NINTH Hour"),
    "thursday/Thursday Eve - 11th Hour.xml": ("EVE of Covenant Thursday", "ELEVENTH Hour"),
    "thursday/Thursday - 1st Hour.xml": ("DAY of Covenant Thursday", "FIRST Hour"),
    "thursday/Thursday - 3rd Hour.xml": ("DAY of Covenant Thursday", "THIRD Hour"),
    "thursday/Thursday - 6th Hour.xml": ("DAY of Covenant Thursday", "SIXTH Hour"),
    "thursday/Thursday - 9th Hour.xml": ("DAY of Covenant Thursday", "NINTH Hour"),
    "thursday/Thursday - 11th Hour.xml": ("DAY of Covenant Thursday", "ELEVENTH Hour"),
    "friday/Friday Eve - 1st Hour.xml": ("EVE of Great Friday", "FIRST Hour"),
    "friday/Friday Eve - 3rd Hour.xml": ("EVE of Great Friday", "THIRD Hour"),
    "friday/Friday Eve - 6th Hour.xml": ("EVE of Great Friday", "SIXTH Hour"),
    "friday/Friday Eve - 9th Hour.xml": ("EVE of Great Friday", "NINTH Hour"),
    "friday/Friday Eve - 11th Hour.xml": ("EVE of Great Friday", "ELEVENTH Hour"),
    "friday/Friday - 1st Hour.xml": ("DAY of Great Friday", "FIRST Hour"),
    "friday/Friday - 3rd Hour.xml": ("DAY of Great Friday", "THIRD Hour"),
    "friday/Friday - 6th Hour.xml": ("DAY of Great Friday", "SIXTH Hour"),
    "friday/Friday - 9th Hour.xml": ("DAY of Great Friday", "NINTH Hour"),
    "friday/Friday - 11th Hour.xml": ("DAY of Great Friday", "ELEVENTH Hour"),
    "friday/Friday - 12th Hour.xml": ("DAY of Great Friday", "TWELFTH Hour"),
}


READING_SECTIONS = {
    "Coptic Prophecies",
    "Prophecies",
    "Coptic Psalm & Gospel",
    "English and Arabic Psalm & Gospel",
    "Exposition",
    "Pauline Epistle",
    "Catholic Epistle",
    "Praxis",
    "Readings",
}


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")


def canonical_section_titles(canonical: list[dict[str, Any]]) -> dict[tuple[str, str], list[str]]:
    out: dict[tuple[str, str], list[str]] = {}
    for service in canonical:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            out[(service_name, hour_name)] = [section["title"] for section in hour["sections"]]
    return out


def empty_section(title: str) -> dict[str, Any]:
    return {"title": title, "tables": []}


def build_table(title: dict[str, str], table_id: str) -> dict[str, Any]:
    english_title = title.get("english") or ""
    arabic_title = title.get("arabic")
    return {
        "english_title": english_title,
        "coptic_title": None,
        "arabic_title": arabic_title,
        "title": english_title,
        "tbodies": [{"rows": []}],
        "table_id": table_id,
    }


def row_for_languages(row_class: str, languages: dict[str, str], mode: str) -> dict[str, Any] | None:
    cell: dict[str, str] = {}
    if mode == "coptic":
        if languages.get("coptic"):
            cell["coptic"] = languages["coptic"]
    elif mode == "english_arabic":
        if languages.get("english"):
            cell["english"] = languages["english"]
        if languages.get("arabic"):
            cell["arabic"] = languages["arabic"]
    else:
        for key in ("english", "arabic", "coptic"):
            if languages.get(key):
                cell[key] = languages[key]
    if not cell:
        return None
    return {"row-class": row_class, "cells": [cell]}


def reading_kind_to_row_class(kind: str) -> str:
    return "intro" if kind == "comment" else "text"


def table_from_reading(reading: dict[str, Any], table_id: str, mode: str) -> dict[str, Any] | None:
    table = build_table(reading.get("title", {}), table_id)
    for item in reading.get("content", []):
        row = row_for_languages(reading_kind_to_row_class(item.get("kind", "text")), item.get("languages", {}), mode)
        if row:
            table["tbodies"][0]["rows"].append(row)
    if not table["tbodies"][0]["rows"]:
        return None
    return table


def target_sections_for_reading(reading: dict[str, Any]) -> list[tuple[str, str]]:
    category = reading.get("category")
    if category in {"prophecy", "scripture"}:
        return [("Coptic Prophecies", "coptic"), ("Prophecies", "english_arabic")]
    if category in {"psalm", "gospel"}:
        return [("Coptic Psalm & Gospel", "coptic"), ("English and Arabic Psalm & Gospel", "english_arabic")]
    if category in {"homily", "exposition"}:
        return [("Exposition", "all")]
    if category == "pauline":
        return [("Pauline Epistle", "all")]
    if category == "revelation":
        return [("Readings", "all")]
    return [("Readings", "all")]


def reset_to_skeleton(canonical: list[dict[str, Any]]) -> list[dict[str, Any]]:
    payload = copy.deepcopy(canonical)
    for service in payload:
        for hour in service["hours"]:
            rebuilt = []
            for section in hour["sections"]:
                title = section["title"]
                if title in READING_SECTIONS:
                    rebuilt.append({"title": title, "tables": []})
                else:
                    rebuilt.append(section)
            hour["sections"] = rebuilt
    return payload


def index_hours(payload: list[dict[str, Any]]) -> dict[tuple[str, str], dict[str, Any]]:
    out: dict[tuple[str, str], dict[str, Any]] = {}
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            out[(service_name, hour_name)] = hour
    return out


def main() -> None:
    canonical = load_json(CANONICAL_PATH)
    source = load_json(SOURCE_PATH)
    output = reset_to_skeleton(canonical)
    hour_index = index_hours(output)
    section_titles = canonical_section_titles(canonical)

    matched_docs = []
    ignored_docs = []
    created_tables = 0

    for doc in source["documents"]:
        rel = doc["service"]["relative_path"]
        mapping = DOC_TO_HOUR.get(rel)
        if mapping is None:
            ignored_docs.append(rel)
            continue

        service_name, hour_name = mapping
        hour = hour_index.get((service_name, hour_name))
        if hour is None:
            ignored_docs.append(rel)
            continue

        section_map = {section["title"]: section for section in hour["sections"]}
        matched_docs.append({"relative_path": rel, "service": service_name, "hour": hour_name, "reading_count": len(doc["readings"])})

        for idx, reading in enumerate(doc["readings"], start=1):
            for section_title, mode in target_sections_for_reading(reading):
                if section_title not in section_map:
                    hour["sections"].append(empty_section(section_title))
                    section_map[section_title] = hour["sections"][-1]
                table = table_from_reading(reading, f"cr_{slug(service_name)}_{slug(hour_name)}_{idx}_{slug(section_title)}", mode)
                if table:
                    section_map[section_title]["tables"].append(table)
                    created_tables += 1

    report = {
        "source": str(SOURCE_PATH),
        "output": str(OUTPUT_PATH),
        "matched_document_count": len(matched_docs),
        "matched_documents": matched_docs,
        "ignored_document_count": len(ignored_docs),
        "ignored_documents": ignored_docs,
        "created_table_count": created_tables,
        "canonical_hours": [{"service": service, "hour": hour, "sections": titles} for (service, hour), titles in sorted(section_titles.items())],
    }

    save_json(OUTPUT_PATH, output)
    save_json(REPORT_PATH, report)
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Matched docs: {len(matched_docs)}")
    print(f"Ignored docs: {len(ignored_docs)}")
    print(f"Created tables: {created_tables}")


if __name__ == "__main__":
    main()
