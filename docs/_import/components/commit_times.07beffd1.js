import * as Plot from "../../_node/@observablehq/plot@0.6.16/index.bac1276b.js";
export function daysToCells(days) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let counter = {};
  for (let i = 0; i < weekday.length; ++i) {
    counter[weekday[i]] = {};
    for (let j = 0; j < 24; ++j) {
      counter[weekday[i]][j] = 0;
    }
  }
  for (let i = 0; i < days.length; ++i) {
    let date = new Date(days[i]);
    let day = weekday[date.getDay()];
    let hour = date.getHours();
    counter[day][hour]++;
  }
  let data = [];
  for (const [day, hours] of Object.entries(counter)) {
    for (const [hour, count] of Object.entries(hours)) {
      data.push({
        x: hour,
        y: day,
        fill: count
      });
    }
  }
  return data;
}
export function commitTimes(days, { width } = {}) {
  const data = daysToCells(days);
  return Plot.plot({
    title: "When I commit",
    width,
    height: void 0,
    marginLeft: 30,
    marginRight: 10,
    color: { type: "linear", scheme: "blues" },
    x: {
      type: "band",
      label: null
    },
    y: {
      domain: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      label: null
    },
    marks: [
      Plot.cell(data, {
        x: "x",
        y: "y",
        // @ts-ignore - not sure why this is failing TS, but it works in practice. TODO: learn this
        sort: { x: "x", reverse: false, reduce: ([x]) => parseInt(x) },
        fill: "fill",
        tip: true
      }),
      // Let's keep this commented out for now to be mobile friendly
      Plot.text(data, { x: "x", y: "y", text: "fill", fill: "black" })
    ]
  });
}
export function projectsOverTime(data, interval, { width } = {}) {
  return Plot.plot({
    width,
    title: "Projects over time",
    color: { legend: true },
    marks: [
      Plot.rectY(
        data,
        Plot.binX(
          { y: "count" },
          // @ts-ignore - I'm not sure why TS doesn't like this, it works.
          { x: "commit_time", fill: "repo_name", tip: true, interval }
        )
      ),
      Plot.ruleY([0])
    ]
  });
}
export function totalCommits(data, { width } = {}) {
  return Plot.plot({
    width,
    color: { legend: true },
    marginLeft: 100,
    x: {
      label: "total commits"
    },
    y: {
      label: null
    },
    title: "Total Commits",
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          { x: "count" },
          { y: "repo_name", fill: "repo_name", tip: true }
        )
      ),
      Plot.ruleX([0])
    ]
  });
}
