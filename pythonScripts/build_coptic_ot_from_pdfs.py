"""
Build a Coptic OT JSON from the PDF files in data/bible/copticPDFs.

Each PDF is expected to have verses in the form "<Book> <chapter>:<verse> ...".
The Coptic title is taken from the first line on page 1 that contains Coptic
letters and stored in the "slug" field (fallback to English title).
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import List

import pdfplumber

from parse_coptic_pdf_book import extract_text, parse_book, to_coptic

PDF_DIR = Path("data/bible/copticPDFs")
OUTPUT_PATH = Path("data/bible/coptic_ot.json")


def english_name_from_filename(name: str) -> str:
    # Strip leading number/space/dash and extension
    base = Path(name).stem
    base = re.sub(r"^\d+[-\\s]+", "", base)
    return base.strip()


def extract_coptic_title(pdf_path: Path) -> str:
    # Match Coptic letters
    coptic_re = re.compile(r"[\u2C80-\u2CFF]")
    with pdfplumber.open(pdf_path) as pdf:
        if not pdf.pages:
            return ""
        text = pdf.pages[0].extract_text() or ""
    for line in text.splitlines():
        line = line.strip()
        if line and coptic_re.search(line):
            return to_coptic(line)
    return ""


def main() -> None:
    books: List[dict] = []
    for pdf_file in sorted(PDF_DIR.glob("*.pdf")):
        eng_title = english_name_from_filename(pdf_file.name)
        raw_text = extract_text(pdf_file)
        book = parse_book(raw_text, eng_title)
        coptic_title = extract_coptic_title(pdf_file) or eng_title
        book["slug"] = coptic_title
        books.append(book)

    data = {
        "translation": "Coptic OT (PDF)",
        "source": str(PDF_DIR),
        "books": books,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH} with {len(books)} books.")


if __name__ == "__main__":
    main()
