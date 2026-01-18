import json
import copy
import hashlib
import os
import secrets
import sys
import time
import uuid
import traceback
from datetime import datetime, timezone
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import boto3
from boto3.dynamodb.conditions import Key
from botocore.config import Config

JSON_BUCKET = os.environ.get("JSON_BUCKET", "")
SNAPSHOT_BUCKET = os.environ.get("SNAPSHOT_BUCKET", "")
SCHEMA_PREFIX = os.environ.get("SCHEMA_PREFIX", "_schemas/")
CHANGE_TABLE = os.environ.get("CHANGE_TABLE", "")
AUDIT_TABLE = os.environ.get("AUDIT_TABLE", "")
EMAIL_VERIFY_TABLE = os.environ.get("EMAIL_VERIFY_TABLE", "")
EMAIL_VERIFY_TTL_SECONDS = int(os.environ.get("EMAIL_VERIFY_TTL_SECONDS", "900"))
USER_POOL_ID = os.environ.get("USER_POOL_ID", "")
USER_POOL_REGION = os.environ.get("USER_POOL_REGION", "")
EDITOR_LOGIN_URL = os.environ.get(
    "EDITOR_LOGIN_URL",
    "http://liturgicalbooks-editor-ui.s3-website-us-east-1.amazonaws.com/",
)
NOTIFY_FROM = os.environ.get("NOTIFY_FROM", "noreply-liturgicalbooks@theotokoseb.com")
NOTIFY_REPLY_TO = os.environ.get("NOTIFY_REPLY_TO", "liturgicalbooks@saint-mary.net")
NOTIFY_REGION = os.environ.get("NOTIFY_REGION", "us-east-2")
NOTIFY_ADMINS = os.environ.get("NOTIFY_ADMINS", "")
REPORTS_EMAIL_TO = os.environ.get("REPORTS_EMAIL_TO", NOTIFY_REPLY_TO)
REPORTS_PREFIX = os.environ.get("REPORTS_PREFIX", "reports/")
REPORTS_MAX_UPLOAD_BYTES = int(os.environ.get("REPORTS_MAX_UPLOAD_BYTES", "41943040"))
REPORTS_MAX_EMAIL_BYTES = int(os.environ.get("REPORTS_MAX_EMAIL_BYTES", "9437184"))

s3 = boto3.client("s3", config=Config(signature_version="s3v4"))

_s3_region_clients = {}


def bucket_region(bucket):
    cached = _s3_region_clients.get((bucket, "region"))
    if cached:
        return cached
    try:
        region = s3.get_bucket_location(Bucket=bucket).get("LocationConstraint")
    except Exception:
        region = None
    if region in ("", None):
        region = "us-east-1"
    _s3_region_clients[(bucket, "region")] = region
    return region


def s3_for_bucket(bucket):
    region = bucket_region(bucket)
    client = _s3_region_clients.get((bucket, "client"))
    if client:
        return client
    client = boto3.client("s3", region_name=region, config=Config(signature_version="s3v4"))
    _s3_region_clients[(bucket, "client")] = client
    return client
ddb = boto3.resource("dynamodb")
ses = boto3.client("ses", region_name=NOTIFY_REGION)
cognito = boto3.client("cognito-idp", region_name=USER_POOL_REGION or None)


def response(status, body=None):
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization,Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
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


def is_superadmin(event):
    user = get_user(event)
    groups = user.get("groups") or []
    if "superadmin" in groups:
        return True
    username = user.get("username")
    if not username:
        return False
    try:
        return "superadmin" in get_user_groups(username)
    except Exception:
        return False


def normalize_identifier(identifier):
    return (identifier or "").strip()


def attrs_to_dict(attr_list):
    return {item.get("Name"): item.get("Value") for item in (attr_list or [])}


def get_user_by_identifier(identifier):
    identifier = normalize_identifier(identifier)
    if not identifier:
        return None
    try:
        if "@" in identifier:
            resp = cognito.list_users(UserPoolId=USER_POOL_ID, Filter=f'email = "{identifier}"')
            users = resp.get("Users") or []
            if not users:
                return None
            user = users[0]
            attrs = attrs_to_dict(user.get("Attributes"))
            return {
                "username": user.get("Username"),
                "email": attrs.get("email"),
                "email_verified": attrs.get("email_verified") == "true",
            }
        resp = cognito.admin_get_user(UserPoolId=USER_POOL_ID, Username=identifier)
        attrs = attrs_to_dict(resp.get("UserAttributes"))
        return {
            "username": resp.get("Username"),
            "email": attrs.get("email"),
            "email_verified": attrs.get("email_verified") == "true",
        }
    except cognito.exceptions.UserNotFoundException:
        return None
    except Exception:
        return None


def get_user_groups(username):
    resp = cognito.admin_list_groups_for_user(UserPoolId=USER_POOL_ID, Username=username)
    return [group.get("GroupName") for group in (resp.get("Groups") or []) if group.get("GroupName")]


def map_user_summary(user):
    attrs = attrs_to_dict(user.get("Attributes"))
    return {
        "username": user.get("Username"),
        "email": attrs.get("email"),
        "name": attrs.get("name"),
        "email_verified": attrs.get("email_verified") == "true",
        "status": user.get("UserStatus"),
        "enabled": user.get("Enabled"),
        "createdAt": user.get("UserCreateDate").isoformat() if user.get("UserCreateDate") else None,
        "updatedAt": user.get("UserLastModifiedDate").isoformat() if user.get("UserLastModifiedDate") else None,
    }


def handle_list_users(event):
    if not is_superadmin(event):
        return response(403, {"message": "Forbidden"})
    params = event.get("queryStringParameters") or {}
    limit = int(params.get("limit") or 25)
    token = params.get("nextToken") or None
    query = normalize_identifier(params.get("q"))
    limit = max(1, min(limit, 60))
    if query:
        matches = []
        scan_token = token
        query_lower = query.lower()
        while len(matches) < limit:
            args = {"UserPoolId": USER_POOL_ID, "Limit": 60}
            if scan_token:
                args["PaginationToken"] = scan_token
            resp = cognito.list_users(**args)
            for user in resp.get("Users") or []:
                summary = map_user_summary(user)
                haystack = " ".join(
                    [
                        summary.get("username") or "",
                        summary.get("email") or "",
                        summary.get("name") or "",
                    ]
                ).lower()
                if query_lower in haystack:
                    matches.append(summary)
                    if len(matches) >= limit:
                        break
            scan_token = resp.get("PaginationToken")
            if not scan_token:
                break
        return response(200, {"users": matches, "nextToken": scan_token})
    args = {"UserPoolId": USER_POOL_ID, "Limit": limit}
    if token:
        args["PaginationToken"] = token
    resp = cognito.list_users(**args)
    users = [map_user_summary(u) for u in resp.get("Users") or []]
    return response(200, {"users": users, "nextToken": resp.get("PaginationToken")})


def handle_get_user_detail(event, username):
    if not is_superadmin(event):
        return response(403, {"message": "Forbidden"})
    if not username:
        return response(400, {"message": "Missing username"})
    detail = cognito.admin_get_user(UserPoolId=USER_POOL_ID, Username=username)
    attrs = attrs_to_dict(detail.get("UserAttributes"))
    groups = get_user_groups(username)
    return response(
        200,
        {
            "user": {
                "username": detail.get("Username"),
                "email": attrs.get("email"),
                "name": attrs.get("name"),
                "email_verified": attrs.get("email_verified") == "true",
                "status": detail.get("UserStatus"),
                "enabled": detail.get("Enabled"),
                "createdAt": detail.get("UserCreateDate").isoformat() if detail.get("UserCreateDate") else None,
                "updatedAt": detail.get("UserLastModifiedDate").isoformat() if detail.get("UserLastModifiedDate") else None,
                "groups": groups,
            }
        },
    )


def handle_update_user(event, username):
    if not is_superadmin(event):
        return response(403, {"message": "Forbidden"})
    if not username:
        return response(400, {"message": "Missing username"})
    payload = json.loads(event.get("body") or "{}")
    attrs = payload.get("attributes") or {}
    updates = []
    if "email" in attrs and attrs.get("email") is not None:
        updates.append({"Name": "email", "Value": str(attrs.get("email")).strip()})
    if "name" in attrs and attrs.get("name") is not None:
        updates.append({"Name": "name", "Value": str(attrs.get("name")).strip()})
    if "email_verified" in payload:
        updates.append({"Name": "email_verified", "Value": "true" if payload.get("email_verified") else "false"})
    if updates:
        cognito.admin_update_user_attributes(UserPoolId=USER_POOL_ID, Username=username, UserAttributes=updates)
    if "enabled" in payload:
        if payload.get("enabled"):
            cognito.admin_enable_user(UserPoolId=USER_POOL_ID, Username=username)
        else:
            cognito.admin_disable_user(UserPoolId=USER_POOL_ID, Username=username)
    if "groups" in payload and payload.get("groups") is not None:
        desired_list = payload.get("groups") or []
        if len(desired_list) != 1:
            return response(400, {"message": "Exactly one role is required"})
        desired = set(desired_list)
        current = set(get_user_groups(username))
        for group in current - desired:
            cognito.admin_remove_user_from_group(UserPoolId=USER_POOL_ID, Username=username, GroupName=group)
        for group in desired - current:
            cognito.admin_add_user_to_group(UserPoolId=USER_POOL_ID, Username=username, GroupName=group)
    return handle_get_user_detail(event, username)


def handle_create_user(event):
    if not is_superadmin(event):
        return response(403, {"message": "Forbidden"})
    payload = json.loads(event.get("body") or "{}")
    username = normalize_identifier(payload.get("username"))
    email = normalize_identifier(payload.get("email"))
    name = normalize_identifier(payload.get("name"))
    temp_password = payload.get("temporaryPassword")
    send_invite = payload.get("sendInvite", True)
    groups = payload.get("groups") or []
    if not username or not email:
        return response(400, {"message": "Username and email are required"})
    if len(groups) != 1:
        return response(400, {"message": "Exactly one role is required"})
    user_attrs = [{"Name": "email", "Value": email}]
    if name:
        user_attrs.append({"Name": "name", "Value": name})
    if "email_verified" in payload:
        user_attrs.append({"Name": "email_verified", "Value": "true" if payload.get("email_verified") else "false"})
    if not temp_password:
        alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789"
        specials = "!@#"
        temp_password = (
            secrets.choice(alphabet)
            + secrets.choice(alphabet)
            + secrets.choice(specials)
            + "".join(secrets.choice(alphabet + specials) for _ in range(9))
        )
    args = {
        "UserPoolId": USER_POOL_ID,
        "Username": username,
        "UserAttributes": user_attrs,
        "TemporaryPassword": temp_password,
    }
    args["MessageAction"] = "SUPPRESS"
    resp = cognito.admin_create_user(**args)
    for group in groups:
        cognito.admin_add_user_to_group(UserPoolId=USER_POOL_ID, Username=username, GroupName=group)
    if send_invite:
        send_notification(
            email,
            subject="[LiturgicalBooks] Temporary password",
            body=(
                "Here is your temporary password for the LiturgicalBooks JSON Editor:\n\n"
                f"Temporary password: {temp_password}\n\n"
                "You will be asked to set a new password on first sign-in."
            ),
            html_body=(
                "<div style=\"font-family:Georgia,serif;color:#0f1a2a;\">"
                "<h2>LiturgicalBooks JSON Editor</h2>"
                "<p>Here is your temporary password:</p>"
                f"<p style=\"font-size:18px;\"><strong>{temp_password}</strong></p>"
                "<p>You will be asked to set a new password on first sign-in.</p>"
                "</div>"
            ),
        )
        send_notification(
            email,
            subject="[LiturgicalBooks] Your login details",
            body=(
                "Use the details below to access the LiturgicalBooks JSON Editor:\n\n"
                f"Username: {username}\n"
                f"Login URL: {EDITOR_LOGIN_URL}\n"
            ),
            html_body=(
                "<div style=\"font-family:Georgia,serif;color:#0f1a2a;\">"
                "<h2>LiturgicalBooks JSON Editor</h2>"
                "<p>Use the details below to sign in:</p>"
                f"<p><strong>Username:</strong> {username}</p>"
                f"<p><strong>Login URL:</strong> <a href=\"{EDITOR_LOGIN_URL}\">{EDITOR_LOGIN_URL}</a></p>"
                "</div>"
            ),
        )
    created = resp.get("User") or {}
    return response(201, {"user": map_user_summary(created)})


def handle_delete_user(event, username):
    if not is_superadmin(event):
        return response(403, {"message": "Forbidden"})
    if not username:
        return response(400, {"message": "Missing username"})
    cognito.admin_delete_user(UserPoolId=USER_POOL_ID, Username=username)
    return response(204)


def require_config():
    missing = []
    for key, value in {
        "JSON_BUCKET": JSON_BUCKET,
        "SNAPSHOT_BUCKET": SNAPSHOT_BUCKET,
        "CHANGE_TABLE": CHANGE_TABLE,
        "AUDIT_TABLE": AUDIT_TABLE,
        "EMAIL_VERIFY_TABLE": EMAIL_VERIFY_TABLE,
        "USER_POOL_ID": USER_POOL_ID,
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
        Body=json.dumps(data, indent=2, ensure_ascii=False).encode("utf-8"),
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


def send_notification(to_addresses, subject, body, html_body=None):
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
        message_body = {"Text": {"Data": body, "Charset": "UTF-8"}}
        if html_body:
            message_body["Html"] = {"Data": html_body, "Charset": "UTF-8"}
        ses.send_email(
            Source=NOTIFY_FROM,
            Destination={"ToAddresses": to_list},
            Message={
                "Subject": {"Data": subject, "Charset": "UTF-8"},
                "Body": message_body,
            },
            ReplyToAddresses=[NOTIFY_REPLY_TO],
        )
    except Exception as err:  # pragma: no cover - notification best effort
        print(f"Failed to send notification to {to_address}: {err}")


def sanitize_filename(filename):
    safe = "".join(c if c.isalnum() or c in "._-" else "_" for c in filename)
    return safe or "attachment"


def get_report_prefix():
    return REPORTS_PREFIX if REPORTS_PREFIX.endswith("/") else f"{REPORTS_PREFIX}/"


def presign_upload(bucket, key, content_type):
    return s3_for_bucket(bucket).generate_presigned_url(
        "put_object",
        Params={"Bucket": bucket, "Key": key, "ContentType": content_type},
        ExpiresIn=3600,
    )


def presign_download(bucket, key):
    return s3_for_bucket(bucket).generate_presigned_url(
        "get_object",
        Params={"Bucket": bucket, "Key": key},
        ExpiresIn=60 * 60 * 24 * 7,
    )


def is_missing_s3_key(err):
    response = getattr(err, "response", {}) or {}
    code = response.get("Error", {}).get("Code")
    return code in {"NoSuchKey", "404"}


def find_latest_pending_change(table, path, username):
    start_key = None
    while True:
        query_kwargs = {
            "IndexName": "StatusIndex",
            "KeyConditionExpression": Key("status").eq("pending"),
            "ScanIndexForward": False,
            "Limit": 50,
        }
        if start_key:
            query_kwargs["ExclusiveStartKey"] = start_key
        response_data = table.query(**query_kwargs)
        for item in response_data.get("Items", []):
            if item.get("path") != path:
                continue
            if username and item.get("requestedBy") != username:
                continue
            return item
        start_key = response_data.get("LastEvaluatedKey")
        if not start_key:
            break
    return None


def parse_diff_path(path):
    if not path or path in {"<root>", "root"}:
        return []
    segments = []
    buffer = ""
    i = 0
    while i < len(path):
        ch = path[i]
        if ch == ".":
            if buffer:
                segments.append(buffer)
                buffer = ""
            i += 1
            continue
        if ch == "[":
            if buffer:
                segments.append(buffer)
                buffer = ""
            close = path.find("]", i)
            raw = path[i + 1 : close if close != -1 else None]
            try:
                idx = int(raw)
                segments.append(idx)
            except (TypeError, ValueError):
                pass
            i = len(path) if close == -1 else close + 1
            continue
        buffer += ch
        i += 1
    if buffer:
        segments.append(buffer)
    return segments


def get_value_at_path(data, segments):
    current = data
    for seg in segments:
        if current is None:
            return False, None
        if isinstance(seg, int):
            if not isinstance(current, list) or seg >= len(current):
                return False, None
            current = current[seg]
        else:
            if not isinstance(current, dict) or seg not in current:
                return False, None
            current = current[seg]
    return True, current


def set_value_at_path(root, segments, value):
    if not segments:
        return value
    if root is None or not isinstance(root, (dict, list)):
        root = [] if isinstance(segments[0], int) else {}
    current = root
    parent = None
    parent_key = None

    for i, seg in enumerate(segments):
        is_last = i == len(segments) - 1
        next_seg = segments[i + 1] if not is_last else None

        if isinstance(seg, int):
            if not isinstance(current, list):
                replacement = []
                if parent is None:
                    root = replacement
                else:
                    parent[parent_key] = replacement
                current = replacement
            while len(current) <= seg:
                current.append(None)
            if is_last:
                current[seg] = value
                return root
            if current[seg] is None or not isinstance(current[seg], (dict, list)):
                current[seg] = [] if isinstance(next_seg, int) else {}
            parent = current
            parent_key = seg
            current = current[seg]
        else:
            if not isinstance(current, dict):
                replacement = {}
                if parent is None:
                    root = replacement
                else:
                    parent[parent_key] = replacement
                current = replacement
            if is_last:
                current[seg] = value
                return root
            if seg not in current or not isinstance(current[seg], (dict, list)):
                current[seg] = [] if isinstance(next_seg, int) else {}
            parent = current
            parent_key = seg
            current = current[seg]
    return root


def delete_at_path(root, segments):
    if not segments:
        return None
    current = root
    for seg in segments[:-1]:
        if current is None:
            return root
        current = current[seg] if isinstance(seg, int) else current.get(seg)
    last = segments[-1]
    if current is None:
        return root
    if isinstance(last, int):
        if isinstance(current, list) and 0 <= last < len(current):
            current.pop(last)
    else:
        if isinstance(current, dict) and last in current:
            del current[last]
    return root


def apply_accepted_paths(base_data, pending_data, accepted_paths):
    result = copy.deepcopy(base_data)
    entries = []
    for path in accepted_paths:
        segments = parse_diff_path(path)
        entries.append({"segments": segments})
    entries.sort(
        key=lambda item: (
            -len(item["segments"]),
            [
                (1, -seg) if isinstance(seg, int) else (0, seg)
                for seg in item["segments"]
            ],
        )
    )

    for entry in entries:
        segments = entry["segments"]
        exists, value = get_value_at_path(pending_data, segments)
        if exists:
            result = set_value_at_path(result, segments, value)
        else:
            result = delete_at_path(result, segments)
    return result


def truncate_for_email(val, max_len=200):
    if val is None:
        return "(none)"
    if isinstance(val, (dict, list)):
        rendered = json.dumps(val, ensure_ascii=False)
    else:
        rendered = str(val)
    if len(rendered) > max_len:
        return rendered[: max_len - 3] + "..."
    return rendered


def build_decision_lines(paths, pending_data, reasons=None):
    if not paths:
        return "  (none)"
    reasons = reasons or {}
    lines = []
    for path in paths:
        segments = parse_diff_path(path)
        exists, value = get_value_at_path(pending_data, segments)
        preview = truncate_for_email(value) if exists else "(none)"
        reason = reasons.get(path)
        reason_line = f"\n    reason: \"{truncate_for_email(reason, 120)}\"" if reason else ""
        lines.append(f"- {path}\n    value: \"{preview}\"{reason_line}")
    return "\n".join(lines)


def build_decision_html(title, paths, pending_data, color, reasons=None):
    if not paths:
        return f"<p><strong style=\"color:{color};\">{title}</strong><br><em>(none)</em></p>"
    reasons = reasons or {}
    rows = []
    for path in paths:
        segments = parse_diff_path(path)
        exists, value = get_value_at_path(pending_data, segments)
        preview = truncate_for_email(value) if exists else "(none)"
        reason = reasons.get(path)
        reason_html = f"<div style=\"color:#7b8794;\">reason: \"{truncate_for_email(reason, 120)}\"</div>" if reason else ""
        rows.append(
            f"<div style=\"margin:6px 0 10px;\">"
            f"<div style=\"font-family:monospace;color:#2b3440;\">{path}</div>"
            f"<div style=\"color:#5b6675;\">value: \"{preview}\"</div>"
            f"{reason_html}"
            f"</div>"
        )
    return f"<div style=\"margin:12px 0;\"><strong style=\"color:{color};\">{title}</strong>{''.join(rows)}</div>"


def send_report_email(subject, body, attachments, reply_to=None):
    msg = MIMEMultipart()
    msg["Subject"] = subject
    msg["From"] = NOTIFY_FROM
    msg["To"] = REPORTS_EMAIL_TO
    msg["Reply-To"] = reply_to or NOTIFY_REPLY_TO
    msg.attach(MIMEText(body, "plain", "utf-8"))

    total_bytes = 0
    for attachment in attachments:
        if not attachment.get("key"):
            continue
        size = attachment.get("size") or 0
        if size <= 0:
            continue
        if total_bytes + size > REPORTS_MAX_EMAIL_BYTES:
            continue
        try:
            obj = s3.get_object(Bucket=SNAPSHOT_BUCKET, Key=attachment["key"])
        except Exception as err:  # pragma: no cover - defensive
            print(f"Failed to load attachment {attachment['key']}: {err}")
            continue
        payload = obj["Body"].read()
        content_type = attachment.get("contentType") or "application/octet-stream"
        if "/" in content_type:
            main_type, sub_type = content_type.split("/", 1)
        else:
            main_type, sub_type = "application", "octet-stream"
        part = MIMEBase(main_type, sub_type)
        part.set_payload(payload)
        encoders.encode_base64(part)
        part.add_header(
            "Content-Disposition",
            f'attachment; filename="{sanitize_filename(attachment.get("name") or "attachment")}"',
        )
        msg.attach(part)
        total_bytes += size

    ses.send_raw_email(
        Source=NOTIFY_FROM,
        Destinations=[REPORTS_EMAIL_TO],
        RawMessage={"Data": msg.as_string()},
    )


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

    table = ddb.Table(CHANGE_TABLE)
    base_data = None
    base_source = None
    previous_item = find_latest_pending_change(table, path, user.get("username"))
    if previous_item and previous_item.get("pendingKey"):
        try:
            previous_snapshot = read_json(SNAPSHOT_BUCKET, previous_item["pendingKey"])
            base_data = previous_snapshot.get("data")
            base_source = "pending"
        except Exception:
            base_data = None

    if base_source is None:
        try:
            base_data = read_json(JSON_BUCKET, path)
            base_source = "current"
        except Exception as err:
            if is_missing_s3_key(err):
                base_data = None
                base_source = "empty"
            else:
                base_data = None
                base_source = "unknown"

    pending_key = f"pending/{change_id}.json"
    write_json(SNAPSHOT_BUCKET, pending_key, {"path": path, "data": data})
    base_key = f"baseline/{change_id}.json"
    write_json(SNAPSHOT_BUCKET, base_key, {"path": path, "data": base_data, "source": base_source})

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
            "baseKey": base_key,
            "baseSource": base_source,
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
    base_key = item.get("baseKey")
    path = item.get("path")

    pending_data = None
    pending_error = None
    pending_size = None
    if pending_key:
        try:
            pending_snapshot = read_json(SNAPSHOT_BUCKET, pending_key)
            pending_data = pending_snapshot.get("data")
            pending_size = len(json.dumps(pending_snapshot).encode("utf-8"))
        except Exception as err:  # pragma: no cover - safety net for s3 read failures
            pending_error = str(err)

    base_data = None
    base_error = None
    base_size = None
    if base_key:
        try:
            base_snapshot = read_json(SNAPSHOT_BUCKET, base_key)
            base_data = base_snapshot.get("data")
            base_size = len(json.dumps(base_snapshot).encode("utf-8"))
        except Exception as err:  # pragma: no cover - safety net for s3 read failures
            base_error = str(err)

    current_data = None
    current_error = None
    current_size = None
    if path:
        try:
            current_data = read_json(JSON_BUCKET, path)
            current_size = len(json.dumps(current_data).encode("utf-8"))
        except Exception as err:  # pragma: no cover - safety net for s3 read failures
            current_error = str(err)

    def truncate_value(val, max_len=500):
        if isinstance(val, str) and len(val) > max_len:
            return val[: max_len - 3] + "..."
        return val

    diff = []
    diff_limit = 500
    sentinel = object()

    def path_to_str(parts):
        out = []
        for p in parts:
            if isinstance(p, int):
                out.append(f"[{p}]")
            else:
                if out:
                    out.append(".")
                out.append(str(p))
        return "".join(out) or "<root>"

    def walk(a, b, path):
        if len(diff) >= diff_limit:
            return
        if a is sentinel:
            diff.append({"path": path_to_str(path), "before": None, "after": truncate_value(b)})
            return
        if b is sentinel:
            diff.append({"path": path_to_str(path), "before": truncate_value(a), "after": None})
            return
        if isinstance(a, dict) and isinstance(b, dict):
            keys = set(a.keys()) | set(b.keys())
            for k in keys:
                walk(a.get(k, sentinel), b.get(k, sentinel), path + [k])
        elif isinstance(a, list) and isinstance(b, list):
            max_len = max(len(a), len(b))
            for i in range(max_len):
                av = a[i] if i < len(a) else sentinel
                bv = b[i] if i < len(b) else sentinel
                walk(av, bv, path + [i])
        else:
            if a != b:
                diff.append(
                    {
                        "path": path_to_str(path),
                        "before": truncate_value(a),
                        "after": truncate_value(b),
                    }
                )

    diff_base = None
    if base_key and base_error is None:
        diff_base = base_data
    else:
        diff_base = current_data

    if pending_data is not None and diff_base is not None:
        walk(diff_base, pending_data, [])
    elif pending_data is not None and diff_base is None:
        walk(sentinel, pending_data, [])
    elif pending_data is None and diff_base is not None:
        walk(diff_base, sentinel, [])

    # Do not embed full data to avoid >6MB Lambda response limit; expose sizes, presigned URLs, and a summarized diff.
    result["pendingData"] = None
    result["currentData"] = None
    result["baseData"] = None
    result["pendingSize"] = pending_size
    result["currentSize"] = current_size
    result["baseSize"] = base_size
    result["diff"] = diff
    result["diffTruncated"] = len(diff) >= diff_limit

    if pending_key:
        result["pendingUrl"] = presign_download(SNAPSHOT_BUCKET, pending_key)
    if base_key:
        result["baseUrl"] = presign_download(SNAPSHOT_BUCKET, base_key)
    if path:
        result["currentUrl"] = presign_download(JSON_BUCKET, path)
    if pending_error:
        result["pendingError"] = pending_error
    if base_error:
        result["baseError"] = base_error
    if current_error:
        result["currentError"] = current_error

    return response(200, {"change": result, "dataEmbedded": False})


def handle_approve_change(event, change_id):
    user = get_user(event)
    table = ddb.Table(CHANGE_TABLE)
    item = table.get_item(Key={"id": change_id}).get("Item")
    if not item:
        return response(404, {"message": "Change not found"})
    if item.get("status") != "pending":
        return response(400, {"message": "Change is not pending"})

    payload = json.loads(event.get("body") or "{}")
    override_data = payload.get("data") if isinstance(payload, dict) else None
    decision_summary = payload.get("decisionSummary") if isinstance(payload, dict) else None

    pending_key = item.get("pendingKey")
    pending = read_json(SNAPSHOT_BUCKET, pending_key)
    path = pending.get("path")
    pending_data = pending.get("data")

    data = pending_data
    if isinstance(decision_summary, dict) and "acceptedPaths" in decision_summary:
        accepted_paths = decision_summary.get("acceptedPaths") or []
        base_data = None
        base_key = item.get("baseKey")
        if base_key:
            try:
                base_snapshot = read_json(SNAPSHOT_BUCKET, base_key)
                base_data = base_snapshot.get("data")
            except Exception:
                base_data = None
        if base_data is None and path:
            try:
                base_data = read_json(JSON_BUCKET, path)
            except Exception:
                base_data = None
        data = apply_accepted_paths(base_data, pending_data, accepted_paths)
    elif override_data is not None:
        data = override_data

    write_json(JSON_BUCKET, path, data)

    snapshot_key = f"snapshots/{path}/{int(time.time())}-{change_id}.json"
    write_json(SNAPSHOT_BUCKET, snapshot_key, data)

    update_expression = "SET #status = :status, approvedAt = :approvedAt, approvedBy = :approvedBy"
    expr_attr_names = {"#status": "status"}
    expr_attr_values = {
        ":status": "approved",
        ":approvedAt": now_iso(),
        ":approvedBy": user.get("username"),
    }
    if decision_summary is not None:
        update_expression += ", decisionSummary = :decisionSummary"
        expr_attr_values[":decisionSummary"] = decision_summary

    table.update_item(
        Key={"id": change_id},
        UpdateExpression=update_expression,
        ExpressionAttributeNames=expr_attr_names,
        ExpressionAttributeValues=expr_attr_values,
    )

    audit_details = {}
    if decision_summary is not None:
        audit_details["decisionSummary"] = decision_summary
    if override_data is not None:
        audit_details["approvalMode"] = "partial" if decision_summary else "override"
    record_audit(path, "approved", user.get("username"), change_id, audit_details)

    decision_note = ""
    decision_html = ""
    if isinstance(decision_summary, dict):
        accepted_paths = decision_summary.get("acceptedPaths") or []
        rejected_paths = decision_summary.get("rejectedPaths") or []
        accepted_reasons = decision_summary.get("acceptedReasonMap") or {}
        rejected_reasons = decision_summary.get("rejectedReasonMap") or {}
        if accepted_paths or rejected_paths:
            accepted_block = build_decision_lines(accepted_paths, pending_data, accepted_reasons)
            rejected_block = build_decision_lines(rejected_paths, pending_data, rejected_reasons)
            decision_note = (
                "Decision breakdown\n"
                "------------------\n"
                f"Accepted changes:\n{accepted_block}\n\n"
                f"Rejected changes:\n{rejected_block}\n"
            )
            decision_html = (
                "<div style=\"margin:16px 0;padding:12px;border:1px solid #e1e6ef;border-radius:8px;\">"
                "<div style=\"font-weight:600;margin-bottom:8px;\">Decision breakdown</div>"
                f"{build_decision_html('Accepted changes', accepted_paths, pending_data, '#2f7d32', accepted_reasons)}"
                f"{build_decision_html('Rejected changes', rejected_paths, pending_data, '#c62828', rejected_reasons)}"
                "</div>"
            )

    send_notification(
        item.get("requestedByEmail"),
        subject=f"[LiturgicalBooks] Change approved: {path}",
        body=(
            f"Your change request has been approved.\n\n"
            f"File: {path}\n"
            f"Summary: {item.get('summary') or 'No summary provided'}\n"
            f"{decision_note}"
            f"Approved by: {user.get('username')}\n"
            f"Change ID: {change_id}\n"
        ),
        html_body=(
            "<div style=\"font-family:Arial,Helvetica,sans-serif;color:#1f2a37;line-height:1.5;\">"
            "<p>Your change request has been approved.</p>"
            f"<p><strong>File:</strong> {path}<br>"
            f"<strong>Summary:</strong> {item.get('summary') or 'No summary provided'}</p>"
            f"{decision_html}"
            f"<p><strong>Approved by:</strong> {user.get('username')}<br>"
            f"<strong>Change ID:</strong> {change_id}</p>"
            "</div>"
        ),
    )
    return response(200, {"message": "Approved"})


def handle_reject_change(event, change_id):
    payload = json.loads(event.get("body") or "{}")
    reason = payload.get("reason", "")
    decision_summary = payload.get("decisionSummary") if isinstance(payload, dict) else None
    user = get_user(event)

    table = ddb.Table(CHANGE_TABLE)
    item = table.get_item(Key={"id": change_id}).get("Item")
    if not item:
        return response(404, {"message": "Change not found"})
    if item.get("status") != "pending":
        return response(400, {"message": "Change is not pending"})

    update_expression = "SET #status = :status, rejectedAt = :rejectedAt, rejectedBy = :rejectedBy, rejectionReason = :reason"
    expr_attr_names = {"#status": "status"}
    expr_attr_values = {
        ":status": "rejected",
        ":rejectedAt": now_iso(),
        ":rejectedBy": user.get("username"),
        ":reason": reason,
    }
    if decision_summary is not None:
        update_expression += ", decisionSummary = :decisionSummary"
        expr_attr_values[":decisionSummary"] = decision_summary

    table.update_item(
        Key={"id": change_id},
        UpdateExpression=update_expression,
        ExpressionAttributeNames=expr_attr_names,
        ExpressionAttributeValues=expr_attr_values,
    )

    audit_details = {"reason": reason}
    if decision_summary is not None:
        audit_details["decisionSummary"] = decision_summary
    record_audit(item.get("path"), "rejected", user.get("username"), change_id, audit_details)

    decision_note = ""
    decision_html = ""
    if isinstance(decision_summary, dict):
        accepted_paths = decision_summary.get("acceptedPaths") or []
        rejected_paths = decision_summary.get("rejectedPaths") or []
        accepted_reasons = decision_summary.get("acceptedReasonMap") or {}
        rejected_reasons = decision_summary.get("rejectedReasonMap") or {}
        if accepted_paths or rejected_paths:
            pending_key = item.get("pendingKey")
            pending_data = None
            if pending_key:
                try:
                    pending_snapshot = read_json(SNAPSHOT_BUCKET, pending_key)
                    pending_data = pending_snapshot.get("data")
                except Exception:
                    pending_data = None
            accepted_block = build_decision_lines(accepted_paths, pending_data, accepted_reasons)
            rejected_block = build_decision_lines(rejected_paths, pending_data, rejected_reasons)
            decision_note = (
                "Decision breakdown\n"
                "------------------\n"
                f"Accepted changes:\n{accepted_block}\n\n"
                f"Rejected changes:\n{rejected_block}\n"
            )
            decision_html = (
                "<div style=\"margin:16px 0;padding:12px;border:1px solid #e1e6ef;border-radius:8px;\">"
                "<div style=\"font-weight:600;margin-bottom:8px;\">Decision breakdown</div>"
                f"{build_decision_html('Accepted changes', accepted_paths, pending_data, '#2f7d32', accepted_reasons)}"
                f"{build_decision_html('Rejected changes', rejected_paths, pending_data, '#c62828', rejected_reasons)}"
                "</div>"
            )

    send_notification(
        item.get("requestedByEmail"),
        subject=f"[LiturgicalBooks] Change rejected: {item.get('path')}",
        body=(
            f"Your change request has been rejected.\n\n"
            f"File: {item.get('path')}\n"
            f"Summary: {item.get('summary') or 'No summary provided'}\n"
            f"Rejected by: {user.get('username')}\n"
            f"Reason: {reason or 'No reason provided'}\n"
            f"{decision_note}"
            f"Change ID: {change_id}\n"
        ),
        html_body=(
            "<div style=\"font-family:Arial,Helvetica,sans-serif;color:#1f2a37;line-height:1.5;\">"
            "<p>Your change request has been rejected.</p>"
            f"<p><strong>File:</strong> {item.get('path')}<br>"
            f"<strong>Summary:</strong> {item.get('summary') or 'No summary provided'}<br>"
            f"<strong>Reason:</strong> {reason or 'No reason provided'}</p>"
            f"{decision_html}"
            f"<p><strong>Rejected by:</strong> {user.get('username')}<br>"
            f"<strong>Change ID:</strong> {change_id}</p>"
            "</div>"
        ),
    )
    return response(200, {"message": "Rejected"})


def handle_report_uploads(event):
    payload = json.loads(event.get("body") or "{}")
    files = payload.get("files") or []
    report_id = payload.get("reportId") or str(uuid.uuid4())
    prefix = get_report_prefix()

    uploads = []
    for entry in files:
        name = entry.get("name") or "attachment"
        content_type = entry.get("contentType") or "application/octet-stream"
        size = entry.get("size") or 0
        if size and size > REPORTS_MAX_UPLOAD_BYTES:
            return response(400, {"message": f"Attachment too large: {name}"})
        safe_name = sanitize_filename(name)
        key = f"{prefix}{report_id}/attachments/{uuid.uuid4()}-{safe_name}"
        uploads.append(
            {
                "name": name,
                "key": key,
                "contentType": content_type,
                "uploadUrl": presign_upload(SNAPSHOT_BUCKET, key, content_type),
            }
        )
    return response(200, {"reportId": report_id, "uploads": uploads})


def handle_submit_report(event):
    payload = json.loads(event.get("body") or "{}")
    report_id = payload.get("reportId") or str(uuid.uuid4())
    issue_type = payload.get("issueType") or ""
    summary = payload.get("summary") or ""
    details = payload.get("details") or ""
    if not issue_type:
        return response(400, {"message": "Missing issueType"})
    if not (summary or details):
        return response(400, {"message": "Missing summary or details"})

    prefix = get_report_prefix()
    report_key = f"{prefix}{report_id}/report.json"
    report = dict(payload)
    report["reportId"] = report_id
    report.setdefault("createdAt", now_iso())
    write_json(SNAPSHOT_BUCKET, report_key, report)

    attachments = payload.get("attachments") or []
    attachment_lines = []
    download_links = []
    total_attachment_bytes = 0
    for attachment in attachments:
        name = attachment.get("name") or "attachment"
        size = attachment.get("size") or 0
        total_attachment_bytes += size
        attachment_lines.append(f"- {name} ({size} bytes)")
        if attachment.get("key"):
            download_links.append(
                f"{name}: {presign_download(SNAPSHOT_BUCKET, attachment['key'])}"
            )

    context = payload.get("context") or {}
    body_lines = [
        "A new issue report was submitted.",
        "",
        f"Type: {issue_type}",
        f"Summary: {summary or 'N/A'}",
        f"Details: {details or 'N/A'}",
        f"Expected: {payload.get('expected') or 'N/A'}",
        f"Actual: {payload.get('actual') or 'N/A'}",
        "",
        f"Reporter name: {payload.get('reporterName') or 'N/A'}",
        f"Reporter email: {payload.get('reporterEmail') or 'N/A'}",
        "",
        f"Context screen: {context.get('screenName') or 'N/A'}",
        f"Context table title: {context.get('tableTitle') or 'N/A'}",
        "",
        f"App version: {payload.get('appVersion') or 'N/A'}",
        f"Platform: {payload.get('platform') or 'N/A'}",
        f"Platform version: {payload.get('platformVersion') or 'N/A'}",
        "",
        f"Report ID: {report_id}",
    ]
    if attachment_lines:
        body_lines.extend(["", "Attachments:", *attachment_lines])
    if download_links:
        body_lines.extend(["", "Attachment links (7 days):", *download_links])
    if attachments and total_attachment_bytes > REPORTS_MAX_EMAIL_BYTES:
        body_lines.extend(
            [
                "",
                "Note: Some attachments were too large to include in the email.",
            ]
        )

    subject = f"[LiturgicalBooks] {issue_type} report"
    reply_to = payload.get("reporterEmail") or NOTIFY_REPLY_TO
    send_report_email(subject, "\n".join(body_lines), attachments, reply_to=reply_to)
    return response(201, {"reportId": report_id})


def handle_request_email_verification(event):
    payload = json.loads(event.get("body") or "{}")
    identifier = payload.get("identifier") or payload.get("username") or payload.get("email")
    identifier = normalize_identifier(identifier)
    if not identifier:
        return response(400, {"message": "Missing identifier"})

    generic_response = {"message": "If the account exists, a verification code has been sent."}
    user = get_user_by_identifier(identifier)
    if not user or not user.get("email"):
        return response(200, generic_response)

    code = f"{secrets.randbelow(1000000):06d}"
    salt = secrets.token_hex(16)
    code_hash = hashlib.sha256(f"{salt}{code}".encode("utf-8")).hexdigest()
    expires_at = int(time.time()) + EMAIL_VERIFY_TTL_SECONDS

    table = ddb.Table(EMAIL_VERIFY_TABLE)
    table.put_item(
        Item={
            "username": user["username"],
            "email": user["email"],
            "codeHash": code_hash,
            "salt": salt,
            "expiresAt": expires_at,
            "requestedAt": now_iso(),
            "attempts": 0,
        }
    )

    send_notification(
        user["email"],
        subject="[LiturgicalBooks] Email verification code",
        body=(
            "Use the code below to verify your LiturgicalBooks JSON Editor email:\n\n"
            f"{code}\n\n"
            "This code expires in 15 minutes."
        ),
        html_body=(
            "<p>Use the code below to verify your LiturgicalBooks JSON Editor email:</p>"
            f"<h2 style=\"letter-spacing:2px;\">{code}</h2>"
            "<p>This code expires in 15 minutes.</p>"
        ),
    )

    return response(200, generic_response)


def handle_confirm_email_verification(event):
    payload = json.loads(event.get("body") or "{}")
    identifier = payload.get("identifier") or payload.get("username") or payload.get("email")
    code = normalize_identifier(payload.get("code"))
    identifier = normalize_identifier(identifier)
    if not identifier or not code:
        return response(400, {"message": "Missing identifier or code"})

    user = get_user_by_identifier(identifier)
    if not user or not user.get("email"):
        return response(400, {"message": "Invalid or expired code"})

    table = ddb.Table(EMAIL_VERIFY_TABLE)
    item = table.get_item(Key={"username": user["username"]}).get("Item")
    if not item or item.get("email") != user.get("email"):
        return response(400, {"message": "Invalid or expired code"})
    if int(item.get("expiresAt") or 0) < int(time.time()):
        return response(400, {"message": "Invalid or expired code"})

    expected = item.get("codeHash")
    salt = item.get("salt") or ""
    code_hash = hashlib.sha256(f"{salt}{code}".encode("utf-8")).hexdigest()
    if code_hash != expected:
        try:
            table.update_item(
                Key={"username": user["username"]},
                UpdateExpression="SET attempts = if_not_exists(attempts, :zero) + :one",
                ExpressionAttributeValues={":one": 1, ":zero": 0},
            )
        except Exception:
            pass
        return response(400, {"message": "Invalid or expired code"})

    cognito.admin_update_user_attributes(
        UserPoolId=USER_POOL_ID,
        Username=user["username"],
        UserAttributes=[{"Name": "email_verified", "Value": "true"}],
    )
    table.delete_item(Key={"username": user["username"]})
    return response(200, {"message": "Email verified"})


def handle_password_policy(event):
    try:
        resp = cognito.describe_user_pool(UserPoolId=USER_POOL_ID)
        policy = resp.get("UserPool", {}).get("Policies", {}).get("PasswordPolicy", {}) or {}
        return response(200, {"policy": policy})
    except Exception:
        return response(500, {"message": "Failed to load password policy"})


def handle_resolve_identifier(event):
    payload = json.loads(event.get("body") or "{}")
    identifier = payload.get("identifier") or payload.get("username") or payload.get("email")
    identifier = normalize_identifier(identifier)
    if not identifier:
        return response(400, {"message": "Missing identifier"})
    user = get_user_by_identifier(identifier)
    return response(200, {"username": user.get("username") if user else None})


def handler(event, context):
    try:
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

        if route_key == "POST /reports/uploads":
            return handle_report_uploads(event)

        if route_key == "POST /reports":
            return handle_submit_report(event)

        if route_key == "POST /auth/verify-email/request":
            return handle_request_email_verification(event)

        if route_key == "POST /auth/verify-email/confirm":
            return handle_confirm_email_verification(event)

        if route_key == "POST /auth/resolve-identifier":
            return handle_resolve_identifier(event)

        if route_key == "GET /auth/password-policy":
            return handle_password_policy(event)

        if route_key == "GET /admin/users" and raw_path == "/admin/users":
            return handle_list_users(event)

        if route_key == "POST /admin/users" and raw_path == "/admin/users":
            return handle_create_user(event)

        if raw_path.startswith("/admin/users/") and route_key.startswith("GET /admin/users"):
            username = raw_path.replace("/admin/users/", "", 1)
            return handle_get_user_detail(event, username)

        if raw_path.startswith("/admin/users/") and route_key.startswith("POST /admin/users"):
            username = raw_path.replace("/admin/users/", "", 1)
            return handle_update_user(event, username)

        if raw_path.startswith("/admin/users/") and route_key.startswith("DELETE /admin/users"):
            username = raw_path.replace("/admin/users/", "", 1)
            return handle_delete_user(event, username)

        return response(404, {"message": "Not found"})
    except Exception as err:  # surface silent failures
        print(
            f"ERROR handling {event.get('httpMethod')} {event.get('path') or event.get('rawPath')}: {err}",
            file=sys.stderr,
            flush=True,
        )
        print(traceback.format_exc(), file=sys.stderr, flush=True)
        return response(500, {"message": "Internal error", "error": str(err)})
