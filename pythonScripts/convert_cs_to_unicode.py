#!/usr/bin/env python3
"""
Convert all string values in a JSON file from Coptic CS font encoding to Unicode.

Usage:
  python scripts/convert_cs_to_unicode.py path/to/input.json [--output path/to/output.json]

If --output is omitted, the input file is overwritten.
"""

import argparse
import json
from pathlib import Path

# Mapping taken from CS2Utf8.html (Hosam Adeeb Nashed, 2019).
CS_CHARS = (
    'ABGDE^ZY:IKLMNXOPRCTUV<"WSFQHJ{}abgde^zy;iklmnxoprctuv,\'wsfqhj[]'
    " .\n`="
    "&~@>|¡¢¤¥½¾?!"
)
UTF8_CHARS = (
    "ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰϢϤϦϨϪϬϮⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱϣϥϧϩϫϭϯ"
    " .\ǹ̅"
    ";.:,ⳉ⳪⳥⳨⳩⳧⳧?!"
)


def cs_to_unicode(text: str) -> str:
    """
    Convert a string from CS encoding to Unicode Coptic.

    This follows the logic in the original CS2Utf8.html script.
    """
    out = []
    diacritic = ""
    for ch in text:
        if ch not in CS_CHARS:
            if ch == "£":
                out.append("ⲙⲉⲛⲉⲛⲥⲁ")
            elif ch == "\\":
                out.append("ⲟⲩ")
            elif ch == "¦":
                out.append("ⲡⲁⲣⲑⲉⲛⲟⲥ")
            elif ch == "¨":
                out.append("Ⲥⲩⲛ Ⲑⲉⲱ ⲓⲥⲭⲩⲣⲟⲥ")
            else:
                out.append(ch)
            continue

        idx = CS_CHARS.index(ch)
        if ch in ("`", "="):
            diacritic = UTF8_CHARS[idx]
            continue

        out.append(UTF8_CHARS[idx])
        if diacritic:
            out.append(diacritic)
            diacritic = ""

    return "".join(out)


def convert(obj):
    """
    Recursively convert string values only for fields named "coptic".
    """
    if isinstance(obj, dict):
        converted = {}
        for k, v in obj.items():
            if k == "coptic" and isinstance(v, str):
                converted[k] = cs_to_unicode(v)
            else:
                converted[k] = convert(v)
        return converted
    if isinstance(obj, list):
        return [convert(v) for v in obj]
    return obj


def main():
    parser = argparse.ArgumentParser(
        description="Convert all string values in a JSON file from Coptic CS encoding to Unicode."
    )
    parser.add_argument(
        "input",
        nargs="?",
        help="Path to the source JSON file. If omitted, you will be prompted.",
    )
    parser.add_argument(
        "--output",
        help="Where to write the converted JSON. Defaults to overwriting the input file.",
    )
    args = parser.parse_args()

    if args.input:
        input_path = Path(args.input)
    else:
        user_input = input("Enter path to the source JSON file: ").strip()
        if not user_input:
            raise SystemExit("No input file provided.")
        input_path = Path(user_input)
    output_path = Path(args.output) if args.output else input_path

    data = json.loads(input_path.read_text(encoding="utf-8"))
    converted = convert(data)
    output_path.write_text(json.dumps(converted, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Converted JSON written to {output_path}")


if __name__ == "__main__":
    main()
