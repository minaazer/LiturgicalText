from __future__ import annotations

import copy
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
RAW_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_raw.json"
CANONICAL_PATH = ROOT / "data" / "jsons" / "holyWeek.json"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"


SECTION_ORDER = [
    "Introduction",
    "Coptic Prophecies",
    "Prophecies",
    "Paschal Praise",
    "Coptic Psalm & Gospel",
    "English and Arabic Psalm & Gospel",
    "Exposition",
    "Pauline Epistle",
    "Catholic Epistle",
    "Praxis",
    "Readings",
    "Next Hour",
    "Litanies and Conclusion",
]


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def build_canonical_section_map(canonical: list[dict[str, Any]]) -> dict[tuple[str, str], list[str]]:
    mapping: dict[tuple[str, str], list[str]] = {}
    for service in canonical:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            mapping[(service_name, hour_name)] = [section["title"] for section in hour["sections"]]
    return mapping


def empty_section(title: str) -> dict[str, Any]:
    return {"title": title, "tables": []}


def empty_table(title: str, table_id: str) -> dict[str, Any]:
    return {
        "english_title": title,
        "coptic_title": None,
        "arabic_title": None,
        "title": title,
        "tbodies": [{"rows": []}],
        "table_id": table_id,
    }


def append_row(table: dict[str, Any], row_class: str, english: str | None) -> None:
    if not english:
        return
    table["tbodies"][0]["rows"].append(
        {
            "row-class": row_class,
            "cells": [{"english": english}],
        }
    )


def block_to_table(block: dict[str, Any], service_label: str, index: int) -> dict[str, Any]:
    label = block["title"] or block["reference"] or block["category"].replace("_", " ").title()
    table = empty_table(label, f"stbasil_{slug(service_label)}_{index}")
    append_row(table, "intro", block.get("intro"))
    append_row(table, "reference", block.get("reference"))
    append_row(table, "text", block.get("content"))
    return table


def map_raw_label(service_label: str) -> tuple[str, str]:
    day, hour = [part.strip() for part in service_label.split("—", 1)]

    service_map = {
        "SUNDAY": "DAY of Sunday",
        "EVE OF MONDAY": "EVE of Monday",
        "MONDAY": "DAY of Monday",
        "EVE OF TUESDAY": "EVE of Tuesday",
        "TUESDAY": "DAY of Tuesday",
        "EVE OF WEDNESDAY": "EVE of Wednesday",
        "WEDNESDAY": "DAY of Wednesday",
        "EVE OF GREAT AND HOLY THURSDAY": "EVE of Covenant Thursday",
        "GREAT AND HOLY THURSDAY": "DAY of Covenant Thursday",
        "EVE OF GREAT AND HOLY FRIDAY": "EVE of Great Friday",
        "GREAT AND HOLY FRIDAY": "DAY of Great Friday",
        "GREAT AND HOLY SATURDAY": "DAY of Great Saturday",
    }

    hour_map = {
        "FIRST HOUR": "FIRST Hour",
        "THIRD HOUR": "THIRD Hour",
        "SIXTH HOUR": "SIXTH Hour",
        "SIXTH HOUR (FUNERAL PRAYER)": "SIXTH Hour (Funeral Prayer)",
        "NINTH HOUR": "NINTH Hour",
        "ELEVENTH HOUR": "ELEVENTH Hour",
        "TWELFTH HOUR": "TWELFTH Hour",
        "MIDNIGHT PRAISE": "Midnight Praise",
        "MATINS": "Matins",
        "THE BOOK OF THE REVELATION OF ST. JOHN": "The Book of the Revelation of St. John",
        "DIVINE LITURGY": "Divine Liturgy",
        "LITURGY OF THE BLESSING OF THE WATER": "Liturgy of the Blessing of the Water",
        "LITURGY OF THE EUCHARIST": "Liturgy of the Eucharist",
    }

    return service_map[day], hour_map[hour]


def default_sections_for_raw(service_label: str, blocks: list[dict[str, Any]]) -> list[str]:
    _, hour_name = map_raw_label(service_label)
    sections: list[str] = []

    if any(block["category"] == "prophecy" for block in blocks):
        sections.append("Prophecies")

    if any(block["category"] in {"psalm", "gospel"} for block in blocks):
        sections.append("English and Arabic Psalm & Gospel")

    if any(block["category"] == "homily" for block in blocks):
        sections.append("Exposition")

    if any(block["category"] == "pauline_epistle" for block in blocks):
        sections.append("Pauline Epistle")

    if any(block["category"] == "catholic_epistle" for block in blocks):
        sections.append("Catholic Epistle")

    if any(block["category"] == "praxis" for block in blocks):
        sections.append("Praxis")

    if any(block["category"] == "chapter" for block in blocks):
        sections.append("Readings")

    if any(block["category"] == "custom" for block in blocks):
        sections.append("Readings")

    if hour_name in {"ELEVENTH Hour", "TWELFTH Hour"} and "Litanies and Conclusion" not in sections:
        sections.append("Litanies and Conclusion")
    elif "Next Hour" not in sections:
        sections.append("Next Hour")

    ordered = [title for title in SECTION_ORDER if title in sections]
    return ordered


def section_titles_for_hour(
    canonical_sections: dict[tuple[str, str], list[str]],
    service_name: str,
    hour_name: str,
    service_label: str,
    blocks: list[dict[str, Any]],
) -> list[str]:
    titles = canonical_sections.get((service_name, hour_name))
    if titles:
        extra_titles = []
        for extra in ["Pauline Epistle", "Catholic Epistle", "Praxis", "Readings"]:
            if extra not in titles:
                extra_titles.append(extra)
        combined = titles + extra_titles
        return [title for title in SECTION_ORDER if title in combined]

    return default_sections_for_raw(service_label, blocks)


def place_block(block: dict[str, Any]) -> str:
    category = block["category"]
    if category == "prophecy":
        return "Prophecies"
    if category in {"psalm", "gospel"}:
        return "English and Arabic Psalm & Gospel"
    if category == "homily":
        return "Exposition"
    if category == "pauline_epistle":
        return "Pauline Epistle"
    if category == "catholic_epistle":
        return "Catholic Epistle"
    if category == "praxis":
        return "Praxis"
    return "Readings"


def build_service_entry(
    service_name: str,
    hours_map: dict[str, list[dict[str, Any]]],
    canonical_sections: dict[tuple[str, str], list[str]],
    raw_lookup: dict[str, dict[str, Any]],
) -> dict[str, Any]:
    service_entry = {"service": [service_name, ""], "hours": []}

    for hour_name, blocks in hours_map.items():
        raw_service_label = next(
            label for label, raw in raw_lookup.items()
            if map_raw_label(label) == (service_name, hour_name)
        )
        section_titles = section_titles_for_hour(
            canonical_sections,
            service_name,
            hour_name,
            raw_service_label,
            blocks,
        )
        sections = [empty_section(title) for title in section_titles]
        section_map = {section["title"]: section for section in sections}

        for index, block in enumerate(blocks, start=1):
            target_section = place_block(block)
            if target_section not in section_map:
                section_map[target_section] = empty_section(target_section)
                sections.append(section_map[target_section])
            section_map[target_section]["tables"].append(
                block_to_table(block, raw_service_label, index)
            )

        service_entry["hours"].append({"hour": [hour_name, ""], "sections": sections})

    return service_entry


def main() -> None:
    raw = load_json(RAW_PATH)
    canonical = load_json(CANONICAL_PATH)
    canonical_sections = build_canonical_section_map(canonical)

    raw_lookup = {service["service_label"]: service for service in raw["services"]}

    grouped: dict[str, dict[str, list[dict[str, Any]]]] = {}
    for service in raw["services"]:
        service_name, hour_name = map_raw_label(service["service_label"])
        grouped.setdefault(service_name, {})[hour_name] = copy.deepcopy(service["blocks"])

    output: list[dict[str, Any]] = []

    for canonical_service in canonical:
        service_name = canonical_service["service"][0]
        hours_map = grouped.pop(service_name, None)
        if not hours_map:
            continue
        output.append(
            build_service_entry(service_name, hours_map, canonical_sections, raw_lookup)
        )

    for service_name, hours_map in grouped.items():
        output.append(
            build_service_entry(service_name, hours_map, canonical_sections, raw_lookup)
        )

    OUTPUT_PATH.write_text(
        json.dumps(output, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Wrote {OUTPUT_PATH}")
    print(f"Services: {len(output)}")
    print(f"Hours: {sum(len(service['hours']) for service in output)}")


if __name__ == "__main__":
    main()
