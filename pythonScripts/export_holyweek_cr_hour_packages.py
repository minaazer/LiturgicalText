from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
INPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR.json"
OUTPUT_DIR = ROOT / "reports" / "holyweek_tashkeel_hour_packages"

TARGET_SECTIONS = {
    "Prophecies",
    "English and Arabic Psalm & Gospel",
    "Pauline Epistle",
}

ARABIC_DIACRITICS = "".join(chr(code) for code in range(0x064B, 0x065F + 1))
DIACRITIC_RE = re.compile(f"[{re.escape(ARABIC_DIACRITICS)}]")


def strip_diacritics(text: str) -> str:
    return DIACRITIC_RE.sub("", text or "")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def slugify(text: str) -> str:
    out = []
    for ch in text.lower():
        if ch.isalnum():
            out.append(ch)
        else:
            out.append("_")
    slug = "".join(out)
    while "__" in slug:
        slug = slug.replace("__", "_")
    return slug.strip("_")


def get_text_rows(table: dict[str, Any]) -> list[dict[str, Any]]:
    return [row for row in table.get("tbodies", [{}])[0].get("rows", []) if row.get("row-class") == "text"]


def main() -> None:
    parser = argparse.ArgumentParser(description="Export Holy Week CR hour packages for AI tashkeel.")
    parser.add_argument("--input", type=Path, default=INPUT_PATH)
    parser.add_argument("--output-dir", type=Path, default=OUTPUT_DIR)
    parser.add_argument("--service", action="append", help="Only include services whose title contains this text.")
    parser.add_argument("--hour", action="append", help="Only include hours whose title contains this text.")
    args = parser.parse_args()

    payload = load_json(args.input)
    args.output_dir.mkdir(parents=True, exist_ok=True)

    manifest = []
    exported = 0

    for service in payload:
        service_name = service["service"][0]
        if args.service and not any(token.casefold() in service_name.casefold() for token in args.service):
            continue
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            if args.hour and not any(token.casefold() in hour_name.casefold() for token in args.hour):
                continue

            sections = []
            reading_count = 0
            for section in hour["sections"]:
                if section["title"] not in TARGET_SECTIONS:
                    continue
                package_tables = []
                for table in section.get("tables", []):
                    if "tbodies" not in table:
                        continue
                    text_rows = get_text_rows(table)
                    if not text_rows:
                        continue
                    rows = []
                    for idx, row in enumerate(text_rows, start=1):
                        cell = row["cells"][0]
                        if not cell.get("arabic"):
                            continue
                        rows.append(
                            {
                                "row_index": idx,
                                "english": cell.get("english", ""),
                                "arabic": cell.get("arabic", ""),
                                "arabic_base_no_tashkeel": strip_diacritics(cell.get("arabic", "")),
                            }
                        )
                    if not rows:
                        continue
                    package_tables.append(
                        {
                            "title": table.get("english_title") or table.get("title") or "",
                            "rows": rows,
                        }
                    )
                    reading_count += 1
                if package_tables:
                    sections.append({"section": section["title"], "readings": package_tables})

            if not sections:
                continue

            exported += 1
            slug = f"{exported:03d}_{slugify(service_name)}__{slugify(hour_name)}"
            out_path = args.output_dir / f"{slug}.json"
            package = {
                "service": service_name,
                "hour": hour_name,
                "instructions": {
                    "task": "Add Arabic tashkeel only.",
                    "rules": [
                        "Do not change a single Arabic letter.",
                        "Do not rewrite, paraphrase, normalize, or translate.",
                        "Do not insert or remove words, letters, punctuation, or brackets.",
                        "Preserve punctuation and row order exactly.",
                        "Use the English only to disambiguate meaning.",
                        "Keep the same structure and same number of rows.",
                        "Only modify the arabic value by adding or correcting tashkeel.",
                        "The value in arabic_base_no_tashkeel is the exact Arabic base text with tashkeel stripped; your returned arabic must match it exactly after tashkeel is stripped.",
                        "Before returning, verify that stripping tashkeel from every returned arabic value produces exactly the corresponding arabic_base_no_tashkeel value.",
                        "Return valid JSON only."
                    ]
                },
                "sections": sections,
            }
            save_json(out_path, package)
            manifest.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "reading_count": reading_count,
                    "file": str(out_path),
                }
            )

    save_json(args.output_dir / "manifest.json", {"count": len(manifest), "packages": manifest})
    print(f"Exported {len(manifest)} hour packages to {args.output_dir}")


if __name__ == "__main__":
    main()
