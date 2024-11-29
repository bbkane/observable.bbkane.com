---
title: Ben's Git Data
---

```js
import * as Inputs from "npm:@observablehq/inputs";
import {commitDays} from "./components/commitdays.js";
```

# Git Data

```js
const gitCommits = FileAttachment("data/git-commits.csv").tsv({typed: true});
```

```js
Inputs.table(gitCommits)
```

# When I Commit

```js
commitDays(gitCommits.map(obj => new Date(obj.commit_time)))
```