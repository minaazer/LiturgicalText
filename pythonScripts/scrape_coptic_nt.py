"""
Scrape the Coptic New Testament (CNTV) from bible.com into JSON (book/chapter/verse).

Source example: https://www.bible.com/bible/2915/MAT.1_1.CNTV
Output: data/bible/coptic_nt.json
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, List, Optional

import requests
from bs4 import BeautifulSoup

VERSION_ID = "2915"
TRANSLATION = "CNTV"
START_USFM = "MAT.1_1"  # first chapter (Matthew 1)
BASE = f"https://www.bible.com/bible/{VERSION_ID}"
OUTPUT_PATH = Path("data/bible/coptic_nt.json")

BOOK_NAMES = {
    "MAT": "Matthew",
    "MRK": "Mark",
    "LUK": "Luke",
    "JHN": "John",
    "ACT": "Acts",
    "ROM": "Romans",
    "1CO": "1 Corinthians",
    "2CO": "2 Corinthians",
    "GAL": "Galatians",
    "EPH": "Ephesians",
    "PHP": "Philippians",
    "COL": "Colossians",
    "1TH": "1 Thessalonians",
    "2TH": "2 Thessalonians",
    "1TI": "1 Timothy",
    "2TI": "2 Timothy",
    "TIT": "Titus",
    "PHM": "Philemon",
    "HEB": "Hebrews",
    "JAS": "James",
    "1PE": "1 Peter",
    "2PE": "2 Peter",
    "1JN": "1 John",
    "2JN": "2 John",
    "3JN": "3 John",
    "JUD": "Jude",
    "REV": "Revelation",
}

session = requests.Session()
session.headers.update(
    {"User-Agent": "LiturgicalBooksScraper/1.0 (+https://www.bible.com/)"}
)


def fetch(usfm: str) -> Dict:
    """
    Fetch a chapter page and return parsed __NEXT_DATA__ JSON.
    """
    url = f"{BASE}/{usfm}.{TRANSLATION}"
    resp = session.get(url)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")
    data_script = soup.find("script", id="__NEXT_DATA__")
    if not data_script or not data_script.string:
        raise RuntimeError(f"__NEXT_DATA__ not found for {url}")
    return json.loads(data_script.string)


def parse_chapter(usfm: str) -> Dict:
    data = fetch(usfm)
    chapter_info = data["props"]["pageProps"]["chapterInfo"]
    content_html = chapter_info["content"]
    soup = BeautifulSoup(content_html, "html.parser")

    verses_map: Dict[str, Dict] = {}
    for span in soup.select("span.verse"):
        verse_usfm = span.get("data-usfm")
        if not verse_usfm:
            continue
        parts = verse_usfm.split(".")
        book_code = parts[0]
        chapter_num = int(parts[1].split("_")[0])
        verse_num = int(parts[2])

        text = " ".join(
            c.get_text(" ", strip=True) for c in span.select("span.content")
        ).strip()

        # Multiple spans can repeat the same verse; accumulate once.
        if verse_usfm not in verses_map:
            verses_map[verse_usfm] = {
                "verse": verse_num,
                "text": text,
            }
        else:
            existing = verses_map[verse_usfm]["text"]
            if text and text not in existing:
                verses_map[verse_usfm]["text"] = f"{existing} {text}".strip()

    next_usfm: Optional[str] = None
    next_info = chapter_info.get("next")
    if next_info and next_info.get("usfm"):
        next_usfm = next_info["usfm"][0]

    return {
        "book": book_code,
        "chapter": chapter_num,
        "verses": list(verses_map.values()),
        "next_usfm": next_usfm,
    }


def scrape_nt() -> List[Dict]:
    chapters: List[Dict] = []
    visited = set()
    current = START_USFM

    while current and current not in visited:
        visited.add(current)
        chapter_data = parse_chapter(current)
        chapters.append(
            {
                "book": chapter_data["book"],
                "chapter": chapter_data["chapter"],
                "verses": chapter_data["verses"],
            }
        )
        current = chapter_data["next_usfm"]

    return chapters


def group_books(chapters: List[Dict]) -> List[Dict]:
    order: List[str] = []
    by_book: Dict[str, List[Dict]] = {}
    for ch in chapters:
        code = ch["book"]
        if code not in order:
            order.append(code)
            by_book[code] = []
        by_book[code].append({"chapter": ch["chapter"], "verses": ch["verses"]})

    books: List[Dict] = []
    for code in order:
        books.append(
            {
                "title": BOOK_NAMES.get(code, code),
                "slug": code,
                "chapters": by_book[code],
            }
        )
    return books


def main() -> None:
    chapters = scrape_nt()
    books = group_books(chapters)
    data = {
        "translation": TRANSLATION,
        "version_id": VERSION_ID,
        "source": BASE,
        "books": books,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        f"Wrote {OUTPUT_PATH} with {len(books)} books and {len(chapters)} chapters."
    )


if __name__ == "__main__":
    main()
