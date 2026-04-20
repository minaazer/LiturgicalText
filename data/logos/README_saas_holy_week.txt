SAAS Holy Week Logos workflow

1. Run:
   python pythonScripts\prepare_logos_saas_holy_week.py

2. Open:
   data\logos\saas_holy_week_manifest.csv

3. For each reference, export or copy the SAAS text from Logos into:
   data\logos\saas_holy_week_exports\<slug>.txt

4. Use one verse per line in each export file.

Preferred format:
   38:31: Behold, days are coming, says the Lord...
   38:32: not according to the covenant I made...

Also accepted:
   1:1<TAB>In the beginning God made the heaven and the earth.
   1:1 In the beginning God made the heaven and the earth.
   1 In the beginning God made the heaven and the earth.
   Genesis 1:1 In the beginning God made the heaven and the earth.

5. Build the Holy Week SAAS JSON:
   python pythonScripts\build_saas_holyweek_from_logos.py

Outputs:
   data\jsons\readings\holyWeek_saas_logos.json
   reports\holyWeek_saas_logos_report.json

Notes:
 - The builder replaces only Bible reading text rows that have a reference and a single text block.
 - Non-Biblical sections such as homilies remain unchanged.
 - References like [SELECTION] and END are fine as long as the exported file contains the exact verse lines you want to serve.
