from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
BASE_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR.json"
DIAC_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR_tashkeel.json"
MERGE_REPORT_PATH = ROOT / "reports" / "holyWeek_CR_report.json"
OUT_PATH = ROOT / "reports" / "holyWeek_CR_tashkeel_unmatched_accuracy_report.json"

ARABIC_DIACRITICS = "".join(chr(code) for code in range(0x064B, 0x065F + 1))


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def strip_diacritics(text: str) -> str:
    return re.sub(f"[{re.escape(ARABIC_DIACRITICS)}]", "", text or "")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def normalize_for_compare(text: str) -> str:
    text = normalize_spaces(text)
    text = strip_diacritics(text)
    text = re.sub(r"[،,:؛.!?\"'()\[\]{}ـ]", "", text)
    return normalize_spaces(text)


def get_text_rows(table: dict[str, Any]) -> list[dict[str, Any]]:
    return [row for row in table.get("tbodies", [{}])[0].get("rows", []) if row.get("row-class") == "text"]


def find_table(payload: list[dict[str, Any]], service_name: str, hour_name: str, section_title: str, table_title: str) -> dict[str, Any] | None:
    for service in payload:
        if service["service"][0] != service_name:
            continue
        for hour in service["hours"]:
            if hour["hour"][0] != hour_name:
                continue
            for section in hour["sections"]:
                if section["title"] != section_title:
                    continue
                for table in section.get("tables", []):
                    title = table.get("english_title") or table.get("title") or ""
                    if title == table_title:
                        return table
    return None


def first_diff(a: str, b: str) -> int:
    limit = min(len(a), len(b))
    for idx in range(limit):
        if a[idx] != b[idx]:
            return idx
    return limit if len(a) != len(b) else -1


def main() -> None:
    base = load_json(BASE_PATH)
    diac = load_json(DIAC_PATH)
    merge_report = load_json(MERGE_REPORT_PATH)

    unmatched = merge_report["unmatched_holyweek_readings"]
    row_entries = []
    unchanged_rows = 0
    changed_rows = 0
    exact_preserved = 0
    normalized_same = 0

    for item in unmatched:
        service_name = item["service"]
        hour_name = item["hour"]
        section_title = item["section"]
        table_title = item["holyweek_title"]

        base_table = find_table(base, service_name, hour_name, section_title, table_title)
        diac_table = find_table(diac, service_name, hour_name, section_title, table_title)
        if not base_table or not diac_table or "tbodies" not in base_table or "tbodies" not in diac_table:
            continue

        base_rows = get_text_rows(base_table)
        diac_rows = get_text_rows(diac_table)

        for idx, (base_row, diac_row) in enumerate(zip(base_rows, diac_rows), start=1):
            base_ar = base_row["cells"][0].get("arabic", "")
            diac_ar = diac_row["cells"][0].get("arabic", "")
            if not base_ar and not diac_ar:
                continue

            same_exact = base_ar == diac_ar
            same_normalized = normalize_for_compare(base_ar) == normalize_for_compare(diac_ar)
            diff_pos = first_diff(base_ar, diac_ar) if not same_exact else -1
            if same_exact:
                unchanged_rows += 1
                exact_preserved += 1
            else:
                changed_rows += 1
            if same_normalized:
                normalized_same += 1

            row_entries.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "section": section_title,
                    "title": table_title,
                    "row_index": idx,
                    "exact_same": same_exact,
                    "normalized_same": same_normalized,
                    "first_difference": diff_pos,
                    "original": base_ar,
                    "diacritized": diac_ar,
                }
            )

    changed_examples = [entry for entry in row_entries if not entry["exact_same"]][:50]

    report = {
        "base": str(BASE_PATH),
        "diacritized": str(DIAC_PATH),
        "merge_report": str(MERGE_REPORT_PATH),
        "unmatched_table_count": len(unmatched),
        "row_count": len(row_entries),
        "changed_row_count": changed_rows,
        "unchanged_row_count": unchanged_rows,
        "exact_preserved_count": exact_preserved,
        "normalized_same_count": normalized_same,
        "changed_examples": changed_examples,
        "rows": row_entries,
    }

    save_json(OUT_PATH, report)
    print(f"Wrote {OUT_PATH}")
    print(f"Rows compared: {len(row_entries)}")
    print(f"Changed rows: {changed_rows}")
    print(f"Unchanged rows: {unchanged_rows}")
    print(f"Normalized same: {normalized_same}")


if __name__ == "__main__":
    main()
