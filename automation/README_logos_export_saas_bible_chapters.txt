SAAS Bible chapter exporter

Requirements:
 - AutoHotkey v2
 - Logos open with the Copy Bible Verses panel visible
 - SAAS selected as the Bible version in that panel

Preparation:
 - python pythonScripts\build_saas_bible_chapter_queue.py
 - python pythonScripts\scaffold_saas_bible_chapter_exports.py

Script:
 - automation\logos_export_saas_bible_chapters.ahk

Hotkeys:
 - Ctrl+Alt+R : save mouse position for the Reference input
 - Ctrl+Alt+C : save mouse position for the Copy button
 - Ctrl+Alt+S : start exporting the chapter queue
 - Esc        : stop after the current item

Outputs:
 - data\logos\saas_bible_chapter_exports\*.txt
 - data\logos\saas_bible_chapter_progress.txt
 - data\logos\saas_bible_chapter_failures.txt
 - data\logos\saas_bible_chapter_undercounted_books.txt
 - data\logos\saas_bible_chapter_last_clipboard.txt

Notes:
 - This chapter queue excludes manual-only items such as Letter of Jeremiah and Susanna.
 - Psalm 151 should be handled manually.
 - The script only accepts clipboard output where every line looks like:
   chapter:verse: text
 - The script rejects a copied chapter if it is identical to the previous copied clipboard text.
 - After the last queued chapter of each book, the script probes one extra chapter number.
 - If the extra chapter copies a different valid passage, the book is logged as undercounted.
