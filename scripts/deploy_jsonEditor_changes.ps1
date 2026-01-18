Param(
  [string]$Bucket = $env:S3_BUCKET,
  [string]$DistributionId = $env:CLOUDFRONT_DISTRIBUTION_ID,
  [string]$Profile = $env:AWS_PROFILE,
  [string]$CacheControl = $env:CACHE_CONTROL,
  [switch]$DryRun,
  [switch]$Delete,
  [switch]$SkipFetch,
  [switch]$SkipValidate
)

$ErrorActionPreference = "Stop"

if (-not $Bucket) {
  Write-Error "S3 bucket is required. Pass -Bucket or set S3_BUCKET."
  exit 1
}

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
# Normalize profile (avoid null/whitespace) and export to env for child scripts
if ([string]::IsNullOrWhiteSpace($Profile)) {
  $Profile = $null
  Remove-Item Env:AWS_PROFILE -ErrorAction SilentlyContinue
} else {
  $Profile = $Profile.Trim()
  $env:AWS_PROFILE = $Profile
}

# Step 1: fetch the latest approved JSONs from S3 (keeps local data/jsons in sync)
if (-not $SkipFetch) {
  $fetchParams = @{ Bucket = $Bucket }
  if ($DryRun) { $fetchParams.DryRun = $true }
  if ($Delete) { $fetchParams.Delete = $true }
  & "$scriptRoot/fetch_jsons.ps1" @fetchParams
}

# Step 2: validate, rebuild manifest, deploy, and invalidate CF (if DistributionId provided)
if (-not $SkipValidate) {
  $validateParams = @{ Bucket = $Bucket }
  if ($DistributionId) { $validateParams.DistributionId = $DistributionId }
  if ($CacheControl) { $validateParams.CacheControl = $CacheControl }
  if ($DryRun) { $validateParams.DryRun = $true }
  if ($Delete) { $validateParams.Delete = $true }
  & "$scriptRoot/validate_build_deploy.ps1" @validateParams
} else {
  # Skip validation, just deploy current on-disk JSONs
  $deployParams = @{ Bucket = $Bucket }
  if ($DistributionId) { $deployParams.DistributionId = $DistributionId }
  if ($CacheControl) { $deployParams.CacheControl = $CacheControl }
  if ($DryRun) { $deployParams.DryRun = $true }
  if ($Delete) { $deployParams.Delete = $true }
  & "$scriptRoot/deploy_jsons.ps1" @deployParams
}

exit $LASTEXITCODE
