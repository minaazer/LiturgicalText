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

# Trim profile to avoid passing an empty token to aws CLI
$Profile = $Profile.Trim()

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "node not found in PATH. Install Node.js first."
  exit 1
}

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}

& node scripts/build_json_manifest.js
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$awsArgs = @()
if (-not [string]::IsNullOrWhiteSpace($Profile)) { $awsArgs += @("--profile", $Profile) }

$syncArgs = @("s3", "sync", "data/jsons", "s3://$Bucket/", "--content-type", "application/json", "--cache-control", $CacheControl)
if ($DryRun) { $syncArgs += "--dryrun" }
if ($Delete) { $syncArgs += "--delete" }

& aws @awsArgs @syncArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if ($DryRun) {
  Write-Host "Skipped CloudFront invalidation (dry-run)."
  exit 0
}

if ($DistributionId) {
  $invalidationPaths = $env:INVALIDATION_PATHS
  if (-not $invalidationPaths) { $invalidationPaths = "/*" }
  & aws @awsArgs cloudfront create-invalidation --distribution-id $DistributionId --paths $invalidationPaths
  exit $LASTEXITCODE
}

Write-Host "Skipped CloudFront invalidation (CLOUDFRONT_DISTRIBUTION_ID not set)."
