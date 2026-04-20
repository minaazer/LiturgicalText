from __future__ import annotations

import difflib
import json
from pathlib import Path
from typing import Any

from build_holyweek_saas_prophecies import (
    HOLYWEEK_PATH,
    REPORT_PATH,
    SAAS_OT_PATH,
    STBASIL_PATH,
    collect_holyweek_locations,
    collect_stbasil_locations,
    load_json,
    lookup_verses,
    normalize_compare_text,
)


ROOT = Path(__file__).resolve().parent.parent
OUTPUT_PATH = ROOT / "reports" / "holyweek_saas_prophecies_below_0_99_report.json"


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def build_books_index(saas_ot: dict[str, Any]) -> tuple[dict[str, dict[int, dict[str, Any]]], list[str]]:
    books_by_title = {
        book["title"]: {int(chapter["chapter"]): chapter for chapter in book.get("chapters", [])}
        for book in saas_ot.get("books", [])
    }
    book_titles = sorted(books_by_title.keys(), key=len, reverse=True)
    return books_by_title, book_titles


def find_first_difference(left: str, right: str) -> dict[str, Any]:
    max_len = min(len(left), len(right))
    index = 0
    while index < max_len and left[index] == right[index]:
        index += 1

    start = max(index - 80, 0)
    end_left = min(index + 160, len(left))
    end_right = min(index + 160, len(right))
    return {
        "first_difference_index": index,
        "saas_excerpt": left[start:end_left],
        "stbasil_excerpt": right[start:end_right],
    }


def likely_cause(item: dict[str, Any]) -> str:
    similarity = item.get("similarity") or 0.0
    reason = item.get("reason")
    if reason == "row_count_mismatch":
        return "Holy Week row grouping does not match the SAAS verse count; likely a selection, merged-verses, or split-verses issue."
    if similarity < 0.2:
        return "Very low similarity; likely the St. Basil reading uses a different selection/subset than the full parsed SAAS reference, or the mapping is offset."
    if similarity < 0.9:
        return "Moderate mismatch; likely wording divergence, omitted phrases, or a partial-selection mismatch."
    return "Near match; likely punctuation, a small wording variant, or minor normalization difference."


def main() -> None:
    base_report = load_json(REPORT_PATH)
    holyweek = load_json(HOLYWEEK_PATH)
    stbasil = load_json(STBASIL_PATH)
    saas_ot = load_json(SAAS_OT_PATH)
    books_by_title, book_titles = build_books_index(saas_ot)

    holyweek_locations = collect_holyweek_locations(holyweek)
    stbasil_locations = collect_stbasil_locations(stbasil)

    flagged = [item for item in base_report["matched_reports"] if item.get("similarity") is not None and item["similarity"] < 0.99]
    detailed_items: list[dict[str, Any]] = []

    for item in flagged:
        location = (item["service"], item["hour"])
        hw_location = holyweek_locations[location]
        hw_table = hw_location["tables"][item["holyweek_table_index"]]
        st_index = None
        st_items = stbasil_locations.get(location, [])
        for idx, candidate in enumerate(st_items):
            if candidate["reference"] == item["stbasil_reference"]:
                st_index = idx
                break
        stbasil_item = st_items[st_index] if st_index is not None else None

        verses, _, _ = lookup_verses(item["stbasil_reference"], books_by_title, book_titles)
        joined_saas = " ".join(verse["text"] for verse in (verses or []))
        normalized_saas = normalize_compare_text(joined_saas)
        normalized_stbasil = normalize_compare_text(stbasil_item["joined_english"] if stbasil_item else "")

        diff = find_first_difference(normalized_saas, normalized_stbasil)
        detailed_items.append(
            {
                **item,
                "likely_cause": likely_cause(item),
                "holyweek_existing_text_row_count": len(hw_table["text_rows"]),
                "normalized_saas_length": len(normalized_saas),
                "normalized_stbasil_length": len(normalized_stbasil),
                "normalized_saas_start": normalized_saas[:220],
                "normalized_stbasil_start": normalized_stbasil[:220],
                "normalized_saas_end": normalized_saas[-220:],
                "normalized_stbasil_end": normalized_stbasil[-220:],
                **diff,
            }
        )

    summary = {
        "threshold": 0.99,
        "flagged_matches": len(detailed_items),
        "replaced_but_below_threshold": sum(1 for item in detailed_items if item["status"] == "replaced"),
        "skipped_below_threshold": sum(1 for item in detailed_items if item["status"] == "skipped"),
        "row_count_mismatch": sum(1 for item in detailed_items if item.get("reason") == "row_count_mismatch"),
        "very_low_similarity_below_0_2": sum(1 for item in detailed_items if item["similarity"] < 0.2),
    }

    save_json(
        OUTPUT_PATH,
        {
            "summary": summary,
            "items": detailed_items,
        },
    )
    print(f"Wrote {OUTPUT_PATH}")
    print(summary)


if __name__ == "__main__":
    main()
