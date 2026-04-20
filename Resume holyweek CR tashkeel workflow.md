# Resume HolyWeek CR Tashkeel Workflow

## Goal
Add Arabic tashkeel to `holyWeek_CR.json` readings with high accuracy using a collaborative review flow.

## Source Files
- Base reading file:
  - `data/jsons/readings/holyWeek_CR.json`
- Hour packages:
  - `reports/holyweek_tashkeel_hour_packages/`
- Export script:
  - `pythonScripts/export_holyweek_cr_hour_packages.py`
- Import script:
  - `pythonScripts/import_holyweek_cr_hour_package.py`
- Compare script:
  - `pythonScripts/compare_holyweek_ai_tashkeel_packages.py`

## Actual Acceptance Rules
- Same words must be preserved.
- Same meaning must be preserved.
- Tashkeel may be added.
- Spelling normalization is allowed if it is still the same word.
- Hamza/orthography cleanup is allowed.
- Word drift is not allowed.
- Synonym substitution is not allowed.
- Replacing one word with another, even with similar meaning, is not allowed.

## Practical Rule
Allowed:
- `لاورشليم` -> `لأورشليم`
- `فى` -> `فِي`
- same word with better spelling or hamza handling

Not allowed:
- `من بيتك` -> `من بينك`
- `تقمقموا` -> `تغضبوا`
- any lexical substitution

## Workflow
1. Export or open one hour package from `reports/holyweek_tashkeel_hour_packages/`.
2. Codex produces a conservative Arabic tashkeel candidate.
3. Codex identifies only the low-confidence words/rows.
4. Review happens together:
   - Codex gives:
     - service
     - hour
     - title
     - full sentence
     - English translation
   - user approves or flags
5. After approvals, Codex saves a `codex_v2` package for that hour.
6. Later, the importer can merge approved packages back into:
   - `data/jsons/readings/holyWeek_CR_tashkeel_ai.json`

## Important Tooling Notes
- The strict original validator was too strict because it rejected orthography-only normalization.
- Scripts were patched so the intended rule is:
  - distinguish:
    - `tashkeel_only`
    - `orthography_only`
    - `word_change`
- Current importer:
  - `pythonScripts/import_holyweek_cr_hour_package.py`
  - should allow orthography-only normalization and reject true word changes.

## Current Reviewed Hours

### 1. `DAY of Sunday | NINTH Hour`
- Candidate saved:
  - `reports/holyweek_tashkeel_hour_packages/001_day_of_sunday__ninth_hour.codex_v2.json`
- Reviewed difficult words and all passed:
  - `لِتَهُدَّ`
  - `أُنَجِّي`
  - `تَهَلَّلْ`
  - `فَأَنِّي`
  - `تَقَمْقَمُوا`
- This hour is in strong shape.

### 2. `DAY of Sunday | ELEVENTH Hour`
- Base package:
  - `reports/holyweek_tashkeel_hour_packages/002_day_of_sunday__eleventh_hour.json`
- Reviewed difficult words so far and all passed:
  - `الْأَبَدِيُّ`
  - `فَيَقِفْنَ`
  - `لِأَنِّي`
  - `هَوَاكَ`
  - `أَدْعُوهُنَّ`
  - `أُمْحُوكَ`
  - `الشَّدْو`
  - `تَقَمْقَمُوا`

## Next Resume Point
Continue with:
- Service: `DAY of Sunday`
- Hour: `ELEVENTH Hour`
- Title: `1st Prophecy (Isaiah 48: 12 - 22)`
- Next row to review: `row 2`

These rows were identified as still syntactically rough / worth review:
- `1st Prophecy (Isaiah 48: 12 - 22)` row `2`
- `1st Prophecy (Isaiah 48: 12 - 22)` row `10`
- `2nd Prophecy (Nahum 1: 2 - 8)` row `2`
- `Gospel (Matthew 20: 20 - 28)` rows `3-4`

## Best Resume Instruction
User can say:

`Resume the HolyWeek CR tashkeel workflow from the saved handoff file.`

Or more specifically:

`Resume HolyWeek CR tashkeel review from DAY of Sunday ELEVENTH Hour.`

