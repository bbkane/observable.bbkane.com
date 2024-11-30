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
const allRepoNames = ["dotfiles", "envelope", "fling", "grabbit", "journal", "shovel", "starghaze", "warg"];
const filteredRepoNames = view(Inputs.checkbox(
    allRepoNames,
    {label: "Repo", value: allRepoNames},
));
```

```js
const filteredCommits = gitCommits.filter(repo => filteredRepoNames.includes(repo.repo_name));
const filteredCommitTimes = filteredCommits.map(obj => new Date(obj.commit_time));
```

<div class="card"">
    ${resize((width) => commitTimes(filteredCommitTimes, {width}))}
</div>

<div class="card">
    ${resize((width) => projectsOverTime(filteredCommits, {width}))}
</div>

<div class="card">
    <h2>Raw data</h2>
    ${Inputs.table(filteredCommits)}
</div>
