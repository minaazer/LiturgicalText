Param(
  [string]$Bucket = $env:S3_BUCKET,
  [string]$Profile = $env:AWS_PROFILE,
  [switch]$DryRun,
  [switch]$Delete
)

if (-not $Bucket) {
  Write-Error "S3 bucket is required. Pass -Bucket or set S3_BUCKET."
  exit 1
}

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}

$awsArgs = @()
if ($Profile) { $awsArgs += @("--profile", $Profile) }

$syncArgs = @("s3", "sync", "s3://$Bucket/", "data/jsons")
if ($DryRun) { $syncArgs += "--dryrun" }
if ($Delete) { $syncArgs += "--delete" }

& aws @awsArgs @syncArgs
exit $LASTEXITCODE
