from __future__ import annotations

import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
HOLYWEEK_PATH = ROOT / "data" / "jsons" / "holyWeek.json"
STBASIL_PATH = ROOT / "data" / "jsons" / "readings" / "holyWeek_stbasil_structured.json"
REPORT_PATH = ROOT / "reports" / "holyweek_prophecy_inventory_report.json"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def collect_holyweek_prophecy_slots(payload: list[dict[str, Any]]) -> dict[tuple[str, str], list[dict[str, Any]]]:
    slots: dict[tuple[str, str], list[dict[str, Any]]] = {}
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                if section["title"] != "Prophecies":
                    continue
                items = []
                for index, table in enumerate(section.get("tables", []), start=1):
                    items.append(
                        {
                            "order": index,
                            "title": table.get("title") or table.get("english_title") or "",
                            "table_id": table.get("table_id"),
                        }
                    )
                slots[(service_name, hour_name)] = items
    return slots


def collect_stbasil_prophecies(payload: list[dict[str, Any]]) -> dict[tuple[str, str], list[dict[str, Any]]]:
    readings: dict[tuple[str, str], list[dict[str, Any]]] = {}
    for service in payload:
        service_name = service["service"][0]
        for hour in service["hours"]:
            hour_name = hour["hour"][0]
            for section in hour["sections"]:
                if section["title"] != "Prophecies":
                    continue
                items = []
                for index, table in enumerate(section.get("tables", []), start=1):
                    reference = ""
                    rows = table.get("tbodies", [{}])[0].get("rows", [])
                    for row in rows:
                        if row.get("row-class") == "reference":
                            reference = row["cells"][0].get("english", "").strip()
                            break
                    items.append(
                        {
                            "order": index,
                            "title": table.get("title") or table.get("english_title") or "",
                            "reference": reference,
                        }
                    )
                readings[(service_name, hour_name)] = items
    return readings


def main() -> None:
    holyweek = load_json(HOLYWEEK_PATH)
    stbasil = load_json(STBASIL_PATH)

    hw_slots = collect_holyweek_prophecy_slots(holyweek)
    st_readings = collect_stbasil_prophecies(stbasil)

    all_locations = sorted(set(hw_slots) | set(st_readings))
    location_reports = []
    extra_holyweek_slots = []
    extra_stbasil_readings = []

    for service_name, hour_name in all_locations:
        hw_items = hw_slots.get((service_name, hour_name), [])
        st_items = st_readings.get((service_name, hour_name), [])
        matched = []
        max_len = max(len(hw_items), len(st_items))
        for idx in range(max_len):
            hw_item = hw_items[idx] if idx < len(hw_items) else None
            st_item = st_items[idx] if idx < len(st_items) else None
            matched.append(
                {
                    "order": idx + 1,
                    "holyweek_slot": hw_item,
                    "stbasil_reading": st_item,
                }
            )
            if hw_item and not st_item:
                extra_holyweek_slots.append(
                    {
                        "service": service_name,
                        "hour": hour_name,
                        "order": idx + 1,
                        "holyweek_title": hw_item["title"],
                    }
                )
            if st_item and not hw_item:
                extra_stbasil_readings.append(
                    {
                        "service": service_name,
                        "hour": hour_name,
                        "order": idx + 1,
                        "stbasil_title": st_item["title"],
                        "reference": st_item["reference"],
                    }
                )

        location_reports.append(
            {
                "service": service_name,
                "hour": hour_name,
                "holyweek_prophecy_slots": len(hw_items),
                "stbasil_prophecy_readings": len(st_items),
                "matched_by_order": matched,
            }
        )

    report = {
        "summary": {
            "holyweek_locations_with_prophecies": len(hw_slots),
            "stbasil_locations_with_prophecies": len(st_readings),
            "extra_holyweek_slots_without_stbasil_match": len(extra_holyweek_slots),
            "extra_stbasil_readings_without_holyweek_slot": len(extra_stbasil_readings),
        },
        "note": "Comparison is by service/hour and prophecy order because holyWeek.json does not contain prophecy reference rows.",
        "extra_holyweek_slots_without_stbasil_match": extra_holyweek_slots,
        "extra_stbasil_readings_without_holyweek_slot": extra_stbasil_readings,
        "locations": location_reports,
    }

    save_json(REPORT_PATH, report)
    print(f"Wrote {REPORT_PATH}")
    print(report["summary"])


if __name__ == "__main__":
    main()
