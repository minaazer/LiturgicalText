#!/usr/bin/env python3
"""
Fetch the Songs from Tasbeha and convert them to the
table-based JSON shape used throughout the app.

Dependencies: cloudscraper, beautifulsoup4
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

import cloudscraper
from bs4 import BeautifulSoup, NavigableString, Tag

BASE_URL = "https://tasbeha.org"
CATEGORY_PATH = "/hymn_library/cat/136"

LANGUAGE_CLASS_MAP: Dict[str, str] = {
    "englishtext": "english",
    "arabictext": "arabic",
    "arabictext_utf8": "arabic",
    "coptictext": "coptic",
    "coptictext_utf8": "coptic",
}

# Canonical role labels per language
ROLE_MAP = {
    "priest": {"english": "Priest:", "arabic": "الكاهن:", "coptic": "Ⲡⲓⲟⲩⲏⲃ:"},
    "people": {"english": "People:", "arabic": "الشعب:", "coptic": "Ⲡⲓⲗⲁⲟⲥ:"},
    "deacon": {"english": "Deacon:", "arabic": "الشماس:", "coptic": "Ⲡⲓⲇⲓⲁⲕⲱⲛ:"},
}


def clean_html_fragment(html: str) -> str:
    """Collapse whitespace inside an HTML fragment but keep tags intact."""
    html = html.strip()
    html = re.sub(r"\s+", " ", html)
    return html


def extract_titles(soup: BeautifulSoup, fallback: str) -> Tuple[str, str, str]:
    """Extract English/Coptic/Arabic titles from the page header."""
    h1 = soup.find("h1")
    english_title = fallback
    arabic_title = ""
    coptic_title = ""

    if not h1:
        return english_title, coptic_title, arabic_title

    coptic_span = h1.find(class_=lambda cls: cls and "coptictext" in cls)
    if coptic_span:
        coptic_title = coptic_span.get_text(" ", strip=True)

    arabic_span = h1.find(class_=lambda cls: cls and "arabictext" in cls)
    if arabic_span:
        arabic_title = arabic_span.get_text(" ", strip=True)

    english_parts: List[str] = []
    for child in h1.children:
        if isinstance(child, NavigableString):
            english_parts.append(str(child))
    joined = " ".join("".join(english_parts).replace("::", " ").split())
    english_title = joined.strip(" :-") or english_title

    return english_title, coptic_title, arabic_title


def detect_language(classes: List[str]) -> str:
    for cls in classes:
        lang = LANGUAGE_CLASS_MAP.get(cls)
        if lang:
            return lang
    return ""


def extract_rows(panel_body: Tag) -> List[Dict]:
    """Extract rows and cells from the hymn text panel."""
    rows: List[Dict] = []
    if not panel_body:
        return rows

    row_blocks = panel_body.find_all("div", class_="row", recursive=False)
    if not row_blocks:
        row_blocks = [panel_body]

    for row in row_blocks:
        columns = row.find_all("div", class_="textcolumn", recursive=False)
        if not columns:
            columns = row.find_all("div", class_="textcolumn")

        cells = []
        for col in columns:
            lang = detect_language(col.get("class", []))
            if not lang:
                continue

            col_soup = BeautifulSoup(str(col), "html.parser")
            col_clone = col_soup.find(class_="textcolumn") or col_soup

            for fn_tag in col_clone.find_all("fn"):
                fn_tag.decompose()
            content = clean_html_fragment(col_clone.decode_contents())
            text_only = BeautifulSoup(content, "html.parser").get_text(strip=True)
            if not text_only:
                continue

            cells.append({lang: content})

        if cells:
            rows.append({"row-class": "text", "cells": cells})

    return rows


def extract_footnotes(soup: BeautifulSoup) -> List[str]:
    notes: List[str] = []
    for fn in soup.find_all("fn", id=re.compile(r"^footnote")):
        number = fn.find("sup").get_text(strip=True) if fn.find("sup") else ""
        for sup in fn.find_all("sup"):
            sup.extract()
        text = clean_html_fragment(fn.get_text(" ", strip=True))
        if not text:
            continue
        note = f"{number}. {text}" if number else text
        notes.append(note)
    return notes


def parse_prayer(scraper, href: str, fallback_title: str) -> Dict:
    html = scraper.get(href).text
    soup = BeautifulSoup(html, "html.parser")

    english_title, coptic_title, arabic_title = extract_titles(soup, fallback_title)
    panel_body = soup.select_one("#hymntext .panel-body") or soup.find(id="hymntext")

    rows = extract_rows(panel_body)
    footnotes = extract_footnotes(soup)
    if footnotes:
        footnotes_html = "<b>Footnotes</b><br>" + "<br>".join(footnotes)
        rows.append({"row-class": "text", "cells": [{"english": footnotes_html}]})

    return {
        "english_title": english_title,
        "coptic_title": coptic_title,
        "arabic_title": arabic_title,
        "themes": [],
        "tbodies": [{"rows": rows}],
    }


def collect_links(scraper) -> List[Tuple[str, str]]:
    html = scraper.get(f"{BASE_URL}{CATEGORY_PATH}").text
    soup = BeautifulSoup(html, "html.parser")

    links: List[Tuple[str, str]] = []
    seen: set[str] = set()
    for anchor in soup.select('a[href^="/hymn_library/view/"]'):
        href = anchor.get("href")
        if not href or href in seen:
            continue
        seen.add(href)
        text = " ".join(anchor.get_text(strip=True).split())
        links.append((text, f"{BASE_URL}{href}"))
    return links


# --- Role handling helpers ------------------------------------------------ #


def _normalize_text(html: str) -> str:
    text = BeautifulSoup(html, "html.parser").get_text(" ", strip=True)
    text = re.sub(r"\s+", "", text)
    text = text.replace("ـ", "").replace("٬", "").replace("،", "").replace("؛", "")
    return text.strip(":：؛").lower()


def detect_role_key(cells: Dict[str, str]) -> str:
    """Detect role key from cells, preferring English."""
    def label_to_key(label: str, lang: str) -> str:
        norm_label = _normalize_text(label)
        for role, labels in ROLE_MAP.items():
            if lang in labels and _normalize_text(labels[lang]) == norm_label:
                return role
        return ""

    if "english" in cells:
        m = re.match(r"<span class='role'>([^<]+)</span>", cells["english"])
        if m:
            key = label_to_key(m.group(1), "english")
            if key:
                return key
        text = BeautifulSoup(cells["english"], "html.parser").get_text(" ", strip=True)
        key = label_to_key(text, "english")
        if key:
            return key

    for lang, html in cells.items():
        m = re.match(r"<span class='role'>([^<]+)</span>", html)
        if m:
            key = label_to_key(m.group(1), lang)
            if key:
                return key
        text = BeautifulSoup(html, "html.parser").get_text(" ", strip=True)
        key = label_to_key(text, lang)
        if key:
            return key
    return ""


def _strip_role_prefix(html: str, lang: str) -> str:
    """Remove any existing role prefix from a cell."""
    stripped = re.sub(r"^<span class='role'>[^<]+</span><br>", "", html, flags=re.IGNORECASE)
    stripped = re.sub(r"^<p><b>[^<]+</b></p>", "", stripped, flags=re.IGNORECASE)
    stripped = re.sub(r"^<p>[^<]+</p>", "", stripped, flags=re.IGNORECASE)
    for labels in ROLE_MAP.values():
        lbl = labels.get(lang)
        if not lbl:
            continue
        pattern = r"^" + re.escape(lbl)
        stripped = re.sub(pattern, "", stripped, flags=re.IGNORECASE)
    return stripped.lstrip()


def _unwrap_content(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    contents = soup.contents
    if len(contents) == 1 and hasattr(contents[0], "name"):
        inner = "".join(str(c) for c in contents[0].contents)
    else:
        inner = "".join(str(c) for c in contents)
    return inner.strip()


# --- Role post-processing ------------------------------------------------- #


def merge_role_rows(prayers: List[Dict]) -> List[Dict]:
    """Merge standalone role rows with the following row, tagging role text."""

    def cells_to_map(cells: List[Dict]) -> Dict[str, str]:
        mapping = {}
        for cell in cells:
            for k, v in cell.items():
                if k == "data-navigation":
                    continue
                mapping[k] = v
                break
        return mapping

    for item in prayers:
        for tbody in item.get("tbodies", []):
            rows = tbody.get("rows", [])
            merged_rows = []
            idx = 0
            while idx < len(rows):
                row = rows[idx]
                if idx + 1 < len(rows):
                    role_cells = cells_to_map(row.get("cells", []))
                    role_key = detect_role_key(role_cells)
                    if role_key:
                        next_row = rows[idx + 1]
                        next_cells = cells_to_map(next_row.get("cells", []))
                        if next_cells:
                            merged_cells = []
                            for lang, content_html in next_cells.items():
                                label = ROLE_MAP[role_key].get(lang, ROLE_MAP[role_key]["english"])
                                inner = _unwrap_content(content_html)
                                merged_cells.append({lang: f"<span class='role'>{label}</span><br>{inner}"})
                            merged_rows.append({**row, "cells": merged_cells})
                            idx += 2
                            continue
                merged_rows.append(row)
                idx += 1
            tbody["rows"] = merged_rows
    return prayers


def canonicalize_role_rows(prayers: List[Dict]) -> List[Dict]:
    """Ensure each language uses the canonical role label and keep body text."""
    for item in prayers:
        for tbody in item.get("tbodies", []):
            for row in tbody.get("rows", []):
                role_key = detect_role_key({k: v for cell in row.get("cells", []) for k, v in cell.items() if k in ("english", "arabic", "coptic")})
                if not role_key:
                    continue
                for cell in row.get("cells", []):
                    for lang in ("english", "arabic", "coptic"):
                        if lang in cell:
                            body = _strip_role_prefix(cell[lang], lang)
                            cell[lang] = f"<span class='role'>{ROLE_MAP[role_key][lang]}</span><br>{body}"
    return prayers


def apply_role_to_next_row(prayers: List[Dict]) -> List[Dict]:
    """If a row is just a role label, move that role prefix onto the following row."""
    for item in prayers:
        for tbody in item.get("tbodies", []):
            rows = tbody.get("rows", [])
            merged_rows = []
            idx = 0
            while idx < len(rows):
                row = rows[idx]
                role_cells = {k: v for cell in row.get("cells", []) for k, v in cell.items() if k in ("english", "arabic", "coptic")}
                role_key = detect_role_key(role_cells)

                def is_role_only(cell_map: Dict[str, str]) -> bool:
                    for lang, html in cell_map.items():
                        body = _strip_role_prefix(html, lang)
                        if body.strip():
                            return False
                    return True

                if role_key and is_role_only(role_cells) and idx + 1 < len(rows):
                    next_row = rows[idx + 1]
                    new_cells = []
                    for cell in next_row.get("cells", []):
                        new_cell = {}
                        for lang, val in cell.items():
                            body = _strip_role_prefix(val, lang)
                            label = ROLE_MAP[role_key].get(lang, ROLE_MAP[role_key]["english"])
                            new_cell[lang] = f"<span class='role'>{label}</span><br>{body}"
                        new_cells.append(new_cell)
                    merged_rows.append({**next_row, "cells": new_cells})
                    idx += 2
                else:
                    merged_rows.append(row)
                    idx += 1
            tbody["rows"] = merged_rows
    return prayers


# --- Main ----------------------------------------------------------------- #


def main(output_path: Path = Path("data/jsons/songs.json")) -> None:
    scraper = cloudscraper.create_scraper(browser={"browser": "firefox", "platform": "windows", "mobile": False})
    prayers = []
    for link_text, url in collect_links(scraper):
        print(f"Fetching {link_text} -> {url}")
        prayers.append(parse_prayer(scraper, url, link_text))

    prayers = merge_role_rows(prayers)
    prayers = canonicalize_role_rows(prayers)
    prayers = apply_role_to_next_row(prayers)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(prayers, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
