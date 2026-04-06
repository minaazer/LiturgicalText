import argparse
import json
from datetime import datetime, timedelta, timezone
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(
        description="Analyze recent approved holyWeek changes that are not reflected locally."
    )
    parser.add_argument(
        "--reflection-json",
        default="reports/approval-export/holyWeek-approved-reflection.json",
    )
    parser.add_argument(
        "--days",
        type=int,
        default=30,
    )
    parser.add_argument(
        "--now",
        default="2026-03-24T23:59:59+00:00",
        help="Reference time in ISO format. Default pins this analysis to 2026-03-24 UTC.",
    )
    parser.add_argument(
        "--output-json",
        default="reports/approval-export/holyWeek-unreflected-last-30-days.json",
    )
    return parser.parse_args()


def format_short(value, limit=180):
    text = json.dumps(value, ensure_ascii=False)
    if len(text) <= limit:
        return text
    return text[: limit - 3] + "..."


def main():
    args = parse_args()
    report = json.loads(Path(args.reflection_json).read_text(encoding="utf-8"))
    now = datetime.fromisoformat(args.now)
    cutoff = now - timedelta(days=args.days)

    all_recent_changes = [
        change
        for change in report["changes"]
        if change.get("approvedAt")
        and datetime.fromisoformat(change["approvedAt"]) >= cutoff
    ]
    all_recent_changes.sort(key=lambda change: change["approvedAt"])

    recent_changes = [
        change for change in all_recent_changes if change["notReflectedPathCount"] > 0
    ]

    later_by_path = {}
    for change in all_recent_changes:
        approved_at = change["approvedAt"]
        for entry in change.get("reflectedPaths", []) + change.get("notReflectedPaths", []):
            later_by_path.setdefault(entry["path"], []).append(
                {
                    "approvedAt": approved_at,
                    "changeId": change["id"],
                    "summary": change.get("summary", ""),
                    "approvedValue": entry.get("approvedValue"),
                    "currentValue": entry.get("currentValue"),
                }
            )

    details = []
    reason_counts = {
        "superseded_by_later_approval": 0,
        "latest_approved_value_differs_from_local": 0,
    }

    for change in recent_changes:
        analyzed_entries = []
        for entry in change["notReflectedPaths"]:
            path = entry["path"]
            chain = later_by_path.get(path, [])
            later_items = [
                item
                for item in chain
                if item["approvedAt"] > change["approvedAt"]
                and item["approvedValue"] != entry["approvedValue"]
            ]
            if later_items:
                reason = "superseded_by_later_approval"
                latest = sorted(later_items, key=lambda item: item["approvedAt"])[-1]
                reason_counts[reason] += 1
                analyzed_entries.append(
                    {
                        "path": path,
                        "reason": reason,
                        "approvedValue": entry["approvedValue"],
                        "currentValue": entry["currentValue"],
                        "supersededBy": {
                            "changeId": latest["changeId"],
                            "approvedAt": latest["approvedAt"],
                            "summary": latest["summary"],
                            "approvedValue": latest["approvedValue"],
                        },
                    }
                )
            else:
                reason = "latest_approved_value_differs_from_local"
                reason_counts[reason] += 1
                analyzed_entries.append(
                    {
                        "path": path,
                        "reason": reason,
                        "approvedValue": entry["approvedValue"],
                        "currentValue": entry["currentValue"],
                    }
                )

        details.append(
            {
                "id": change["id"],
                "approvedAt": change["approvedAt"],
                "approvedBy": change.get("approvedBy"),
                "requestedBy": change.get("requestedBy"),
                "summary": change.get("summary"),
                "notReflectedPathCount": change["notReflectedPathCount"],
                "reasons": analyzed_entries,
            }
        )

    output = {
        "windowDays": args.days,
        "windowStart": cutoff.isoformat(),
        "windowEnd": now.isoformat(),
        "recentUnreflectedApprovalCount": len(recent_changes),
        "reasonCounts": reason_counts,
        "changes": details,
    }

    out_path = Path(args.output_json)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Wrote analysis to {out_path}")
    print(json.dumps(output["reasonCounts"], ensure_ascii=False, indent=2))

    print("Sample recent unreflected approvals:")
    for change in details[-10:]:
        print(f"- {change['approvedAt']} {change['id']} :: {change.get('summary') or '(no summary)'}")
        for reason in change["reasons"][:3]:
            note = ""
            if reason["reason"] == "superseded_by_later_approval":
                note = (
                    f" superseded by {reason['supersededBy']['changeId']} "
                    f"at {reason['supersededBy']['approvedAt']}"
                )
            print(
                f"  {reason['path']}: {reason['reason']}.{note}"
                f" approved={format_short(reason['approvedValue'])}"
                f" current={format_short(reason['currentValue'])}"
            )


if __name__ == "__main__":
    main()
