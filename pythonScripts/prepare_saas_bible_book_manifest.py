from __future__ import annotations

import csv
import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
SOURCE_BIBLE_PATH = ROOT / "data" / "jsons" / "bible" / "english_full.json"
OUTPUT_JSON_PATH = ROOT / "data" / "logos" / "saas_bible_books_template.json"
OUTPUT_CSV_PATH = ROOT / "data" / "logos" / "saas_bible_books_template.csv"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    payload = load_json(SOURCE_BIBLE_PATH)
    books = payload.get("books", [])

    manifest = []
    for index, book in enumerate(books, start=1):
        chapters = book.get("chapters", [])
        manifest.append(
            {
                "order": index,
                "source_title": book["title"],
                "saas_title": book["title"],
                "logos_title": book["title"],
                "chapter_count": len(chapters),
                "enabled": True,
                "notes": "",
            }
        )

    OUTPUT_JSON_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    with OUTPUT_CSV_PATH.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            ["order", "source_title", "saas_title", "logos_title", "chapter_count", "enabled", "notes"]
        )
        for item in manifest:
            writer.writerow(
                [
                    item["order"],
                    item["source_title"],
                    item["saas_title"],
                    item["logos_title"],
                    item["chapter_count"],
                    item["enabled"],
                    item["notes"],
                ]
            )

    print(f"Wrote {OUTPUT_JSON_PATH}")
    print(f"Wrote {OUTPUT_CSV_PATH}")
    print(f"Books: {len(manifest)}")


if __name__ == "__main__":
    main()
