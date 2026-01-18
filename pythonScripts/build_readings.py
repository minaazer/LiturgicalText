import re
import json
import json5
from pathlib import Path
from typing import Dict, List, Any

import pdfplumber


# -------- PDF parsing helpers (adapted from extract_readings.py) --------


def is_arabic(text: str) -> bool:
    return any("\u0600" <= ch <= "\u06FF" for ch in text)


def classify_word(word: Dict) -> str:
    text = word["text"]
    font = word.get("fontname", "").lower()
    if is_arabic(text):
        return "arabic"
    if "avva" in font:
        return "coptic"
    return "english"


def line_to_cell(words: List[Dict]) -> Dict[str, str]:
    buckets = {"english": [], "arabic": [], "coptic": []}
    for word in words:
        buckets[classify_word(word)].append(word)

    cells: Dict[str, str] = {}
    for lang, wlist in buckets.items():
        if not wlist:
            continue
        reverse = lang == "arabic"
        ordered = sorted(wlist, key=lambda w: w["x0"], reverse=reverse)
        texts = []
        if lang == "arabic":
            for w in ordered:
                t = w["text"]
                leading = t[0] if t[:1] in {".", "،", "؛", "؟", ","} else ""
                trailing = t[-1] if t[-1:] in {".", "،", "؛", "؟", ","} else ""
                core = t
                if leading:
                    core = core[1:]
                if trailing:
                    core = core[:-1] if len(core) else ""
                if core:
                    core = core[::-1]
                if not core and (leading or trailing):
                    texts.append(leading or trailing)
                    continue
                normalized = core + trailing
                texts.append(normalized)
            joined = " ".join(texts)
            joined = joined.replace(" .", ".").replace(" ،", "،")
            joined = re.sub(r"\s+([\u064B-\u065F\u0670\u06D6-\u06ED])", r"\1", joined)
            cells[lang] = joined.strip()
        else:
            cells[lang] = " ".join(w["text"] for w in ordered).strip()
    return cells


def group_lines(words: List[Dict], y_tolerance: float = 1.5) -> List[Dict]:
    words_sorted = sorted(words, key=lambda w: (w["top"], w["x0"]))
    lines: List[Dict] = []
    current: List[Dict] = []
    current_top = None
    current_bottom = None

    for word in words_sorted:
        if current_top is None or abs(word["top"] - current_top) > y_tolerance:
            if current:
                lines.append({"words": current, "top": current_top, "bottom": current_bottom})
            current = [word]
            current_top = word["top"]
            current_bottom = word["bottom"]
        else:
            current.append(word)
            current_bottom = max(current_bottom, word["bottom"])
    if current:
        lines.append({"words": current, "top": current_top, "bottom": current_bottom})
    return lines


def group_paragraphs(lines: List[Dict], gap_multiplier: float = 1.3) -> List[List[Dict]]:
    if not lines:
        return []
    import statistics

    lines_sorted = sorted(lines, key=lambda ln: ln["top"])
    heights = [ln["bottom"] - ln["top"] for ln in lines_sorted]
    median_height = statistics.median(heights) if heights else 12.0
    gap_threshold = median_height * gap_multiplier

    paragraphs: List[List[Dict]] = []
    current: List[Dict] = [lines_sorted[0]]
    prev_bottom = lines_sorted[0]["bottom"]

    for ln in lines_sorted[1:]:
        gap = ln["top"] - prev_bottom
        if gap > gap_threshold:
            paragraphs.append(current)
            current = [ln]
        else:
            current.append(ln)
        prev_bottom = ln["bottom"]
    if current:
        paragraphs.append(current)
    return paragraphs


def paragraph_to_cells(paragraph: List[Dict]) -> List[Dict[str, str]]:
    buckets = {"english": [], "arabic": [], "coptic": []}
    for ln in paragraph:
        cell = line_to_cell(ln["words"])
        for lang, text in cell.items():
            if text:
                buckets[lang].append(text)

    def normalize(part_list: List[str], lang: str) -> str:
        joined = " ".join(part_list).strip()
        if lang != "arabic":
            joined = joined.replace(" .", ".").replace(" ,", ",")
            joined = re.sub(r"\s{2,}", " ", joined)
        return joined

    # If the first line looks like a reference and there is more content,
    # split into two cells: reference (first part) + body (rest).
    cells: List[Dict[str, str]] = []
    is_ref = False
    if buckets.get("english") and len(buckets["english"]) > 1:
        if re.search(r"\d+\s*[:U®]\s*\d+", buckets["english"][0]):
            is_ref = True

    if is_ref:
        ref_cell: Dict[str, str] = {}
        body_cell: Dict[str, str] = {}
        for lang, parts in buckets.items():
            if not parts:
                continue
            ref_cell[lang] = normalize(parts[:1], lang)
            if len(parts) > 1:
                body_cell[lang] = normalize(parts[1:], lang)
        cells.append(ref_cell)
        if body_cell:
            cells.append(body_cell)
    else:
        cell: Dict[str, str] = {}
        for lang, parts in buckets.items():
            if not parts:
                continue
            cell[lang] = normalize(parts, lang)
        if cell:
            cells.append(cell)

    return cells


# -------- Section grouping and template filling --------

READING_SEQUENCE = [
    ("Vespers Psalm", ["vespers psalm"]),
    ("Vespers Gospel", ["vespers gospel"]),
    ("Matins Psalm", ["matins psalm"]),
    ("Matins Gospel", ["matins gospel"]),
    ("Pauline", ["pauline"]),
    ("Catholic Epistle", ["catholic epistle"]),
    ("The Acts", ["the acts", "praxis"]),
    ("Synaxarium", ["synaxarium"]),
    ("Liturgy Psalm", ["liturgy psalm"]),
    ("Liturgy Gospel", ["liturgy gospel"]),
]


SECTION_KEYWORDS = {
    "Vespers Psalm": ["vespers psalm", "mzmwr aleahshyh", "mzmur al3shya"],
    "Vespers Gospel": ["vespers gospel", "injil aleashia", "injil al3shya"],
    "Matins Psalm": ["matins psalm", "mzmur bakr"],
    "Matins Gospel": ["matins gospel", "injil bakr"],
    "Pauline": ["pauline", "pols", "bolus", "بولس"],
    "Catholic Epistle": ["catholic epistle", "katholikon", "الكاثوليكون"],
    "The Acts": ["the acts", "praxis", "الإبراكسيس", "abrax"],
    "Liturgy Psalm": ["liturgy psalm", "psalm of the liturgy", "مزمور القداس"],
    "Liturgy Gospel": ["liturgy gospel", "gospel of the liturgy", "إنجيل القداس"],
}


def detect_section(cell: Dict[str, str]) -> str:
    text = " ".join(cell.values()).lower()
    for name, kws in READING_SEQUENCE:
        for kw in kws:
            if kw.lower() in text:
                return name
    return ""


DAY_RE = re.compile(r"readings for the (\d+)(st|nd|rd|th)\s+day", re.IGNORECASE)


def detect_day(cell: Dict[str, str]) -> int:
    text = " ".join(cell.values())
    m = DAY_RE.search(text)
    if m:
        return int(m.group(1))
    return 0


def classify_paragraph(cell: Dict[str, str]) -> str:
    text = cell.get("english", "")
    if re.search(r"\d+\s*[:٫]\s*\d+", text):
        return "reference"
    if "alleluia" in text.lower() or "allelouia" in text.lower():
        return "alleluia"
    if "glory be to god" in text.lower():
        return "doxology"
    return "body"


def fill_section_from_template(template: Dict[str, Any], reference: Dict[str, str], bodies: List[Dict[str, str]]) -> Dict[str, Any]:
    filled = json.loads(json.dumps(template))

    for tbody in filled.get("tbodies", []):
        new_rows = []
        text_template = None
        rows = tbody.get("rows", [])
        for row in rows:
            rc = row.get("row-class")
            cells = row.get("cells", [])
            if not cells:
                new_rows.append(row)
                continue
            target = cells[0]
            if rc == "reference" and reference:
                target.update(reference)
                new_rows.append(row)
            elif rc == "text":
                if text_template is None:
                    text_template = json.loads(json.dumps(row))
                if bodies:
                    body = bodies.pop(0)
                    new_row = json.loads(json.dumps(row))
                    new_row["cells"][0].update(body)
                    new_rows.append(new_row)
                else:
                    new_rows.append(row)
            else:
                new_rows.append(row)

        # append extra text rows if bodies remain
        if bodies and text_template:
            while bodies:
                body = bodies.pop(0)
                new_row = json.loads(json.dumps(text_template))
                new_row["cells"][0].update(body)
                new_rows.append(new_row)

        tbody["rows"] = new_rows
    return filled


def extract_all_paragraphs(pdf_path: Path, start: int = 1, end: int = None) -> List[Dict[str, str]]:
    paragraphs_cells: List[Dict[str, str]] = []
    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)
        last_page = end or total_pages
        for page_index in range(start - 1, last_page):
            page = pdf.pages[page_index]
            words = page.extract_words(
                x_tolerance=3,
                y_tolerance=3,
                keep_blank_chars=False,
                use_text_flow=True,
                extra_attrs=["fontname"],
            )
            lines = group_lines(words)
            paragraphs = group_paragraphs(lines)
            for para in paragraphs:
                cells = paragraph_to_cells(para)
                for cell in cells:
                    if cell:
                        paragraphs_cells.append(cell)
    return paragraphs_cells


def process_reading(reading_name: str, cells: List[Dict[str, str]]) -> Dict[str, List[Dict[str, str]]]:
    """
    Given a list of paragraph cells belonging to a reading, extract reference and body paragraphs.
    """
    trimmed: List[Dict[str, str]] = []
    found_ref = False
    for cell in cells:
        kind = classify_paragraph(cell)
        if not found_ref:
            if kind == "reference":
                found_ref = True
                trimmed.append(cell)
        else:
            trimmed.append(cell)

    if not trimmed:
        return {}

    reference = None
    bodies: List[Dict[str, str]] = []
    for cell in trimmed:
        kind = classify_paragraph(cell)
        if reference is None and kind == "reference":
            reference = cell
        else:
            if kind in {"alleluia", "doxology"}:
                continue
            bodies.append(cell)

    if reference is None:
        return {}
    return {"reference": reference, "bodies": bodies}


def build_readings(pdf_path: Path, template_path: Path, output_path: Path) -> None:
    template_sections = json5.loads(template_path.read_text(encoding="utf-8"))

    paragraphs = extract_all_paragraphs(pdf_path)

    day_sections: Dict[int, Dict[str, Dict[str, List[Dict[str, str]]]]] = {}
    current_day = 0
    current_section = ""
    buffer: List[Dict[str, str]] = []

    def flush_current():
        nonlocal buffer, current_section, current_day
        if current_day and current_section and buffer:
            data = process_reading(current_section, buffer)
            if data and current_section != "Synaxarium":
                day_sections.setdefault(current_day, {})[current_section] = data
        buffer = []
        current_section = ""

    for cell in paragraphs:
        found_day = detect_day(cell)
        if found_day:
            flush_current()
            current_day = found_day
            continue

        found_section = detect_section(cell)
        if found_section:
            flush_current()
            current_section = found_section
            continue

        if current_day and current_section:
            buffer.append(cell)

    flush_current()

    results = []
    for day, sections_data in sorted(day_sections.items()):
        for tmpl in template_sections:
            sec_title = tmpl.get("english_title")
            data = sections_data.get(sec_title)
            if not data:
                continue
            filled = fill_section_from_template(tmpl, data.get("reference"), list(data.get("bodies", [])))
            filled["day"] = day
            results.append(filled)

    output_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(results)} sections to {output_path}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Build structured readings JSON using template.json and PDF")
    parser.add_argument("pdf", type=Path, help="Path to Katameros_Days_Readings_Tout.pdf")
    parser.add_argument("--template", type=Path, default=Path("template.json"), help="Template JSON (json5 supported)")
    parser.add_argument("--output", type=Path, default=Path("tout_structured.json"), help="Output JSON file")
    args = parser.parse_args()
    build_readings(args.pdf, args.template, args.output)
