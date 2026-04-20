from __future__ import annotations

import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
QUEUE_PATH = ROOT / "data" / "logos" / "saas_bible_chapter_queue.json"
EXPORTS_DIR = ROOT / "data" / "logos" / "saas_bible_chapter_exports"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    queue = load_json(QUEUE_PATH)
    EXPORTS_DIR.mkdir(parents=True, exist_ok=True)

    created = 0
    existing = 0
    for item in queue:
        path = EXPORTS_DIR / item["export_file"]
        if path.exists():
            existing += 1
            continue
        path.write_text(
            f"# Reference: {item['reference']}\n"
            f"# Logos Reference: {item['logos_reference']}\n"
            "# Paste SAAS chapter text here, one verse per line.\n"
            "# Preferred format: 38:31: Verse text\n",
            encoding="utf-8",
        )
        created += 1

    print(f"Created: {created}")
    print(f"Already existed: {existing}")
    print(f"Folder: {EXPORTS_DIR}")


if __name__ == "__main__":
    main()
