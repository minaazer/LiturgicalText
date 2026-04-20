Logos OT queue exporter

Requirements:
 - AutoHotkey v2
 - Logos open with the Copy Bible Verses panel visible
 - SAAS selected as the Bible version in that panel

Script:
 - automation\logos_export_ot_queue.ahk

Hotkeys:
 - Ctrl+Alt+R : save mouse position for the Reference input
 - Ctrl+Alt+C : save mouse position for the Copy button
 - Ctrl+Alt+S : start exporting the OT queue
 - Esc        : stop after the current item

How it works:
 - Reads data\logos\saas_holy_week_ot_queue.json
 - For each OT reference:
   - clicks the Reference input
   - pastes the reference
   - presses Enter
   - clicks Copy
   - saves the clipboard into the matching file in data\logos\saas_holy_week_exports
 - Stores the next index in:
   data\logos\saas_holy_week_ot_progress.txt

Notes:
 - This is coordinate-based automation, so keep the Logos window in the same place and size.
 - If the clipboard text includes headers you do not want, adjust the Copy Bible Verses style first.
 - If a target file already contains verse content, the script skips it.
