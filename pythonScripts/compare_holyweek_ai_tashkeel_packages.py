from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
DEFAULT_REPORT = ROOT / "reports" / "holyWeek_CR_ai_package_compare_report.json"
ARABIC_DIACRITICS = "".join(chr(code) for code in range(0x064B, 0x065F + 1))
DIACRITIC_RE = re.compile(f"[{re.escape(ARABIC_DIACRITICS)}]")
WHITESPACE_RE = re.compile(r"\s+")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


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


def iter_rows(package: dict[str, Any]):
    for section in package.get("sections", []):
        section_title = section["section"]
        for reading in section.get("readings", []):
            title = reading["title"]
            for row in reading.get("rows", []):
                yield section_title, title, row["row_index"], row


def index_rows(package: dict[str, Any]) -> dict[tuple[str, str, int], dict[str, Any]]:
    return {(section, title, row_index): row for section, title, row_index, row in iter_rows(package)}


def build_entry(
    label: str,
    row: dict[str, Any] | None,
    original_base: str,
) -> dict[str, Any]:
    if row is None:
        return {"label": label, "present": False}
    arabic = row.get("arabic", "")
    base = strip_diacritics(arabic)
    normalized = normalize_orthography(arabic)
    original_normalized = normalize_orthography(original_base)
    if base == original_base:
        status = "tashkeel_only"
    elif normalized == original_normalized:
        status = "orthography_only"
    else:
        status = "word_change"
    return {
        "label": label,
        "present": True,
        "arabic": arabic,
        "base": base,
        "normalized": normalized,
        "original_normalized": original_normalized,
        "status": status,
        "matches_original_base": base == original_base,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Compare AI tashkeel package outputs against the original base text.")
    parser.add_argument("original", type=Path, help="Original exported hour package.")
    parser.add_argument("candidate_a", type=Path, help="First AI-returned hour package.")
    parser.add_argument("candidate_b", type=Path, help="Second AI-returned hour package.")
    parser.add_argument("--label-a", default="candidate_a")
    parser.add_argument("--label-b", default="candidate_b")
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    args = parser.parse_args()

    original = load_json(args.original)
    cand_a = load_json(args.candidate_a)
    cand_b = load_json(args.candidate_b)

    original_rows = index_rows(original)
    rows_a = index_rows(cand_a)
    rows_b = index_rows(cand_b)

    comparisons = []
    a_counts = {"tashkeel_only": 0, "orthography_only": 0, "word_change": 0}
    b_counts = {"tashkeel_only": 0, "orthography_only": 0, "word_change": 0}

    for key, original_row in original_rows.items():
        section_title, title, row_index = key
        original_base = original_row.get("arabic_base_no_tashkeel", strip_diacritics(original_row.get("arabic", "")))
        entry_a = build_entry(args.label_a, rows_a.get(key), original_base)
        entry_b = build_entry(args.label_b, rows_b.get(key), original_base)
        if entry_a["present"]:
            a_counts[entry_a["status"]] += 1
        if entry_b["present"]:
            b_counts[entry_b["status"]] += 1
        comparisons.append(
            {
                "section": section_title,
                "title": title,
                "row_index": row_index,
                "original_base": original_base,
                args.label_a: entry_a,
                args.label_b: entry_b,
            }
        )

    report = {
        "original": str(args.original),
        args.label_a: str(args.candidate_a),
        args.label_b: str(args.candidate_b),
        "row_count": len(original_rows),
        "status_counts": {
            args.label_a: a_counts,
            args.label_b: b_counts,
        },
        "comparisons": comparisons,
    }
    save_json(args.report, report)
    print(f"Wrote {args.report}")
    print(f"{args.label_a}: {a_counts}")
    print(f"{args.label_b}: {b_counts}")


if __name__ == "__main__":
    main()
