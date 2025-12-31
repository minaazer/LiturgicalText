"""
Scrape daily readings from e.copticbook.net and emit JSON compatible with data/readings/annualDays.json.

Example:
    python scripts/scrape_daily_readings.py \\
        --url "https://e.copticbook.net/daily.php?caltype=0&m1=1&y1=1742&d=1&m=1&y=1742&mode=0&itemnum=0&p=1" \\
        --month Tout \\
        --day 1 \\
        --output scripts/data/tout_day1_scraped.json
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Dict, List, Optional

import requests
from bs4 import BeautifulSoup


READING_ORDER = [
    "Vespers Psalm",
    "Vespers Gospel",
    "Matins Psalm",
    "Matins Gospel",
    "The Pauline Epistle",
    "The Catholic Epistle",
    "The Acts",
    "The Liturgy Psalm",
    "The Liturgy Gospel",
]


def classify_reference(text: str) -> bool:
    # Reference lines look like "96:1,2" or "13:44-52" (English or Arabic digits)
    return bool(re.search(r"\d+\s*[:：]\s*\d+", text))


def scrape_sections(url: str) -> List[Dict]:
    resp = requests.get(url, timeout=20)
    resp.raise_for_status()
    # Page advertises windows-1252; utf-8 preserves Arabic
    resp.encoding = "utf-8"
    soup = BeautifulSoup(resp.text, "html.parser")

    table = None
    for t in soup.find_all("table"):
        if t.find("h2"):
            table = t
            break
    if not table:
        return []

    rows = table.find_all("tr")
    if not rows:
        return []

    # skip the first row (day title)
    rows = rows[1:]

    sections: List[Dict] = []
    current: Optional[Dict] = None
    expecting_reference = False
    reading_index = 0

    for row in rows:
        h2s = row.find_all("h2")
        if h2s:
            # finalize previous reading
            if current:
                sections.append(current)
            english_title = h2s[0].get_text(strip=True)
            arabic_title = h2s[1].get_text(strip=True) if len(h2s) > 1 else None
            reading_name = (
                READING_ORDER[reading_index]
                if reading_index < len(READING_ORDER)
                else english_title
            )
            reading_index += 1
            current = {
                "reading": reading_name,
                "rows": [],
                "arabic_title": arabic_title,
            }
            expecting_reference = True
            continue

        if not current:
            continue

        ps = row.find_all("p")
        if not ps:
            continue
        english = ps[0].get_text(strip=True) if len(ps) > 0 else ""
        arabic = ps[1].get_text(strip=True) if len(ps) > 1 else ""
        if not english and not arabic:
            continue

        cells = {}
        if english:
            cells["english"] = english.lstrip("*")
        if arabic:
            cells["arabic"] = arabic

        if expecting_reference or classify_reference(english or arabic):
            row_class = "reference"
            expecting_reference = False
        else:
            row_class = "text"

        current["rows"].append({"row_class": row_class, "cells": cells})

    if current:
        sections.append(current)

    return sections


def to_annual_days(month: str, day: int, sections: List[Dict]) -> List[Dict]:
    readings = []
    for section in sections:
        rows = section.get("rows", [])
        readings.append({"reading": section.get("reading", ""), "rows": rows})
    return [{"month": month, "days": [{"day": day, "readings": readings}]}]


def find_day(data: List[Dict], month: str, day: int) -> Optional[Dict]:
    for m in data:
        if m.get("month") == month:
            for d in m.get("days", []):
                if d.get("day") == day:
                    return d
    return None


def collect_text_arabic(reading: Dict) -> str:
    parts = []
    for row in reading.get("rows", []):
        if row.get("row_class") != "text":
            continue
        cells = row.get("cells", {})
        if isinstance(cells, dict) and cells.get("arabic"):
            parts.append(cells["arabic"])
    return " ".join(parts).strip()


def split_to_segments(text: str, count: int) -> List[str]:
    if count <= 1:
        return [text.strip()]
    # Try sentence-based splitting first
    sentences = [s.strip() for s in re.split(r"(?<=[.!؟؛])\s+", text) if s.strip()]
    if len(sentences) >= count:
        # Take the first count-1 sentences, rest joined
        segments = sentences[: count - 1]
        segments.append(" ".join(sentences[count - 1 :]))
        return segments
    # Fallback: chunk by length
    chunk_size = max(1, len(text) // count)
    segments = [text[i : i + chunk_size].strip() for i in range(0, len(text), chunk_size)]
    if len(segments) > count:
        merged = [" ".join(segments[: count - 1]), *segments[count - 1 : count]]
        return merged
    if len(segments) < count:
        # pad with empty strings if needed
        segments += [""] * (count - len(segments))
    return segments[:count]


def split_by_proportion(text: str, target_lengths: List[int]) -> List[str]:
    """
    Split text into len(target_lengths) parts proportionally to the existing lengths.
    Tries to cut on whitespace; falls back to straight slicing.
    """
    if not target_lengths:
        return []
    total = sum(target_lengths)
    if total == 0:
        return split_to_segments(text, len(target_lengths))

    cuts = []
    accum = 0
    for length in target_lengths[:-1]:
        accum += length
        cuts.append(accum / total)

    positions = [int(round(c * len(text))) for c in cuts]

    # adjust positions to nearest space to avoid chopping words
    chars = list(text)
    for idx, pos in enumerate(positions):
        best = pos
        for delta in range(1, 20):
            if pos - delta >= 0 and chars[pos - delta].isspace():
                best = pos - delta
                break
            if pos + delta < len(chars) and chars[pos + delta].isspace():
                best = pos + delta
                break
        positions[idx] = max(0, min(len(text), best))

    segments = []
    prev = 0
    for pos in positions:
        segments.append(text[prev:pos].strip())
        prev = pos
    segments.append(text[prev:].strip())
    return segments


def update_annual_arabic(annual_path: Path, scraped_path: Path, month: str, day: int, output: Path) -> None:
    annual = json.loads(annual_path.read_text(encoding="utf-8"))
    scraped = json.loads(scraped_path.read_text(encoding="utf-8"))

    annual_day = find_day(annual, month, day)
    scraped_day = find_day(scraped, month, day)
    if not annual_day or not scraped_day:
        raise ValueError("Could not find specified month/day in annual or scraped data")

    updated_readings = []
    for a_reading, s_reading in zip(annual_day.get("readings", []), scraped_day.get("readings", [])):
        combined = collect_text_arabic(s_reading)
        # count target text rows in annual reading
        target_rows = [r for r in a_reading.get("rows", []) if r.get("row_class") == "text"]
        target_lengths = [len(r.get("cells", {}).get("arabic", "")) for r in target_rows]
        segments = split_by_proportion(combined, target_lengths)
        if len(segments) != len(target_rows):
            segments = split_to_segments(combined, len(target_rows))
        seg_iter = iter(segments)
        new_rows = []
        for row in a_reading.get("rows", []):
            if row.get("row_class") == "text":
                cells = dict(row.get("cells", {}))
                cells["arabic"] = next(seg_iter, "")
                new_rows.append({**row, "cells": cells})
            else:
                new_rows.append(row)
        updated_readings.append({**a_reading, "rows": new_rows})

    annual_day["readings"] = updated_readings
    output.write_text(json.dumps(annual, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote updated annual data to {output}")


def prompt(text: str, default: Optional[str] = None) -> str:
    val = input(f"{text}{f' [{default}]' if default else ''}: ").strip()
    return val or (default or "")


def main() -> None:
    # Simple prompt-based flow to avoid CLI args
    mode = prompt("Choose mode (scrape / update-annual)", "scrape").lower()
    if mode == "scrape":
        url = prompt("Daily readings page URL")
        month = prompt("Month name (e.g., Tout)")
        day = int(prompt("Day number", "1"))
        output = Path(prompt("Output JSON file", "scripts/data/tout_day1_scraped.json"))

        sections = scrape_sections(url)
        data = to_annual_days(month, day, sections)
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Wrote {output} with {len(sections)} readings")
    elif mode == "update-annual":
        annual_path = Path(prompt("Path to annualDays.json", "data/readings/annualDays.json"))
        scraped_path = Path(prompt("Path to scraped JSON", "scripts/data/tout_day1_scraped.json"))
        month = prompt("Month name (e.g., Tout)")
        day = int(prompt("Day number", "1"))
        output = Path(prompt("Output JSON file", "data/readings/annualDays_updated.json"))
        output.parent.mkdir(parents=True, exist_ok=True)
        update_annual_arabic(annual_path, scraped_path, month, day, output)
    else:
        raise SystemExit("Invalid mode. Choose 'scrape' or 'update-annual'.")


if __name__ == "__main__":
    main()
