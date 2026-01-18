Param(
  [switch]$Prune
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceRoot = Join-Path $repoRoot "json-editor/schemas"
$destRoot = Join-Path $repoRoot "data/jsons/_schemas"

if (-not (Test-Path $sourceRoot)) {
  Write-Error "Source schemas folder not found: $sourceRoot"
  exit 1
}

if (-not (Test-Path $destRoot)) {
  New-Item -ItemType Directory -Path $destRoot -Force | Out-Null
}

$sourceRootResolved = (Resolve-Path $sourceRoot).Path
$destRootResolved = (Resolve-Path $destRoot).Path

$sourceFiles = Get-ChildItem -Path $sourceRootResolved -Recurse -File
$sourceRelPaths = @{}

foreach ($file in $sourceFiles) {
  $relPath = $file.FullName.Substring($sourceRootResolved.Length + 1)
  $sourceRelPaths[$relPath] = $true
  $destPath = Join-Path $destRootResolved $relPath
  $destDir = Split-Path $destPath -Parent
  if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
  }
  Copy-Item -Path $file.FullName -Destination $destPath -Force
}

if ($Prune) {
  $destFiles = Get-ChildItem -Path $destRootResolved -Recurse -File
  foreach ($file in $destFiles) {
    $relPath = $file.FullName.Substring($destRootResolved.Length + 1)
    if (-not $sourceRelPaths.ContainsKey($relPath)) {
      Remove-Item -Path $file.FullName -Force
    }
  }

  $destDirs = Get-ChildItem -Path $destRootResolved -Recurse -Directory | Sort-Object FullName -Descending
  foreach ($dir in $destDirs) {
    $children = Get-ChildItem -Path $dir.FullName -Force
    if ($children.Count -eq 0) {
      Remove-Item -Path $dir.FullName -Force
    }
  }
}

Write-Host "Synced schemas from $sourceRoot to $destRoot"
