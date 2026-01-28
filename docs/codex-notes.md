Codex Handoff Notes

Current goal
- Migrate JSONs to S3 + CloudFront with cache + manifest updates.

CloudFront
- Base URL: https://d18kyprs8j73gp.cloudfront.net
- S3 bucket contains data/jsons/* plus manifest.json.

Manifest + cache
- Manifest is rebuilt automatically by the deploy scripts (npm run deploy:jsons / deploy:jsons:win) — run those when changing JSONs so manifest + files stay in sync.
- components/functions/jsonCache.js implements cache init/update and getJson/getJsonSync.
- App.js calls initJsonCache with warmupPaths list.

Wired to cache (examples)
- Holy Matrimony, Songs, Glorification, Unction, Holy Week screens.
- RootNavigation uses cached holyWeek + songs to build routes.
- data/getPsalmodyHtml.ts uses getJsonSync for psalmody JSONs.
- data/doxologies.ts and data/theotokias.ts use getJsonSync.
- components/functions/dataFunctions.js uses getJsonSync for repeatedPrayers and seasonalPraises.
- settings/saintSettings.js uses getJsonSync for repeatedPrayers + doxologies.
- mainContent uses cached explanations/images.

Warmup log
- jsonCache: warmed 14 files (psalmody + repeatedPrayers + doxologies).

Next steps
- Bible JSONs stay local (no cache changes needed).
- Other JSONs (liturgy/readings/agpeya/repeatedPrayers extras) are prepared but screens not built yet.
- Add cache usage for any remaining JSON consumers once screens exist.
- Decide which large JSONs should stay local (e.g., Bible).
- Added update status/error banner for JSON cache refresh in App.
- Added `scripts/deploy_jsons.sh`, `scripts/deploy_jsons.ps1`, `npm run deploy:jsons`, and `npm run deploy:jsons:win` for S3 sync + optional CloudFront invalidation (needs `S3_BUCKET`, optional `CLOUDFRONT_DISTRIBUTION_ID`). Supports `CACHE_CONTROL` (default `public,max-age=86400`) and `--dry-run`.

JSON sync quick reference
- Upload local JSONs -> 
  S3/CloudFront: `npm run deploy:jsons` (Unix) or `npm run deploy:jsons:win` (Windows) which call `scripts/deploy_jsons.sh` / `scripts/deploy_jsons.ps1`. Requires bucket/profile: 
    - Params: `npm run deploy:jsons:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks -DryRun`
    - Env vars: `$env:S3_BUCKET="liturgicalbooks-json"; $env:CLOUDFRONT_DISTRIBUTION_ID="E3U8PRC9BR5M03"; $env:AWS_PROFILE="liturgicalbooks"; npm run deploy:jsons:win -- -DryRun`

- Fetch S3 JSONs -> 
  local `data/jsons`: `npm run fetch:jsons:win -- -Bucket liturgicalbooks-json -Profile liturgicalbooks` (add `-DryRun` to preview). 
  Raw CLI (with profile): `aws s3 sync s3://liturgicalbooks-json/ data/jsons --profile liturgicalbooks` (`--dryrun` to preview). 
  Env var option: `$env:AWS_PROFILE="liturgicalbooks"; aws s3 sync s3://liturgicalbooks-json/ data/jsons --dryrun`.

Validate + deploy schema (Windows)
- Full flow: `npm run validate:deploy:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks`
- Validates JSONs against `json-editor/schemas` (draft2020), rebuilds `data/jsons/manifest.json`, then runs the existing deploy script (respects `-DryRun`/`-Delete`). Set AWS profile via `-Profile liturgicalbooks` or `$env:AWS_PROFILE="liturgicalbooks"` to avoid CLI profile errors.

JSON editor (AWS hosted)
- Generated initial JSON Schemas from `data/jsons` into `json-editor/schemas` with `scripts/infer_json_schemas.py`.
- Frontend scaffold in `json-editor/frontend` (React + JSON schema forms + diff view + approval flow).
- Backend scaffold in `json-editor/backend` (SAM template, Lambda API, Cognito groups, DynamoDB audit).
- Deployment notes in `json-editor/README.md`.
- PowerShell helpers: `json-editor/scripts/create_user.ps1` and `json-editor/scripts/deploy_frontend.ps1`.
- Deployed backend (us-east-1) outputs:
  - ApiUrl: https://hidzdpp67k.execute-api.us-east-1.amazonaws.com
  - UserPoolId: us-east-1_xVLzQSkqL
  - UserPoolClientId: 7t0lknpe6trfrgc1ufajo7bm4s
  - SnapshotBucket: liturgicalbooks-json-editor-snapshots
- Frontend hosted in S3 bucket: `liturgicalbooks-editor-ui` (static website).
- Frontend .env added with API/Cognito config at `json-editor/frontend/.env`.
- UI tweaks: explicit array/button labels + higher-contrast nested section colors; inputs stay white.
- Backend change: hide `bible/*` JSONs and `images.json` from file list (redeploy required).
- Glorification schema refined: each `tbody` has exactly 2 rows (row 1: english/coptic/arabic, row 2: phonics).
- Auth helpers:
  - Email verification without a password via `POST /auth/verify-email/request` and `POST /auth/verify-email/confirm`.
  - Email/username resolution via `POST /auth/resolve-identifier` for sign-in/password reset UX.
- Roles: `viewer`, `editor`, `admin`, and `superadmin` (superadmin includes admin privileges; future screens can gate on it).
- Superadmin user management:
  - `GET /admin/users` (optional `q`, `limit`, `nextToken`).
  - `GET /admin/users/{username}` for detail + groups.
  - `POST /admin/users` to create users (invite optional).
  - `POST /admin/users/{username}` to update attributes, groups, and enable/disable.
  - `DELETE /admin/users/{username}` to delete a user.
- New user invites are sent via SES as two HTML emails (temporary password + login URL). Cognito default invite is suppressed.
- Password policy endpoint: `GET /auth/password-policy` (used for UI hints).
- User search with `q` matches username, email, and full name (case-insensitive substring).
- User management enforces exactly one role per user.


**********************
Deploy editor json changes commands (Windows)
npm run deploy:jsons:editor:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks

Add -SkipFetch to deploy current locals without pulling, 
or -SkipValidate to skip validation.
**********************

- Dry run (PowerShell parameters): `npm run deploy:jsons:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks -DryRun`
- Dry run (env vars): `$env:S3_BUCKET="liturgicalbooks-json"; $env:CLOUDFRONT_DISTRIBUTION_ID="E3U8PRC9BR5M03"; $env:AWS_PROFILE="liturgicalbooks"; npm run deploy:jsons:win -- -DryRun`
- Live deploy (PowerShell parameters): `npm run deploy:jsons:win -- -Bucket liturgicalbooks-json -DistributionId E3U8PRC9BR5M03 -Profile liturgicalbooks`
- Live deploy (env vars): `$env:S3_BUCKET="liturgicalbooks-json"; $env:CLOUDFRONT_DISTRIBUTION_ID="E3U8PRC9BR5M03"; $env:AWS_PROFILE="liturgicalbooks"; npm run deploy:jsons:win`

Fetch from S3 to local (Windows)
- Dry run: `npm run fetch:jsons:win -- -Bucket liturgicalbooks-json -Profile liturgicalbooks -DryRun`
- Live: `npm run fetch:jsons:win -- -Bucket liturgicalbooks-json -Profile liturgicalbooks`
- Raw CLI dry run: `aws s3 sync s3://liturgicalbooks-json/ data/jsons --dryrun`
- Raw CLI live: `aws s3 sync s3://liturgicalbooks-json/ data/jsons`

********** Backend Deploy

powershell -ExecutionPolicy Bypass -File json-editor/scripts/deploy_backend.ps1 `
  -JsonBucketName liturgicalbooks-json `
  -Profile liturgicalbooks `
  -Region us-east-1

  
************ Frontend Deploy
powershell -ExecutionPolicy Bypass -File json-editor/scripts/deploy_frontend.ps1 `
  -Bucket liturgicalbooks-editor-ui `
  -Profile liturgicalbooks




aws cloudfront get-invalidation --distribution-id E3U8PRC9BR5M03 --id IB6BWSPCJEGHULXOTPVKMPHGCT --profile liturgicalbooks




Create user
  aws cognito-idp admin-create-user `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username minaazer `
  --user-attributes Name=email,Value=mina.e.azer@gmail.com Name=name,Value="Mina Azer"

create user with temp password
aws cognito-idp admin-create-user `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username <username> `
  --temporary-password "<TempPass123!>" `
  --user-attributes Name=email,Value=user@example.com

Assign user with permanant password
aws cognito-idp admin-set-user-password `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username <username> `
  --password "<Password123!>" `
  --permanent


Assign a name to a user
  aws cognito-idp admin-update-user-attributes `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username markyanney `
  --user-attributes Name=name,Value="Mark Yanney"

  retrieve user info

  aws cognito-idp admin-get-user `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username minaazer `
  --query "UserAttributes[].{Name:Name,Value:Value}" `
  --output table
  

  verify user email

  aws cognito-idp admin-update-user-attributes `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username minaazer `
  --user-attributes Name=email_verified,Value=true

  Unverify email
  aws cognito-idp admin-update-user-attributes `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --username minaazer `
  --user-attributes Name=email_verified,Value=false

  retrieve user list

aws cognito-idp list-users-in-group `
  --region us-east-1 `
  --profile liturgicalbooks `
  --user-pool-id us-east-1_xVLzQSkqL `
  --group-name editor `
  --query "Users[].{username:Username,email:Attributes[?Name=='email'].Value|[0],role:'editor',name:Attributes[?Name=='name'].Value|[0]}" `
  --output table

  ----------------------------------------------------------------------------
|                             ListUsersInGroup                             |
+------------------------------+----------------+---------+----------------+
|             email            |     name       |  role   |   username     |
+------------------------------+----------------+---------+----------------+
|  thomasazer14@gmail.com      |  Thomas Azer   |  editor |  thomasazer    |
|  copticbrother2003@gmail.com |  Mark Yanney   |  editor |  markyanney    |
|  georgetadros98@gmail.com    |  George Tadros |  editor |  georgetadros  |
|  georgef1515@gmail.com       |  George Farag  |  editor |  georgefarag   |
+------------------------------+----------------+---------+----------------+

----------------------
Recent editor changes (Jan 2026)
- JSON editor UI refactor: extracted shared row/cell editors (RowEditor/RowFieldsEditor/CellsEditor/CellValueTextarea) used by BaseTable + HolyWeek + RowOnly.
- Cell inputs: multiline auto-grow textarea (up to 10 lines) with RTL for arabic/arabicLink; matched font + border styling.
- Row UI compacting: row header is multi-column; add-row-field selector inline; add-cell button moved to a small icon in cell header.
- Row fields: array fields now use compact multi-select with suggestions + free text.
- Dropdowns centralized in `json-editor/frontend/src/editorDropdowns.js` with labels + options; editorConfig now imports from it.
- New labels: table + row field display names (Title Case) via label maps.
- New dropdown options: `services` array now suggests liturgy/vespers/matins/midnightPraises/vespersPraises/morningDoxology.
- Added table field: `abstainingDays` (boolean) + schema updates.
- Fixed `services` usage in data: `data/doxologies.ts` and `data/getPsalmodyHtml.ts` now treat services as array.
- Removed typo fields from editor options: `seasonsExclude`, `seasonse`, and `season` (repeated prayer vars now use `seasons`).
- Schemas updated to replace `season` with `seasons` in common + repeatedPrayers schemas.
