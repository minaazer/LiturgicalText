from __future__ import annotations

import argparse
import copy
import json
import re
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
DEFAULT_INPUT = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR.json"
DEFAULT_OUTPUT = ROOT / "data" / "jsons" / "readings" / "holyWeek_CR_tashkeel.json"
DEFAULT_REPORT = ROOT / "reports" / "holyWeek_CR_tashkeel_report.json"

TARGET_SECTIONS = {
    "Prophecies",
    "English and Arabic Psalm & Gospel",
    "Pauline Epistle",
}

ARABIC_DIACRITICS = "".join(chr(code) for code in range(0x064B, 0x065F + 1))
ARABIC_RE = re.compile(r"[\u0600-\u06FF]")
ROW_MARKER_RE = re.compile(r"^\[\[ROW_(\d{4})\]\]$", re.M)


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def has_arabic(text: str) -> bool:
    return bool(text and ARABIC_RE.search(text))


def has_diacritics(text: str) -> bool:
    return any(ch in ARABIC_DIACRITICS for ch in text)


def strip_diacritics(text: str) -> str:
    return re.sub(f"[{re.escape(ARABIC_DIACRITICS)}]", "", text)


def get_text_rows(table: dict[str, Any]) -> list[dict[str, Any]]:
    return [row for row in table.get("tbodies", [{}])[0].get("rows", []) if row.get("row-class") == "text"]


@dataclass
class EngineInfo:
    name: str
    diacritize_text: Any


def build_engine(engine_name: str) -> EngineInfo:
    last_error = None

    if engine_name in {"auto", "arabic-diacritizer"}:
        try:
            print("[engine] Loading arabic-diacritizer...")
            from diacritize import Diacritizer  # type: ignore

            model = Diacritizer.from_pretrained()
            print("[engine] arabic-diacritizer ready.")

            def run(text: str) -> str:
                return model.diacritize(text)

            return EngineInfo("arabic-diacritizer", run)
        except Exception as exc:
            last_error = exc
            if engine_name != "auto":
                raise

    if engine_name in {"auto", "camel"}:
        try:
            print("[engine] Loading camel_tools builtin diacritizer...")
            from camel_tools.diacritize import builtin_diacritizer  # type: ignore

            camel = builtin_diacritizer()
            print("[engine] camel_tools ready.")

            def run(text: str) -> str:
                return camel.diacritize(text)

            return EngineInfo("camel_tools", run)
        except Exception as exc:
            last_error = exc
            if engine_name != "auto":
                raise

    if engine_name in {"auto", "mishkal"}:
        try:
            print("[engine] Loading mishkal...")
            from mishkal.tashkeel import TashkeelClass  # type: ignore

            mishkal = TashkeelClass()
            try:
                mishkal.disable_stat_tashkeel()
            except Exception:
                pass
            try:
                mishkal.enable_semantic_analysis()
                mishkal.enable_syntaxic_analysis()
                mishkal.disable_last_mark()
            except Exception:
                pass

            def run(text: str) -> str:
                return mishkal.tashkeel(text)

            print("[engine] mishkal ready.")
            return EngineInfo("mishkal", run)
        except Exception as exc:
            last_error = exc
            if engine_name != "auto":
                raise

    raise RuntimeError(f"Could not initialize diacritization engine '{engine_name}'. Last error: {last_error}")


def diacritize_line(engine: EngineInfo, text: str) -> str:
    if not has_arabic(text):
        return text
    cleaned = strip_diacritics(text) if has_diacritics(text) else text
    return engine.diacritize_text(cleaned)


def build_marked_reading(rows: list[dict[str, Any]]) -> str:
    parts = []
    for idx, row in enumerate(rows):
        arabic = row["cells"][0].get("arabic", "")
        parts.append(f"[[ROW_{idx:04d}]]")
        parts.append(arabic)
    return "\n".join(parts)


def split_marked_output(output_text: str, expected_count: int) -> list[str] | None:
    matches = list(ROW_MARKER_RE.finditer(output_text))
    if len(matches) != expected_count:
        return None

    rows: list[str] = []
    for i, match in enumerate(matches):
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(output_text)
        rows.append(output_text[start:end].strip())
    return rows


def diacritize_reading(engine: EngineInfo, rows: list[dict[str, Any]]) -> tuple[list[str], str]:
    marked = build_marked_reading(rows)
    result = diacritize_line(engine, marked)
    split = split_marked_output(result, len(rows))
    if split is not None and all(split):
        return split, "reading"

    # Fallback: preserve row boundaries if the engine mangles markers.
    return [diacritize_line(engine, row["cells"][0].get("arabic", "")) for row in rows], "row_fallback"


def iter_target_tables(payload: list[dict[str, Any]]):
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                if section["title"] not in TARGET_SECTIONS:
                    continue
                for table in section.get("tables", []):
                    if "tbodies" not in table:
                        continue
                    yield service_name, hour_name, section, table


def matches_filter(value: str, patterns: list[str] | None) -> bool:
    if not patterns:
        return True
    lowered = value.casefold()
    return any(pattern.casefold() in lowered for pattern in patterns)


def main() -> None:
    parser = argparse.ArgumentParser(description="Diacritize Arabic reading text in holyWeek_CR.json.")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    parser.add_argument("--engine", choices=["auto", "arabic-diacritizer", "camel", "mishkal"], default="auto")
    parser.add_argument("--progress-every", type=int, default=10, help="Print progress every N processed tables.")
    parser.add_argument("--service", action="append", help="Only process services whose title contains this text. Repeatable.")
    parser.add_argument("--hour", action="append", help="Only process hours whose title contains this text. Repeatable.")
    parser.add_argument("--section", action="append", help="Only process sections whose title contains this text. Repeatable.")
    parser.add_argument("--title", action="append", help="Only process tables whose title contains this text. Repeatable.")
    parser.add_argument("--limit", type=int, default=0, help="Process at most N matching tables (0 = no limit).")
    args = parser.parse_args()

    payload = load_json(args.input)
    output = copy.deepcopy(payload)
    print(f"[start] Input: {args.input}")
    print(f"[start] Output: {args.output}")
    print(f"[start] Report: {args.report}")
    engine = build_engine(args.engine)

    processed_tables = 0
    processed_rows = 0
    changed_rows = 0
    fallback_tables = []
    failures = []
    touched = []
    all_candidates = []
    for service_name, hour_name, section, table in iter_target_tables(output):
        if not matches_filter(service_name, args.service):
            continue
        if not matches_filter(hour_name, args.hour):
            continue
        if not matches_filter(section["title"], args.section):
            continue
        title = table.get("english_title") or table.get("title") or ""
        if not matches_filter(title, args.title):
            continue
        if not any(has_arabic(row["cells"][0].get("arabic", "")) for row in get_text_rows(table)):
            continue
        all_candidates.append((service_name, hour_name, section["title"], title))
    if args.limit and args.limit > 0:
        all_candidates = all_candidates[: args.limit]
    total_candidate_tables = len(all_candidates)
    print(f"[start] Candidate tables: {total_candidate_tables}")
    started_at = time.time()

    candidate_set = {(a, b, c, d) for a, b, c, d in all_candidates}
    processed_so_far = 0
    for service_name, hour_name, section, table in iter_target_tables(output):
        text_rows = get_text_rows(table)
        arabic_rows = [row for row in text_rows if has_arabic(row["cells"][0].get("arabic", ""))]
        if not arabic_rows:
            continue

        title = table.get("english_title") or table.get("title") or ""
        candidate_key = (service_name, hour_name, section["title"], title)
        if candidate_key not in candidate_set:
            continue

        processed_tables += 1
        processed_so_far += 1
        processed_rows += len(arabic_rows)
        print(
            f"[table {processed_so_far}/{total_candidate_tables}] "
            f"{service_name} | {hour_name} | {section['title']} | {title}"
        )

        try:
            diacritized_rows, mode = diacritize_reading(engine, arabic_rows)
        except Exception as exc:
            failures.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "section": section["title"],
                    "title": title,
                    "error": str(exc),
                }
            )
            continue

        if mode == "row_fallback":
            fallback_tables.append(
                {
                    "service": service_name,
                    "hour": hour_name,
                    "section": section["title"],
                    "title": title,
                }
            )

        changed_in_table = 0
        for row, diacritized in zip(arabic_rows, diacritized_rows):
            cell = row["cells"][0]
            original = cell.get("arabic", "")
            if diacritized and diacritized != original:
                cell["arabic"] = diacritized
                changed_rows += 1
                changed_in_table += 1

        touched.append(
            {
                "service": service_name,
                "hour": hour_name,
                "section": section["title"],
                "title": title,
                "row_count": len(arabic_rows),
                "changed_rows": changed_in_table,
                "mode": mode,
            }
        )

        if args.progress_every > 0 and processed_so_far % args.progress_every == 0:
            elapsed = time.time() - started_at
            print(
                f"[progress] processed={processed_so_far}/{total_candidate_tables} "
                f"changed_rows={changed_rows} failures={len(failures)} "
                f"row_fallbacks={len(fallback_tables)} elapsed={elapsed:.1f}s"
            )

    report = {
        "input": str(args.input),
        "output": str(args.output),
        "engine": engine.name,
        "target_sections": sorted(TARGET_SECTIONS),
        "processed_table_count": processed_tables,
        "processed_row_count": processed_rows,
        "changed_row_count": changed_rows,
        "row_fallback_count": len(fallback_tables),
        "row_fallback_tables": fallback_tables,
        "failure_count": len(failures),
        "failures": failures,
        "touched_tables": touched,
    }

    save_json(args.output, output)
    save_json(args.report, report)
    elapsed = time.time() - started_at
    print(f"Wrote {args.output}")
    print(f"Engine: {engine.name}")
    print(f"Processed tables: {processed_tables}")
    print(f"Changed rows: {changed_rows}")
    print(f"Row fallback tables: {len(fallback_tables)}")
    print(f"Failures: {len(failures)}")
    print(f"Elapsed seconds: {elapsed:.1f}")


if __name__ == "__main__":
    main()
