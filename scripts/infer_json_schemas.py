#!/usr/bin/env python3
import json
from pathlib import Path
from typing import Any, Dict, List

ROOT = Path(__file__).resolve().parents[1]
JSON_ROOT = ROOT / "data" / "jsons"
SCHEMA_ROOT = ROOT / "json-editor" / "schemas"


def normalize_schema(schema: Dict[str, Any]) -> Dict[str, Any]:
    if "anyOf" in schema:
        seen = set()
        unique = []
        for item in schema["anyOf"]:
            key = json.dumps(item, sort_keys=True)
            if key in seen:
                continue
            seen.add(key)
            unique.append(item)
        if len(unique) == 1:
            return unique[0]
        schema["anyOf"] = unique
    return schema


def merge_required(req_lists: List[List[str]]) -> List[str]:
    if not req_lists:
        return []
    required = set(req_lists[0])
    for req in req_lists[1:]:
        required &= set(req)
    return sorted(required)


def merge_schemas(a: Dict[str, Any], b: Dict[str, Any]) -> Dict[str, Any]:
    if a == b:
        return a

    if "anyOf" in a or "anyOf" in b:
        items = []
        if "anyOf" in a:
            items.extend(a["anyOf"])
        else:
            items.append(a)
        if "anyOf" in b:
            items.extend(b["anyOf"])
        else:
            items.append(b)
        return normalize_schema({"anyOf": items})

    if a.get("type") != b.get("type"):
        return normalize_schema({"anyOf": [a, b]})

    t = a.get("type")
    if t == "object":
        props = dict(a.get("properties", {}))
        req_a = a.get("required", [])
        req_b = b.get("required", [])
        for key, val in b.get("properties", {}).items():
            if key in props:
                props[key] = merge_schemas(props[key], val)
            else:
                props[key] = val
        return {
            "type": "object",
            "properties": props,
            "required": merge_required([req_a, req_b]),
            "additionalProperties": True,
        }

    if t == "array":
        items_a = a.get("items", {})
        items_b = b.get("items", {})
        if not items_a:
            return b
        if not items_b:
            return a
        return {"type": "array", "items": merge_schemas(items_a, items_b)}

    return a


def infer_schema(value: Any) -> Dict[str, Any]:
    if value is None:
        return {"type": "null"}
    if isinstance(value, bool):
        return {"type": "boolean"}
    if isinstance(value, int) and not isinstance(value, bool):
        return {"type": "integer"}
    if isinstance(value, float):
        return {"type": "number"}
    if isinstance(value, str):
        return {"type": "string"}
    if isinstance(value, list):
        if not value:
            return {"type": "array", "items": {}}
        item_schema = infer_schema(value[0])
        for item in value[1:]:
            item_schema = merge_schemas(item_schema, infer_schema(item))
        return {"type": "array", "items": item_schema}
    if isinstance(value, dict):
        props = {k: infer_schema(v) for k, v in value.items()}
        required = sorted(value.keys())
        return {
            "type": "object",
            "properties": props,
            "required": required,
            "additionalProperties": True,
        }
    return {}


def main() -> None:
    SCHEMA_ROOT.mkdir(parents=True, exist_ok=True)
    manifest = []

    for path in sorted(JSON_ROOT.rglob("*.json")):
        if path.name == "manifest.json":
            continue
        rel = path.relative_to(JSON_ROOT)
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            # Skip invalid JSON; keep a placeholder schema.
            schema = {"type": "object", "additionalProperties": True}
        else:
            schema = infer_schema(data)

        schema = {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": rel.as_posix(),
            **schema,
        }

        out_path = SCHEMA_ROOT / rel.with_suffix(".schema.json")
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(json.dumps(schema, indent=2) + "\n", encoding="utf-8")

        manifest.append(
            {
                "path": rel.as_posix(),
                "schema": rel.with_suffix(".schema.json").as_posix(),
            }
        )

    manifest_path = SCHEMA_ROOT / "manifest.json"
    manifest_path.write_text(json.dumps({"schemas": manifest}, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
