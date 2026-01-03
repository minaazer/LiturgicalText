#!/usr/bin/env python3
import argparse
import json
from pathlib import Path
from typing import Any, Dict, Iterable, List, Set, Tuple


def merge_cells_list(
    cells: List[Any], allowed_keys: Set[str]
) -> Tuple[List[Any], int]:
    if not cells or not all(isinstance(item, dict) for item in cells):
        return cells, 0

    keys = []
    for item in cells:
        if len(item) != 1:
            return cells, 0
        key = next(iter(item.keys()))
        keys.append(key)
        if allowed_keys and key not in allowed_keys:
            return cells, 0

    if len(set(keys)) != len(keys):
        return cells, 0

    merged: Dict[str, Any] = {}
    for item in cells:
        key = next(iter(item.keys()))
        merged[key] = item[key]

    return [merged], 1


def merge_cells_in_node(node: Any, allowed_keys: Set[str]) -> int:
    changes = 0
    if isinstance(node, dict):
        for key, value in list(node.items()):
            if key == "cells" and isinstance(value, list):
                merged, delta = merge_cells_list(value, allowed_keys)
                if delta:
                    node[key] = merged
                changes += delta
            else:
                changes += merge_cells_in_node(value, allowed_keys)
    elif isinstance(node, list):
        for item in node:
            changes += merge_cells_in_node(item, allowed_keys)
    return changes


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Merge single-language cell entries into one object."
    )
    parser.add_argument(
        "input",
        nargs="?",
        type=Path,
        help="Input JSON file. If omitted, you will be prompted.",
    )
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="Overwrite the input file with merged output.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        help="Write output to a separate file.",
    )
    parser.add_argument(
        "--keys",
        default="",
        help=(
            "Comma-separated list of keys to merge. "
            "If omitted, merges all single-key entries."
        ),
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.input is None:
        raw_path = input("Input JSON file path: ").strip()
        if not raw_path:
            raise SystemExit("Input file path is required.")
        args.input = Path(raw_path)

    if args.in_place and args.output:
        raise SystemExit("Choose either --in-place or --output, not both.")

    allowed_keys = {key.strip() for key in args.keys.split(",") if key.strip()}

    data = json.loads(args.input.read_text(encoding="utf-8"))
    changes = merge_cells_in_node(data, allowed_keys)

    if args.in_place:
        output_path = args.input
    elif args.output:
        output_path = args.output
    else:
        output_path = args.input.with_name(
            f"{args.input.stem}{args.input.suffix}"
        )
    output_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Merged {changes} cells array(s) in {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
