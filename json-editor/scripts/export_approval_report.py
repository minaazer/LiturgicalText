import argparse
import csv
import json
from decimal import Decimal
from pathlib import Path

import boto3


def parse_args():
    parser = argparse.ArgumentParser(
        description="Export LiturgicalBooks JSON editor approval/change-request data."
    )
    parser.add_argument(
        "--profile",
        default="liturgicalbooks",
        help="AWS profile name. Default: liturgicalbooks",
    )
    parser.add_argument(
        "--region",
        default="us-east-1",
        help="AWS region. Default: us-east-1",
    )
    parser.add_argument(
        "--stack-name",
        default="liturgicalbooks-json-editor",
        help="CloudFormation stack name. Default: liturgicalbooks-json-editor",
    )
    parser.add_argument(
        "--output-dir",
        default="reports/approval-export",
        help="Folder to write the export files into.",
    )
    return parser.parse_args()


def to_jsonable(value):
    if isinstance(value, Decimal):
        return int(value) if value % 1 == 0 else float(value)
    if isinstance(value, list):
        return [to_jsonable(item) for item in value]
    if isinstance(value, dict):
        return {key: to_jsonable(item) for key, item in value.items()}
    return value


def get_table_names(session, stack_name):
    cf = session.client("cloudformation")
    resources = cf.describe_stack_resources(StackName=stack_name)["StackResources"]
    lookup = {}
    for resource in resources:
      if resource["ResourceType"] == "AWS::DynamoDB::Table":
        lookup[resource["LogicalResourceId"]] = resource["PhysicalResourceId"]
    return lookup


def scan_all(table):
    items = []
    kwargs = {}
    while True:
        response = table.scan(**kwargs)
        items.extend(response.get("Items", []))
        last_key = response.get("LastEvaluatedKey")
        if not last_key:
            return items
        kwargs["ExclusiveStartKey"] = last_key


def summarize_decision(decision_summary):
    if not isinstance(decision_summary, dict):
        return {
            "acceptedCount": "",
            "rejectedCount": "",
            "undecidedCount": "",
            "acceptedPaths": [],
            "rejectedPaths": [],
        }
    return {
        "acceptedCount": decision_summary.get("acceptedCount", ""),
        "rejectedCount": decision_summary.get("rejectedCount", ""),
        "undecidedCount": decision_summary.get("undecidedCount", ""),
        "acceptedPaths": decision_summary.get("acceptedPaths") or [],
        "rejectedPaths": decision_summary.get("rejectedPaths") or [],
    }


def main():
    args = parse_args()
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    session = boto3.Session(profile_name=args.profile, region_name=args.region)
    tables = get_table_names(session, args.stack_name)
    ddb = session.resource("dynamodb")

    change_table_name = tables["ChangeRequestsTable"]
    audit_table_name = tables["AuditLogTable"]

    change_items = [to_jsonable(item) for item in scan_all(ddb.Table(change_table_name))]
    audit_items = [to_jsonable(item) for item in scan_all(ddb.Table(audit_table_name))]

    change_items.sort(key=lambda item: item.get("createdAt", ""))
    audit_items.sort(key=lambda item: (item.get("path", ""), item.get("timestamp", "")))

    audit_by_change = {}
    for audit in audit_items:
        audit_by_change.setdefault(audit.get("changeId"), []).append(audit)

    csv_rows = []
    for item in change_items:
        decision = summarize_decision(item.get("decisionSummary"))
        csv_rows.append(
            {
                "id": item.get("id", ""),
                "path": item.get("path", ""),
                "status": item.get("status", ""),
                "createdAt": item.get("createdAt", ""),
                "requestedBy": item.get("requestedBy", ""),
                "requestedByName": item.get("requestedByName", ""),
                "requestedByEmail": item.get("requestedByEmail", ""),
                "summary": item.get("summary", ""),
                "approvedAt": item.get("approvedAt", ""),
                "approvedBy": item.get("approvedBy", ""),
                "acceptedCount": decision["acceptedCount"],
                "rejectedCount": decision["rejectedCount"],
                "undecidedCount": decision["undecidedCount"],
                "acceptedPaths": " | ".join(decision["acceptedPaths"]),
                "rejectedPaths": " | ".join(decision["rejectedPaths"]),
                "auditActions": " | ".join(
                    f'{entry.get("timestamp", "")}:{entry.get("action", "")}:{entry.get("actor", "")}'
                    for entry in audit_by_change.get(item.get("id"), [])
                ),
            }
        )

    summary = {
        "stackName": args.stack_name,
        "changeRequestsTable": change_table_name,
        "auditLogTable": audit_table_name,
        "totalChangeRequests": len(change_items),
        "statusCounts": {},
        "approvedCount": 0,
        "rejectedCount": 0,
        "pendingCount": 0,
    }

    for item in change_items:
        status = item.get("status", "unknown")
        summary["statusCounts"][status] = summary["statusCounts"].get(status, 0) + 1

    summary["approvedCount"] = summary["statusCounts"].get("approved", 0)
    summary["rejectedCount"] = summary["statusCounts"].get("rejected", 0)
    summary["pendingCount"] = summary["statusCounts"].get("pending", 0)

    json_path = output_dir / "approval-report.json"
    csv_path = output_dir / "approval-report.csv"
    summary_path = output_dir / "approval-summary.json"

    json_path.write_text(
        json.dumps(
            {
                "summary": summary,
                "changeRequests": change_items,
                "auditLog": audit_items,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    with csv_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(csv_rows[0].keys()) if csv_rows else [])
        if csv_rows:
            writer.writeheader()
            writer.writerows(csv_rows)

    summary_path.write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")

    print(f"Wrote summary to {summary_path}")
    print(f"Wrote CSV report to {csv_path}")
    print(f"Wrote JSON report to {json_path}")


if __name__ == "__main__":
    main()
