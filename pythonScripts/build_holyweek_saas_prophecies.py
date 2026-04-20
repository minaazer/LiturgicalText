from __future__ import annotations

import copy
import difflib
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
HOLYWEEK_PATH = ROOT / "data" / "jsons" / "holyWeek.json"
STBASIL_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
SAAS_OT_PATH = ROOT / "data" / "jsons" / "bible" / "saas_ot.json"
OUTPUT_PATH = ROOT / "reports" / "holyweek_saas.json"
REPORT_PATH = ROOT / "reports" / "holyweek_saas_prophecies_report.json"


BOOK_ALIASES = {
    "LAMENTATIONS OF JEREMIAH": "Lamentations",
    "WISDOM OF SIRACH": "Sirach",
    "WISDOM OF SOLOMON": "Wisdom of Solomon",
    "PROVERBS OF SOLOMON": "Proverbs",
    "1 KINGDOMS": "1 Kingdoms",
    "2 KINGDOMS": "2 Kingdoms",
    "3 KINGDOMS": "3 Kingdoms",
    "4 KINGDOMS": "4 Kingdoms",
    "1 EZRA": "1 Esdras",
    "2 EZRA": "2 Esdras",
}


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def fix_mojibake(text: str) -> str:
    value = text or ""
    replacements = {
        "â€™": "'",
        "â€˜": "'",
        "â€œ": '"',
        "â€": '"',
        "â€”": "-",
        "â€“": "-",
        "\ufeff": "",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return value


def normalize_compare_text(text: str) -> str:
    value = fix_mojibake(text)
    value = re.sub(
        r"\s+Glory be to the Holy Trinity.*?Amen\.?\s*$",
        "",
        value,
        flags=re.IGNORECASE,
    )
    value = normalize_spaces(value).lower()
    value = re.sub(r"[^a-z0-9'\s-]+", "", value)
    return normalize_spaces(value)


def extract_stbasil_text(table: dict[str, Any]) -> str:
    return " ".join(
        normalize_spaces(row["cells"][0].get("english", ""))
        for row in table.get("tbodies", [{}])[0].get("rows", [])
        if row.get("row-class") == "text"
    )


def extract_stbasil_reference(table: dict[str, Any]) -> str:
    for row in table.get("tbodies", [{}])[0].get("rows", []):
        if row.get("row-class") == "reference":
            return normalize_spaces(row["cells"][0].get("english", ""))
    return ""


def extract_holyweek_text(table: dict[str, Any]) -> str:
    return " ".join(
        normalize_spaces(row["cells"][0].get("english", ""))
        for row in table.get("tbodies", [{}])[0].get("rows", [])
        if row.get("row-class") == "text"
    )


def resolve_book(reference: str, book_titles: list[str]) -> tuple[str | None, str | None]:
    text = normalize_spaces(reference)
    upper = text.upper()
    for source, target in BOOK_ALIASES.items():
        if upper.startswith(source + " "):
            return target, text[len(source) + 1 :]
    for title in book_titles:
        if upper.startswith(title.upper() + " "):
            return title, text[len(title) + 1 :]
    return None, None


def chapter_last_verse(book_entry: dict[int, dict[str, Any]], chapter: int) -> int:
    return int(book_entry[chapter]["verses"][-1]["verse"])


def expand_reference_token(book_entry: dict[int, dict[str, Any]], token: str) -> list[tuple[int, int, int]] | None:
    text = normalize_spaces(token)

    match = re.match(r"^(\d+):(\d+)\s+TO\s+(\d+):(\d+)$", text, flags=re.IGNORECASE)
    if match:
        start_chapter, start_verse, end_chapter, end_verse = map(int, match.groups())
        expanded = []
        for chapter in range(start_chapter, end_chapter + 1):
            first = start_verse if chapter == start_chapter else 1
            last = end_verse if chapter == end_chapter else chapter_last_verse(book_entry, chapter)
            expanded.append((chapter, first, last))
        return expanded

    match = re.match(r"^(\d+):(\d+)-(\d+):(\d+)$", text)
    if match:
        start_chapter, start_verse, end_chapter, end_verse = map(int, match.groups())
        expanded = []
        for chapter in range(start_chapter, end_chapter + 1):
            first = start_verse if chapter == start_chapter else 1
            last = end_verse if chapter == end_chapter else chapter_last_verse(book_entry, chapter)
            expanded.append((chapter, first, last))
        return expanded

    match = re.match(r"^(\d+):(\d+)(?:-(\d+|END))?$", text, flags=re.IGNORECASE)
    if match:
        chapter = int(match.group(1))
        start_verse = int(match.group(2))
        raw_end = match.group(3)
        if raw_end is None:
            end_verse = start_verse
        elif raw_end.upper() == "END":
            end_verse = chapter_last_verse(book_entry, chapter)
        else:
            end_verse = int(raw_end)
        return [(chapter, start_verse, end_verse)]

    return None


def parse_reference(
    reference: str,
    books_by_title: dict[str, dict[int, dict[str, Any]]],
    book_titles: list[str],
) -> tuple[str | None, list[tuple[int, int, int]] | None, str | None]:
    cleaned = normalize_spaces(reference)
    cleaned = re.sub(r"\s*\(LXX\)", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*\[SELECTION\]", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\bSELECTIONS FROM\b", "", cleaned, flags=re.IGNORECASE)
    cleaned = normalize_spaces(cleaned)

    book_title, remainder = resolve_book(cleaned, book_titles)
    if not book_title or not remainder:
        return None, None, "book_not_resolved"

    book_entry = books_by_title.get(book_title, {})
    parts = [part.strip() for part in remainder.split(",") if part.strip()]
    ranges: list[tuple[int, int, int]] = []

    for part in parts:
        expanded = expand_reference_token(book_entry, part)
        if expanded is None:
            return book_title, None, f"unparsed_token:{part}"
        ranges.extend(expanded)

    return book_title, ranges, None


def lookup_verses(
    reference: str,
    books_by_title: dict[str, dict[int, dict[str, Any]]],
    book_titles: list[str],
) -> tuple[list[dict[str, Any]] | None, str | None, str | None]:
    book_title, ranges, error = parse_reference(reference, books_by_title, book_titles)
    if error or not book_title or not ranges:
        return None, book_title, error or "reference_not_parsed"

    verses: list[dict[str, Any]] = []
    book_entry = books_by_title[book_title]
    for chapter, start_verse, end_verse in ranges:
        chapter_entry = book_entry.get(chapter)
        if not chapter_entry:
            return None, book_title, f"missing_chapter:{chapter}"
        chapter_verses = chapter_entry["verses"][start_verse - 1 : end_verse]
        if len(chapter_verses) != (end_verse - start_verse + 1):
            return None, book_title, f"missing_verses:{chapter}:{start_verse}-{end_verse}"
        for verse in chapter_verses:
            verses.append(
                {
                    "chapter": chapter,
                    "verse": int(verse["verse"]),
                    "text": normalize_spaces(verse["text"]),
                }
            )

    return verses, book_title, None


def collect_holyweek_locations(payload: list[dict[str, Any]]) -> dict[tuple[str, str], dict[str, Any]]:
    locations: dict[tuple[str, str], dict[str, Any]] = {}
    for service_index, service in enumerate(payload):
        service_name = service["service"][0]
        for hour_index, hour in enumerate(service["hours"]):
            hour_name = hour["hour"][0]
            for section_index, section in enumerate(hour["sections"]):
                if section["title"] != "Prophecies":
                    continue
                tables = []
                for table_index, table in enumerate(section.get("tables", [])):
                    title = normalize_spaces(table.get("title") or table.get("english_title") or "")
                    text_rows = [
                        row_index
                        for row_index, row in enumerate(table.get("tbodies", [{}])[0].get("rows", []))
                        if row.get("row-class") == "text"
                    ]
                    tables.append(
                        {
                            "table_index": table_index,
                            "title": title,
                            "text_rows": text_rows,
                            "is_homily": "homily" in title.lower(),
                            "joined_english": extract_holyweek_text(table),
                        }
                    )
                locations[(service_name, hour_name)] = {
                    "service_index": service_index,
                    "hour_index": hour_index,
                    "section_index": section_index,
                    "tables": tables,
                }
    return locations


def collect_stbasil_locations(payload: list[dict[str, Any]]) -> dict[tuple[str, str], list[dict[str, Any]]]:
    locations: dict[tuple[str, str], list[dict[str, Any]]] = {}
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                if section["title"] != "Prophecies":
                    continue
                items = []
                for table_index, table in enumerate(section.get("tables", [])):
                    items.append(
                        {
                            "table_index": table_index,
                            "title": normalize_spaces(table.get("title") or table.get("english_title") or ""),
                            "reference": extract_stbasil_reference(table),
                            "joined_english": extract_stbasil_text(table),
                        }
                    )
                locations[(service_name, hour_name)] = items
    return locations


def replace_english_text_rows(
    table: dict[str, Any],
    text_row_indexes: list[int],
    verses: list[dict[str, Any]],
) -> None:
    rows = table["tbodies"][0]["rows"]
    for row_index, verse in zip(text_row_indexes, verses):
        rows[row_index]["cells"][0]["english"] = verse["text"]


def main() -> None:
    holyweek = load_json(HOLYWEEK_PATH)
    holyweek_output = copy.deepcopy(holyweek)
    stbasil = load_json(STBASIL_PATH)
    saas_ot = load_json(SAAS_OT_PATH)

    books_by_title = {
        book["title"]: {int(chapter["chapter"]): chapter for chapter in book.get("chapters", [])}
        for book in saas_ot.get("books", [])
    }
    book_titles = sorted(books_by_title.keys(), key=len, reverse=True)

    holyweek_locations = collect_holyweek_locations(holyweek)
    stbasil_locations = collect_stbasil_locations(stbasil)

    matched_reports: list[dict[str, Any]] = []
    unmatched_holyweek_slots: list[dict[str, Any]] = []
    unmatched_stbasil_readings: list[dict[str, Any]] = []

    replaced_tables = 0
    row_count_mismatches = 0
    parse_failures = 0
    low_similarity_count = 0

    all_locations = sorted(set(holyweek_locations) | set(stbasil_locations))

    for service_name, hour_name in all_locations:
        hw_location = holyweek_locations.get((service_name, hour_name))
        st_items = stbasil_locations.get((service_name, hour_name), [])
        hw_tables = hw_location["tables"] if hw_location else []

        hw_prophecies = [item for item in hw_tables if not item["is_homily"]]
        hw_homilies = [item for item in hw_tables if item["is_homily"]]

        for item in hw_homilies:
            unmatched_holyweek_slots.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "table_index": item["table_index"],
                    "holyweek_title": item["title"],
                    "reason": "holyweek_homily_slot",
                }
            )

        pair_count = min(len(hw_prophecies), len(st_items))

        for pair_index in range(pair_count):
            hw_item = hw_prophecies[pair_index]
            st_item = st_items[pair_index]
            verses, book_title, parse_error = lookup_verses(st_item["reference"], books_by_title, book_titles)

            report = {
                "service": service_name,
                "hour": hour_name,
                "holyweek_table_index": hw_item["table_index"],
                "holyweek_title": hw_item["title"],
                "stbasil_reference": st_item["reference"],
                "book": book_title,
                "status": "unprocessed",
                "reason": None,
                "holyweek_text_row_count": len(hw_item["text_rows"]),
                "saas_verse_count": len(verses) if verses else 0,
                "normalized_exact_match": False,
                "similarity": None,
            }

            if verses is None:
                report["status"] = "skipped"
                report["reason"] = parse_error or "reference_not_parsed"
                parse_failures += 1
                matched_reports.append(report)
                continue

            joined_saas = " ".join(verse["text"] for verse in verses)
            normalized_saas = normalize_compare_text(joined_saas)
            normalized_stbasil = normalize_compare_text(st_item["joined_english"])
            similarity = difflib.SequenceMatcher(None, normalized_saas, normalized_stbasil).ratio()
            report["normalized_exact_match"] = normalized_saas == normalized_stbasil
            report["similarity"] = round(similarity, 6)

            if similarity < 0.95:
                low_similarity_count += 1

            if len(verses) != len(hw_item["text_rows"]):
                report["status"] = "skipped"
                report["reason"] = "row_count_mismatch"
                row_count_mismatches += 1
                matched_reports.append(report)
                continue

            out_table = holyweek_output[hw_location["service_index"]]["hours"][hw_location["hour_index"]]["sections"][
                hw_location["section_index"]
            ]["tables"][hw_item["table_index"]]
            replace_english_text_rows(out_table, hw_item["text_rows"], verses)

            report["status"] = "replaced"
            replaced_tables += 1
            matched_reports.append(report)

        for item in hw_prophecies[pair_count:]:
            unmatched_holyweek_slots.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "table_index": item["table_index"],
                    "holyweek_title": item["title"],
                    "reason": "no_stbasil_prophecy_for_slot",
                }
            )

        for item in st_items[pair_count:]:
            unmatched_stbasil_readings.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "stbasil_reference": item["reference"],
                    "stbasil_title": item["title"],
                    "reason": "no_holyweek_prophecy_slot",
                }
            )

    report = {
        "summary": {
            "holyweek_locations_with_prophecies": len(holyweek_locations),
            "stbasil_locations_with_prophecies": len(stbasil_locations),
            "matched_pairs_considered": len(matched_reports),
            "replaced_tables": replaced_tables,
            "parse_failures": parse_failures,
            "row_count_mismatches": row_count_mismatches,
            "low_similarity_count_below_0_95": low_similarity_count,
            "unmatched_holyweek_slots": len(unmatched_holyweek_slots),
            "unmatched_stbasil_readings": len(unmatched_stbasil_readings),
        },
        "notes": [
            "holyWeek.json was not modified; holyweek_saas.json is built as a clone with prophecy English replacements only.",
            "Matching is by service/hour and prophecy order after skipping Holy Week prophecy-table titles that contain 'Homily'.",
            "English replacement is only applied when the SAAS verse count matches the existing Holy Week text-row count.",
            "Full-text validation compares joined SAAS verses against the joined St. Basil reading text after normalization.",
        ],
        "unmatched_holyweek_slots": unmatched_holyweek_slots,
        "unmatched_stbasil_readings": unmatched_stbasil_readings,
        "matched_reports": matched_reports,
    }

    save_json(OUTPUT_PATH, holyweek_output)
    save_json(REPORT_PATH, report)

    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {REPORT_PATH}")
    print(report["summary"])


if __name__ == "__main__":
    main()
