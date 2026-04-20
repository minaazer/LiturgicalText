import json
import re
from collections import Counter
from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
CR_ROOT = ROOT.parents[0] / "copticreaderfiles" / "decrypted_xml"
PASCHA_ROOT = CR_ROOT / "pascha"
BIBLE_ROOT = ROOT / "data" / "jsons" / "bible"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyweek_copticreader_all_readings.json"
REPORT_PATH = ROOT / "reports" / "holyweek_copticreader_all_readings_report.json"

NS = {"cr": "http://www.suscopts.org/CopticReader"}

SECTION_CATEGORIES = {
    "prophecy",
    "homily",
    "pauline",
    "psalm",
    "gospel",
    "exposition",
    "revelation",
    "scripture",
}

NT_BOOKS = {
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
}

PAULINE_BOOKS = {
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
}

GOSPEL_BOOKS = {"Matthew", "Mark", "Luke", "John"}

ARABIC_BOOK_TITLES = {
    "Deuteronomy": "تثنية",
    "Isaiah": "إشعياء",
    "Jeremiah": "إرميا",
    "Habakkuk": "حبقوق",
    "Zechariah": "زكريا",
    "Matthew": "متى",
    "John": "يوحنا",
    "Revelation": "رؤيا يوحنا",
    "1 Corinthians": "كورنثوس الأولى",
    "1 Timothy": "تيموثاوس الأولى",
}

BIBLE_ALIAS_MAP = {
    "Wisdom": "Wisdom of Solomon",
}

BIBLE_CACHE = {}

ENGLISH_BOOK_ALIASES = {
    "1 Corinthians": ["1 Corinthians", "I Corinthians"],
    "1 Timothy": ["1 Timothy", "I Timothy"],
}

COPTIC_BOOK_ALIASES = {
    "Deuteronomy": ["Deuteronomy", "Deuteronomy (1)"],
}

MANUAL_REFERENCE_OVERRIDES = {
    "Wisdom 5:1-7": [
        {
            "kind": "text",
            "verse_reference": "5:1",
            "languages": {
                "english": "Then the righteous man will stand with confidence In the presence of those who afflict him, And those who reject his labors, When they see him, will be shaken with dreadful fear; And they shall be amazed at his unexpected salvation.",
                "arabic": "عِنْدَ ذَلِكَ يَقُومُ الْبَارُّ بِجَرَأَةٍ عَظِيمَةٍ بَيْنَ مَعْشَرِهِ، أَمَامَ الَّذِينَ ضَايَقُوهُ وَجَعَلُوا سَعْيَهُ بَاطِلًا، فَإِذَا رَأَوْهُ يَضْطَرِبُونَ مِنْ شِدَّةِ خَوْفِهِ الْعَظِيمِ، وَيَذْهَلُونَ مِنْ خَلَاصِهِ الْعَجِيبِ.",
            },
        },
        {
            "kind": "text",
            "verse_reference": "5:3",
            "languages": {
                "english": "They will speak among themselves with regret, And in anguish of spirit they will groan and say,",
                "arabic": "وَيَقُولُونَ فِيمَا بَيْنَهُمْ يَتَخَشَّعُونَ نَادِمِينَ، وَهُمْ يَنُوحُونَ مِنْ ضِيقِ الصَّدْرِ قَائِلِينَ:",
            },
        },
        {
            "kind": "text",
            "verse_reference": "5:4",
            "languages": {
                "english": "This is the man whom we fools once held in derision, And made a byword of disgrace. We considered his life to be madness, And his death as without honor.",
                "arabic": "هَذَا الَّذِي كُنَّا فِيمَا مَضَى سُخْرَةً، وَنَتَّخِذُهُ نَحْنُ الْجُهَّالُ سُخْرِيَّةً وَأُحْدُوثَةً وَمَثَلًا لِلْعَارِ، وَحَسِبْنَاهُ جُنُونًا وَمَوْتَهُ هَوَانًا فِي الظَّاهِرِ.",
            },
        },
        {
            "kind": "text",
            "verse_reference": "5:5",
            "languages": {
                "english": "How has he been numbered among the sons of God? And how is his portion among the saints?",
                "arabic": "كَيْفَ أَصْبَحَ مَعْدُودًا فِي بَنِي اللهِ، وَحَظُّهُ بَيْنَ الْقِدِّيسِينَ؟",
            },
        },
        {
            "kind": "text",
            "verse_reference": "5:6",
            "languages": {
                "english": "Therefore we went astray from the way of truth, For the light of righteousness did not shine on us; And the sun did not rise upon us.",
                "arabic": "لَقَدْ ضَلَلْنَا عَنْ طَرِيقِ الْحَقِّ وَلَمْ يُنِرْ نُورُ الْبِرِّ، وَلَمْ تُشْرِقْ عَلَيْنَا شَمْسُ الْعَدْلِ.",
            },
        },
        {
            "kind": "text",
            "verse_reference": "5:7",
            "languages": {
                "english": "We were satisfied with the paths of lawlessness, And we traveled through impassable deserts; But the way of the Lord we have not known.",
                "arabic": "وَتَوَرَّطْنَا فِي سُبُلِ الْآثَامِ وَالْهَلَاكِ، وَهِمْنَا فِي مَتَايِهَ لَا طَرِيقَ فِيهَا، وَلَمْ نَفْهَمْ طَرِيقَ الرَّبِّ.",
            },
        },
    ]
}

MAIN_DOCS = sorted(
    p
    for p in PASCHA_ROOT.rglob("*.xml")
    if "include" not in p.parts and "interpretations" not in p.parts
)


def local_name(tag: str) -> str:
    return tag.split("}", 1)[1] if "}" in tag else tag


def load_xml(path: Path):
    return ET.parse(path).getroot()


def load_bible(name: str):
    if name not in BIBLE_CACHE:
        path = BIBLE_ROOT / name
        data = json.loads(path.read_text(encoding="utf-8"))
        BIBLE_CACHE[name] = data["books"] if isinstance(data, dict) else data
    return BIBLE_CACHE[name]


def normalize_space(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").replace("\ufeff", "").strip())


def get_languages(node):
    langs = {}
    for lang in node.findall("cr:Language", NS):
        lang_id = lang.get("id")
        value = normalize_space("".join(lang.itertext()))
        if value:
            langs[lang_id.lower()] = value
    return langs


def get_title(node):
    title_node = node.find("cr:Title", NS)
    return get_languages(title_node) if title_node is not None else {}


def get_document_title(root):
    direct = get_title(root)
    if direct:
        return direct
    title_node = root.find(".//cr:Title", NS)
    return get_languages(title_node) if title_node is not None else {}


def infer_service_info(path: Path):
    relative = path.relative_to(PASCHA_ROOT)
    parts = relative.parts
    stem = path.stem
    folder = parts[0] if len(parts) > 1 else ""
    return {
        "relative_path": str(relative).replace("\\", "/"),
        "group": folder,
        "file_stem": stem,
    }


def resolve_include_path(raw_path: str, base_path: Path):
    raw = raw_path.strip()
    candidates = []
    if raw.endswith(".xml"):
        candidates.append(raw)
    else:
        candidates.append(f"{raw}.xml")

    resolved = []
    for candidate in candidates:
        if candidate.startswith("pascha/"):
            resolved.append(CR_ROOT / candidate)
        else:
            resolved.append(base_path.parent / candidate)
            resolved.append(CR_ROOT / candidate)
    for candidate in resolved:
        if candidate.exists():
            return candidate
    return None


def parse_reference_book(reference: str):
    match = re.match(r"^\s*([1-3]?\s?[A-Za-z][A-Za-z\s]+?)\s+\d", reference or "")
    if not match:
        match = re.match(r"^\s*([1-3]?\s?[A-Za-z][A-Za-z\s]+?)\s*$", reference or "")
    book = normalize_space(match.group(1)) if match else ""
    return BIBLE_ALIAS_MAP.get(book, book)


def parse_reference(reference: str):
    reference = normalize_space(reference)
    book = parse_reference_book(reference)
    if not book:
        return None
    rest = normalize_space(reference[len(book):]).lstrip()
    if not rest:
        return {"book": book, "segments": []}

    match = re.fullmatch(r"(\d+)$", rest)
    if match:
        chapter = int(match.group(1))
        return {"book": book, "segments": [(chapter, 1, chapter, None)]}

    match = re.fullmatch(r"(\d+):(\d+)-(\d+)$", rest)
    if match:
        chapter, start_v, end_v = map(int, match.groups())
        return {"book": book, "segments": [(chapter, start_v, chapter, end_v)]}

    match = re.fullmatch(r"(\d+):(\d+)-(\d+):(\d+)$", rest)
    if match:
        start_c, start_v, end_c, end_v = map(int, match.groups())
        return {"book": book, "segments": [(start_c, start_v, end_c, end_v)]}

    return None


def find_book(books, title):
    for book in books:
        if book.get("title") == title:
            return book
    return None


def find_book_any(books, titles):
    for title in titles:
        found = find_book(books, title)
        if found is not None:
            return found
    return None


def collect_verses(book, segments):
    verses_out = []
    for start_ch, start_v, end_ch, end_v in segments:
        for chapter_number in range(start_ch, end_ch + 1):
            chapter = next((c for c in book["chapters"] if int(c["chapter"]) == chapter_number), None)
            if not chapter or not chapter.get("verses"):
                continue
            chapter_verses = chapter["verses"]
            first_verse = start_v if chapter_number == start_ch else 1
            last_verse = end_v if chapter_number == end_ch and end_v is not None else int(chapter_verses[-1]["verse"])
            for verse in chapter_verses:
                verse_num = int(verse["verse"])
                if first_verse <= verse_num <= last_verse:
                    verses_out.append(
                        {
                            "chapter": chapter_number,
                            "verse": verse_num,
                            "text": normalize_space(verse["text"]),
                        }
                    )
    return verses_out


def resolve_reference_languages(reference: str):
    parsed = parse_reference(reference)
    if not parsed:
        return None

    book = parsed["book"]
    segments = parsed["segments"]
    result = {"english": [], "arabic": [], "coptic": [], "missing_languages": []}

    if book in NT_BOOKS or book == "Revelation":
        english_book = find_book_any(load_bible("english_full.json"), ENGLISH_BOOK_ALIASES.get(book, [book]))
    else:
        english_book = find_book(load_bible("saas_ot.json"), book)
        if english_book is None:
            english_book = find_book(load_bible("lxx2012_ot.json"), book)
    if english_book:
        result["english"] = collect_verses(english_book, segments)
    else:
        result["missing_languages"].append("english")

    arabic_title = ARABIC_BOOK_TITLES.get(book)
    arabic_book = find_book(load_bible("arabic_full.json"), arabic_title) if arabic_title else None
    if arabic_book:
        result["arabic"] = collect_verses(arabic_book, segments)
    else:
        result["missing_languages"].append("arabic")

    if book in NT_BOOKS or book == "Revelation":
        coptic_book = find_book(load_bible("coptic_nt.json"), book)
    else:
        coptic_book = find_book_any(load_bible("coptic_ot.json"), COPTIC_BOOK_ALIASES.get(book, [book]))
    if coptic_book:
        result["coptic"] = collect_verses(coptic_book, segments)
    else:
        result["missing_languages"].append("coptic")

    return result


def build_reference_content(reference: str):
    if reference in MANUAL_REFERENCE_OVERRIDES:
        return MANUAL_REFERENCE_OVERRIDES[reference], {
            "resolved": True,
            "missing_languages": ["coptic"],
            "verse_count": len(MANUAL_REFERENCE_OVERRIDES[reference]),
            "source": "manual_override",
        }

    resolved = resolve_reference_languages(reference)
    if not resolved:
        return [], {"resolved": False, "reason": "unparseable_reference"}

    verse_keys = []
    seen = set()
    for lang in ("english", "arabic", "coptic"):
        for verse in resolved[lang]:
            key = (verse["chapter"], verse["verse"])
            if key not in seen:
                seen.add(key)
                verse_keys.append(key)
    verse_keys.sort()

    content = []
    for chapter, verse_num in verse_keys:
        languages = {}
        for lang in ("english", "arabic", "coptic"):
            match = next(
                (v for v in resolved[lang] if v["chapter"] == chapter and v["verse"] == verse_num and v["text"]),
                None,
            )
            if match:
                languages[lang] = match["text"]
        if languages:
            content.append(
                {
                    "kind": "text",
                    "verse_reference": f"{chapter}:{verse_num}",
                    "languages": languages,
                }
            )

    return content, {
        "resolved": bool(content),
        "missing_languages": sorted(set(resolved["missing_languages"])),
        "verse_count": len(content),
    }


def infer_category(title, reference="", include_paths=None, service_path=""):
    include_paths = include_paths or []
    english_title = title.get("english", "")
    title_lower = english_title.lower()
    service_lower = service_path.lower()
    excluded_titles = {
        "introduction to the paschal praise",
        "the burial hymn",
        "the sixth hour litanies",
        "the ninth hour litanies",
        "remember me o my lord",
        "hymn of the censer",
        "adam aspasmos",
        "alternate adam aspasmos",
        "psali",
        "thanksgiving prayer after blessing of the water",
        "memoirs of job",
        "gospel response",
    }

    if title_lower in excluded_titles:
        return "other"

    if "exposition" in title_lower:
        return "exposition"
    if "homily" in title_lower:
        return "homily"
    if "psalm" in title_lower or "psalms" in title_lower:
        return "psalm"
    if "gospel" in title_lower:
        return "gospel"
    if "pauline" in title_lower:
        return "pauline"
    if "revelation" in title_lower or "revelation" in (reference or "").lower():
        return "revelation"
    if any("prophecyintro" in p.lower() for p in include_paths):
        return "prophecy"
    if any("gospelintro" in p.lower() or "gospelcontinuation" in p.lower() for p in include_paths):
        return "gospel"
    if any("paulineepistle" in p.lower() for p in include_paths):
        return "pauline"

    book = parse_reference_book(reference or english_title)
    if book in GOSPEL_BOOKS:
        return "gospel"
    if book in PAULINE_BOOKS:
        return "pauline"
    if book == "Revelation":
        return "revelation"
    if book:
        if "resurrection/prophecies" in service_lower:
            return "prophecy"
        return "scripture"
    return "other"


def extract_inline_items(node, base_path: Path, seen_includes=None):
    seen_includes = seen_includes or set()
    items = []
    include_paths = []
    nested_references = []

    for child in list(node):
        name = local_name(child.tag)
        if name in {"Title", "Language"}:
            continue
        if name == "Text":
            langs = get_languages(child)
            if langs:
                items.append({"kind": "text", "languages": langs})
        elif name == "Comment":
            langs = get_languages(child)
            if langs:
                items.append({"kind": "comment", "languages": langs})
        elif name == "InsertDocument":
            raw_path = child.get("path", "")
            include_paths.append(raw_path)
            resolved = resolve_include_path(raw_path, base_path)
            if resolved and resolved not in seen_includes:
                seen_includes.add(resolved)
                include_root = load_xml(resolved)
                nested = extract_inline_items(include_root, resolved, seen_includes)
                if nested["items"]:
                    items.extend(nested["items"])
                include_paths.extend(nested["include_paths"])
                nested_references.extend(nested["references"])
        elif name in {"BibleReference", "KatamerosReference"}:
            ref = normalize_space(child.get("reference", ""))
            if ref:
                nested_references.append(
                    {
                        "reference": ref,
                        "type": child.get("type"),
                        "hide_intro_conclusion": child.get("hideIntroConclusion") == "true",
                        "node": name,
                    }
                )
        elif name in {"Role", "Group", "Season", "ForceSeason", "Document"}:
            nested = extract_inline_items(child, base_path, seen_includes)
            if nested["items"]:
                items.extend(nested["items"])
            include_paths.extend(nested["include_paths"])
            nested_references.extend(nested["references"])

    return {
        "items": items,
        "include_paths": include_paths,
        "references": nested_references,
    }


def make_reference_only_section(reference_node, base_path: Path):
    reference = normalize_space(reference_node.get("reference", ""))
    title = {"english": reference}
    return {
        "title": title,
        "reference": reference,
        "category": infer_category(title, reference=reference, service_path=str(base_path)),
        "content": [],
        "include_paths": [],
        "source_mode": "reference_only",
        "reference_metadata": {
            "node": local_name(reference_node.tag),
            "type": reference_node.get("type"),
            "hide_intro_conclusion": reference_node.get("hideIntroConclusion") == "true",
        },
    }


def build_section(section_node, base_path: Path):
    title = get_title(section_node)
    extracted = extract_inline_items(section_node, base_path, set())
    xml_text_count = sum(1 for child in section_node.iter() if local_name(child.tag) == "Text")
    xml_reference_count = sum(
        1 for child in section_node.iter() if local_name(child.tag) in {"BibleReference", "KatamerosReference"}
    )

    explicit_reference = ""
    if title.get("english"):
        explicit_reference = title["english"]
    elif extracted["references"]:
        explicit_reference = extracted["references"][0]["reference"]

    section = {
        "title": title,
        "reference": explicit_reference,
        "category": infer_category(
            title,
            reference=explicit_reference,
            include_paths=extracted["include_paths"],
            service_path=str(base_path),
        ),
        "content": extracted["items"],
        "include_paths": sorted(set(extracted["include_paths"])),
        "source_mode": "inline" if extracted["items"] else "reference_only",
    }
    if xml_reference_count and not xml_text_count:
        section["source_mode"] = "reference_backed" if extracted["items"] else "reference_only"
    if extracted["references"]:
        section["reference_metadata"] = extracted["references"]
    return section


def collect_sections(node, base_path: Path):
    sections = []
    for child in list(node):
        name = local_name(child.tag)
        if name in {"ForceSeason", "Season", "Group", "Role", "Document"}:
            sections.extend(collect_sections(child, base_path))
        elif name == "Section":
            sections.append(build_section(child, base_path))
        elif name in {"BibleReference", "KatamerosReference"}:
            sections.append(make_reference_only_section(child, base_path))
        elif name == "InsertDocument":
            resolved = resolve_include_path(child.get("path", ""), base_path)
            if resolved and resolved.exists() and "interpretations" in resolved.parts:
                include_root = load_xml(resolved)
                sections.extend(collect_sections(include_root, resolved))
    return sections


def build_document(path: Path):
    root = load_xml(path)
    doc_title = get_document_title(root)
    all_sections = collect_sections(root, path)
    reading_sections = [s for s in all_sections if s["category"] in SECTION_CATEGORIES]
    for section in reading_sections:
        if section["source_mode"] == "reference_only" and section.get("reference"):
            content, meta = build_reference_content(section["reference"])
            if content:
                section["content"] = content
                section["source_mode"] = "resolved_from_local_bible"
            section["resolution_metadata"] = meta
    return {
        "service": infer_service_info(path),
        "title": doc_title,
        "readings": reading_sections,
    }


def main():
    documents = [build_document(path) for path in MAIN_DOCS]
    output = {
        "source": "Coptic Reader Pascha decrypted XML",
        "source_root": str(PASCHA_ROOT),
        "documents": documents,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")

    category_counter = Counter()
    reference_only = []
    reference_backed = []
    resolved_from_local_bible = []
    partially_resolved = []
    empty_docs = []
    for doc in documents:
        if not doc["readings"]:
            empty_docs.append(doc["service"]["relative_path"])
        for section in doc["readings"]:
            category_counter[section["category"]] += 1
            if section["source_mode"] == "resolved_from_local_bible":
                resolved_from_local_bible.append(
                    {
                        "service": doc["service"]["relative_path"],
                        "title": section["title"].get("english", ""),
                        "reference": section.get("reference", ""),
                        "category": section["category"],
                        "verse_count": section.get("resolution_metadata", {}).get("verse_count"),
                        "missing_languages": section.get("resolution_metadata", {}).get("missing_languages", []),
                    }
                )
                if section.get("resolution_metadata", {}).get("missing_languages"):
                    partially_resolved.append(resolved_from_local_bible[-1])
            if section["source_mode"] == "reference_only":
                reference_only.append(
                    {
                        "service": doc["service"]["relative_path"],
                        "title": section["title"].get("english", ""),
                        "reference": section.get("reference", ""),
                        "category": section["category"],
                        "reference_metadata": section.get("reference_metadata"),
                    }
                )
            if section["source_mode"] == "reference_backed":
                reference_backed.append(
                    {
                        "service": doc["service"]["relative_path"],
                        "title": section["title"].get("english", ""),
                        "reference": section.get("reference", ""),
                        "category": section["category"],
                        "content_item_count": len(section["content"]),
                        "reference_metadata": section.get("reference_metadata"),
                    }
                )

    report = {
        "document_count": len(documents),
        "documents_with_readings": sum(1 for doc in documents if doc["readings"]),
        "documents_without_readings": empty_docs,
        "reading_counts_by_category": dict(category_counter),
        "resolved_from_local_bible_count": len(resolved_from_local_bible),
        "resolved_from_local_bible_sections": resolved_from_local_bible,
        "partially_resolved_sections": partially_resolved,
        "reference_only_sections": reference_only,
        "reference_only_count": len(reference_only),
        "reference_backed_sections": reference_backed,
        "reference_backed_count": len(reference_backed),
    }
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
