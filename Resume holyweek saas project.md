# Resume holyweek saas project

## Goal

Continue refining the SAAS-based Holy Week prophecy file without touching the original `holyWeek.json`.

Working target file:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_saas.json`

Original source files:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons\holyWeek.json`
- `d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons\readings\holyWeek_stbasil_structured.json`
- `d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons\bible\saas_ot.json`

## Important rule

Do not modify:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons\holyWeek.json`

Do direct edits in:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_saas.json`

Treat the builder script as a generator/reference tool only:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\pythonScripts\build_holyweek_saas_prophecies.py`

## Current outputs

Main generated file:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_saas.json`

Reports:
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_saas_prophecies_report.json`
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_prophecy_inventory_report.json`
- `d:\AppDev\LiturgicalText\LiturgicalBooks\reports\holyweek_saas_prophecies_below_0_99_report.json`

## Current build summary

From `holyweek_saas_prophecies_report.json`:
- `86` prophecy tables were replaced with SAAS English
- `28` matched locations were skipped because SAAS verse count did not match the Holy Week row count
- `18` Holy Week prophecy slots had no St. Basil match
- `6` St. Basil prophecy readings had no Holy Week slot
- `52` matched readings normalized to exact full-text equality

Notes:
- `unmatched_stbasil_readings` are intentionally omitted on purpose
- `unmatched_holyweek_slots` are valid Holy Week prophecies that should be kept

## Meaning of the categories

### 1. Near Match / Minor Trim Or Wording Difference

These are usually usable, but St. Basil and SAAS differ slightly near the end or in a short phrase.

### 2. Moderate Mismatch / Partial Selection Or Wording Divergence

These likely need manual inspection. Often the St. Basil text trims part of the SAAS reference or words something differently.

### 3. Very Low Similarity / Likely Wrong Selection Or Misalignment

These are not safe to trust automatically. Usually one of:
- the St. Basil reading is only a subset
- the selection logic is different
- the prophecy alignment by order is wrong

### 4. Row Count Mismatch / Selection Or Grouping Issue

This means:
- the number of text rows already present in `holyWeek.json`
does not equal
- the number of SAAS verses implied by the matched St. Basil reference

So these cannot be blindly filled verse-by-verse without manual adjustment.

Concrete example already discussed:
- `DAY of Tuesday`
- `NINTH Hour`
- `4th Prophecy (Daniel 7: 9 - 15)`
- Holy Week title only had `Daniel 7:9-15`
- St. Basil had `DANIEL 7:2, 7:9-15`
- St. Basil also only included a partial opening from 7:2

## Manual edits already applied directly to holyweek_saas.json

### 1. DAY of Tuesday / NINTH Hour / 4th Prophecy

Updated to:
- English title: `4th Prophecy (Daniel 7: 2, 9 - 15)`
- Arabic title: `النبوة الرابعة (دانيال ٧: ٢، ٩ - ١٥)`

Inserted opening row after the intro:
- English: `I, Daniel, looked on in my vision in the night…`
- Arabic: `أَنَا دَانِيال رَأَيْتُ فِي رُؤَى اللَّيْلِ،`

### 2. EVE of Monday / NINTH Hour / 1st Prophecy

Updated to:
- English title: `1st Prophecy (Micah 2: 3 - 11)`
- Arabic title: `النبوة الأولى (ميخا ٢: ٣ - ١١)`

Appended row at the end:
- English: `You were pursued by no one pursuing!`
- Arabic: `وَهَرَبْتُمْ وَلَيْسَ مَنْ يَطْرُدُكُمْ.`

### 3. EVE of Monday / ELEVENTH Hour / 1st Prophecy

Updated English title to:
- `1st Prophecy (Micah 2:13 [SELECTION], 3:1-4)`

Prepended row after the intro:
- English: `And the Lord shall lead them. He will say,`
- Arabic: `وَالرَّبُّ يَرْشِدُهُمْ وَيَقُولُ:`

## Current review workflow

Continue one prophecy at a time.

For each item, provide:
- Service
- Hour
- Holy Week English title
- Corresponding St. Basil reference

Then decide how to edit `holyweek_saas.json` directly:
- update title
- add/remove/merge rows
- add missing partial verse openings/endings
- preserve Arabic row structure where needed

## All flagged categories to continue reviewing

### Near Match / Minor Trim Or Wording Difference

- `DAY of Covenant Thursday` | `THIRD Hour` | `3rd Prophecy`
- `DAY of Great Friday` | `FIRST Hour` | `4th Prophecy`
- `DAY of Great Friday` | `NINTH Hour` | `1st Prophecy`
- `DAY of Great Friday` | `SIXTH Hour` | `2nd Prophecy`
- `DAY of Great Friday` | `THIRD Hour` | `1st Prophecy`
- `DAY of Monday` | `FIRST Hour` | `2nd Prophecy`
- `DAY of Wednesday` | `SIXTH Hour` | `2nd Prophecy`
- `EVE of Great Friday` | `SIXTH Hour` | `1st Prophecy`
- `EVE of Great Friday` | `THIRD Hour` | `1st Prophecy`
- `EVE of Tuesday` | `ELEVENTH Hour` | `1st Prophecy`
- `EVE of Wednesday` | `FIRST Hour` | `2nd Prophecy`

### Moderate Mismatch / Partial Selection Or Wording Divergence

- `DAY of Covenant Thursday` | `FIRST Hour` | `3rd Prophecy`
- `DAY of Covenant Thursday` | `THIRD Hour` | `1st Prophecy`
- `DAY of Great Friday` | `FIRST Hour` | `2nd Prophecy`
- `DAY of Great Friday` | `SIXTH Hour` | `4th Prophecy`
- `DAY of Monday` | `THIRD Hour` | `2nd Prophecy`
- `DAY of Tuesday` | `FIRST Hour` | `2nd Prophecy`
- `DAY of Tuesday` | `SIXTH Hour` | `3rd Prophecy`
- `EVE of Monday` | `THIRD Hour` | `1st Prophecy`

### Very Low Similarity / Likely Wrong Selection Or Misalignment

- `DAY of Great Friday` | `NINTH Hour` | `2nd Prophecy`
- `DAY of Great Friday` | `NINTH Hour` | `3rd Prophecy`
- `DAY of Great Friday` | `THIRD Hour` | `3rd Prophecy`
- `DAY of Wednesday` | `FIRST Hour` | `3rd Prophecy`
- `EVE of Great Friday` | `ELEVENTH Hour` | `1st Prophecy`

### Row Count Mismatch / Selection Or Grouping Issue

- `DAY of Covenant Thursday` | `ELEVENTH Hour` | `2nd Prophecy`
- `DAY of Great Friday` | `FIRST Hour` | `1st Prophecy`
- `DAY of Great Friday` | `FIRST Hour` | `5th Prophecy`
- `DAY of Great Friday` | `FIRST Hour` | `8th Prophecy`
- `DAY of Great Friday` | `THIRD Hour` | `4th Prophecy`
- `DAY of Tuesday` | `NINTH Hour` | `4th Prophecy`
- `DAY of Tuesday` | `SIXTH Hour` | `1st Prophecy`
- `DAY of Tuesday` | `THIRD Hour` | `3rd Prophecy`
- `DAY of Wednesday` | `FIRST Hour` | `2nd Prophecy`
- `DAY of Wednesday` | `FIRST Hour` | `4th Prophecy`
- `DAY of Wednesday` | `NINTH Hour` | `4th Prophecy`
- `EVE of Great Friday` | `FIRST Hour` | `1st Prophecy`
- `EVE of Monday` | `ELEVENTH Hour` | `1st Prophecy`
- `EVE of Monday` | `NINTH Hour` | `1st Prophecy`
- `EVE of Tuesday` | `THIRD Hour` | `1st Prophecy`

## Next queued item when resuming

This was the next prompt in progress:
- Service: `EVE of Tuesday`
- Hour: `THIRD Hour`
- Holy Week english title: `1st Prophecy (Malachi 1: 1 - 8)`
- St. Basil reference: `MALACHI 1:1-9`

## Useful reminder

When inspecting a mismatch:
- compare the Holy Week English title reference
- compare the St. Basil reference
- check whether St. Basil starts or ends with a partial verse
- check whether the Holy Week table row count matches the true verse count
- then edit `holyweek_saas.json` directly instead of trying to force everything through code
