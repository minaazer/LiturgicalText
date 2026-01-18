LiturgicalBooks JSON Editor

Overview
- Frontend: `json-editor/frontend` (React + JSON schema forms + diff view).
- Backend: `json-editor/backend` (AWS SAM template + Lambda + Cognito + DynamoDB).
- Schemas: `json-editor/schemas` (generated from `data/jsons`).

Deployment outline (AWS, us-east-1)
0) Regenerate schemas after content changes:
   - `python3 scripts/infer_json_schemas.py`
1) Upload schema files to the JSON bucket under `_schemas/`.
   - Example: `aws s3 sync json-editor/schemas s3://liturgicalbooks-json/_schemas/`
2) Deploy backend with AWS SAM:
   - `sam build`
   - `sam deploy --guided --region us-east-1 --parameter-overrides JsonBucketName=liturgicalbooks-json`
3) Create users in the Cognito User Pool and assign them to `admin`, `editor`, or `viewer` groups.
4) Configure frontend env vars and deploy:
   - `VITE_API_BASE_URL` = API Gateway URL from stack output
   - `VITE_COGNITO_REGION` = `us-east-1`
   - `VITE_COGNITO_USER_POOL_ID` = stack output
   - `VITE_COGNITO_CLIENT_ID` = stack output
   - See `json-editor/frontend/.env.example`

PowerShell helpers (Windows)
- Create user + assign role:
  - `powershell -ExecutionPolicy Bypass -File json-editor/scripts/create_user.ps1 -UserPoolId us-east-1_xxx -Username admin1 -Email admin1@example.com -Group admin -Profile liturgicalbooks`
- Deploy frontend to S3:
  - `powershell -ExecutionPolicy Bypass -File json-editor/scripts/deploy_frontend.ps1 -Bucket your-frontend-bucket -Profile liturgicalbooks -DryRun`

Notes
- Approvals: editors submit changes; admins approve/reject.
- Audit log stored in DynamoDB (`AuditLogTable`).
- Roles: `viewer`, `editor`, `admin`, and `superadmin` (superadmin has admin privileges; future UI can gate on it).
 - Auth helpers (no login required):
   - `POST /auth/verify-email/request` with `{ "identifier": "<username|email>" }` sends a verification code if the account exists.
   - `POST /auth/verify-email/confirm` with `{ "identifier": "<username|email>", "code": "123456" }` verifies the email.
   - `POST /auth/resolve-identifier` with `{ "identifier": "<username|email>" }` returns `{ "username": "..." }` for email-to-username lookup.
 - Superadmin-only user management:
   - `GET /admin/users` (optional `q`, `limit`, `nextToken`) to list users.
   - `GET /admin/users/{username}` to fetch user detail including groups.
   - `POST /admin/users` to create a user with groups and invite settings.
   - `POST /admin/users/{username}` to update attributes, groups, and enable/disable.
   - `DELETE /admin/users/{username}` to delete a user.
 - User invites are sent via SES as two HTML emails (temporary password + login URL). Cognito default invite is suppressed.
 - Password policy is available at `GET /auth/password-policy` for UI hints.
 - User search with `q` matches username, email, and full name (case-insensitive substring).
 - User management enforces exactly one role per user.






powershell -ExecutionPolicy Bypass -File D:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\scripts\create_user.ps1 -UserPoolId us-east-1_xVLzQSkqL -Username minaazer -Email mina.e.azer@gmail.com -Group admin -Profile liturgicalbooks


{
    "User": {
        "Username": "minaazer",
        "Attributes": [
            {
                "Name": "email",
                "Value": "mina.e.azer@gmail.com"
            },
            {
                "Name": "sub",
                "Value": "c4c8d4c8-3061-7051-4ab7-93214e136ff3"
            }
        ],
        "UserCreateDate": "2025-12-31T16:01:26.787000-05:00",
        "UserLastModifiedDate": "2025-12-31T16:01:26.787000-05:00",
        "Enabled": true,
        "UserStatus": "FORCE_CHANGE_PASSWORD"
    }
}




aws cognito-idp admin-set-user-password --user-pool-id us-east-1_xVLzQSkqL --username markyanney --password "" --permanent --profile liturgicalbooks

Editor
  powershell -ExecutionPolicy Bypass -File D:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\scripts\create_user.ps1 -UserPoolId us-east-1_xVLzQSkqL -Username markyanney -Email copticbrother2003@gmail.com -Group editor -Profile liturgicalbooks
Viewer
powershell -ExecutionPolicy Bypass -File D:\AppDev\LiturgicalText\LiturgicalBooks\json-editor\scripts\create_user.ps1 -UserPoolId us-east-1_xVLzQSkqL -Username viewer1 -Email viewer1@example.com -Group viewer -Profile liturgicalbooks


{
    "User": {
        "Username": "thomasazer",
        "Attributes": [
            {
                "Name": "email",
                "Value": "thomasazer14@gmail.com"
            },
            {
                "Name": "sub",
                "Value": "6498a4d8-00f1-705f-35e7-1d368a95d81d"
            }
        ],
        "UserCreateDate": "2025-12-31T16:39:45.779000-05:00",
        "UserLastModifiedDate": "2025-12-31T16:39:45.779000-05:00",
        "Enabled": true,
        "UserStatus": "FORCE_CHANGE_PASSWORD"
    }
}


{
    "User": {
        "Username": "markyanney",
        "Attributes": [
            {
                "Name": "email",
                "Value": "copticbrother2003@gmail.com"
            },
            {
                "Name": "sub",
                "Value": "d498a4a8-00b1-7050-7411-e9d2c351dafd"
            }
        ],
        "UserCreateDate": "2025-12-31T16:49:37.663000-05:00",
        "UserLastModifiedDate": "2025-12-31T16:49:37.663000-05:00",
        "Enabled": true,
        "UserStatus": "FORCE_CHANGE_PASSWORD"
    }
}
