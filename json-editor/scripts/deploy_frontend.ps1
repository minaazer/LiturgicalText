Param(
  [Parameter(Mandatory=$true)][string]$Bucket,
  [string]$Profile = $env:AWS_PROFILE,
  [string]$CacheControl = "public,max-age=300",
  [switch]$DryRun
)

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
  exit 1
}

$frontendPath = Resolve-Path "${PSScriptRoot}\..\frontend"
if (-not (Test-Path $frontendPath)) {
  Write-Error "Frontend folder not found at $frontendPath"
  exit 1
}

Push-Location $frontendPath
npm install
if ($LASTEXITCODE -ne 0) { Pop-Location; exit $LASTEXITCODE }

npm run build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit $LASTEXITCODE }
Pop-Location

$awsArgs = @()
if ($Profile) { $awsArgs += @("--profile", $Profile) }

$syncArgs = @("s3", "sync", "$frontendPath\dist", "s3://$Bucket/", "--cache-control", $CacheControl)
if ($DryRun) { $syncArgs += "--dryrun" }

& aws @awsArgs @syncArgs
exit $LASTEXITCODE
