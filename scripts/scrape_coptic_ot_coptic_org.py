"""
Scrape the Coptic Old Testament from coptic.org into book/chapter/verse JSON.

Assumptions:
- Each verse is separated by a <br>.
- Some chapters are marked with Coptic numerals containing an overline (̅); these
  are skipped when counting verses.
- Verse counts per chapter are taken from the LXX2012 dataset
  (data/bible/lxx2012_full.json) to segment verses.

Output: data/bible/coptic_ot.json
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Dict, List, Optional

import requests
from bs4 import BeautifulSoup

INDEX_URL = "https://www.coptic.org/language/bible/bible.htm"
BOOK_BASE = "https://www.coptic.org/language/bible/"
OUTPUT_PATH = Path("data/bible/coptic_ot.json")
LXX_PATH = Path("data/bible/lxx2012_full.json")

session = requests.Session()
session.headers.update({"User-Agent": "LiturgicalBooksScraper/1.0 (coptic.org)"})

NAME_MAP = {
    "songs": "Song of Songs",
    "wisdom": "Wisdom of Solomon",
    "Deutoronomy": "Deuteronomy",
    "Joshuaincomplete": "Joshua",
    "joshua": "Joshua",
    "lamentationsahidic": "Lamentations",
    "Judges": "Judges",
    "judges1": "Judges",
    "ruths": "Ruth",
    "1kings": "1 Kings",
    "Paralipomena": "2 Chronicles",  # best guess based on naming
    "judiths": "Judith",
    "esthers": "Esther",
    "proverbss": "Proverbs",
    "IIMakkabaeans": "2 Maccabees",
}


def normalize(title: str) -> str:
    return re.sub(r"[^A-Z0-9]", "", title.upper())


def load_lxx_counts() -> Dict[str, List[int]]:
    data = json.loads(LXX_PATH.read_text(encoding="utf-8"))
    counts: Dict[str, List[int]] = {}
    for book in data["books"]:
        chapters = book["chapters"]
        counts_list = [len(ch["verses"]) for ch in chapters]
        key = normalize(book["title"])
        counts[key] = counts_list
        # also allow slug
        if "slug" in book:
            counts[normalize(book["slug"])] = counts_list
    return counts


def get_book_links() -> List[Dict[str, str]]:
    """
    Return list of {"title": basename, "href": full_url}
    """
    html = session.get(INDEX_URL, timeout=30).content.decode("windows-1252", errors="ignore")
    soup = BeautifulSoup(html, "html.parser")
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.upper().endswith(".HTM") and not href.lower().startswith("http"):
            href_full = href if href.startswith("http") else BOOK_BASE + href
            title = Path(href).stem
            links.append({"title": title, "url": href_full})
    return links


def extract_lines(html: str) -> List[str]:
    soup = BeautifulSoup(html, "html.parser")
    for br in soup.find_all("br"):
        br.replace_with("\n")
    text = soup.get_text("\n")
    lines = [line.strip() for line in text.splitlines()]
    # keep lines that have Coptic characters or overlined numerals
    coptic_re = re.compile(r"[\u2C80-\u2CFF]")
    overline = "\u0305"  # combining overline
    filtered = [ln for ln in lines if ln and (coptic_re.search(ln) or overline in ln)]
    return filtered


def split_chapters(lines: List[str], expected_counts: List[int]) -> List[Dict]:
    chapters = []
    verse_pool: List[str] = []
    for ln in lines:
        # skip apparent chapter markers like Ⲃ̅
        if "̅" in ln and len(ln) <= 4:
            continue
        verse_pool.append(ln)

    idx = 0
    for chap_num, verse_total in enumerate(expected_counts, start=1):
        verses = verse_pool[idx : idx + verse_total]
        idx += verse_total
        chapters.append(
            {
                "chapter": chap_num,
                "verses": [{"verse": i + 1, "text": verses[i] if i < len(verses) else ""} for i in range(verse_total)],
            }
        )
    return chapters


def scrape_book(title: str, url: str, counts_map: Dict[str, List[int]]) -> Optional[Dict]:
    mapped_title = NAME_MAP.get(title, title)
    norm = normalize(mapped_title)
    if norm not in counts_map:
        print(f"Skip {title} (no verse counts match)")
        return None
    expected_counts = counts_map[norm]
    html = session.get(url, timeout=30).content.decode("windows-1252", errors="ignore")
    lines = extract_lines(html)
    chapters = split_chapters(lines, expected_counts)
    return {"title": mapped_title, "slug": title, "chapters": chapters}


def main() -> None:
    counts_map = load_lxx_counts()
    books_out: List[Dict] = []
    seen_norm = set()
    for link in get_book_links():
        target_norm = normalize(NAME_MAP.get(link["title"], link["title"]))
        if target_norm in seen_norm:
            continue
        book = scrape_book(link["title"], link["url"], counts_map)
        if book:
            books_out.append(book)
            seen_norm.add(target_norm)

    data = {
        "translation": "Coptic OT (coptic.org)",
        "source": INDEX_URL,
        "books": books_out,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH} with {len(books_out)} books.")


if __name__ == "__main__":
    main()
NAME_MAP = {
    "songs": "Song of Songs",
    "wisdom": "Wisdom of Solomon",
    "Deutoronomy": "Deuteronomy",
    "Joshuaincomplete": "Joshua",
    "joshua": "Joshua",
    "lamentationsahidic": "Lamentations",
    "Judges": "Judges",
    "judges1": "Judges",
    "ruths": "Ruth",
    "1kings": "1 Kings",
    "Paralipomena": "2 Chronicles",  # best guess based on naming
    "judiths": "Judith",
    "esthers": "Esther",
    "proverbss": "Proverbs",
    "IIMakkabaeans": "2 Maccabees",
}
