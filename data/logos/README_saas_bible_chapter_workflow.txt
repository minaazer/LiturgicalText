SAAS full Bible chapter workflow

1. Generate the editable book manifest:
   python pythonScripts\prepare_saas_bible_book_manifest.py

2. Fill in or correct:
   data\logos\saas_bible_books_template.json
   or copy it to:
   data\logos\saas_bible_books.json

Fields:
 - source_title: existing local book title
 - saas_title: book name you want in the final SAAS JSON
 - logos_title: exact name to paste into Logos
 - chapter_count: total number of chapters in SAAS
 - enabled: true/false

3. Build the chapter queue:
   python pythonScripts\build_saas_bible_chapter_queue.py

Outputs:
 - data\logos\saas_bible_chapter_queue.json
 - data\logos\saas_bible_chapter_queue.tsv

Each queue row represents one whole chapter to copy from Logos.

Recommended process:
 - finalize book names first
 - verify chapter counts second
 - export chapter by chapter
 - build the final full Bible JSON from those chapter exports
