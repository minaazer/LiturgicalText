import re
import json
from pathlib import Path
from typing import List, Dict, Any

from docx import Document


ARABIC_RANGE = r"\u0621-\u064A\u064B-\u065F"


def normalize_arabic(text: str) -> str:
    if not text:
        return text
    return text.replace("\n", " ").strip()


def classify_paragraph(cell: Dict[str, str]) -> str:
    text = cell.get("english", "")
    if re.search(r"\d+\s*[:U®]\s*\d+", text):
        return "reference"
    if "alleluia" in text.lower() or "allelouia" in text.lower():
        return "alleluia"
    if "glory be to god" in text.lower():
        return "doxology"
    return "body"


READING_SEQUENCE = [
    "Vespers Psalm",
    "Vespers Gospel",
    "Matins Psalm",
    "Matins Gospel",
    "The Pauline Epistle",
    "The Catholic Epistle",
    "The Acts",
    "Synaxarium",
    "The Liturgy Psalm",
    "The Liturgy Gospel",
]

READING_OUTPUT_ORDER = [
    "Vespers Psalm",
    "Vespers Gospel",
    "Matins Psalm",
    "Matins Gospel",
    "The Pauline Epistle",
    "The Catholic Epistle",
    "The Acts",
    "The Liturgy Psalm",
    "The Liturgy Gospel",
]


DAY_RE = re.compile(r"Katameros Readings for the (\d+)")


def iter_block_items(parent):
    """
    Yield paragraphs and tables in document order.
    """
    from docx.oxml.table import CT_Tbl
    from docx.oxml.text.paragraph import CT_P
    from docx.table import Table
    from docx.text.paragraph import Paragraph

    for child in parent.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)


def row_to_cell(row) -> Dict[str, str]:
    texts = [c.text.strip() for c in row.cells]
    if len(texts) == 3:
        return {"coptic": texts[0], "english": texts[1], "arabic": normalize_arabic(texts[2])}
    if len(texts) == 2:
        return {"english": texts[0], "arabic": normalize_arabic(texts[1])}
    return {"english": " ".join(texts)}


def process_section_rows(rows: List[Dict[str, str]]) -> Dict[str, List[Dict[str, str]]]:
    intros: List[Dict[str, str]] = []
    reference = None
    bodies: List[Dict[str, str]] = []
    found_ref = False

    for cell in rows:
        kind = classify_paragraph(cell)
        if not found_ref:
            if kind == "reference":
                reference = cell
                found_ref = True
            else:
                intros.append(cell)
        else:
            if kind in {"alleluia", "doxology"}:
                bodies.append(cell)
                continue
            bodies.append(cell)

    if not reference:
        return {}
    return {"intros": intros, "reference": reference, "bodies": bodies}


def build_from_docx(docx_path: Path, template_path: Path, output_path: Path) -> None:
    doc = Document(docx_path)

    day_sections: Dict[int, Dict[str, Dict[str, List[Dict[str, str]]]]] = {}
    current_day = 0
    current_section = ""
    buffer: List[Dict[str, str]] = []

    def flush_section():
        nonlocal buffer, current_section, current_day
        if current_day and current_section and buffer:
            if current_section != "Synaxarium":
                data = process_section_rows(buffer)
                if data:
                    day_sections.setdefault(current_day, {})[current_section] = data
        buffer = []
        current_section = ""

    for block in iter_block_items(doc):
        if hasattr(block, "text"):
            text = block.text.strip()
            if not text:
                continue
            m = DAY_RE.search(text)
            if m:
                flush_section()
                current_day = int(m.group(1))
                continue
            if text in READING_SEQUENCE:
                flush_section()
                current_section = text
                continue
        else:
            # Table
            if not (current_day and current_section):
                continue
            for row in block.rows:
                cell = row_to_cell(row)
                buffer.append(cell)

    flush_section()

    month_name = "Tout"
    days_output = []
    for day, sections_data in sorted(day_sections.items()):
        readings_list = []
        for reading in READING_OUTPUT_ORDER:
            data = sections_data.get(reading)
            rows: List[Dict[str, Any]] = []
            if data:
                for intro in data.get("intros", []):
                    rows.append({"row_class": "intro", "cells": intro})
                ref = data.get("reference")
                if ref:
                    rows.append({"row_class": "reference", "cells": ref})
                for body in data.get("bodies", []):
                    rows.append({"row_class": "text", "cells": body})
            readings_list.append({"reading": reading, "rows": rows})
        days_output.append({"day": day, "readings": readings_list})

    final_output = [{"month": month_name, "days": days_output}]

    output_path.write_text(json.dumps(final_output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(days_output)} days to {output_path}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Build structured readings JSON from DOCX (reference + paragraphs only)")
    parser.add_argument("docx", type=Path, help="Path to Katameros_Days_Readings_Tout.docx")
    parser.add_argument("--output", type=Path, default=Path("tout_structured.json"), help="Output JSON file")
    args = parser.parse_args()
    build_from_docx(args.docx, None, args.output)
