from __future__ import annotations

import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
MANIFEST_PATH = ROOT / "data" / "logos" / "saas_holy_week_manifest.json"
EXPORTS_DIR = ROOT / "data" / "logos" / "saas_holy_week_exports"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    manifest = load_json(MANIFEST_PATH)
    EXPORTS_DIR.mkdir(parents=True, exist_ok=True)

    created = 0
    existing = 0
    for item in manifest:
        export_path = EXPORTS_DIR / item["export_file"]
        if export_path.exists():
            existing += 1
            continue
        export_path.write_text(
            f"# Reference: {item['reference']}\n"
            "# Paste SAAS verses here, one verse per line.\n"
            "# Preferred format: 38:31: Verse text\n",
            encoding="utf-8",
        )
        created += 1

    print(f"Created: {created}")
    print(f"Already existed: {existing}")
    print(f"Folder: {EXPORTS_DIR}")


if __name__ == "__main__":
    main()
