Param()

$awsCmd = Get-Command aws.exe -CommandType Application -ErrorAction SilentlyContinue
if (-not $awsCmd) {
  $awsCmd = Get-Command aws -CommandType Application -ErrorAction SilentlyContinue
}
if ($awsCmd) {
  return $awsCmd.Source
}

$candidatePaths = @(
  "C:\Program Files\Amazon\AWSCLIV2\aws.exe",
  "C:\Program Files (x86)\Amazon\AWSCLIV2\aws.exe"
)

if ($env:LOCALAPPDATA) {
  $candidatePaths += (Join-Path $env:LOCALAPPDATA "Programs\Amazon\AWSCLIV2\aws.exe")
}

foreach ($candidate in $candidatePaths) {
  if (Test-Path $candidate) {
    return $candidate
  }
}

Write-Error "aws CLI not found in PATH or standard install locations. Install AWS CLI v2 first."
exit 1
