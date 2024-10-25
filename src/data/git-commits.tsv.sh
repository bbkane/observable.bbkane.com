#!/bin/env bash

cd ~/Git-GH/warg || exit 1

git log --format='%ad' --date=iso8601-strict
