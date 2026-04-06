import argparse
import json
from pathlib import Path

import boto3


SENTINEL = object()


def parse_args():
    parser = argparse.ArgumentParser(
        description="Check whether approved JSON editor changes are reflected in the current local JSON file."
    )
    parser.add_argument("--profile", default="liturgicalbooks")
    parser.add_argument("--region", default="us-east-1")
    parser.add_argument("--stack-name", default="liturgicalbooks-json-editor")
    parser.add_argument("--path", default="holyWeek.json", help="JSON path in the editor/change system.")
    parser.add_argument(
        "--report-json",
        default="reports/approval-export/approval-report.json",
        help="Exported approval report JSON.",
    )
    parser.add_argument(
        "--local-json",
        default="data/jsons/holyWeek.json",
        help="Current local JSON file to compare against.",
    )
    parser.add_argument(
        "--output-json",
        default="reports/approval-export/holyWeek-approved-reflection.json",
        help="Where to write the comparison report.",
    )
    return parser.parse_args()


def get_stack_resource(session, stack_name, logical_id, resource_type):
    cf = session.client("cloudformation")
    resources = cf.describe_stack_resources(StackName=stack_name)["StackResources"]
    for resource in resources:
        if (
            resource["LogicalResourceId"] == logical_id
            and resource["ResourceType"] == resource_type
        ):
            return resource["PhysicalResourceId"]
    raise RuntimeError(f"Could not find {logical_id} in stack {stack_name}")


def read_snapshot(s3, bucket, key):
    body = s3.get_object(Bucket=bucket, Key=key)["Body"].read()
    payload = json.loads(body.decode("utf-8"))
    return payload.get("data")


def parse_path(path_str):
    segments = []
    token = ""
    i = 0
    while i < len(path_str):
        char = path_str[i]
        if char == ".":
            if token:
                segments.append(token)
                token = ""
            i += 1
            continue
        if char == "[":
            if token:
                segments.append(token)
                token = ""
            end = path_str.index("]", i)
            value = path_str[i + 1 : end]
            if value.isdigit():
                segments.append(int(value))
            else:
                segments.append(value)
            i = end + 1
            continue
        token += char
        i += 1
    if token:
        segments.append(token)
    return segments


def get_value(root, segments):
    current = root
    for segment in segments:
        try:
            current = current[segment]
        except (KeyError, IndexError, TypeError):
            return False, None
    return True, current


def clone_json(value):
    return json.loads(json.dumps(value, ensure_ascii=False))


def ensure_container(next_seg):
    return [] if isinstance(next_seg, int) else {}


def set_value(root, segments, value):
    if not segments:
        return clone_json(value)

    result = clone_json(root)
    current = result
    for index, segment in enumerate(segments[:-1]):
        next_seg = segments[index + 1]
        if isinstance(segment, int):
            while len(current) <= segment:
                current.append(ensure_container(next_seg))
            if current[segment] is None:
                current[segment] = ensure_container(next_seg)
            current = current[segment]
        else:
            if segment not in current or current[segment] is None:
                current[segment] = ensure_container(next_seg)
            current = current[segment]

    last = segments[-1]
    if isinstance(last, int):
        while len(current) <= last:
            current.append(None)
        current[last] = clone_json(value)
    else:
        current[last] = clone_json(value)
    return result


def build_effective_data(base_data, pending_data, decision_summary):
    accepted_paths = []
    if isinstance(decision_summary, dict):
        accepted_paths = decision_summary.get("acceptedPaths") or []

    if accepted_paths:
        effective = clone_json(base_data)
        for path_str in accepted_paths:
            segments = parse_path(path_str)
            exists, value = get_value(pending_data, segments)
            if exists:
                effective = set_value(effective, segments, value)
        return effective

    return clone_json(pending_data)


def collect_diffs(base_value, new_value, path_prefix=None):
    if path_prefix is None:
        path_prefix = []

    if type(base_value) != type(new_value):
        return [path_prefix]

    if isinstance(base_value, dict):
        diffs = []
        keys = sorted(set(base_value.keys()) | set(new_value.keys()))
        for key in keys:
            old_child = base_value.get(key, SENTINEL)
            new_child = new_value.get(key, SENTINEL)
            if old_child is SENTINEL or new_child is SENTINEL:
                diffs.append(path_prefix + [key])
            else:
                diffs.extend(collect_diffs(old_child, new_child, path_prefix + [key]))
        return diffs

    if isinstance(base_value, list):
        diffs = []
        max_len = max(len(base_value), len(new_value))
        for idx in range(max_len):
            old_child = base_value[idx] if idx < len(base_value) else SENTINEL
            new_child = new_value[idx] if idx < len(new_value) else SENTINEL
            if old_child is SENTINEL or new_child is SENTINEL:
                diffs.append(path_prefix + [idx])
            else:
                diffs.extend(collect_diffs(old_child, new_child, path_prefix + [idx]))
        return diffs

    if base_value != new_value:
        return [path_prefix]

    return []


def format_path(segments):
    parts = []
    for segment in segments:
        if isinstance(segment, int):
            parts.append(f"[{segment}]")
        else:
            if parts:
                parts.append(".")
            parts.append(segment)
    return "".join(parts)


def main():
    args = parse_args()
    session = boto3.Session(profile_name=args.profile, region_name=args.region)
    s3 = session.client("s3")
    snapshot_bucket = get_stack_resource(
        session, args.stack_name, "JsonSnapshotsBucket", "AWS::S3::Bucket"
    )

    report = json.loads(Path(args.report_json).read_text(encoding="utf-8"))
    local_data = json.loads(Path(args.local_json).read_text(encoding="utf-8"))

    approved_changes = [
        item
        for item in report["changeRequests"]
        if item.get("path") == args.path and item.get("status") == "approved"
    ]
    approved_changes.sort(key=lambda item: item.get("approvedAt", ""))

    results = []
    total_changed_paths = 0
    total_reflected_paths = 0

    for item in approved_changes:
        pending_data = read_snapshot(s3, snapshot_bucket, item["pendingKey"])
        base_data = read_snapshot(s3, snapshot_bucket, item["baseKey"]) if item.get("baseKey") else {}
        effective_data = build_effective_data(base_data, pending_data, item.get("decisionSummary"))
        changed_paths = collect_diffs(base_data, effective_data)

        reflected = []
        not_reflected = []
        for segments in changed_paths:
            _, approved_value = get_value(effective_data, segments)
            exists_now, current_value = get_value(local_data, segments)
            entry = {
                "path": format_path(segments),
                "approvedValue": approved_value,
                "currentExists": exists_now,
                "currentValue": current_value,
            }
            if exists_now and current_value == approved_value:
                reflected.append(entry)
            else:
                not_reflected.append(entry)

        total_changed_paths += len(changed_paths)
        total_reflected_paths += len(reflected)
        results.append(
            {
                "id": item.get("id"),
                "createdAt": item.get("createdAt"),
                "approvedAt": item.get("approvedAt"),
                "approvedBy": item.get("approvedBy"),
                "requestedBy": item.get("requestedBy"),
                "summary": item.get("summary"),
                "decisionSummary": item.get("decisionSummary"),
                "changedPathCount": len(changed_paths),
                "reflectedPathCount": len(reflected),
                "notReflectedPathCount": len(not_reflected),
                "fullyReflected": len(changed_paths) == len(reflected),
                "reflectedPaths": reflected,
                "notReflectedPaths": not_reflected,
            }
        )

    output = {
        "path": args.path,
        "localJson": args.local_json,
        "approvedChangeCount": len(results),
        "changedPathCount": total_changed_paths,
        "reflectedPathCount": total_reflected_paths,
        "notReflectedPathCount": total_changed_paths - total_reflected_paths,
        "fullyReflectedChangeCount": sum(1 for item in results if item["fullyReflected"]),
        "partiallyOrNotReflectedChangeCount": sum(1 for item in results if not item["fullyReflected"]),
        "changes": results,
    }

    output_path = Path(args.output_json)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(output, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Wrote reflection report to {output_path}")
    print(
        json.dumps(
            {
                "approvedChangeCount": output["approvedChangeCount"],
                "changedPathCount": output["changedPathCount"],
                "reflectedPathCount": output["reflectedPathCount"],
                "notReflectedPathCount": output["notReflectedPathCount"],
                "fullyReflectedChangeCount": output["fullyReflectedChangeCount"],
                "partiallyOrNotReflectedChangeCount": output["partiallyOrNotReflectedChangeCount"],
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
