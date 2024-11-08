#!/bin/env bash

cd ~/Git-GH/warg || exit 1

echo commit_dates
git log --format='%ad' --date=iso8601-strict
