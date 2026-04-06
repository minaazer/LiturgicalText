import html
import json
import os
import xml.etree.ElementTree as ET


INPUT_DIR = r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_xml\include\agpeya"
OUTPUT_PATH = r"d:\AppDev\LiturgicalText\CopticReaderFiles\output\agpeyaPrayers.json"
BASE_DIR = r"D:\AppDev\LiturgicalText\CopticReaderFiles\decrypted_xml"

NS = {"cr": "http://www.suscopts.org/CopticReader"}


def clean_text(text):
    if text is None:
        return ""
    return " ".join(html.unescape(text).split())


def parse_languages(parent):
    collected = {}
    for lang in parent.findall("cr:Language", NS):
        lang_id = lang.get("id")
        if not lang_id:
            continue
        text = clean_text("".join(lang.itertext()))
        if text:
            collected[lang_id.lower()] = text

    ordered = {}
    for key in ("english", "coptic", "arabic"):
        if key in collected:
            ordered[key] = collected[key]
    for key, value in collected.items():
        if key not in ordered:
            ordered[key] = value
    return ordered


def local_name(tag):
    if "}" in tag:
        return tag.rsplit("}", 1)[-1]
    return tag


def resolve_include_path(include_path):
    path = include_path.replace("/", os.sep)
    if not path.lower().endswith(".xml"):
        path = f"{path}.xml"
    return os.path.join(BASE_DIR, path)


def build_section(section, seasons=None, fallback_title=None):
    title_node = section.find("cr:Title", NS)
    title_langs = parse_languages(title_node) if title_node is not None else {}

    english_title = title_langs.get("english")
    arabic_title = title_langs.get("arabic")
    coptic_title = title_langs.get("coptic")

    if not english_title and fallback_title:
        english_title = fallback_title
    title = english_title or arabic_title or coptic_title

    rows = []
    for text_node in section.findall("cr:Text", NS):
        cell = parse_languages(text_node)
        if not cell:
            continue
        rows.append(
            {
                "row-class": "text",
                "cells": [cell],
            }
        )

    data = {
        "english_title": english_title,
        "coptic_title": coptic_title,
        "arabic_title": arabic_title,
        "title": title,
    }
    if seasons:
        data["seasons"] = seasons
    data["tbodies"] = [
        {
            "rows": rows,
        }
    ]
    return data


def build_comment_section(comment_node, seasons):
    comment_langs = parse_languages(comment_node)
    if not comment_langs:
        return None

    rows = [
        {
            "row-class": "comment",
            "cells": [comment_langs],
        }
    ]

    data = {
        "english_title": "Explanation",
        "coptic_title": None,
        "arabic_title": None,
        "title": "Explanation",
    }
    if seasons:
        data["seasons"] = seasons
    data["tbodies"] = [
        {
            "rows": rows,
        }
    ]
    return data


def build_text_section(text_node, seasons, fallback_title=None):
    cell = parse_languages(text_node)
    if not cell:
        return None

    if fallback_title:
        english_title = fallback_title
        title = fallback_title
    else:
        english_title = None
        title = None

    data = {
        "english_title": english_title,
        "coptic_title": None,
        "arabic_title": None,
        "title": title,
    }
    if seasons:
        data["seasons"] = seasons
    data["tbodies"] = [
        {
            "rows": [
                {
                    "row-class": "text",
                    "cells": [cell],
                }
            ]
        }
    ]
    return data


def extract_rows_from_document(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    rows = []
    for text_node in root.findall(".//cr:Text", NS):
        cell = parse_languages(text_node)
        if not cell:
            continue
        rows.append(
            {
                "row-class": "text",
                "cells": [cell],
            }
        )
    return rows


def collect_sections_from_node(
    node, include_stack, active_seasons, in_section, suppress_comments, fallback_title
):
    sections = []
    for child in list(node):
        name = local_name(child.tag)
        if name == "InsertDocument":
            continue
        elif name == "Section":
            section_data = build_section(child, active_seasons, fallback_title)
            for sub in list(child):
                if local_name(sub.tag) == "InsertDocument":
                    include_path = sub.get("path")
                    if not include_path:
                        continue
                    resolved = resolve_include_path(include_path)
                    if not os.path.exists(resolved):
                        print(f"Missing include: {resolved}")
                        continue
                    section_data["tbodies"][0]["rows"].extend(
                        extract_rows_from_document(resolved)
                    )
            sections.append(section_data)
        elif name == "Comment":
            continue
        elif name == "Season":
            season_id = child.get("id")
            if season_id:
                next_seasons = active_seasons + [season_id]
            else:
                next_seasons = active_seasons
            for comment_node in child.findall("cr:Comment", NS):
                continue
            sections.extend(
                collect_sections_from_node(
                    child,
                    include_stack,
                    next_seasons,
                    in_section,
                    True,
                    fallback_title,
                )
            )
        elif name == "Text":
            if not in_section:
                text_section = build_text_section(child, active_seasons, fallback_title)
                if text_section:
                    sections.append(text_section)
        else:
            sections.extend(
                collect_sections_from_node(
                    child,
                    include_stack,
                    active_seasons,
                    in_section,
                    suppress_comments,
                    fallback_title,
                )
            )
    return sections


def parse_document(file_path, include_stack, active_seasons, in_section, suppress_comments):
    try:
        with open(file_path, "rb") as handle:
            content = handle.read()
        if not content.strip():
            print(f"Skipping empty XML file: {file_path}")
            return []
        tree = ET.parse(file_path)
    except ET.ParseError as exc:
        print(f"Failed to parse XML file: {file_path} ({exc})")
        return []
    root = tree.getroot()
    fallback_title = os.path.splitext(os.path.basename(file_path))[0]
    return collect_sections_from_node(
        root, include_stack, active_seasons, in_section, suppress_comments, fallback_title
    )


def main():
    sections = []
    for name in sorted(os.listdir(INPUT_DIR)):
        file_path = os.path.join(INPUT_DIR, name)
        if not name.lower().endswith(".xml"):
            continue
        if not os.path.isfile(file_path):
            continue
        sections.extend(parse_document(file_path, [file_path], [], False, False))

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(sections, f, ensure_ascii=False, indent=2)
        f.write("\n")


if __name__ == "__main__":
    main()
