"""
Scrape a studybible.info translation (default LXX2012) into book/chapter/verse JSON.

Usage:
    python scripts/scrape_lxx2012_bible.py          # scrapes LXX2012
    python scripts/scrape_lxx2012_bible.py Arabic   # scrapes Arabic
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Dict, List
from urllib.parse import unquote

import requests
from bs4 import BeautifulSoup

session = requests.Session()
session.headers.update(
    {"User-Agent": "LiturgicalBooksScraper/1.0 (+https://studybible.info/)"}
)


def fetch(url: str) -> str:
    resp = session.get(url)
    resp.raise_for_status()
    return resp.text


def get_books(base: str) -> List[Dict[str, str]]:
    """
    Return a list of books with their display title and encoded slug for a translation.
    Filters out verse/deep links by skipping hrefs containing ':'.
    """
    soup = BeautifulSoup(fetch(f"{base}/"), "html.parser")
    books: List[Dict[str, str]] = []
    seen = set()

    for a in soup.find_all("a", href=True):
        href = a["href"]
        if not href.startswith("/" + base.split("/")[-1] + "/"):
            continue
        if ":" in href:  # ignore verse links
            continue
        parts = href.split("/")
        if len(parts) != 3:
            continue
        slug = parts[-1]
        if not slug or slug in seen:
            continue
        seen.add(slug)
        title = a.get_text(strip=True) or unquote(slug)
        books.append({"title": title, "slug": slug})
    return books


def get_chapter_numbers(base: str, book_slug: str) -> List[int]:
    html = fetch(f"{base}/{book_slug}")
    pattern = rf"{re.escape(base.replace('https://studybible.info', ''))}/{re.escape(book_slug)}%20(\d+)"
    nums = {int(n) for n in re.findall(pattern, html)}
    # Some books might be single-chapter; default to [1] if none found.
    return sorted(nums) if nums else [1]


def parse_chapter(base: str, book_slug: str, chapter: int, verse_selector: str) -> Dict:
    url = f"{base}/{book_slug}%20{chapter}"
    soup = BeautifulSoup(fetch(url), "html.parser")
    passage = soup.select_one(f"div.passage.row.{verse_selector}")
    if passage is None:
        raise RuntimeError(f"Could not find passage container for {url}")

    verses = []
    for anchor in passage.select(f"a.verse_ref.{verse_selector}"):
        verse_num = int(anchor.get_text(strip=True))
        text_parts: List[str] = []
        # Collect text until the next verse anchor
        for sib in anchor.parent.next_siblings:
            if getattr(sib, "name", None) == "sup" and sib.select_one(
                f"a.verse_ref.{verse_selector}"
            ):
                break
            if isinstance(sib, str):
                chunk = sib.strip()
            else:
                chunk = sib.get_text(" ", strip=True)
            if chunk:
                text_parts.append(chunk)
        text = " ".join(text_parts).strip()
        verses.append({"verse": verse_num, "text": text})
    return {"chapter": chapter, "verses": verses}


def build_book(base: str, book: Dict[str, str], verse_selector: str) -> Dict:
    slug = book["slug"]
    title = book["title"]
    chapters = [
        parse_chapter(base, slug, num, verse_selector)
        for num in get_chapter_numbers(base, slug)
    ]
    return {"title": title, "slug": slug, "chapters": chapters}


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Scrape studybible.info translation into JSON."
    )
    parser.add_argument(
        "translation",
        nargs="?",
        default="LXX2012",
        help="Translation slug (e.g., LXX2012, Arabic, KJV).",
    )
    args = parser.parse_args()
    translation = args.translation
    base = f"https://studybible.info/{translation}"
    verse_selector = translation

    books = get_books(base)
    full = {
        "translation": translation,
        "source": base,
        "books": [
            build_book(base, book, verse_selector)
            for book in books
        ],
    }
    output_path = Path(f"data/bible/{translation.lower()}_full.json")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(full, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Wrote {output_path} with {len(full['books'])} books.")


if __name__ == "__main__":
    main()
