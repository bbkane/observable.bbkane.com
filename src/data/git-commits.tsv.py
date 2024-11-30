#!/usr/bin/env python3

import csv
import subprocess as sp
import pathlib
import re
import sys

repo_dirs = [
    # "~/Git-GH/observable.bbkane.com",
    "~/Git-GH/dotfiles",
    "~/Git-GH/envelope",
    "~/Git-GH/fling",
    "~/Git-GH/grabbit",
    "~/Git-GH/journal",
    "~/Git-GH/shovel",
    "~/Git-GH/starghaze",
    "~/Git-GH/taggedmarks",
    "~/Git-GH/warg",
]

writer = csv.writer(sys.stdout, delimiter="\t")
writer.writerow(["repo_name", "commit_time"])
for repo_dir in repo_dirs:
    repo_dir = pathlib.Path(repo_dir).expanduser()
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
