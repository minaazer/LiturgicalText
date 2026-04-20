from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
STRUCTURED_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
MANIFEST_PATH = ROOT / "data" / "logos" / "saas_holy_week_manifest.json"
OUTPUT_PATH = ROOT / "data" / "logos" / "saas_holy_week_ot_queue.json"
LXX_PATH = ROOT / "data" / "jsons" / "bible" / "lxx2012_ot.json"


NT_BOOKS = {
    "MATTHEW",
    "MARK",
    "LUKE",
    "JOHN",
    "ACTS",
    "ROMANS",
    "1 CORINTHIANS",
    "2 CORINTHIANS",
    "GALATIANS",
    "EPHESIANS",
    "PHILIPPIANS",
    "COLOSSIANS",
    "1 THESSALONIANS",
    "2 THESSALONIANS",
    "1 TIMOTHY",
    "2 TIMOTHY",
    "TITUS",
    "PHILEMON",
    "HEBREWS",
    "JAMES",
    "1 PETER",
    "2 PETER",
    "1 JOHN",
    "2 JOHN",
    "3 JOHN",
    "JUDE",
    "REVELATION",
}


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def normalize_for_match(text: str) -> str:
    text = normalize_spaces(text).lower()
    text = text.replace("’", "'").replace("‘", "'")
    text = text.replace("“", '"').replace("”", '"')
    text = re.sub(r"[^a-z0-9'\s]+", " ", text)
    return normalize_spaces(text)


def strip_liturgical_tail(text: str) -> str:
    patterns = [
        r"\s+Glory be to the Holy Trinity our God, unto the ages of ages\. Amen\.\s*$",
        r"\s+Glory be to our God forever\. Amen\.\s*$",
    ]
    for pattern in patterns:
        text = re.sub(pattern, "", text, flags=re.IGNORECASE)
    return normalize_spaces(text)


def first_words(text: str, count: int = 10) -> str:
    words = [word for word in normalize_for_match(strip_liturgical_tail(text)).split(" ") if word]
    return " ".join(words[:count]).strip()


def last_words(text: str, count: int = 10) -> str:
    words = [word for word in normalize_for_match(strip_liturgical_tail(text)).split(" ") if word]
    return " ".join(words[-count:]).strip()


def leading_book(reference: str) -> str:
    reference = normalize_spaces(reference)
    match = re.match(r"^([1-3]\s+)?([A-Z][A-Z\s]+?)(?=\s+\d)", reference)
    if not match:
        return ""
    prefix = (match.group(1) or "").strip()
    core = (match.group(2) or "").strip()
    return normalize_spaces(f"{prefix} {core}".strip()).upper()


def load_ot_chapter_lengths() -> dict[str, dict[int, int]]:
    payload = load_json(LXX_PATH)
    books = payload.get("books", [])
    result: dict[str, dict[int, int]] = {}
    for book in books:
        title = normalize_spaces(book.get("title", "")).upper()
        chapters: dict[int, int] = {}
        for chapter in book.get("chapters", []):
            chapter_number = int(chapter["chapter"])
            verses = chapter.get("verses", [])
            if verses:
                chapters[chapter_number] = int(verses[-1]["verse"])
        result[title] = chapters
    return result


OT_CHAPTER_LENGTHS = load_ot_chapter_lengths()

BOOK_REPLACEMENTS = {
    "LAMENTATIONS OF JEREMIAH": "LAMENTATIONS",
    "WISDOM OF SIRACH": "SIRACH",
    "WISDOM OF SOLOMON": "WISDOM",
    "PROVERBS OF SOLOMON": "PROVERBS",
}

REFERENCE_OVERRIDES = {
    "WISDOM OF SIRACH 1:18-END": "SIRACH 1:18-27",
}


def is_old_testament(reference: str) -> bool:
    book = leading_book(reference)
    if not book:
        return False
    return book not in NT_BOOKS


def build_logos_reference(reference: str) -> str:
    text = normalize_spaces(reference)
    text = re.sub(r"\s*\(LXX\)", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s*\[SELECTION\]", "", text, flags=re.IGNORECASE)
    if text in REFERENCE_OVERRIDES:
        return REFERENCE_OVERRIDES[text]
    for source, target in BOOK_REPLACEMENTS.items():
        text = re.sub(rf"^{re.escape(source)}\b", target, text, flags=re.IGNORECASE)
    book = leading_book(text)
    chapter_lengths = OT_CHAPTER_LENGTHS.get(book, {})
    text = re.sub(
        r"(\d+):(\d+)-END\b",
        lambda match: (
            f"{match.group(1)}:{match.group(2)}-{chapter_lengths.get(int(match.group(1)), match.group(2))}"
        ),
        text,
        flags=re.IGNORECASE,
    )
    text = re.sub(r"\s+", " ", text).strip()
    return text


def main() -> None:
    structured = load_json(STRUCTURED_PATH)
    manifest = load_json(MANIFEST_PATH)
    manifest_by_reference = {item["reference"]: item for item in manifest}

    queue: list[dict[str, Any]] = []
    seen: set[str] = set()

    for service in structured:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                section_name = section["title"]
                for table in section["tables"]:
                    rows = table.get("tbodies", [{}])[0].get("rows", [])
                    reference = ""
                    text = ""
                    for row in rows:
                        if row.get("row-class") == "reference":
                            reference = normalize_spaces(row["cells"][0].get("english", ""))
                        elif row.get("row-class") == "text" and not text:
                            text = normalize_spaces(row["cells"][0].get("english", ""))
                    if not reference or reference in seen or not is_old_testament(reference):
                        continue

                    manifest_item = manifest_by_reference.get(reference)
                    queue.append(
                        {
                            "reference": reference,
                            "logos_reference": build_logos_reference(reference),
                            "service": service_name,
                            "hour": hour_name,
                            "section": section_name,
                            "table_title": table.get("title", ""),
                            "export_file": manifest_item["export_file"] if manifest_item else None,
                            "slug": manifest_item["slug"] if manifest_item else None,
                            "expected_start": first_words(text),
                            "expected_end": last_words(text),
                        }
                    )
                    seen.add(reference)

    save_json(OUTPUT_PATH, queue)
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Old Testament references: {len(queue)}")
    if queue:
        first = queue[0]
        print(f"First reference: {first['reference']} -> {first['export_file']}")


if __name__ == "__main__":
    main()
