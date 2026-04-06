Param(
  [string]$Bucket = $env:S3_BUCKET,
  [string]$Profile = $env:AWS_PROFILE,
  [switch]$DryRun,
  [switch]$Delete
)

$ErrorActionPreference = "Stop"

if (-not $Bucket) {
  Write-Error "S3 bucket is required. Pass -Bucket or set S3_BUCKET."
  exit 1
}

Write-Host "Pulling live approved JSONs from S3 into local data/jsons..."
Write-Host "This updates the local copy only. It does not validate or deploy anything."

$fetchParams = @{ Bucket = $Bucket }
if (-not [string]::IsNullOrWhiteSpace($Profile)) { $fetchParams.Profile = $Profile.Trim() }
if ($DryRun) { $fetchParams.DryRun = $true }
if ($Delete) { $fetchParams.Delete = $true }

& "$PSScriptRoot/fetch_jsons.ps1" @fetchParams
exit $LASTEXITCODE
