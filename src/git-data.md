---
title: Ben's Git Data
---

# Git Data

```js
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
const todayFormatted = `${weekdays[today.getDay()]} ${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
```

Last updated: ${todayFormatted}

```js
const gitCommits = FileAttachment("data/git-commits.csv").csv({typed: true});
```

```js
import * as Inputs from "npm:@observablehq/inputs";
```

```js
Inputs.table(gitCommits)
```

# When I Commit

```js
import {daysToCells, commitDays} from "./components/commitdays.js";
```

```js
let data = daysToCells(gitCommits.map(obj => new Date(obj.commit_date)));
```

```js
commitDays(data)
```