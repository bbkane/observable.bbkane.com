import * as Plot from "../../_node/@observablehq/plot@0.6.16/index.bac1276b.js";
export function daysToCells(days) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
    marginLeft: 90,
    marginRight: 10,
    color: { type: "linear", scheme: "blues" },
    x: {
      type: "band"
    },
    y: {
      domain: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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
      Plot.text(data, { x: "x", y: "y", text: "fill", fill: "black" })
    ]
  });
}
export function projectsOverTime(data, { width } = {}) {
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
          { x: "commit_time", fill: "repo_name", tip: true, interval: "3 months" }
        )
      ),
      Plot.ruleY([0])
    ]
  });
}
