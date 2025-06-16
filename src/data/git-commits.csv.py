#!/usr/bin/env python3

import csv
import json
import os
import pathlib
import re
import subprocess as sp
import sys

SCRIPT_DIR = pathlib.Path(os.path.dirname(os.path.realpath(__file__)))

with open(SCRIPT_DIR / "repos.json") as f:
    repo_data = json.load(f)

writer = csv.writer(sys.stdout, delimiter=",")
writer.writerow(["repo_name", "commit_time"])
for repo_dir in repo_data.values():
    repo_dir = pathlib.Path(repo_dir).expanduser()
    if not repo_dir.exists():
        raise SystemError(f"{repo_dir} does not exist")
    res = sp.run(
        ["git", "log", "--format=%ad", "--date=iso8601-strict", "--reverse"],
        check=True,
        cwd=repo_dir,
        encoding="utf-8",
        stdout=sp.PIPE,
        text=True,
    )
    for line in res.stdout.splitlines():
        writer.writerow([repo_dir.name, line])
