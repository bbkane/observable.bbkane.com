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
export function commitDays(data) {
  return Plot.plot({
    width: 1e3,
    height: 400,
    marginLeft: 90,
    marginRight: 10,
    color: { type: "linear", scheme: "Greens" },
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
        sort: { x: "x", reverse: false, reduce: ([x]) => parseInt(x) },
        fill: "fill"
      }),
      Plot.text(data, { x: "x", y: "y", text: "fill", fill: "black" })
    ]
  });
}
