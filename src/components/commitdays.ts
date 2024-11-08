import * as Plot from "npm:@observablehq/plot";

type Cell = {
    x: string,
    y: string,
    fill: number
}

// TODO: write test for this
function daysToObjs(days: Date[]): Cell[] {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // counter is a map of weekday: str -> hour: int -> count: int
    type Counter = Record<string, Record<number, number>>;
    let counter: Counter = {};

    // prepopulate counter
    for (let i = 0; i < weekday.length; ++i) {
        counter[weekday[i]] = {};
        for (let j = 0; j < 24; ++j) {
            counter[weekday[i]][j] = 0;
        }
    }

    // fill counter
    for (let i = 0; i < days.length; ++i) {
        let date = new Date(days[i]);
        let day = weekday[date.getDay()];
        let hour = date.getHours();
        counter[day][hour]++;
    }

    // counter to list of objects
    let data: Cell[] = [];
    for (const [day, hours] of Object.entries(counter)) {
        for (const [hour, count] of Object.entries(hours)) {
            data.push({
                x: hour,
                y: day,
                fill: count,
            });
        }
    }
    return data;
}

export function commitDays(cells: Cell[]) {
    return Plot.plot({
        marginLeft: 90,
        marginRight: 10,
        color: { type: "linear", scheme: "Greens" },
        y: {
            domain: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        },
        marks: [
            Plot.cell(cells, {
                x: "x",
                y: "y",
                sort: { x: "x", reverse: false, reduce: ([x]) => parseInt(x) },
                fill: "fill"
            }),
            Plot.text(cells, { x: 'x', y: 'y', text: 'fill' })
        ]
    })
}
