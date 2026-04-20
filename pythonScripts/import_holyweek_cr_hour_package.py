from __future__ import annotations

import argparse
import copy
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
BASE_INPUT = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR.json"
DEFAULT_OUTPUT = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR_tashkeel_ai.json"
DEFAULT_REPORT = ROOT / "reports" / "holyWeek_CR_tashkeel_ai_import_report.json"
ARABIC_DIACRITICS = "".join(chr(code) for code in range(0x064B, 0x065F + 1))
DIACRITIC_RE = re.compile(f"[{re.escape(ARABIC_DIACRITICS)}]")
WHITESPACE_RE = re.compile(r"\s+")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def get_text_rows(table: dict[str, Any]) -> list[dict[str, Any]]:
    return [row for row in table.get("tbodies", [{}])[0].get("rows", []) if row.get("row-class") == "text"]


def strip_diacritics(text: str) -> str:
    return DIACRITIC_RE.sub("", text or "")


def normalize_orthography(text: str) -> str:
    text = strip_diacritics(text)
    text = text.replace("أ", "ا").replace("إ", "ا").replace("آ", "ا")
    text = text.replace("ٱ", "ا")
    text = text.replace("ؤ", "و").replace("ئ", "ي")
    text = text.replace("ى", "ي")
    text = text.replace("ة", "ه")
    text = text.replace("ـ", "")
    text = text.replace("،", ",").replace("؛", ";").replace("؟", "?")
    return WHITESPACE_RE.sub(" ", text).strip()


def find_hour(payload: list[dict[str, Any]], service_name: str, hour_name: str) -> dict[str, Any] | None:
    for service in payload:
        if service["service"][0] != service_name:
            continue
        for hour in service["hours"]:
            if hour["hour"][0] == hour_name:
                return hour
    return None


def main() -> None:
    parser = argparse.ArgumentParser(description="Import one AI-diatricsized Holy Week hour package.")
    parser.add_argument("package", type=Path, help="Path to the returned JSON package from ChatGPT/Grok.")
    parser.add_argument("--input", type=Path, default=BASE_INPUT)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    args = parser.parse_args()

    base = load_json(args.input)
    package = load_json(args.package)
    output = copy.deepcopy(base)

    service_name = package["service"]
    hour_name = package["hour"]
    target_hour = find_hour(output, service_name, hour_name)
    if target_hour is None:
        raise SystemExit(f"Could not find hour {service_name} | {hour_name} in {args.input}")

    applied = []
    missing = []
    violations = []
    orthography_only = []

    for incoming_section in package["sections"]:
        section_title = incoming_section["section"]
        section = next((s for s in target_hour["sections"] if s["title"] == section_title), None)
        if section is None:
            missing.append({"section": section_title, "reason": "missing_section"})
            continue

        for incoming_table in incoming_section["readings"]:
            title = incoming_table["title"]
            table = next(
                (t for t in section.get("tables", []) if (t.get("english_title") or t.get("title") or "") == title),
                None,
            )
            if table is None:
                missing.append({"section": section_title, "title": title, "reason": "missing_table"})
                continue

            text_rows = get_text_rows(table)
            incoming_rows = incoming_table["rows"]
            if len(text_rows) != len(incoming_rows):
                missing.append(
                    {
                        "section": section_title,
                        "title": title,
                        "reason": "row_count_mismatch",
                        "expected": len(text_rows),
                        "received": len(incoming_rows),
                    }
                )
                continue

            changed = 0
            table_violations = []
            for idx, (dest_row, incoming_row) in enumerate(zip(text_rows, incoming_rows), start=1):
                new_ar = incoming_row.get("arabic", "")
                original_ar = dest_row["cells"][0].get("arabic", "")
                expected_base = incoming_row.get("arabic_base_no_tashkeel", strip_diacritics(original_ar))
                original_base = strip_diacritics(original_ar)
                returned_base = strip_diacritics(new_ar)

                if expected_base != original_base:
                    table_violations.append(
                        {
                            "row_index": idx,
                            "reason": "package_base_mismatch",
                            "expected_base": expected_base,
                            "original_base": original_base,
                        }
                    )
                    continue

                if new_ar and returned_base != original_base:
                    original_norm = normalize_orthography(original_ar)
                    returned_norm = normalize_orthography(new_ar)
                    if original_norm == returned_norm:
                        orthography_only.append(
                            {
                                "section": section_title,
                                "title": title,
                                "row_index": idx,
                                "original_arabic": original_ar,
                                "returned_arabic": new_ar,
                            }
                        )
                    else:
                        table_violations.append(
                            {
                                "row_index": idx,
                                "reason": "word_change",
                                "original_arabic": original_ar,
                                "returned_arabic": new_ar,
                                "original_base": original_base,
                                "returned_base": returned_base,
                                "original_normalized": original_norm,
                                "returned_normalized": returned_norm,
                            }
                        )
                        continue

                if new_ar and original_ar != new_ar:
                    dest_row["cells"][0]["arabic"] = new_ar
                    changed += 1

            if table_violations:
                violations.append(
                    {
                        "section": section_title,
                        "title": title,
                        "row_count": len(text_rows),
                        "violation_count": len(table_violations),
                        "violations": table_violations,
                    }
                )
                missing.append(
                    {
                        "section": section_title,
                        "title": title,
                        "reason": "zero_word_change_violation",
                        "violation_count": len(table_violations),
                    }
                )
                continue

            applied.append(
                {
                    "section": section_title,
                    "title": title,
                    "row_count": len(text_rows),
                    "changed_rows": changed,
                }
            )

    report = {
        "input": str(args.input),
        "package": str(args.package),
        "output": str(args.output),
        "service": service_name,
        "hour": hour_name,
        "applied_count": len(applied),
        "applied": applied,
        "orthography_only_count": len(orthography_only),
        "orthography_only": orthography_only,
        "violation_count": len(violations),
        "violations": violations,
        "missing_count": len(missing),
        "missing": missing,
    }

    save_json(args.output, output)
    save_json(args.report, report)
    print(f"Wrote {args.output}")
    print(f"Applied readings: {len(applied)}")
    print(f"Orthography-only row changes: {len(orthography_only)}")
    print(f"Zero-word-change violations: {len(violations)}")
    print(f"Missing/skipped: {len(missing)}")


if __name__ == "__main__":
    main()
