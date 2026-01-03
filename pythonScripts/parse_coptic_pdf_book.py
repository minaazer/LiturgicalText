"""
Parse a Coptic Bible PDF (e.g., data/01- Genesis.pdf) into book/chapter/verse JSON.

Assumptions:
- Each verse line begins with "<Book> <chapter>:<verse> ".
- Verses may span multiple lines; we join until the next verse marker.

Usage:
    python scripts/parse_coptic_pdf_book.py data/01- Genesis.pdf Genesis
"""
from __future__ import annotations

import re
import sys
import json
from pathlib import Path
from collections import defaultdict
import unicodedata

import pdfplumber


def extract_text(pdf_path: Path) -> str:
    with pdfplumber.open(pdf_path) as pdf:
        pages = [(page.extract_text() or "") for page in pdf.pages]
    return "\n".join(pages)


GREEK_TO_COPTIC = str.maketrans(
    {
        # lowercase
        "α": "ⲁ",
        "β": "ⲃ",
        "γ": "ⲅ",
        "δ": "ⲇ",
        "ε": "ⲉ",
        "ζ": "ⲍ",
        "η": "ⲏ",
        "θ": "ⲑ",
        "ι": "ⲓ",
        "κ": "ⲕ",
        "λ": "ⲗ",
        "μ": "ⲙ",
        "ν": "ⲛ",
        "ξ": "ⲝ",
        "ο": "ⲟ",
        "π": "ⲡ",
        "ρ": "ⲣ",
        "σ": "ⲥ",
        "ς": "ⲥ",
        "τ": "ⲧ",
        "υ": "ⲩ",
        "φ": "ⲫ",
        "χ": "ⲭ",
        "ψ": "ⲯ",
        "ω": "ⲱ",
        # uppercase
        "Α": "Ⲁ",
        "Β": "Ⲃ",
        "Γ": "Ⲅ",
        "Δ": "Ⲇ",
        "Ε": "Ⲉ",
        "Ζ": "Ⲍ",
        "Η": "Ⲏ",
        "Θ": "Ⲑ",
        "Ι": "Ⲓ",
        "Κ": "Ⲕ",
        "Λ": "Ⲗ",
        "Μ": "Ⲙ",
        "Ν": "Ⲛ",
        "Ξ": "Ⲝ",
        "Ο": "Ⲟ",
        "Π": "Ⲡ",
        "Ρ": "Ⲣ",
        "Σ": "Ⲥ",
        "Τ": "Ⲧ",
        "Υ": "Ⲩ",
        "Φ": "Ⲫ",
        "Χ": "Ⲭ",
        "Ψ": "Ⲯ",
        "Ω": "Ⲱ",
    }
)


def to_coptic(text: str) -> str:
    """
    Transliterate Greek codepoints (often used for Coptic glyphs in PDFs) into
    the Coptic Unicode block.
    """
    # strip Greek diacritics/tonos before mapping
    decomposed = unicodedata.normalize("NFD", text)
    stripped = "".join(ch for ch in decomposed if unicodedata.category(ch) != "Mn")
    mapped = stripped.translate(GREEK_TO_COPTIC)
    # handle backticks used for jenkim: attach a combining grave to the next non-space char
    out_chars: List[str] = []
    pending_grave = False
    for ch in mapped:
        if ch == "`":
            # try to apply to last non-space character
            for i in range(len(out_chars) - 1, -1, -1):
                if not out_chars[i].isspace():
                    out_chars.insert(i + 1, "\u0300")
                    break
            else:
                pending_grave = True
            continue
        out_chars.append(ch)
        if pending_grave and not ch.isspace():
            out_chars.append("\u0300")
            pending_grave = False
    # if still pending, append at end
    if pending_grave:
        out_chars.append("\u0300")
    return "".join(out_chars)


def parse_book(text: str, book: str) -> dict:
    normalized = re.sub(r"\s+", " ", text.replace("\r", "\n"))
    # Use non-greedy match up to next verse marker
    pattern = re.compile(
        rf"{re.escape(book)}\s+(\d+):(\d+)\s+(.*?)(?={re.escape(book)}\s+\d+:\d+|\Z)",
        re.DOTALL,
    )
    chapters = defaultdict(list)
    for chap_str, verse_str, verse_text in pattern.findall(normalized):
        chap = int(chap_str)
        verse = int(verse_str)
        verse_body = to_coptic(verse_text.strip())
        chapters[chap].append({"verse": verse, "text": verse_body})

    ordered_chapters = []
    for chap_num in sorted(chapters.keys()):
        verses_sorted = sorted(chapters[chap_num], key=lambda v: v["verse"])
        ordered_chapters.append({"chapter": chap_num, "verses": verses_sorted})

    return {"title": book, "slug": book.lower(), "chapters": ordered_chapters}


def main() -> None:
    if len(sys.argv) < 3:
        print("Usage: python scripts/parse_coptic_pdf_book.py <pdf_path> <book_name>")
        sys.exit(1)
    pdf_path = Path(sys.argv[1])
    book_name = sys.argv[2]
    text = extract_text(pdf_path)
    book = parse_book(text, book_name)
    output_path = Path(f"data/bible/{book_name.lower()}_coptic_pdf.json")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    data = {
        "translation": "Coptic PDF",
        "source": str(pdf_path),
        "books": [book],
    }
    output_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {output_path} with {len(book['chapters'])} chapters.")


if __name__ == "__main__":
    main()
