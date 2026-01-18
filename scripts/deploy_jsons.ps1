Param(
  [string]$Bucket = $env:S3_BUCKET,
  [string]$DistributionId = $env:CLOUDFRONT_DISTRIBUTION_ID,
  [string]$Profile = $env:AWS_PROFILE,
  [string]$CacheControl = $env:CACHE_CONTROL,
  [switch]$DryRun,
  [switch]$Delete
)

if (-not $Bucket) {
  Write-Error "S3 bucket is required. Pass -Bucket or set S3_BUCKET."
  exit 1
}

if (-not $CacheControl) {
  $CacheControl = "public,max-age=86400"
}
$manifestCache = "public,max-age=60"

# Normalize profile and keep env in sync to avoid empty --profile args
if ([string]::IsNullOrWhiteSpace($Profile)) {
  $Profile = $env:AWS_PROFILE
}
if ([string]::IsNullOrWhiteSpace($Profile)) {
  $Profile = $null
  Remove-Item Env:AWS_PROFILE -ErrorAction SilentlyContinue
} else {
  $Profile = $Profile.Trim()
  $env:AWS_PROFILE = $Profile
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "node not found in PATH. Install Node.js first."
  exit 1
}

$awsCmd = Get-Command aws.exe -CommandType Application -ErrorAction SilentlyContinue
if (-not $awsCmd) {
  $awsCmd = Get-Command aws -CommandType Application -ErrorAction SilentlyContinue
}
if (-not $awsCmd) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}
$awsExe = $awsCmd.Source

& "$PSScriptRoot/sync_editor_schemas.ps1" -Prune
& node scripts/build_json_manifest.js
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$syncArgs = @("s3", "sync", "data/jsons", "s3://$Bucket/", "--content-type", "application/json", "--cache-control", $CacheControl)
if ($DryRun) { $syncArgs += "--dryrun" }
if ($Delete) { $syncArgs += "--delete" }

& $awsExe @syncArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Override manifest cache-control to force clients to refresh quickly
$manifestArgs = @("s3", "cp", "data/jsons/manifest.json", "s3://$Bucket/manifest.json", "--cache-control", $manifestCache, "--content-type", "application/json")
& $awsExe @manifestArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if ($DryRun) {
  Write-Host "Skipped CloudFront invalidation (dry-run)."
  exit 0
}

if ($DistributionId) {
  $invalidationPaths = $env:INVALIDATION_PATHS
  if (-not $invalidationPaths) { $invalidationPaths = "/*" }
  & $awsExe cloudfront create-invalidation --distribution-id $DistributionId --paths $invalidationPaths
  exit $LASTEXITCODE
}

Write-Host "Skipped CloudFront invalidation (CLOUDFRONT_DISTRIBUTION_ID not set)."
