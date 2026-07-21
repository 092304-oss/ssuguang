#!/bin/sh
set -eu

mkdir -p /app/outputs/assets/generated
mkdir -p /app/work/creator-image-jobs
mkdir -p /app/work/published-games

if [ -d /app/seed/generated ] && [ -z "$(find /app/outputs/assets/generated -mindepth 1 -maxdepth 1 -print -quit 2>/dev/null)" ]; then
  cp -a /app/seed/generated/. /app/outputs/assets/generated/
fi

exec "$@"
