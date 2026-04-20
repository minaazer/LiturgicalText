from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
QUEUE_JSON_PATH = ROOT / "data" / "logos" / "saas_holy_week_ot_queue.json"
QUEUE_TSV_PATH = ROOT / "data" / "logos" / "saas_holy_week_ot_queue.tsv"


def main() -> None:
    payload = json.loads(QUEUE_JSON_PATH.read_text(encoding="utf-8"))
    lines = ["reference\tlogos_reference\texport_file\tservice\thour\tsection\texpected_start\texpected_end"]
    for item in payload:
        lines.append(
            "\t".join(
                [
                    item["reference"],
                    item.get("logos_reference", item["reference"]),
                    item["export_file"] or "",
                    item["service"],
                    item["hour"],
                    item["section"],
                    item.get("expected_start", ""),
                    item.get("expected_end", ""),
                ]
            )
        )
    QUEUE_TSV_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {QUEUE_TSV_PATH}")
    print(f"Rows: {len(payload)}")


if __name__ == "__main__":
    main()
