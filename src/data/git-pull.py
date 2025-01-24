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

for repo_dir in repo_data.values():
    repo_dir = pathlib.Path(repo_dir).expanduser()
    if not repo_dir.exists():
        raise SystemError(f"{repo_dir} does not exist")
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
