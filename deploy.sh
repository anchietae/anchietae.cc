#!/bin/bash

REPO_DIR="/home/deployuser/anchietae.cc"
WEB_ROOT="/var/www/anchietae.cc"

log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log_message "Deployment started."

cd "$REPO_DIR" || { log_message "Error: Could not change to repository directory."; exit 1; }

log_message "Pulling latest changes..."
git pull origin master
if [ $? -ne 0 ]; then
    log_message "Error: Git pull failed."
    exit 1
fi

log_message "Building website..."
pnpm install
bun run build
if [ $? -ne 0 ]; then
     log_message "Error: Website build failed."
     exit 1
fi

rsync -av --delete "$REPO_DIR/dist/" "$WEB_ROOT/"

if [ $? -ne 0 ]; then
    log_message "Error: Copying files to web root failed."
    exit 1
fi

log_message "Deployment finished successfully."
exit 0