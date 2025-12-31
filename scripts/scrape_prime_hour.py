"""
Scrape the Prime hour prayers from e.copticbook.net and export to JSON.

Target page: https://e.copticbook.net/ebooks/20101112001.php?f=0100#0100

Output format matches the existing repeated prayers structure, e.g.:
{
    "title": "...",
    "english_caption": "...",
    "arabic_caption": "...",
    "coptic_caption": null,
    "rows": [
        {
            "row-class": "text",
            "cells": [
                {
                    "english": "...",
                    "arabic": "..."
                }
            ]
        }
    ]
}
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import requests
from bs4 import BeautifulSoup, Tag

TOC_URL = "https://e.copticbook.net/ebooks/20101112001.php?f=0100#0100"
BASE_URL = "https://e.copticbook.net/ebooks/20101112001.php"
OUTPUT_PATH = Path("scripts/data/agpeya/prime_hour.json")

ARABIC_RE = re.compile(r"[\u0600-\u06FF]+")


def is_arabic(text: str) -> bool:
    return bool(ARABIC_RE.search(text))


def clean_text(text: str) -> str:
    # Normalise whitespace and strip artifacts.
    return re.sub(r"\s+", " ", text).strip()


def fetch_html(url: str) -> BeautifulSoup:
    resp = requests.get(url)
    resp.raise_for_status()
    # Site advertises windows-1252 but utf-8 works fine for Arabic.
    resp.encoding = "utf-8"
    return BeautifulSoup(resp.text, "html.parser")


def get_prime_links() -> List[Tuple[str, str]]:
    """
    From the table of contents page, collect the Prime hour item links.
    Stops when the next hour (0200+) is encountered.
    Returns list of (title, href).
    """
    soup = fetch_html(TOC_URL)
    links: List[Tuple[str, str]] = []
    for a in soup.select("li > a"):
        href = a.get("href") or ""
        name = a.get("name") or ""
        if not href.startswith("20101112001.php?f=01"):
            continue
        # Stop at the next section (0200 and above)
        try:
            section_num = int(re.search(r"f=(\d+)", href).group(1))
        except Exception:
            continue
        if section_num >= 200:
            break
        title = clean_text(a.get_text()).replace("+--", "").strip()
        links.append((title, href))
    return links


def extract_rows(page_url: str) -> List[Dict]:
    """
    Extracts rows by pairing consecutive English and Arabic <p> tags.
    Falls back to single-language rows if no pair is found.
    """
    soup = fetch_html(page_url)
    paragraphs = [clean_text(p.get_text()) for p in soup.find_all("p")]
    paragraphs = [p for p in paragraphs if p]  # drop empties

    rows: List[Dict] = []
    i = 0
    while i < len(paragraphs):
        current = paragraphs[i]
        next_text: Optional[str] = paragraphs[i + 1] if i + 1 < len(paragraphs) else None

        if not is_arabic(current) and next_text and is_arabic(next_text):
            rows.append(
                {
                    "row-class": "text",
                    "cells": [
                        {
                            "english": current,
                            "arabic": next_text,
                        }
                    ],
                }
            )
            i += 2
        else:
            # Single-language row.
            rows.append(
                {
                    "row-class": "text",
                    "cells": [
                        {"english": current} if not is_arabic(current) else {"arabic": current}
                    ],
                }
            )
            i += 1
    return rows


def extract_psalm_tables(page_url: str) -> List[List[Dict]]:
    """
    Specialized extractor for the Psalms section.
    Uses <h3> headings (Psalm one, Psalm two...), blank paragraphs, and Alleluia lines
    as boundaries between psalms and returns a list of row lists.
    """
    soup = fetch_html(page_url)
    anchors = soup.find_all("a", attrs={"name": re.compile(r"^s\d+")})

    def texts_to_rows(texts: List[str]) -> List[Dict]:
        rows: List[Dict] = []
        i = 0
        while i < len(texts):
            text = texts[i]
            next_text: Optional[str] = texts[i + 1] if i + 1 < len(texts) else None
            if not is_arabic(text) and next_text and is_arabic(next_text):
                rows.append(
                    {
                        "row-class": "text",
                        "cells": [
                            {
                                "english": text,
                                "arabic": next_text,
                            }
                        ],
                    }
                )
                i += 2
            else:
                rows.append(
                    {
                        "row-class": "text",
                        "cells": [
                            {"english": text} if not is_arabic(text) else {"arabic": text}
                        ],
                    }
                )
                i += 1
        return rows

    tables: List[List[Dict]] = []

    # Content before first anchor (intro)
    if anchors:
        intro_texts: List[str] = []
        for el in anchors[0].find_all_previous("p"):
            t = clean_text(el.get_text())
            if t:
                intro_texts.append(t)
        intro_texts = intro_texts[::-1]
        if intro_texts:
            tables.append(texts_to_rows(intro_texts))

    for idx, anchor in enumerate(anchors):
        next_anchor = anchors[idx + 1] if idx + 1 < len(anchors) else None
        texts: List[str] = []
        heading = clean_text(anchor.get_text()) or f"Psalm {idx + 1}"
        if not heading.lower().startswith("psalm"):
            continue
        texts.append(heading)
        for el in anchor.next_elements:
            if el is next_anchor:
                break
            if isinstance(el, Tag) and el.name == "p":
                t = clean_text(el.get_text())
                if t:
                    texts.append(t)
        if texts:
            tables.append(texts_to_rows(texts))

    return tables


def split_psalm_tables(rows: List[Dict]) -> List[Dict]:
    """
    Split a Psalms section into multiple tbodies, using headings like "Psalm 1", "Psalm 2", etc.
    """
    tbodies: List[Dict] = []
    current: Optional[Dict] = None

    for row in rows:
        english_text = ""
        if row.get("cells") and isinstance(row["cells"], list):
            english_text = row["cells"][0].get("english", "") if isinstance(row["cells"][0], dict) else ""
        is_heading = bool(re.match(r"psalm\\s*\\d+", english_text.lower()))
        if is_heading or current is None:
            current = {"rows": []}
            tbodies.append(current)
        current["rows"].append(row)

    return tbodies


def build_prime_prayers() -> List[Dict]:
    prayers: List[Dict] = []
    for title, href in get_prime_links():
        page_url = f"{BASE_URL}?{href.split('?', 1)[1]}"
        if "psalms" in title.lower():
            tables = extract_psalm_tables(page_url)
            for idx, table in enumerate(tables):
                heading_text = ""
                if table and table[0].get("cells"):
                    first_cell = table[0]["cells"][0]
                    if isinstance(first_cell, dict):
                        heading_text = first_cell.get("english", "") or ""
                psalm_title = heading_text or f"Psalm {idx + 1}"
                if not psalm_title.lower().startswith("psalm"):
                    continue
                prayers.append(
                    {
                        "title": psalm_title,
                        "english_caption": psalm_title,
                        "arabic_caption": None,
                        "coptic_caption": None,
                        "tbodies": [{"rows": table}],
                    }
                )
            continue
        else:
            rows = extract_rows(page_url)
            if "psalm" in title.lower():
                tbodies = [{"rows": [row]} for row in rows]
            else:
                tbodies = [{"rows": rows}]

        prayers.append(
            {
                "title": title,
                "english_caption": title,
                "arabic_caption": None,
                "coptic_caption": None,
                "tbodies": tbodies,
            }
        )
    return prayers


def main() -> None:
    prayers = build_prime_prayers()
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(prayers, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(prayers)} prayers to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
