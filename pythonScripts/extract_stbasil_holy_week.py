from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path
from typing import Any

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = ROOT / "tmp_stbasil_holy_week.pdf"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_raw.json"
PDF_URL = "https://static1.squarespace.com/static/5537d482e4b0cda0deb18bb7/t/6431ec83a579cb364dfe602f/1680993417434/%5BPRINT%5D+The+Lectionary+of+Holy+Week+-+Release+Final+2018.pdf"

SECTION_HEADERS = {
    "PROPHECIES": "prophecy",
    "PSALM": "psalm",
    "GOSPEL": "gospel",
    "HOMILY": "homily",
    "PAULINE EPISTLE": "pauline_epistle",
    "CATHOLIC EPISTLE": "catholic_epistle",
    "PRAXIS": "praxis",
}

SERVICE_LABEL_RE = re.compile(
    r"^(SUNDAY|MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|"
    r"EVE OF|GREAT AND HOLY).*"
)
ALL_CAPSISH_RE = re.compile(r"^[A-Z0-9 .,:;()\-\[\]—/&'\"☩]+$")
REFERENCE_RE = re.compile(
    r"^("
    r"(?:[1-4]\s+)?[A-Z][A-Z ]+"
    r"\s+\d+(?::\d+|:\d+-END|:\d+-\d+|:\d+-\d+\s*\[SELECTION\]|"
    r":\d+\s*&\s*FINAL VERSE OF COPTIC THIRD ODE|"
    r":\d+,\s*\d+:\d+\s*\[SELECTION\])"
    r".*"
    r"|APOCRYPHON OF JEREMIAH1 VERSES 2-6"
    r"|DANIEL 3:52-88 & FINAL VERSE OF COPTIC THIRD ODE"
    r")$"
)


def normalize_line(text: str) -> str:
    text = text.replace("\u2028", " ").replace("\u00ad", "")
    text = text.replace(" ", " ").replace("–", "—")
    if any(marker in text for marker in ("â€œ", "â€", "â€˜", "â€™", "â€", "Â")):
        try:
            text = text.encode("latin-1").decode("utf-8")
        except (UnicodeEncodeError, UnicodeDecodeError):
            pass
    return " ".join(text.split())


def is_all_capsish(line: str) -> bool:
    return bool(line) and bool(ALL_CAPSISH_RE.fullmatch(line))


def is_reference_line(line: str) -> bool:
    return bool(REFERENCE_RE.match(line))


def is_service_heading_line(line: str, service_label: str) -> bool:
    if line == service_label:
        return True

    parts = [part.strip() for part in service_label.split("—")]
    if line in parts:
        return True

    if line in {"OF HOLY WEEK", "(FUNERAL PRAYER)"}:
        return True

    return False


def collapse_lines(lines: list[str]) -> str:
    paragraphs: list[str] = []
    current = ""

    for raw in lines:
        line = normalize_line(raw)
        if not line:
            if current:
                paragraphs.append(current.strip())
                current = ""
            continue

        if not current:
            current = line
            continue

        if current.endswith("-") and line[:1].islower():
            current = current[:-1] + line
        else:
            current += " " + line

    if current:
        paragraphs.append(current.strip())

    return "\n\n".join(paragraphs)


def parse_page(page_text: str) -> dict[str, Any]:
    raw_lines = [normalize_line(line) for line in page_text.splitlines()]
    lines = [line for line in raw_lines if line]

    footer = None
    page_number = None

    if lines and SERVICE_LABEL_RE.match(lines[-1]):
        footer = lines.pop()

    if lines and lines[-1].isdigit():
        page_number = int(lines.pop())

    if footer is None:
        footer = infer_service_label_from_heading(lines)

    return {
        "page_number": page_number,
        "service_label": footer,
        "lines": lines,
    }


def infer_service_label_from_heading(lines: list[str]) -> str | None:
    if not lines:
        return None

    heading_lines: list[str] = []
    for line in lines[:5]:
        if (
            not is_all_capsish(line)
            or line in SECTION_HEADERS
            or is_reference_line(line)
            or line.isdigit()
        ):
            break
        heading_lines.append(line)

    if len(heading_lines) < 2:
        return None

    extra = None
    observance = heading_lines[-1]
    day_lines = heading_lines[:-1]

    if observance.startswith("(") and len(heading_lines) >= 3:
        extra = observance
        observance = heading_lines[-2]
        day_lines = heading_lines[:-2]

    valid_observance = (
        "HOUR" in observance
        or observance in {"MATINS", "MIDNIGHT PRAISE", "DIVINE LITURGY", "REVELATION"}
    )
    if not valid_observance:
        return None

    day = " ".join(day_lines).strip()
    if not (
        day in {"SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"}
        or day.startswith("EVE OF")
        or day.startswith("GREAT AND HOLY")
    ):
        return None

    label = f"{day} — {observance}"
    if extra:
        label += f" {extra}"
    else:
        next_index = len(heading_lines)
        if len(lines) > next_index and lines[next_index].startswith("("):
            label += f" {lines[next_index]}"

    return label


def new_block(
    category: str,
    section: str | None,
    page: int | None,
    title: str | None = None,
) -> dict[str, Any]:
    return {
        "category": category,
        "section": section,
        "title": title,
        "intro_lines": [],
        "reference": None,
        "content_lines": [],
        "pages": [page] if page else [],
    }


def finalize_block(block: dict[str, Any]) -> dict[str, Any]:
    result = {
        "category": block["category"],
        "section": block["section"],
        "title": block["title"],
        "intro": collapse_lines(block["intro_lines"]) or None,
        "reference": block["reference"],
        "content": collapse_lines(block["content_lines"]) or None,
        "pages": block["pages"],
    }
    return result


def add_page(block: dict[str, Any], page: int | None) -> None:
    if page and page not in block["pages"]:
        block["pages"].append(page)


def is_prophecy_intro(line: str) -> bool:
    return line.startswith(("From ", "A reading from ", "Continuation of "))


def collect_title_lines(
    items: list[dict[str, Any]],
    start: int,
    service_label: str,
) -> tuple[str | None, int]:
    first = items[start]["text"]

    if re.fullmatch(r"CHAPTER \d+", first):
        return first, 1

    title_lines: list[str] = []
    index = start

    while index < len(items):
        line = items[index]["text"]
        if (
            not is_all_capsish(line)
            or line in SECTION_HEADERS
            or is_reference_line(line)
            or is_service_heading_line(line, service_label)
        ):
            break
        title_lines.append(line)
        index += 1

    if not title_lines:
        return None, 0

    if index < len(items) and is_reference_line(items[index]["text"]):
        return " ".join(title_lines), len(title_lines)

    return None, 0


def parse_service(service_label: str, pages: list[dict[str, Any]]) -> dict[str, Any]:
    line_items: list[dict[str, Any]] = []
    for page in pages:
        for line in page["lines"]:
            if not is_service_heading_line(line, service_label):
                line_items.append({"text": line, "page": page["page_number"]})

    blocks: list[dict[str, Any]] = []
    current_block: dict[str, Any] | None = None
    current_section: str | None = None

    def flush() -> None:
        nonlocal current_block
        if current_block is None:
            return
        finalized = finalize_block(current_block)
        if finalized["title"] or finalized["reference"] or finalized["content"]:
            blocks.append(finalized)
        current_block = None

    index = 0
    while index < len(line_items):
        item = line_items[index]
        line = item["text"]
        page = item["page"]

        if line in SECTION_HEADERS:
            flush()
            current_section = line
            if line != "PROPHECIES":
                current_block = new_block(
                    category=SECTION_HEADERS[line],
                    section=current_section,
                    page=page,
                )
            index += 1
            continue

        title, consumed = collect_title_lines(line_items, index, service_label)
        if title:
            flush()
            category = "chapter" if title.startswith("CHAPTER ") else (
                "prophecy" if current_section == "PROPHECIES" else "custom"
            )
            current_block = new_block(
                category=category,
                section=current_section,
                page=page,
                title=title,
            )
            index += consumed
            continue

        if current_section == "PROPHECIES" and is_prophecy_intro(line):
            flush()
            current_block = new_block(
                category="prophecy",
                section=current_section,
                page=page,
            )
            current_block["intro_lines"].append(line)
            index += 1
            continue

        if current_block is None:
            index += 1
            continue

        add_page(current_block, page)

        if current_block["reference"] is None and is_reference_line(line):
            current_block["reference"] = line
            index += 1
            continue

        if current_block["category"] == "homily":
            if not current_block["intro_lines"] and line.endswith("Amen."):
                current_block["intro_lines"].append(line)
            else:
                current_block["content_lines"].append(line)
            index += 1
            continue

        if current_block["reference"] is None:
            current_block["intro_lines"].append(line)
        else:
            current_block["content_lines"].append(line)

        index += 1

    flush()

    day = service_label
    observance = None
    if "—" in service_label:
        left, right = [part.strip() for part in service_label.split("—", 1)]
        day = left
        observance = right

    return {
        "service_label": service_label,
        "day": day,
        "observance": observance,
        "pages": [page["page_number"] for page in pages if page["page_number"]],
        "blocks": blocks,
    }


def main() -> None:
    if not PDF_PATH.exists():
        print(f"Downloading source PDF to {PDF_PATH} ...")
        urllib.request.urlretrieve(PDF_URL, PDF_PATH)

    reader = PdfReader(str(PDF_PATH))
    parsed_pages = [parse_page(page.extract_text() or "") for page in reader.pages]

    service_groups: list[dict[str, Any]] = []
    current_label = None
    current_pages: list[dict[str, Any]] = []

    for page in parsed_pages:
        if not page["service_label"]:
            continue

        if current_label != page["service_label"]:
            if current_label and current_pages:
                service_groups.append(
                    parse_service(current_label, current_pages)
                )
            current_label = page["service_label"]
            current_pages = [page]
        else:
            current_pages.append(page)

    if current_label and current_pages:
        service_groups.append(parse_service(current_label, current_pages))

    output = {
        "source": {
            "title": "The Lectionary of Holy Week",
            "publisher": "St. Basil American Coptic Orthodox Church",
            "source_page": "https://stbasil.net/the-lectionary-of-holy-week",
            "pdf_url": PDF_URL,
            "notes": [
                "Old Testament readings are based on the St. Athanasius Academy Septuagint.",
                "New Testament readings are from the New King James Version.",
                "Homilies are attributed in the PDF to The Holy Pascha by St. Paul Brotherhood Press.",
                "This file is a first-pass raw extraction grouped by service and reading block, not yet split by verse.",
            ],
            "page_count": len(reader.pages),
        },
        "services": service_groups,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(output, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    block_count = sum(len(service["blocks"]) for service in service_groups)
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Services: {len(service_groups)}")
    print(f"Blocks: {block_count}")


if __name__ == "__main__":
    main()
