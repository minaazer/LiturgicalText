#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: scripts/deploy_jsons.sh [--delete] [--dry-run]

Required env:
  S3_BUCKET                  S3 bucket name (no s3:// prefix)

Optional env:
  AWS_PROFILE                AWS CLI profile to use
  CLOUDFRONT_DISTRIBUTION_ID CloudFront distribution ID for invalidation
  INVALIDATION_PATHS         Paths for invalidation (default: "/*")
  CACHE_CONTROL              Cache-Control header for JSONs (default: "public,max-age=86400")

Options:
  --delete   Remove files from S3 that are not present locally
  --dry-run  Show what would change without uploading
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if [[ -z "${S3_BUCKET:-}" ]]; then
  echo "Error: S3_BUCKET is required." >&2
  usage
  exit 1
fi

AWS_CLI_BIN="${AWS_CLI_BIN:-}"
if [[ -z "$AWS_CLI_BIN" ]]; then
  if command -v aws >/dev/null 2>&1; then
    AWS_CLI_BIN="aws"
  elif command -v aws.exe >/dev/null 2>&1; then
    AWS_CLI_BIN="aws.exe"
  elif [[ -x "/c/Program Files/Amazon/AWSCLIV2/aws.exe" ]]; then
    AWS_CLI_BIN="/c/Program Files/Amazon/AWSCLIV2/aws.exe"
  fi
fi

if [[ -z "$AWS_CLI_BIN" ]]; then
  echo "Error: aws CLI not found in PATH. Set AWS_CLI_BIN if needed." >&2
  exit 1
fi

profile_args=()
if [[ -n "${AWS_PROFILE:-}" ]]; then
  profile_args+=(--profile "$AWS_PROFILE")
fi

delete_flag=()
dry_run_flag=()
while [[ $# -gt 0 ]]; do
  case "$1" in
    --delete)
      delete_flag+=(--delete)
      shift
      ;;
    --dry-run)
      dry_run_flag+=(--dryrun)
      shift
      ;;
    *)
      echo "Error: unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

cache_control="${CACHE_CONTROL:-public,max-age=86400}"

NODE_BIN="${NODE_BIN:-}"
if [[ -z "$NODE_BIN" ]]; then
  if command -v node >/dev/null 2>&1; then
    NODE_BIN="node"
  elif command -v node.exe >/dev/null 2>&1; then
    NODE_BIN="node.exe"
  elif [[ -x "/c/Program Files/nodejs/node.exe" ]]; then
    NODE_BIN="/c/Program Files/nodejs/node.exe"
  fi
fi

if [[ -z "$NODE_BIN" ]]; then
  echo "Error: node not found in PATH. Set NODE_BIN if needed." >&2
  exit 1
fi

"$NODE_BIN" scripts/build_json_manifest.js

"$AWS_CLI_BIN" "${profile_args[@]}" s3 sync data/jsons "s3://${S3_BUCKET}/" \
  --acl public-read \
  --content-type application/json \
  --cache-control "$cache_control" \
  "${dry_run_flag[@]}" \
  "${delete_flag[@]}"

if [[ "${#dry_run_flag[@]}" -gt 0 ]]; then
  echo "Skipped CloudFront invalidation (dry-run)."
elif [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  invalidation_paths="${INVALIDATION_PATHS:-/*}"
  "$AWS_CLI_BIN" "${profile_args[@]}" cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "$invalidation_paths"
else
  echo "Skipped CloudFront invalidation (CLOUDFRONT_DISTRIBUTION_ID not set)."
fi
