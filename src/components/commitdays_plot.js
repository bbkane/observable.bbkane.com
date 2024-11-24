import * as Plot from "npm:@observablehq/plot";

export function commitDays(data) {
  return Plot.plot({
    width: 1000,
    height: 400,
    marginLeft: 90,
    marginRight: 10,
    color: { type: "linear", scheme: "Greens" },
    x: {
      type: "band"
    },
    y: {
      domain: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    marks: [
      Plot.cell(data, {
        x: "x",
        y: "y",
        sort: { x: "x", reverse: false, reduce: ([x]) => parseInt(x) },
        fill: "fill"
      }),
      Plot.text(data, { x: 'x', y: 'y', text: 'fill', fill: 'black' }),
    ]
  })
}
