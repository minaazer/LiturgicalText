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

$awsCmd = Get-Command aws.exe -CommandType Application -ErrorAction SilentlyContinue
if (-not $awsCmd) {
  $awsCmd = Get-Command aws -CommandType Application -ErrorAction SilentlyContinue
}
if (-not $awsCmd) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}
$awsExe = $awsCmd.Source

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

$syncArgs = @("s3", "sync", "s3://$Bucket/", "data/jsons")
if ($DryRun) { $syncArgs += "--dryrun" }
if ($Delete) { $syncArgs += "--delete" }

& $awsExe @syncArgs
exit $LASTEXITCODE
