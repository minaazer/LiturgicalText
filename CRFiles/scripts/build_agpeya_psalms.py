#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


HOUR_ORDER = [
    "1st Hour",
    "3rd Hour",
    "6th Hour",
    "9th Hour",
    "11th Hour",
    "12th Hour",
    "Midnight Hour",
]

PSALM_TITLE_RE = re.compile(r"^Psalm\s+(\d+)\b", re.IGNORECASE)


def parse_hour_from_name(file_name: str) -> str | None:
    for hour in HOUR_ORDER:
        if hour in file_name:
            return hour
    return None


def psalm_number_from_title(title: str) -> int | None:
    match = PSALM_TITLE_RE.match((title or "").strip())
    if not match:
        return None
    return int(match.group(1))


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Build one JSON file containing all Agpeya Psalm tables in hour order."
    )
    parser.add_argument(
        "--input-dir",
        default=r"D:\AppDev\LiturgicalText\LiturgicalBooks\CRFiles\agpeya",
        help="Directory containing Agpeya hour JSON files.",
    )
    parser.add_argument(
        "--output",
        default=r"D:\AppDev\LiturgicalText\LiturgicalBooks\CRFiles\agpeya\Agpeya - All Psalms Ordered.json",
        help="Output JSON path.",
    )
    args = parser.parse_args()

    input_dir = Path(args.input_dir)
    output_path = Path(args.output)

    by_hour_file: dict[str, Path] = {}
    for path in input_dir.glob("Agpeya -* Hour.json"):
        hour = parse_hour_from_name(path.name)
        if hour:
            by_hour_file[hour] = path

    missing = [h for h in HOUR_ORDER if h not in by_hour_file]
    if missing:
        raise SystemExit(f"Missing hour JSON files: {', '.join(missing)}")

    combined = []
    for hour in HOUR_ORDER:
        source_file = by_hour_file[hour]
        sections = json.loads(source_file.read_text(encoding="utf-8"))

        hour_psalm_index = 0
        for section in sections:
            title = (section.get("english_title") or section.get("title") or "").strip()
            psalm_no = psalm_number_from_title(title)
            if psalm_no is None:
                continue

            hour_psalm_index += 1
            entry = dict(section)
            entry["hour"] = hour
            entry["psalm_number"] = psalm_no
            entry["hour_psalm_order"] = hour_psalm_index
            entry["source_file"] = source_file.name
            combined.append(entry)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(combined, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(combined)} psalm tables to {output_path}")


if __name__ == "__main__":
    main()
