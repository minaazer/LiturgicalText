Param(
  [Parameter(Mandatory=$true)][string]$UserPoolId,
  [Parameter(Mandatory=$true)][string]$Username,
  [Parameter(Mandatory=$true)][string]$Email,
  [Parameter(Mandatory=$true)][ValidateSet("admin","editor","viewer")][string]$Group,
  [string]$Profile = $env:AWS_PROFILE
)

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}

$awsArgs = @()
if ($Profile) { $awsArgs += @("--profile", $Profile) }

& aws @awsArgs cognito-idp admin-create-user `
  --user-pool-id $UserPoolId `
  --username $Username `
  --user-attributes Name=email,Value=$Email

if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

& aws @awsArgs cognito-idp admin-add-user-to-group `
  --user-pool-id $UserPoolId `
  --username $Username `
  --group-name $Group

exit $LASTEXITCODE
