Param(
  [string]$Bucket = $env:S3_BUCKET,
  [string]$DistributionId = $env:CLOUDFRONT_DISTRIBUTION_ID,
  [string]$Profile = $env:AWS_PROFILE,
  [string]$CacheControl = $env:CACHE_CONTROL,
  [switch]$DryRun,
  [switch]$Delete,
  [switch]$SkipDeploy
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "node not found in PATH. Install Node.js first."
}
if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
  Write-Error "npx not found in PATH. Install Node.js (includes npm/npx)."
}
$awsCmd = Get-Command aws.exe -CommandType Application -ErrorAction SilentlyContinue
if (-not $awsCmd) {
  $awsCmd = Get-Command aws -CommandType Application -ErrorAction SilentlyContinue
}
if (-not $awsCmd) {
  Write-Error "aws CLI not found in PATH. Install AWS CLI v2 first."
}

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

# Rebuild manifest before validation so it matches the on-disk JSONs
& "$PSScriptRoot/sync_editor_schemas.ps1" -Prune
& node "$PSScriptRoot/build_json_manifest.js"

$schemaPairs = @(
  @{ Schema = "json-editor/schemas/manifest.json"; Data = "data/jsons/manifest.json"; Optional = $false },
  @{ Schema = "json-editor/schemas/songs.schema.json"; Data = "data/jsons/songs.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/explanations.schema.json"; Data = "data/jsons/explanations.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/images.schema.json"; Data = "data/jsons/images.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/holyWeek.schema.json"; Data = "data/jsons/holyWeek.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/glorification.schema.json"; Data = "data/jsons/glorification.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/holyMatrimony.schema.json"; Data = "data/jsons/holyMatrimony.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/unctionOfTheSick.schema.json"; Data = "data/jsons/unctionOfTheSick.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/psalmody/psalmody.schema.json"; Data = "data/jsons/psalmody/psalmody.json"; Optional = $false },
  @{ Schema = "json-editor/schemas/psalmody/doxologies.schema.json"; Data = "data/jsons/psalmody/doxologies.json"; Optional = $false },
  @{ Schema = "json-editor/schemas/psalmody/psalis.schema.json"; Data = "data/jsons/psalmody/psalis.json"; Optional = $false },
  @{ Schema = "json-editor/schemas/psalmody/theotokias.schema.json"; Data = "data/jsons/psalmody/theotokias.json"; Optional = $false },
  @{ Schema = "json-editor/schemas/psalmody/seasonalPraises.schema.json"; Data = "data/jsons/psalmody/seasonalPraises.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/annualRepeatedPrayers.schema.json"; Data = "data/jsons/repeatedPrayers/annualRepeatedPrayers.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/hwRepeatedPrayers.schema.json"; Data = "data/jsons/repeatedPrayers/hwRepeatedPrayers.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/repeatedAgpeyaPrayers.schema.json"; Data = "data/jsons/repeatedPrayers/repeatedAgpeyaPrayers.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/seasonalRepeatedPrayers.schema.json"; Data = "data/jsons/repeatedPrayers/seasonalRepeatedPrayers.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/actsResponses.schema.json"; Data = "data/jsons/repeatedPrayers/actsResponses.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/aspasmosAdam.schema.json"; Data = "data/jsons/repeatedPrayers/aspasmosAdam.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/aspasmosWatos.schema.json"; Data = "data/jsons/repeatedPrayers/aspasmosWatos.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/distributionPraises.schema.json"; Data = "data/jsons/repeatedPrayers/distributionPraises.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/expositions.schema.json"; Data = "data/jsons/repeatedPrayers/expositions.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/gospelResponses.schema.json"; Data = "data/jsons/repeatedPrayers/gospelResponses.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/intercessions.schema.json"; Data = "data/jsons/repeatedPrayers/intercessions.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/litanies.schema.json"; Data = "data/jsons/repeatedPrayers/litanies.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/psalmResponses.schema.json"; Data = "data/jsons/repeatedPrayers/psalmResponses.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/versesOfCymbals.schema.json"; Data = "data/jsons/repeatedPrayers/versesOfCymbals.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/endOfServiceParts.schema.json"; Data = "data/jsons/repeatedPrayers/endOfServiceParts.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/psalm150Refrains.schema.json"; Data = "data/jsons/repeatedPrayers/psalm150Refrains.json"; Optional = $true },
  @{ Schema = "json-editor/schemas/repeatedPrayers/endOfServiceCanons.schema.json"; Data = "data/jsons/repeatedPrayers/endOfServiceCanons.json"; Optional = $true }
)

$ajvArgsBase = @(
  "ajv-cli",
  "validate",
  "--spec=draft2020",
  "--strict=false",
  "--all-errors",
  "--allow-union-types",
  "-r",
  "json-editor/schemas/common/table_base.schema.json"
)

foreach ($pair in $schemaPairs) {
  $schemaPath = $pair.Schema
  $dataPath = $pair.Data
  if (-not (Test-Path $schemaPath)) {
    Write-Warning "Schema not found: $schemaPath (skipping)"
    continue
  }
  if (-not (Test-Path $dataPath)) {
    if ($pair.Optional) {
      Write-Warning "Data file not found (optional): $dataPath (skipping)"
      continue
    }
    Write-Error "Required data file missing: $dataPath"
  }
  Write-Host "Validating $dataPath against $schemaPath"
  & npx @ajvArgsBase -s $schemaPath -d $dataPath
}

if ($SkipDeploy) {
  Write-Host "Validation complete. Skipping deploy."
  exit 0
}

$deployParams = @{}
if ($Bucket) { $deployParams.Bucket = $Bucket }
if ($DistributionId) { $deployParams.DistributionId = $DistributionId }
if (-not [string]::IsNullOrWhiteSpace($Profile)) { $deployParams.Profile = $Profile }
if ($CacheControl) { $deployParams.CacheControl = $CacheControl }
if ($DryRun) { $deployParams.DryRun = $true }
if ($Delete) { $deployParams.Delete = $true }

& "$PSScriptRoot/deploy_jsons.ps1" @deployParams
