from __future__ import annotations

import csv
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
BOOKS_JSON_PATH = ROOT / "data" / "logos" / "saas_bible_books.json"
BOOKS_TEMPLATE_PATH = ROOT / "data" / "logos" / "saas_bible_books_template.json"
QUEUE_JSON_PATH = ROOT / "data" / "logos" / "saas_bible_chapter_queue.json"
QUEUE_TSV_PATH = ROOT / "data" / "logos" / "saas_bible_chapter_queue.tsv"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")
    return slug or "book"


def main() -> None:
    source_path = BOOKS_JSON_PATH if BOOKS_JSON_PATH.exists() else BOOKS_TEMPLATE_PATH
    books = load_json(source_path)

    queue = []
    for book in books:
        if not book.get("enabled", True):
            continue
        logos_title = (book.get("logos_title") or book.get("saas_title") or book.get("source_title") or "").strip()
        saas_title = (book.get("saas_title") or book.get("source_title") or "").strip()
        source_title = (book.get("source_title") or "").strip()
        chapter_count = int(book.get("chapter_count") or 0)
        if not logos_title or chapter_count <= 0:
            continue
        book_slug = slugify(saas_title)
        for chapter in range(1, chapter_count + 1):
            reference = f"{saas_title} {chapter}"
            logos_reference = f"{logos_title} {chapter}"
            queue.append(
                {
                    "book_order": int(book["order"]),
                    "book_source_title": source_title,
                    "book_saas_title": saas_title,
                    "book_logos_title": logos_title,
                    "chapter": chapter,
                    "reference": reference,
                    "logos_reference": logos_reference,
                    "export_file": f"{book_slug}_{chapter:03}.txt",
                }
            )

    QUEUE_JSON_PATH.write_text(json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")

    with QUEUE_TSV_PATH.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle, delimiter="\t")
        writer.writerow(
            [
                "book_order",
                "book_source_title",
                "book_saas_title",
                "book_logos_title",
                "chapter",
                "reference",
                "logos_reference",
                "export_file",
            ]
        )
        for item in queue:
            writer.writerow(
                [
                    item["book_order"],
                    item["book_source_title"],
                    item["book_saas_title"],
                    item["book_logos_title"],
                    item["chapter"],
                    item["reference"],
                    item["logos_reference"],
                    item["export_file"],
                ]
            )

    print(f"Books source: {source_path}")
    print(f"Wrote {QUEUE_JSON_PATH}")
    print(f"Wrote {QUEUE_TSV_PATH}")
    print(f"Chapters queued: {len(queue)}")


if __name__ == "__main__":
    main()
