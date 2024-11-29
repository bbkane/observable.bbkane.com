---
title: Ben's Git Data
---

```js
import * as Inputs from "npm:@observablehq/inputs";
import {commitTimes} from "./components/commit_times.js";
```

# Git Data

```js
const gitCommits = FileAttachment("data/git-commits.csv").tsv({typed: true});
```

```js
const filteredRepoNames = view(Inputs.checkbox(
    ["dotfiles", "envelope", "fling", "grabbit", "journal", "shovel", "starghaze", "warg"],
    {label: "Repo"},
));
```

```js
const filteredCommits = gitCommits.filter(repo => filteredRepoNames.includes(repo.repo_name));
```

```js
Inputs.table(filteredCommits)
```

# When I Commit

```js
commitTimes(filteredCommits.map(obj => new Date(obj.commit_time)))
```