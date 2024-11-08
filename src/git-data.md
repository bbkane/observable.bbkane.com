---
title: Ben's Git Data
---

```js
import * as Inputs from "npm:@observablehq/inputs";
```

```js
import {commitDays} from "./components/commitdays.js";
```

# Git Data

```js
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
const todayFormatted = `${weekdays[today.getDay()]} ${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
```

Last updated ${todayFormatted}

```js
const gitCommits = FileAttachment("data/git-commits.csv").csv({typed: true})
// const gitCommitsCells =
```

```js
Inputs.table(gitCommits)
```

