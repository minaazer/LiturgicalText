param(
  [Parameter(Mandatory = $true)]
  [string] $JsonBucketName,
  [string] $StackName = "liturgicalbooks-json-editor",
  [string] $Region = "us-east-1",
  [string] $SchemaPrefix = "_schemas/",
  [string] $Profile = "liturgicalbooks",
  [switch] $Guided
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$samCmd = $null

function Get-SamCommand {
  $candidate = Get-Command sam -ErrorAction SilentlyContinue
  if ($candidate) { return $candidate.Source }

  $candidate = Get-Command sam.cmd -ErrorAction SilentlyContinue
  if ($candidate) { return $candidate.Source }

  $defaultPaths = @(
    "C:\Program Files\Amazon\AWSSAMCLI\bin\sam.exe",
    "C:\Program Files\Amazon\AWSSAMCLI\bin\sam.cmd"
  )

  foreach ($path in $defaultPaths) {
    if (Test-Path $path) { return $path }
  }

  throw "AWS SAM CLI not found. Install: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html"
}

$samCmd = Get-SamCommand
Write-Host "Using SAM CLI: $samCmd"

$backendPath = Join-Path $PSScriptRoot "..\\backend"
Write-Host "==> Working dir: $backendPath"
Push-Location $backendPath
try {
  $commonDeployArgs = @(
    "--stack-name", $StackName,
    "--region", $Region,
    "--parameter-overrides", "JsonBucketName=$JsonBucketName SchemaPrefix=$SchemaPrefix",
    "--capabilities", "CAPABILITY_IAM"
  )
  if ($Profile) {
    Write-Host "Using AWS profile: $Profile"
    $commonDeployArgs += @("--profile", $Profile)
  }

  Write-Host "==> sam build"
  if ($Profile) {
    & $samCmd build --profile $Profile
  } else {
    & $samCmd build
  }

  if ($Guided) {
    Write-Host "==> sam deploy --guided"
    & $samCmd deploy --guided @($commonDeployArgs)
  }
  else {
    Write-Host "==> sam deploy"
    & $samCmd deploy @($commonDeployArgs)
  }
}
finally {
  Pop-Location
}
