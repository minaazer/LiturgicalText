Semi-automated SAAS Holy Week recovery

1. Prepare the export files:
   python pythonScripts\prepare_logos_saas_holy_week.py
   python pythonScripts\scaffold_logos_saas_exports.py

2. Open this folder:
   data\logos\saas_holy_week_exports

3. Open this manifest:
   data\logos\saas_holy_week_manifest.csv

4. In Logos:
   - Open Copy Bible Verses
   - Choose the SAAS / Orthodox Study Bible resource
   - Use one verse per line if possible
   - Copy a reference from the manifest

5. Paste the result into the matching .txt file.
   Preferred format:
   38:31: Behold, days are coming, says the Lord...
   38:32: not according to the covenant I made...

6. Rebuild:
   python pythonScripts\build_saas_holyweek_from_logos.py

7. Inspect:
   data\jsons\readings\holyWeek_saas_logos.json
   reports\holyWeek_saas_logos_report.json

Good first test references:
   EZEKIEL 37:1-14
   MATTHEW 21:10-17
   JOHN 5:19-29
