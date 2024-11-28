#!/bin/env python3

import subprocess as sp
import pathlib

repo_dirs = [
    "~/Git-GH/envelope",
    "~/Git-GH/warg",
]

for repo_dir in repo_dirs:
    repo_dir = pathlib.Path(repo_dir).expanduser()
    repo_name = repo_dir.name
    sp.run(
        # TODO: get lines changed
        ["git", "log", f"--format={repo_name}\t%ad", "--date=iso8601-strict"],
        cwd=repo_dir,
    )
