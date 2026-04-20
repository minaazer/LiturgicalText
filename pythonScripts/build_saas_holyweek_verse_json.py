from __future__ import annotations

import copy
import json
import re
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
STRUCTURED_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
OUTPUT_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_by_verse.json"
REPORT_PATH = ROOT / "reports" / "holyWeek_stbasil_by_verse_report.json"
COPTIC_READER_ROOT = Path(r"d:\AppDev\LiturgicalText\copticreaderfiles")
COPTIC_PASCHA_ROOT = COPTIC_READER_ROOT / "decrypted_xml" / "pascha"
COPTIC_LITURGIES_ROOT = COPTIC_READER_ROOT / "decrypted_xml" / "liturgies" / "pascha"

NS = {"c": "http://www.suscopts.org/CopticReader"}
@dataclass
class ChunkSection:
    document_title: str
    file_path: str
    reference_title: str
    chunks: list[dict[str, str]]


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def normalize_reference(text: str) -> str:
    text = normalize_spaces(text)
    text = text.replace("PSALMS ", "PSALM ")
    text = re.sub(r"\s*\(LXX\)", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s*\[SELECTION\]", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s+", " ", text)
    return text.upper().strip()


def normalize_word(word: str) -> str:
    return re.sub(r"[^A-Za-z0-9']+", "", word).lower()


def tokenize_words(text: str) -> list[str]:
    return [token for token in normalize_spaces(text).split(" ") if token]


def parse_simple_reference(reference: str) -> list[int] | None:
    normalized = normalize_reference(reference)
    matches = re.findall(r"(\d+):(\d+)(?:-(\d+))?", normalized)
    if not matches:
        return None
    chapters = {int(chapter) for chapter, _, _ in matches}
    if len(chapters) != 1:
        return None
    verse_numbers: list[int] = []
    for _, start_text, end_text in matches:
        start = int(start_text)
        end = int(end_text or start_text)
        if end < start:
            return None
        verse_numbers.extend(list(range(start, end + 1)))
    return verse_numbers


def parse_chunk_sections_from_file(file_path: Path) -> list[ChunkSection]:
    root = ET.parse(file_path).getroot()
    title_node = root.find("./c:ForceSeason/c:Title/c:Language[@id='English']", NS)
    if title_node is None:
        title_node = root.find("./c:Title/c:Language[@id='English']", NS)
    document_title = normalize_spaces(title_node.text if title_node is not None else file_path.stem)

    sections: list[ChunkSection] = []
    for section in root.findall(".//c:Section", NS):
        title = section.find("./c:Title/c:Language[@id='English']", NS)
        if title is None or not normalize_spaces(title.text or ""):
            continue

        chunks: list[dict[str, str]] = []
        for text_node in section.findall(".//c:Text", NS):
            english = text_node.find("./c:Language[@id='English']", NS)
            arabic = text_node.find("./c:Language[@id='Arabic']", NS)
            coptic = text_node.find("./c:Language[@id='Coptic']", NS)
            en_text = normalize_spaces(english.text if english is not None else "")
            ar_text = normalize_spaces(arabic.text if arabic is not None else "")
            cop_text = normalize_spaces(coptic.text if coptic is not None else "")
            if not any([en_text, ar_text, cop_text]):
                continue
            chunks.append({"english": en_text, "arabic": ar_text, "coptic": cop_text})

        sections.append(
            ChunkSection(
                document_title=document_title,
                file_path=str(file_path),
                reference_title=normalize_spaces(title.text or ""),
                chunks=chunks,
            )
        )

    return sections


def load_copticreader_chunk_map() -> dict[str, list[ChunkSection]]:
    sections_by_ref: dict[str, list[ChunkSection]] = {}
    roots = [COPTIC_PASCHA_ROOT, COPTIC_LITURGIES_ROOT]
    for base in roots:
        if not base.exists():
            continue
        for file_path in base.rglob("*.xml"):
            if any(part in {"include", "insights", "interpretations"} for part in file_path.parts):
                continue
            for section in parse_chunk_sections_from_file(file_path):
                key = normalize_reference(section.reference_title)
                sections_by_ref.setdefault(key, []).append(section)
    return sections_by_ref


def map_boundary(boundary: int, source_len: int, target_len: int, matcher: SequenceMatcher) -> int:
    if source_len == 0:
        return 0
    if boundary <= 0:
        return 0
    if boundary >= source_len:
        return target_len

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if boundary <= i2:
            source_span = max(i2 - i1, 1)
            target_span = max(j2 - j1, 0)
            offset = boundary - i1
            if tag == "insert":
                return j2
            if target_span == 0:
                return j1
            ratio = offset / source_span
            return max(j1, min(j2, round(j1 + ratio * target_span)))

    return target_len


def split_saas_by_chunks(saas_text: str, cr_chunks: list[str]) -> tuple[list[str], float]:
    saas_words = tokenize_words(saas_text)
    cr_words = [word for chunk in cr_chunks for word in tokenize_words(chunk)]
    if not saas_words or not cr_words:
        return [], 0.0

    matcher = SequenceMatcher(
        None,
        [normalize_word(word) for word in cr_words],
        [normalize_word(word) for word in saas_words],
        autojunk=False,
    )
    similarity = matcher.ratio()

    boundaries: list[int] = []
    source_index = 0
    for chunk in cr_chunks:
        source_index += len(tokenize_words(chunk))
        boundaries.append(source_index)

    target_boundaries = [
        map_boundary(boundary, len(cr_words), len(saas_words), matcher)
        for boundary in boundaries
    ]

    segments: list[str] = []
    start = 0
    for target_end in target_boundaries:
        target_end = max(start, min(target_end, len(saas_words)))
        segment = " ".join(saas_words[start:target_end]).strip()
        segments.append(segment)
        start = target_end

    if start < len(saas_words) and segments:
        tail = " ".join(saas_words[start:]).strip()
        segments[-1] = normalize_spaces(f"{segments[-1]} {tail}")

    return segments, similarity


def make_text_row(english: str, arabic: str, coptic: str, verse_number: int) -> dict[str, Any]:
    cell: dict[str, Any] = {"english": english}
    if arabic:
        cell["arabic"] = arabic
    if coptic:
        cell["coptic"] = coptic
    cell["verse"] = verse_number
    return {"row-class": "text", "cells": [cell]}


def merge_chunk_group(items: list[dict[str, str]]) -> dict[str, str]:
    return {
        "english": normalize_spaces(" ".join(item.get("english", "") for item in items)),
        "arabic": normalize_spaces(" ".join(item.get("arabic", "") for item in items)),
        "coptic": normalize_spaces(" ".join(item.get("coptic", "") for item in items)),
    }


def chunk_ends_cleanly(chunk: dict[str, str]) -> bool:
    english = chunk.get("english", "").strip()
    return bool(re.search(r"[.!?;:]\"?$", english))


def merge_chunks_to_expected(chunks: list[dict[str, str]], expected_count: int) -> list[dict[str, str]] | None:
    if len(chunks) < expected_count or expected_count <= 0:
        return None
    if len(chunks) == expected_count:
        return chunks
    if len(chunks) > expected_count * 2:
        return None

    total_words = sum(len(tokenize_words(chunk.get("english", ""))) for chunk in chunks)
    target = max(total_words / expected_count, 1)
    groups: list[list[dict[str, str]]] = []
    current: list[dict[str, str]] = []
    current_words = 0

    for index, chunk in enumerate(chunks):
        current.append(chunk)
        current_words += len(tokenize_words(chunk.get("english", "")))

        chunks_left = len(chunks) - index - 1
        groups_left = expected_count - len(groups) - 1
        if groups_left < 0:
            return None

        must_close = chunks_left == groups_left
        close_on_target = current_words >= target and chunk_ends_cleanly(chunk)
        force_small_tail = chunks_left < groups_left

        if must_close or close_on_target or force_small_tail:
            groups.append(current)
            current = []
            current_words = 0

    if current:
        groups.append(current)

    if len(groups) != expected_count:
        return None
    return [merge_chunk_group(group) for group in groups]


def choose_best_section(reference: str, candidates: list[ChunkSection], expected_count: int) -> tuple[ChunkSection | None, list[dict[str, str]] | None, str | None]:
    exact = [candidate for candidate in candidates if len(candidate.chunks) == expected_count]
    if exact:
        return exact[0], exact[0].chunks, "exact"

    for candidate in candidates:
        merged = merge_chunks_to_expected(candidate.chunks, expected_count)
        if merged is not None:
            return candidate, merged, "merged"

    return None, None, None


def split_table_rows(table: dict[str, Any], chunk_map: dict[str, list[ChunkSection]]) -> tuple[dict[str, Any], dict[str, Any]]:
    new_table = copy.deepcopy(table)
    rows = new_table["tbodies"][0]["rows"]
    intro_rows = [row for row in rows if row["row-class"] == "intro"]
    ref_rows = [row for row in rows if row["row-class"] == "reference"]
    text_rows = [row for row in rows if row["row-class"] == "text"]

    report: dict[str, Any] = {
        "title": table.get("title"),
        "status": "skipped",
        "reason": None,
    }

    if len(ref_rows) != 1 or len(text_rows) != 1:
        report["reason"] = "table_not_single_block"
        return new_table, report

    reference = normalize_spaces(ref_rows[0]["cells"][0].get("english", ""))
    verse_numbers = parse_simple_reference(reference)
    if not verse_numbers:
        report["reason"] = "reference_not_simple_range"
        return new_table, report

    expected_count = len(verse_numbers)
    candidates = chunk_map.get(normalize_reference(reference), [])
    section, chosen_chunks, match_mode = choose_best_section(reference, candidates, expected_count)
    if section is None:
        report["reason"] = "no_matching_copticreader_section"
        report["candidate_counts"] = [len(candidate.chunks) for candidate in candidates]
        return new_table, report

    saas_text = normalize_spaces(text_rows[0]["cells"][0].get("english", ""))
    cr_english_chunks = [chunk["english"] for chunk in chosen_chunks or []]
    saas_segments, similarity = split_saas_by_chunks(saas_text, cr_english_chunks)
    if len(saas_segments) != expected_count or any(not segment for segment in saas_segments):
        report["reason"] = "alignment_failed"
        report["similarity"] = similarity
        return new_table, report

    verse_rows = []
    for verse_number, segment, chunk in zip(verse_numbers, saas_segments, chosen_chunks or []):
        verse_rows.append(
            make_text_row(
                english=segment,
                arabic=chunk.get("arabic", ""),
                coptic=chunk.get("coptic", ""),
                verse_number=verse_number,
            )
        )

    new_table["tbodies"][0]["rows"] = intro_rows + ref_rows + verse_rows
    report.update(
        {
            "status": "split",
            "reason": None,
            "similarity": similarity,
            "expected_count": expected_count,
            "matched_file": section.file_path,
            "matched_document_title": section.document_title,
            "match_mode": match_mode,
        }
    )
    return new_table, report


def main() -> None:
    structured = load_json(STRUCTURED_PATH)
    chunk_map = load_copticreader_chunk_map()

    output = copy.deepcopy(structured)
    reports: list[dict[str, Any]] = []
    split_count = 0
    skipped_count = 0

    for service in output:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                section_name = section["title"]
                new_tables = []
                for table in section["tables"]:
                    new_table, report = split_table_rows(table, chunk_map)
                    report["service"] = service_name
                    report["hour"] = hour_name
                    report["section"] = section_name
                    reports.append(report)
                    if report["status"] == "split":
                        split_count += 1
                    else:
                        skipped_count += 1
                    new_tables.append(new_table)
                section["tables"] = new_tables

    save_json(OUTPUT_PATH, output)
    save_json(
        REPORT_PATH,
        {
            "summary": {
                "tables_split": split_count,
                "tables_skipped": skipped_count,
                "total_tables": split_count + skipped_count,
            },
            "reports": reports,
        },
    )

    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {REPORT_PATH}")
    print(f"Split tables: {split_count}")
    print(f"Skipped tables: {skipped_count}")


if __name__ == "__main__":
    main()
