from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
MANIFEST_PATH = ROOT / "data" / "logos" / "saas_bible_books.json"
QUEUE_PATH = ROOT / "data" / "logos" / "saas_bible_chapter_queue.json"
EXPORTS_DIR = ROOT / "data" / "logos" / "saas_bible_chapter_exports"
OUTPUT_PATH = ROOT / "data" / "jsons" / "bible" / "saas_ot.json"
REPORT_PATH = ROOT / "reports" / "saas_ot_build_report.json"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def fix_mojibake(text: str) -> str:
    if not text:
        return text
    suspicious = ("â€œ", "â€\x9d", "â€˜", "â€™", "â€”", "â€“", "Ã")
    if not any(token in text for token in suspicious):
        return text
    try:
        return text.encode("cp1252").decode("utf-8")
    except Exception:
        return text


def parse_verse_line(line: str, chapter_number: int) -> tuple[int, str] | None:
    text = line.replace("\ufeff", "").strip()
    if not text:
        return None

    patterns = [
        r"^(?P<chapter>\d+):(?P<verse>\d+):\s+(?P<text>.+)$",
        r"^(?P<book>[A-Za-z]{1,6}):(?P<verse>\d+):\s+(?P<text>.+)$",
        r"^(?P<verse>\d+):\s+(?P<text>.+)$",
    ]

    for pattern in patterns:
        match = re.match(pattern, text)
        if not match:
            continue
        verse = int(match.group("verse"))
        verse_text = normalize_spaces(fix_mojibake(match.group("text")))
        if not verse_text:
            return None
        return verse, verse_text

    return None


def parse_chapter_file(path: Path, chapter_number: int) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8").replace("\ufeff", "")
    verses: list[dict[str, Any]] = []
    for line in text.splitlines():
        parsed = parse_verse_line(line, chapter_number)
        if parsed is None:
            continue
        verse, verse_text = parsed
        verses.append({"verse": verse, "text": verse_text})
    return verses


def main() -> None:
    manifest = load_json(MANIFEST_PATH)
    queue = load_json(QUEUE_PATH)

    manifest_by_title = {item["saas_title"]: item for item in manifest if item.get("enabled", True)}
    queue_by_book: dict[str, list[dict[str, Any]]] = {}
    for item in queue:
        queue_by_book.setdefault(item["book_saas_title"], []).append(item)

    books_output: list[dict[str, Any]] = []
    missing_chapters: list[dict[str, Any]] = []
    books_with_missing: list[str] = []
    books_built = 0
    chapters_built = 0

    for book in manifest:
        if not book.get("enabled", True):
            continue

        saas_title = book["saas_title"]
        chapter_items = sorted(queue_by_book.get(saas_title, []), key=lambda item: item["chapter"])
        if not chapter_items:
            continue

        chapters_output: list[dict[str, Any]] = []
        book_missing = False
        for item in chapter_items:
            export_path = EXPORTS_DIR / item["export_file"]
            if not export_path.exists():
                missing_chapters.append(
                    {
                        "book": saas_title,
                        "chapter": item["chapter"],
                        "reference": item["reference"],
                        "export_file": item["export_file"],
                    }
                )
                book_missing = True
                continue

            verses = parse_chapter_file(export_path, item["chapter"])
            if not verses:
                missing_chapters.append(
                    {
                        "book": saas_title,
                        "chapter": item["chapter"],
                        "reference": item["reference"],
                        "export_file": item["export_file"],
                        "reason": "no_parsed_verses",
                    }
                )
                book_missing = True
                continue

            chapters_output.append({"chapter": item["chapter"], "verses": verses})
            chapters_built += 1

        if book_missing:
            books_with_missing.append(saas_title)

        books_output.append(
            {
                "title": saas_title,
                "slug": saas_title,
                "chapters": chapters_output,
            }
        )
        books_built += 1

    output = {
        "translation": "St. Athanasius Academy Septuagint (SAAS)",
        "source": "Logos SAAS chapter exports",
        "books": books_output,
    }

    report = {
        "summary": {
            "books_built": books_built,
            "chapters_built": chapters_built,
            "books_with_missing_chapters": len(set(books_with_missing)),
            "missing_chapters": len(missing_chapters),
        },
        "books_with_missing_chapters": sorted(set(books_with_missing)),
        "missing_chapters": missing_chapters,
    }

    save_json(OUTPUT_PATH, output)
    save_json(REPORT_PATH, report)

    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {REPORT_PATH}")
    print(f"Books built: {books_built}")
    print(f"Chapters built: {chapters_built}")
    print(f"Missing chapters: {len(missing_chapters)}")


if __name__ == "__main__":
    main()
