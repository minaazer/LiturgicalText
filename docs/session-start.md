# LiturgicalBooks Session Start

This document is a fast repo handoff for an AI coding agent. Read this first, then open the specific files for the area you are changing.

## What This Repo Contains

This repo is not just one app. It contains:

- The main LiturgicalBooks mobile app at the repo root.
- A separate JSON editor web app in `json-editor/frontend`.
- A serverless backend for that editor in `json-editor/backend`.
- The canonical liturgical content JSON under `data/jsons`.
- Utility and deployment scripts under `scripts` and `pythonScripts`.
- Working notes in `docs`.

The core idea is:

1. Liturgical content lives in JSON files under `data/jsons`.
2. The mobile app renders that content locally, but can also refresh JSON from CloudFront/S3 at runtime.
3. The web editor exists to review and manage JSON changes against schemas, then publish approved updates back to the JSON bucket.

## Repo Map

### Root mobile app

- `App.js`: app bootstrap, font loading, navigation container, changelog popup, JSON cache init/refresh, orientation behavior.
- `components/navigation/RootNavigation.js`: app route assembly. Some routes are static, while Holy Week and Songs routes are generated from JSON.
- `components/screens`: screen entrypoints.
- `components/functions`: data processing, HTML/table rendering, date logic, JSON cache, report helpers.
- `components/reusableComponents`: shared UI pieces.
- `settings/settingsProvider.js`: global app settings persisted in AsyncStorage.
- `data/*.ts|js`: render helpers and content-specific transforms.
- `data/jsons`: bundled content shipped with the app.

### JSON editor

- `json-editor/frontend`: React + Vite editor UI.
- `json-editor/backend`: AWS SAM backend, mostly in `app.py`.
- `json-editor/schemas`: JSON Schemas used by validation/editor rendering.
- `json-editor/scripts`: deployment and admin helpers.

### Scripts and content tooling

- `scripts/build_json_manifest.js`: rebuilds `data/jsons/manifest.json` and auto-assigns missing `table_id` values.
- `scripts/validate_build_deploy.ps1`: sync schemas, rebuild manifest, validate JSON, then optionally deploy.
- `scripts/deploy_jsons.ps1` and `scripts/deploy_jsons.sh`: upload JSON content to S3 and optionally invalidate CloudFront.
- `scripts/fetch_jsons.ps1`: pull live JSONs from S3 back into local `data/jsons`.
- `scripts/infer_json_schemas.py`: infer baseline schemas from JSON content.
- `json-editor/scripts/export_approval_report.py`: export change-request and audit-log data from DynamoDB into `reports/approval-export`.
- `json-editor/scripts/check_approved_changes_reflected.py`: compare approved snapshot values against a current local JSON file.
- `json-editor/scripts/analyze_recent_holyweek_unreflected.py`: analyze recent `holyWeek.json` approvals and classify why some paths are unreflected.
- `pythonScripts`: one-off or semi-manual extraction/scraping/conversion utilities used to generate or repair source data.

## Main Architecture

### Mobile app runtime

The app is an Expo / React Native app with the main entrypoint at [App.js](d:\AppDev\LiturgicalText\LiturgicalBooks\App.js).

Important runtime behaviors:

- Fonts are loaded at startup before the splash screen hides.
- Global settings come from [settingsProvider.js](d:\AppDev\LiturgicalText\LiturgicalBooks\settings\settingsProvider.js) and are stored in AsyncStorage.
- App orientation is enforced from settings.
- A changelog popup is built from [changelog.js](d:\AppDev\LiturgicalText\LiturgicalBooks\changelog.js).
- JSON content can be read from the bundled app files or refreshed from CloudFront into a device cache.

The JSON cache lives in [jsonCache.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\jsonCache.js).

Important cache details:

- Remote base URL is currently `https://d18kyprs8j73gp.cloudfront.net`.
- `initJsonCache` runs on app startup unless `forceLocalJson` is enabled in settings.
- `refreshJsonCache` can force a manifest refresh.
- A weekly manifest/content refresh is triggered on app open.
- `getJson` is async and prefers cached remote JSON, then bundled fallback.
- `getJsonSync` only serves data already in memory, so warmup order matters.
- Bible JSON is intentionally treated differently and is still bundled/local.

### Route generation

[RootNavigation.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\navigation\RootNavigation.js) mixes:

- Static screens like Bible, Offertory, Glorification, Psalmody, Matrimony, Unction.
- Dynamic Holy Week routes generated from `holyWeek.json`.
- Dynamic Songs routes generated from `songs.json`.

If a JSON structure change affects Holy Week or Songs, navigation may break even if the JSON still validates.

### Data-driven rendering

Most liturgical screens are data-driven rather than hardcoded. Key files:

- [dataFunctions.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\dataFunctions.js): filtering by season/day/service, repeated-prayer resolution, HTML table rendering pipeline.
- [mainContent.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\mainContent.js): main content assembly logic.
- [renderFunctions.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\renderFunctions.js): rendering helpers.
- [getPsalmodyHtml.ts](d:\AppDev\LiturgicalText\LiturgicalBooks\data\getPsalmodyHtml.ts), [doxologies.ts](d:\AppDev\LiturgicalText\LiturgicalBooks\data\doxologies.ts), [theotokias.ts](d:\AppDev\LiturgicalText\LiturgicalBooks\data\theotokias.ts): content-specific transforms and cached JSON access.
- [copticDate.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\copticDate.js): calendar/date property derivation used across the app.

The app often decides what to show by filtering JSON on:

- `seasons` / `excludedSeasons`
- saint lists
- `dayOfTheWeek`
- `weekdayWeekend`
- `services`
- `abstainingDay` / `abstainingDays`
- `aktonkAki`
- `adamWatos`

If content "doesn't show up," check filters before assuming rendering is broken.

## Canonical Content

The source-of-truth content is in [data/jsons](d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons).

High-value files/folders:

- Root JSONs: `holyWeek.json`, `songs.json`, `glorification.json`, `holyMatrimony.json`, `unctionOfTheSick.json`, `images.json`, `explanations.json`.
- Nested folders: `psalmody`, `repeatedPrayers`, `liturgy`, `readings`, `agpeya`, `bible`.
- `manifest.json`: required for remote cache sync and generated by script.
- `_schemas`: synced schema artifacts under the JSON tree.

Two important content rules:

- Do not hand-edit `manifest.json` unless you truly have to; rebuild it with the script.
- Table objects increasingly rely on stable `table_id` values. The manifest builder assigns missing IDs automatically.

## JSON Shape Notes That Matter

There are existing notes in:

- [schema-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\schema-notes.md)
- [frontend-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\frontend-notes.md)
- [codex-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\codex-notes.md)

Short version:

- `holyWeek.json` is structurally special and has service -> hours -> sections -> tables.
- Many other files share the common "table base" schema.
- Repeated-prayer placeholders are resolved at runtime against other JSON sources.
- Some editor-hidden files exist because schemas or UX are not finalized yet, especially parts of Bible, Readings, Agpeya, `images.json`, and `explanations.json`.
- Cells must contain at least one usable language/link value.

If changing schema-sensitive JSON, open the relevant schema in `json-editor/schemas` and the corresponding runtime consumer in the mobile app together.

## JSON Editor Architecture

### Frontend

The editor frontend lives in [json-editor/frontend](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend).

Important files:

- [App.jsx](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\App.jsx): main editor shell and workflow.
- [api.js](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\api.js): all backend calls.
- `src/components`: file list, login, diff panel, pending changes, specialized editors.
- `src/editorConfig.js` and `src/editorDropdowns.js`: central editing config and dropdown options.

Editor component split:

- `HolyWeekEditor.jsx`: special-case editor for Holy Week.
- `BaseTableEditor.jsx`: shared editor for table-based files.
- `RowOnlyEditor.jsx`: simpler editor for row-only schemas.
- `DiffPanel.jsx`, `PendingChanges.jsx`, `FileList.jsx`, `LoginForm.jsx`: workflow/support UI.

The editor is schema-driven, but the UI also contains custom behavior for certain content families. A schema update may still require frontend logic updates.

### Backend

The editor backend is an AWS SAM app in [template.yaml](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\backend\template.yaml) with most logic in [app.py](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\backend\app.py).

It manages:

- file listing and file reads from S3
- schema reads
- change submission
- approval / rejection flow
- snapshots
- audit log
- public issue-report upload/submit endpoints
- Cognito auth helpers
- superadmin user management

Key AWS pieces:

- JSON bucket for live content
- snapshot bucket for reports and review snapshots
- DynamoDB tables for change requests, audit log, and email verification
- Cognito user pool and role groups: `viewer`, `editor`, `admin`, `superadmin`
- SES email notifications

The backend currently hides some files from the editor file list, including `bible/*` and `images.json`.

## Shared Workflow Between App and Editor

The app and editor are coupled through the JSON bucket and schemas:

1. Local content is edited in `data/jsons` or via the editor.
2. Schemas under `json-editor/schemas` must stay aligned with those JSONs.
3. `manifest.json` must reflect the shipped JSON files.
4. Mobile clients fetch updated content through CloudFront using the manifest hash/size data.

This means a "content-only" change can still require:

- manifest rebuild
- schema sync or schema edit
- validation
- mobile runtime verification
- editor verification if the file is editable there

## Important Commands

### Mobile app

- `npm start`
- `npm run android`
- `npm run web`

### JSON deploy / fetch

- `npm run deploy:jsons:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks`
- `npm run fetch:jsons:win -- -Bucket liturgicalbooks-json -Profile liturgicalbooks`
- `npm run validate:deploy:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks`

Useful flags:

- `-DryRun`
- `-Delete`
- `-SkipDeploy` on `validate_build_deploy.ps1`
- `-SkipFetch` on `deploy_jsonEditor_changes.ps1` when you need to deploy current local JSONs without overwriting them from S3 first

### Approval / audit helpers

- `python json-editor/scripts/export_approval_report.py`
- `python json-editor/scripts/check_approved_changes_reflected.py`
- `python json-editor/scripts/analyze_recent_holyweek_unreflected.py`

These helpers write reports under `reports/approval-export` and are useful when checking whether approved editor changes actually made it into the current local JSON files.

### Editor frontend

From `json-editor/frontend`:

- `npm run dev`
- `npm run build`

### Editor backend

From `json-editor/backend`:

- `sam build`
- `sam deploy --guided --region us-east-1 --parameter-overrides JsonBucketName=liturgicalbooks-json`

## Typical Change Paths

### If you are changing app UI or behavior

Start with:

- [App.js](d:\AppDev\LiturgicalText\LiturgicalBooks\App.js)
- [RootNavigation.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\navigation\RootNavigation.js)
- the relevant file under [components/screens](d:\AppDev\LiturgicalText\LiturgicalBooks\components\screens)
- the supporting logic under [components/functions](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions)

### If you are changing liturgical content behavior

Start with:

- the target JSON in [data/jsons](d:\AppDev\LiturgicalText\LiturgicalBooks\data\jsons)
- [dataFunctions.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\functions\dataFunctions.js)
- the screen that consumes it
- the relevant schema in [json-editor/schemas](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\schemas)

### If you are changing the JSON editor UX

Start with:

- [App.jsx](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\App.jsx)
- the appropriate component under [json-editor/frontend/src/components](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\components)
- [editorConfig.js](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\editorConfig.js)
- [editorDropdowns.js](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\editorDropdowns.js)

### If you are changing editor API or approval logic

Start with:

- [app.py](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\backend\app.py)
- [template.yaml](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\backend\template.yaml)
- [api.js](d:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\frontend\src\api.js)

## Operational Details Worth Remembering

- The repo can be dirty. Do not revert unrelated local changes.
- Existing notes in `docs` are partial and sometimes task-specific; use them as hints, not as the only source of truth.
- The mobile app depends heavily on JSON content structure. Validation passing does not guarantee runtime correctness.
- `getJsonSync` only sees warmed/in-memory JSON. If you move content to sync access without warming it, you may get silent fallbacks.
- `forceLocalJson` in settings disables remote JSON use and is important for debugging "live content vs bundled content" issues.
- Report issue functionality is backed by the editor backend API, not just local app code.
- `app.json` and `changelog.js` are user-facing release metadata, so changes there affect startup/update behavior.
- Some folders like `pythonScripts` and `backupFiles` are support material, not normal runtime codepaths.

## Suggested First Read Order For A New Session

1. [docs/session-start.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\session-start.md)
2. [docs/codex-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\codex-notes.md)
3. [App.js](d:\AppDev\LiturgicalText\LiturgicalBooks\App.js)
4. [RootNavigation.js](d:\AppDev\LiturgicalText\LiturgicalBooks\components\navigation\RootNavigation.js)
5. the target screen or editor component for the task
6. the target JSON and matching schema if content is involved

## Good Default Agent Behavior In This Repo

- Assume content, runtime logic, schemas, and deployment scripts may all need to move together.
- When touching `data/jsons`, consider whether manifest rebuild and schema validation are also required.
- When touching editor-visible JSON structure, verify both the mobile runtime and editor UI.
- When debugging missing liturgical text, inspect filters and placeholders before editing source data.
- Prefer narrow, local fixes, because many files encode domain rules that are easy to disturb.

If you need deeper context after reading this file, the next best documents are [codex-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\codex-notes.md), [schema-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\schema-notes.md), and [frontend-notes.md](d:\AppDev\LiturgicalText\LiturgicalBooks\docs\frontend-notes.md).
