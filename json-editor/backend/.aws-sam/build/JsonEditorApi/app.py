import json
import os
import time
import uuid
from datetime import datetime, timezone

import boto3
from boto3.dynamodb.conditions import Key

JSON_BUCKET = os.environ.get("JSON_BUCKET", "")
SNAPSHOT_BUCKET = os.environ.get("SNAPSHOT_BUCKET", "")
SCHEMA_PREFIX = os.environ.get("SCHEMA_PREFIX", "_schemas/")
CHANGE_TABLE = os.environ.get("CHANGE_TABLE", "")
AUDIT_TABLE = os.environ.get("AUDIT_TABLE", "")
NOTIFY_FROM = os.environ.get("NOTIFY_FROM", "noreply-liturgicalbooks@theotokoseb.com")
NOTIFY_REPLY_TO = os.environ.get("NOTIFY_REPLY_TO", "liturgicalbooks@saint-mary.net")
NOTIFY_REGION = os.environ.get("NOTIFY_REGION", "us-east-2")
NOTIFY_ADMINS = os.environ.get("NOTIFY_ADMINS", "")

s3 = boto3.client("s3")
ddb = boto3.resource("dynamodb")
ses = boto3.client("ses", region_name=NOTIFY_REGION)


def response(status, body=None):
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization,Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    }
    if body is None:
        return {"statusCode": status, "headers": headers}
    return {"statusCode": status, "headers": headers, "body": json.dumps(body)}


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def get_claims(event):
    return (
        event.get("requestContext", {})
        .get("authorizer", {})
        .get("jwt", {})
        .get("claims", {})
    )


def get_user(event):
    claims = get_claims(event)
    raw_groups = claims.get("cognito:groups") or []
    if isinstance(raw_groups, str):
        groups = raw_groups.split(",") if raw_groups else []
    else:
        groups = list(raw_groups)
    return {
        "username": claims.get("cognito:username") or claims.get("username"),
        "email": claims.get("email"),
        "groups": groups,
    }


def require_config():
    missing = []
    for key, value in {
        "JSON_BUCKET": JSON_BUCKET,
        "SNAPSHOT_BUCKET": SNAPSHOT_BUCKET,
        "CHANGE_TABLE": CHANGE_TABLE,
        "AUDIT_TABLE": AUDIT_TABLE,
    }.items():
        if not value:
            missing.append(key)
    if missing:
        raise RuntimeError(f"Missing env: {', '.join(missing)}")


def list_files():
    manifest_key = "manifest.json"
    hidden_prefixes = ("bible/",)
    hidden_files = {"images.json"}
    try:
        manifest = s3.get_object(Bucket=JSON_BUCKET, Key=manifest_key)
        data = json.loads(manifest["Body"].read())
        files = data.get("files", [])
        return [
            {
                "path": item.get("path"),
                "size": item.get("size"),
                "hash": item.get("hash"),
            }
            for item in files
            if item.get("path")
            and not item["path"].startswith(hidden_prefixes)
            and item["path"] not in hidden_files
        ]
    except s3.exceptions.NoSuchKey:
        paginator = s3.get_paginator("list_objects_v2")
        entries = []
        for page in paginator.paginate(Bucket=JSON_BUCKET):
            for item in page.get("Contents", []):
                if not item["Key"].endswith(".json"):
                    continue
                if item["Key"] == manifest_key:
                    continue
                if item["Key"].startswith(hidden_prefixes) or item["Key"] in hidden_files:
                    continue
                entries.append({"path": item["Key"], "size": item.get("Size")})
        return entries


def read_json(bucket, key):
    obj = s3.get_object(Bucket=bucket, Key=key)
    return json.loads(obj["Body"].read())


def write_json(bucket, key, data):
    s3.put_object(
        Bucket=bucket,
        Key=key,
        Body=json.dumps(data, indent=2).encode("utf-8"),
        ContentType="application/json",
    )


def record_audit(path, action, actor, change_id, details=None):
    table = ddb.Table(AUDIT_TABLE)
    table.put_item(
        Item={
            "path": path,
            "timestamp": now_iso(),
            "action": action,
            "actor": actor,
            "changeId": change_id,
            "details": details or {},
        }
    )


def send_notification(to_addresses, subject, body):
    """
    Fire-and-forget SES email. Accepts a single address or a list. If sending fails,
    we log and continue so flows do not break.
    """
    if not to_addresses:
        return
    if isinstance(to_addresses, str):
        to_list = [to_addresses]
    else:
        to_list = list(to_addresses)
    to_list = [addr for addr in to_list if addr]
    if not to_list:
        return
    try:
        ses.send_email(
          Source=NOTIFY_FROM,
          Destination={"ToAddresses": to_list},
          Message={
            "Subject": {"Data": subject, "Charset": "UTF-8"},
            "Body": {"Text": {"Data": body, "Charset": "UTF-8"}},
          },
          ReplyToAddresses=[NOTIFY_REPLY_TO],
        )
    except Exception as err:  # pragma: no cover - notification best effort
        print(f"Failed to send notification to {to_address}: {err}")


def handle_list_files(event):
    return response(200, {"files": list_files()})


def handle_get_file(event, key):
    data = read_json(JSON_BUCKET, key)
    return response(200, data)


def handle_get_schema(event, key):
    if key.endswith(".json"):
        schema_key = f"{SCHEMA_PREFIX}{key[:-5]}.schema.json"
    else:
        schema_key = f"{SCHEMA_PREFIX}{key}.schema.json"
    data = read_json(JSON_BUCKET, schema_key)
    return response(200, data)


def handle_submit_change(event):
    payload = json.loads(event.get("body") or "{}")
    path = payload.get("path")
    summary = payload.get("summary", "")
    data = payload.get("data")
    if not path:
        return response(400, {"message": "Missing path"})
    if data is None:
        return response(400, {"message": "Missing data"})

    user = get_user(event)
    change_id = str(uuid.uuid4())
    created_at = now_iso()

    pending_key = f"pending/{change_id}.json"
    write_json(SNAPSHOT_BUCKET, pending_key, {"path": path, "data": data})

    table = ddb.Table(CHANGE_TABLE)
    table.put_item(
        Item={
            "id": change_id,
            "path": path,
            "summary": summary,
            "status": "pending",
            "createdAt": created_at,
            "requestedBy": user.get("username"),
            "requestedByEmail": user.get("email"),
            "pendingKey": pending_key,
        }
    )

    record_audit(path, "submitted", user.get("username"), change_id, {"summary": summary})

    admin_recipients = [addr.strip() for addr in NOTIFY_ADMINS.split(",") if addr.strip()]
    if admin_recipients:
        send_notification(
            admin_recipients,
            subject=f"[LiturgicalBooks] New change submitted: {path}",
            body=(
                f"A new change was submitted.\n\n"
                f"File: {path}\n"
                f"Summary: {summary or 'No summary provided'}\n"
                f"Requested by: {user.get('username')}\n"
                f"Requestor email: {user.get('email') or 'Unknown'}\n"
                f"Change ID: {change_id}\n"
            ),
        )
    return response(201, {"id": change_id})


def handle_list_changes(event):
    params = event.get("queryStringParameters") or {}
    status = params.get("status", "pending")

    table = ddb.Table(CHANGE_TABLE)
    index = "StatusIndex"
    items = table.query(
        IndexName=index,
        KeyConditionExpression=Key("status").eq(status),
    ).get("Items", [])
    return response(200, {"changes": items})


def handle_get_change(event, change_id):
    table = ddb.Table(CHANGE_TABLE)
    item = table.get_item(Key={"id": change_id}).get("Item")
    if not item:
        return response(404, {"message": "Change not found"})

    result = dict(item)
    pending_key = item.get("pendingKey")
    path = item.get("path")

    pending_data = None
    pending_error = None
    if pending_key:
        try:
            pending_snapshot = read_json(SNAPSHOT_BUCKET, pending_key)
            pending_data = pending_snapshot.get("data")
        except Exception as err:  # pragma: no cover - safety net for s3 read failures
            pending_error = str(err)

    current_data = None
    current_error = None
    if path:
        try:
            current_data = read_json(JSON_BUCKET, path)
        except Exception as err:  # pragma: no cover - safety net for s3 read failures
            current_error = str(err)

    result["pendingData"] = pending_data
    result["currentData"] = current_data
    if pending_error:
        result["pendingError"] = pending_error
    if current_error:
        result["currentError"] = current_error

    return response(200, {"change": result})


def handle_approve_change(event, change_id):
    user = get_user(event)
    table = ddb.Table(CHANGE_TABLE)
    item = table.get_item(Key={"id": change_id}).get("Item")
    if not item:
        return response(404, {"message": "Change not found"})
    if item.get("status") != "pending":
        return response(400, {"message": "Change is not pending"})

    pending_key = item.get("pendingKey")
    pending = read_json(SNAPSHOT_BUCKET, pending_key)
    path = pending.get("path")
    data = pending.get("data")

    write_json(JSON_BUCKET, path, data)

    snapshot_key = f"snapshots/{path}/{int(time.time())}-{change_id}.json"
    write_json(SNAPSHOT_BUCKET, snapshot_key, data)

    table.update_item(
        Key={"id": change_id},
        UpdateExpression="SET #status = :status, approvedAt = :approvedAt, approvedBy = :approvedBy",
        ExpressionAttributeNames={"#status": "status"},
        ExpressionAttributeValues={
            ":status": "approved",
            ":approvedAt": now_iso(),
            ":approvedBy": user.get("username"),
        },
    )

    record_audit(path, "approved", user.get("username"), change_id)

    send_notification(
        item.get("requestedByEmail"),
        subject=f"[LiturgicalBooks] Change approved: {path}",
        body=(
            f"Your change request has been approved.\n\n"
            f"File: {path}\n"
            f"Summary: {item.get('summary') or 'No summary provided'}\n"
            f"Approved by: {user.get('username')}\n"
            f"Change ID: {change_id}\n"
        ),
    )
    return response(200, {"message": "Approved"})


def handle_reject_change(event, change_id):
    payload = json.loads(event.get("body") or "{}")
    reason = payload.get("reason", "")
    user = get_user(event)

    table = ddb.Table(CHANGE_TABLE)
    item = table.get_item(Key={"id": change_id}).get("Item")
    if not item:
        return response(404, {"message": "Change not found"})
    if item.get("status") != "pending":
        return response(400, {"message": "Change is not pending"})

    table.update_item(
        Key={"id": change_id},
        UpdateExpression="SET #status = :status, rejectedAt = :rejectedAt, rejectedBy = :rejectedBy, rejectionReason = :reason",
        ExpressionAttributeNames={"#status": "status"},
        ExpressionAttributeValues={
            ":status": "rejected",
            ":rejectedAt": now_iso(),
            ":rejectedBy": user.get("username"),
            ":reason": reason,
        },
    )

    record_audit(item.get("path"), "rejected", user.get("username"), change_id, {"reason": reason})

    send_notification(
        item.get("requestedByEmail"),
        subject=f"[LiturgicalBooks] Change rejected: {item.get('path')}",
        body=(
            f"Your change request has been rejected.\n\n"
            f"File: {item.get('path')}\n"
            f"Summary: {item.get('summary') or 'No summary provided'}\n"
            f"Rejected by: {user.get('username')}\n"
            f"Reason: {reason or 'No reason provided'}\n"
            f"Change ID: {change_id}\n"
        ),
    )
    return response(200, {"message": "Rejected"})


def handler(event, context):
    if event.get("httpMethod") == "OPTIONS":
        return response(204)

    require_config()

    route_key = event.get("routeKey") or ""
    raw_path = event.get("rawPath") or event.get("path") or ""

    if route_key.startswith("GET /files") and raw_path == "/files":
        return handle_list_files(event)

    if raw_path.startswith("/files/") and route_key.startswith("GET /files"):
        key = raw_path.replace("/files/", "", 1)
        return handle_get_file(event, key)

    if raw_path.startswith("/schemas/") and route_key.startswith("GET /schemas"):
        key = raw_path.replace("/schemas/", "", 1)
        return handle_get_schema(event, key)

    if route_key == "POST /changes":
        return handle_submit_change(event)

    if route_key.startswith("GET /changes") and raw_path != "/changes":
        change_id = raw_path.split("/")[-1]
        return handle_get_change(event, change_id)

    if route_key.startswith("GET /changes"):
        return handle_list_changes(event)

    if raw_path.endswith("/approve"):
        change_id = raw_path.split("/")[-2]
        return handle_approve_change(event, change_id)

    if raw_path.endswith("/reject"):
        change_id = raw_path.split("/")[-2]
        return handle_reject_change(event, change_id)

    return response(404, {"message": "Not found"})
