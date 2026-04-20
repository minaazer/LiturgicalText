from __future__ import annotations

import copy
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
CANONICAL_PATH = ROOT / "data" / "jsons" / "holyWeek.json"
CR_PATH = ROOT / "data" / "jsons" / "readings" / "holyweek_copticreader_structured.json"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR.json"
REPORT_PATH = ROOT / "reports" / "holyWeek_CR_report.json"

TARGET_SECTIONS = {
    "Prophecies",
    "English and Arabic Psalm & Gospel",
    "Pauline Epistle",
}

COPTIC_COMPANION_SECTIONS = {
    "Prophecies": "Coptic Prophecies",
    "English and Arabic Psalm & Gospel": "Coptic Psalm & Gospel",
}


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def normalize_text_value(text: str) -> str:
    text = normalize_spaces(text).casefold()
    text = text.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    text = re.sub(r"[.,;:!?\-\"'()\[\]{}]", "", text)
    return normalize_spaces(text)


def normalize_table_title(title: str) -> str:
    text = normalize_spaces(title)
    text = re.sub(r"^(?:\d+(?:st|nd|rd|th)\s+)?prophecy\s*", "", text, flags=re.I)
    text = re.sub(r"^pauline epistle\s*", "", text, flags=re.I)
    text = re.sub(r"^psalm\s*", "Psalm ", text, flags=re.I)
    text = re.sub(r"^gospel\s*", "Gospel ", text, flags=re.I)
    text = re.sub(r"\(([^()]*)\)", lambda m: normalize_spaces(m.group(1)), text)
    text = re.sub(r"\s*:\s*", ":", text)
    text = re.sub(r"\s*-\s*", "-", text)
    text = re.sub(r"(?<=\d)\s*,\s*(?=\d)", ", ", text)
    return normalize_spaces(text).lower()


def table_display_title(table: dict[str, Any]) -> str:
    return table.get("english_title") or table.get("title") or ""


def infer_table_kind(section_title: str, title: str) -> str:
    norm = normalize_text_value(title)
    if section_title == "English and Arabic Psalm & Gospel":
        if "psalm" in norm or "mzmwr" in norm:
            return "psalm"
        return "gospel"
    if section_title == "Prophecies":
        if "homily" in norm:
            return "homily"
        return "prophecy"
    if section_title == "Pauline Epistle":
        return "pauline"
    return normalize_text_value(section_title)


def detect_boilerplate_category(cell: dict[str, Any]) -> str | None:
    english = normalize_text_value(cell.get("english", ""))
    arabic = normalize_text_value(cell.get("arabic", ""))
    coptic = normalize_text_value(cell.get("coptic", ""))

    if (
        "glory be to the holy trinity" in english
        or "the grace of god the father be with you all amen" in english
        or "grace and peace be with you all amen so be it" in english
        or "المجد للثالوث" in arabic
        or "نعمة الله الآب تحل مع جميعكم" in arabic
        or "النعمة لكم والسلام معاً" in arabic
        or ("ⲟⲩⲱⲟⲩ" in coptic and "ⲧⲣⲓⲁⲥ" in coptic)
        or "ⲡⲓϩⲙⲟⲧ" in coptic
    ):
        return "ending"

    if english == "alleluia" or arabic == "الليلويا" or "ⲁⲗⲗⲏⲗⲟⲩⲓⲁ" == coptic:
        return "alleluia"

    if (
        english.startswith("from the psalms")
        or english.startswith("a psalm of david")
        or "من مزامير" in arabic
        or "مزمور لداود" in arabic
        or "ⲯⲁⲗⲙⲟⲥ" in coptic
    ):
        return "psalm_intro"

    if (
        "holy gospel" in english
        or "according to saint" in english
        or "according to our teacher st" in english
        or "فصل من إنجيل" in arabic
        or "الإنجيل" in arabic
        or "ⲟⲩⲁⲛ̀ⲁⲅⲛⲱⲥⲓⲥ" in coptic
        or "ⲇⲟⲝⲁ ⲥⲓ ⲕⲩⲣⲓⲉ" in coptic
        or "ⲩⲡⲉⲣⲧⲟⲩ" in coptic
    ):
        return "gospel_intro"

    if (
        english.startswith("a reading from")
        or english.startswith("an epistle of our teacher paul")
        or english.startswith("paul the servant of our lord jesus christ")
        or "من " in arabic and any(keyword in arabic for keyword in ("النبي", "الرسالة", "سفر", "مراثي", "أرميا", "إشعياء", "إرميا", "بولس"))
        or (coptic.startswith("ⲉⲃⲟⲗϧⲉⲛ") and any(marker in coptic for marker in ("ⲡⲣⲟⲫ", "ⲡⲓⲡⲣ", "ⲉⲡⲓⲥⲧⲟⲗ", "ⲉⲩⲁⲅⲅⲉⲗⲓⲟ", "ⲑⲣⲓⲛⲓⲟ")))
        or "ⲡⲁⲩⲗⲟⲥ" in coptic and "ⲫⲃⲱⲕ" in coptic
    ):
        return "reading_intro"

    return None


def get_section(hour: dict[str, Any], title: str) -> dict[str, Any] | None:
    return next((section for section in hour.get("sections", []) if section["title"] == title), None)


def get_text_rows(table: dict[str, Any]) -> list[dict[str, Any]]:
    return [row for row in table.get("tbodies", [{}])[0].get("rows", []) if row.get("row-class") == "text"]


def get_non_text_cells(table: dict[str, Any]) -> list[dict[str, Any]]:
    rows = table.get("tbodies", [{}])[0].get("rows", [])
    return [row["cells"][0] for row in rows if row.get("row-class") != "text"]


def should_skip_source_cell(source_cell: dict[str, Any], dest_non_text_cells: list[dict[str, Any]]) -> bool:
    source_category = detect_boilerplate_category(source_cell)
    dest_categories = {category for category in (detect_boilerplate_category(cell) for cell in dest_non_text_cells) if category}
    if source_category and source_category in dest_categories:
        return True

    for lang in ("english", "arabic", "coptic"):
        source_text = normalize_text_value(source_cell.get(lang, ""))
        if not source_text:
            continue
        for dest_cell in dest_non_text_cells:
            if source_text == normalize_text_value(dest_cell.get(lang, "")):
                return True
    return False


def clean_source_text_for_destination(source_cell: dict[str, Any], dest_non_text_cells: list[dict[str, Any]]) -> dict[str, Any]:
    cleaned = copy.deepcopy(source_cell)
    dest_categories = {category for category in (detect_boilerplate_category(cell) for cell in dest_non_text_cells) if category}
    if "alleluia" in dest_categories:
        if cleaned.get("english"):
            cleaned["english"] = re.sub(r"\s*Alleluia\.\s*$", "", cleaned["english"], flags=re.I)
        if cleaned.get("arabic"):
            cleaned["arabic"] = re.sub(r"\s*الليلويا\.?\s*$", "", cleaned["arabic"])
        if cleaned.get("coptic"):
            cleaned["coptic"] = re.sub(r"\s*ⲁⲗⲗⲏⲗⲟⲩⲓⲁ\.?\s*$", "", cleaned["coptic"], flags=re.I)
    return cleaned


def filtered_source_text_cells(source_table: dict[str, Any], dest_table: dict[str, Any]) -> list[dict[str, Any]]:
    dest_non_text_cells = get_non_text_cells(dest_table)
    cells = []
    for row in get_text_rows(source_table):
        cell = row["cells"][0]
        if should_skip_source_cell(cell, dest_non_text_cells):
            continue
        cleaned = clean_source_text_for_destination(cell, dest_non_text_cells)
        if any(normalize_spaces(cleaned.get(lang, "")) for lang in ("english", "arabic", "coptic")):
            cells.append(cleaned)
    return cells


def partition_cells(cells: list[dict[str, Any]], target_count: int) -> list[list[dict[str, Any]]]:
    if target_count <= 0:
        return []
    if not cells:
        return [[] for _ in range(target_count)]
    base = len(cells) // target_count
    remainder = len(cells) % target_count
    groups: list[list[dict[str, Any]]] = []
    index = 0
    for slot in range(target_count):
        size = base + (1 if slot < remainder else 0)
        groups.append(cells[index:index + size])
        index += size
    return groups


def index_hours(payload: list[dict[str, Any]]) -> dict[tuple[str, str], dict[str, Any]]:
    out: dict[tuple[str, str], dict[str, Any]] = {}
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            out[(service_name, hour["hour"][0])] = hour
    return out


def index_tables(section: dict[str, Any]) -> tuple[dict[str, tuple[int, dict[str, Any]]], list[dict[str, Any]]]:
    indexed: dict[str, tuple[int, dict[str, Any]]] = {}
    tables = section.get("tables", [])
    for index, table in enumerate(tables):
        title = table_display_title(table)
        if title:
            indexed[normalize_table_title(title)] = (index, table)
    return indexed, tables


def find_matching_source_table(
    dest_table: dict[str, Any],
    source_section: dict[str, Any],
    section_title: str,
    used_indexes: set[int],
) -> tuple[int | None, dict[str, Any] | None, str | None]:
    indexed, tables = index_tables(source_section)
    normalized = normalize_table_title(table_display_title(dest_table))
    direct = indexed.get(normalized)
    if direct and direct[0] not in used_indexes:
        return direct[0], direct[1], "title"

    dest_kind = infer_table_kind(section_title, table_display_title(dest_table))
    for index, table in enumerate(tables):
        if index in used_indexes:
            continue
        if infer_table_kind(section_title, table_display_title(table)) == dest_kind:
            return index, table, "position"
    return None, None, None


def merge_languages(dest_table: dict[str, Any], source_table: dict[str, Any]) -> dict[str, Any]:
    dest_rows = get_text_rows(dest_table)
    source_cells = filtered_source_text_cells(source_table, dest_table)
    source_groups = partition_cells(source_cells, len(dest_rows))
    replaced_rows = 0
    for dest_row, group in zip(dest_rows, source_groups):
        dest_cell = dest_row["cells"][0]
        if not group:
            continue
        english_parts = [normalize_spaces(cell.get("english", "")) for cell in group if cell.get("english")]
        arabic_parts = [normalize_spaces(cell.get("arabic", "")) for cell in group if cell.get("arabic")]
        coptic_parts = [normalize_spaces(cell.get("coptic", "")) for cell in group if cell.get("coptic")]
        if english_parts:
            dest_cell["english"] = " ".join(english_parts)
        if arabic_parts:
            dest_cell["arabic"] = " ".join(arabic_parts)
        if coptic_parts:
            dest_cell["coptic"] = " ".join(coptic_parts)
        replaced_rows += 1
    return {
        "dest_text_rows": len(dest_rows),
        "source_text_cells": len(source_cells),
        "replaced_rows": replaced_rows,
        "row_alignment_exact": len(dest_rows) == len(source_cells),
    }


def merge_companion_coptic(
    dest_table: dict[str, Any],
    coptic_table: dict[str, Any],
) -> dict[str, Any]:
    dest_rows = get_text_rows(dest_table)
    coptic_cells = filtered_source_text_cells(coptic_table, dest_table)
    coptic_cells = [cell for cell in coptic_cells if cell.get("coptic")]
    groups = partition_cells(coptic_cells, len(dest_rows))
    enriched_rows = 0
    for dest_row, group in zip(dest_rows, groups):
        if not group:
            continue
        dest_row["cells"][0]["coptic"] = " ".join(normalize_spaces(cell["coptic"]) for cell in group if cell.get("coptic"))
        enriched_rows += 1
    return {
        "dest_text_rows": len(dest_rows),
        "source_coptic_cells": len(coptic_cells),
        "enriched_rows": enriched_rows,
        "row_alignment_exact": len(dest_rows) == len(coptic_cells),
    }


def main() -> None:
    canonical = load_json(CANONICAL_PATH)
    cr_structured = load_json(CR_PATH)
    output = copy.deepcopy(canonical)

    cr_hour_index = index_hours(cr_structured)

    replaced_tables = []
    companion_coptic = []
    unmatched = []
    alignment_issues = []
    missing_cr_hours = []

    for service in output:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            key = (service_name, hour_name)
            cr_hour = cr_hour_index.get(key)
            if cr_hour is None:
                if any(get_section(hour, title) for title in TARGET_SECTIONS):
                    missing_cr_hours.append({"service": service_name, "hour": hour_name})
                continue

            for section_title in TARGET_SECTIONS:
                dest_section = get_section(hour, section_title)
                cr_section = get_section(cr_hour, section_title)
                if not dest_section:
                    continue
                if not cr_section:
                    continue

                used_indexes: set[int] = set()
                companion_section = get_section(cr_hour, COPTIC_COMPANION_SECTIONS.get(section_title, "")) if section_title in COPTIC_COMPANION_SECTIONS else None
                companion_tables = companion_section.get("tables", []) if companion_section else []
                companion_used_indexes: set[int] = set()

                for dest_table in dest_section.get("tables", []):
                    if "tbodies" not in dest_table:
                        continue

                    source_index, source_table, matched_via = find_matching_source_table(dest_table, cr_section, section_title, used_indexes)
                    if source_table is None:
                        unmatched.append(
                            {
                                "service": service_name,
                                "hour": hour_name,
                                "section": section_title,
                                "holyweek_title": table_display_title(dest_table),
                                "reason": "no_cr_table_match",
                            }
                        )
                        continue
                    used_indexes.add(source_index)

                    stats = merge_languages(dest_table, source_table)
                    record = {
                        "service": service_name,
                        "hour": hour_name,
                        "section": section_title,
                        "holyweek_title": table_display_title(dest_table),
                        "cr_title": table_display_title(source_table),
                        "matched_via": matched_via,
                        **stats,
                    }
                    replaced_tables.append(record)
                    if not stats["row_alignment_exact"]:
                        alignment_issues.append({**record, "issue": "language_row_count_mismatch"})

                    if companion_tables:
                        companion_match = None
                        dest_kind = infer_table_kind(section_title, table_display_title(dest_table))
                        for idx, candidate in enumerate(companion_tables):
                            if idx in companion_used_indexes:
                                continue
                            if infer_table_kind(section_title, table_display_title(candidate)) == dest_kind:
                                companion_match = (idx, candidate)
                                break
                        if companion_match:
                            companion_used_indexes.add(companion_match[0])
                            coptic_stats = merge_companion_coptic(dest_table, companion_match[1])
                            coptic_record = {
                                "service": service_name,
                                "hour": hour_name,
                                "section": section_title,
                                "holyweek_title": table_display_title(dest_table),
                                "cr_coptic_title": table_display_title(companion_match[1]),
                                **coptic_stats,
                            }
                            companion_coptic.append(coptic_record)
                            if not coptic_stats["row_alignment_exact"]:
                                alignment_issues.append({**coptic_record, "issue": "coptic_row_count_mismatch"})

    report = {
        "output": str(OUTPUT_PATH),
        "source_canonical": str(CANONICAL_PATH),
        "source_cr": str(CR_PATH),
        "target_sections": sorted(TARGET_SECTIONS),
        "replaced_table_count": len(replaced_tables),
        "replaced_tables": replaced_tables,
        "companion_coptic_count": len(companion_coptic),
        "companion_coptic": companion_coptic,
        "unmatched_holyweek_reading_count": len(unmatched),
        "unmatched_holyweek_readings": unmatched,
        "alignment_issue_count": len(alignment_issues),
        "alignment_issues": alignment_issues,
        "missing_cr_hour_count": len(missing_cr_hours),
        "missing_cr_hours": missing_cr_hours,
    }

    save_json(OUTPUT_PATH, output)
    save_json(REPORT_PATH, report)
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Replaced tables: {len(replaced_tables)}")
    print(f"Companion coptic tables: {len(companion_coptic)}")
    print(f"Unmatched holyweek readings: {len(unmatched)}")


if __name__ == "__main__":
    main()
