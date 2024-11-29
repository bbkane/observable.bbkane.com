---
title: Ben's Git Data
---

```js
import * as Inputs from "npm:@observablehq/inputs";
import {commitTimes, projectsOverTime} from "./components/commit_times.js";
```

# Git Data

```js
const gitCommits = FileAttachment("data/git-commits.tsv").tsv({typed: true});
```

```js
const filteredRepoNames = view(Inputs.checkbox(
    ["dotfiles", "envelope", "fling", "grabbit", "journal", "shovel", "starghaze", "warg"],
    {label: "Repo"},
));
```

```js
const filteredCommits = gitCommits.filter(repo => filteredRepoNames.includes(repo.repo_name));
const filteredCommitTimes = filteredCommits.map(obj => new Date(obj.commit_time));
```

<div class="card" style="max-width: 1000px;">
    <h2>Days and hours I commit</h2>
    ${resize((width) => commitTimes(filteredCommitTimes, {width}))}
</div>

<div class="card" style="max-width: 1000px;">
    <h2>Commits over time</h2>
    ${resize((width) => projectsOverTime(filteredCommits, {width}))}
</div>


# Filtered Data

```js
Inputs.table(filteredCommits)
```