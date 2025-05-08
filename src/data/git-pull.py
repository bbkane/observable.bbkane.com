#!/usr/bin/env python3

# This script isn't used by `npm run dev`, but it's useful for updating the repos before running that.

import json
import os
import pathlib
import re
import subprocess as sp
import sys

SCRIPT_DIR = pathlib.Path(os.path.dirname(os.path.realpath(__file__)))

with open(SCRIPT_DIR / "repos.json") as f:
    repo_data = json.load(f)

missing_repos_dirs = []

for repo_dir in repo_data.values():
    repo_dir = pathlib.Path(repo_dir).expanduser()
    if not repo_dir.exists():
        missing_repos_dirs.append(repo_dir)
        continue
    sp.run(
        ["git", "checkout", "master"],
        check=True,
        cwd=repo_dir,
        encoding="utf-8",
        text=True,
    )
    sp.run(
        ["git", "pull"],
        check=True,
        cwd=repo_dir,
        encoding="utf-8",
        text=True,
    )

if missing_repos_dirs:
    raise SystemError(
        f"Missing repos: {', '.join(map(str, missing_repos_dirs))}"
    )
