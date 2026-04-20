from __future__ import annotations

import csv
import json
import re
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
STRUCTURED_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
LOGOS_ROOT = ROOT / "data" / "logos"
MANIFEST_JSON_PATH = LOGOS_ROOT / "saas_holy_week_manifest.json"
MANIFEST_CSV_PATH = LOGOS_ROOT / "saas_holy_week_manifest.csv"
EXPORTS_DIR = LOGOS_ROOT / "saas_holy_week_exports"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "").strip())


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")
    return slug or "reading"


def main() -> None:
    payload = load_json(STRUCTURED_PATH)
    usages_by_reference: dict[str, list[dict[str, str]]] = defaultdict(list)

    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                section_name = section["title"]
                for table in section["tables"]:
                    rows = table.get("tbodies", [{}])[0].get("rows", [])
                    reference = ""
                    for row in rows:
                        if row.get("row-class") == "reference":
                            reference = normalize_spaces(row["cells"][0].get("english", ""))
                            break
                    if not reference:
                        continue
                    usages_by_reference[reference].append(
                        {
                            "service": service_name,
                            "hour": hour_name,
                            "section": section_name,
                            "table_title": table.get("title", ""),
                        }
                    )

    manifest = []
    for reference in sorted(usages_by_reference):
        slug = slugify(reference)
        manifest.append(
            {
                "reference": reference,
                "slug": slug,
                "export_file": f"{slug}.txt",
                "usage_count": len(usages_by_reference[reference]),
                "usages": usages_by_reference[reference],
            }
        )

    LOGOS_ROOT.mkdir(parents=True, exist_ok=True)
    EXPORTS_DIR.mkdir(parents=True, exist_ok=True)
    MANIFEST_JSON_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    with MANIFEST_CSV_PATH.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["reference", "slug", "export_file", "usage_count"])
        for item in manifest:
            writer.writerow(
                [item["reference"], item["slug"], item["export_file"], item["usage_count"]]
            )

    print(f"Wrote {MANIFEST_JSON_PATH}")
    print(f"Wrote {MANIFEST_CSV_PATH}")
    print(f"Unique references: {len(manifest)}")
    print(f"Export folder: {EXPORTS_DIR}")


if __name__ == "__main__":
    main()
