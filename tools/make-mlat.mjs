// SPDX-License-Identifier: GPL-3.0-or-later
// The MLAT picture for the FAQ, with no words so it needs no translation: one aircraft sends a pulse; four
// receivers on the ground hear it at slightly different times (the rings around each, one per tick of time);
// the only place consistent with all four arrival times is where the aircraft is. Drawn in the wall's amber on
// black, lit dots for the receivers, currentColor so the page's colour applies. Run `npm run logos`.
import { writeFileSync } from "node:fs";
import * as D from "./dots.mjs";

const W = 720, H = 430;
const plane = { x: 400, y: 120 };
// four receivers, the little houses on the ground
const rx = [ { x: 110, y: 350 }, { x: 290, y: 350 }, { x: 500, y: 350 }, { x: 640, y: 350 } ];
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const step = 40; // one ring per "tick" of time

let g = "";
// the horizon
g += `<line x1="20" y1="372" x2="700" y2="372" stroke="currentColor" stroke-opacity=".3" stroke-width="2"/>`;
// the signal: rings around the aircraft, fading out (the pulse travelling)
for (let r = step; r <= 4 * step; r += step) {
  g += `<circle cx="${plane.x}" cy="${plane.y}" r="${r}" fill="none" stroke="currentColor" stroke-opacity="${(0.5 - r / (10 * step)).toFixed(2)}" stroke-width="2" stroke-dasharray="4 6"/>`;
}
// each receiver: the rings it can account for, up to the exact distance to the aircraft (its arrival time)
rx.forEach((p) => {
  const d = dist(p, plane);
  // the ring that reaches the aircraft: the measured arrival time
  g += `<circle cx="${p.x}" cy="${p.y}" r="${d.toFixed(1)}" fill="none" stroke="currentColor" stroke-opacity=".75" stroke-width="2.5"/>`;
  // the receiver: a small house of dots, and a tick mark with its own number of ticks
  g += house(p.x, p.y);
  const us = Math.round(d / step * 100); // a made-up arrival time, in microseconds after the first
  // big and bold, with a black edge so no ring crosses the figures (the first version, at 15 px, was unreadable once the page scaled it down)
  g += `<text x="${p.x}" y="${p.y + 46}" fill="currentColor" stroke="#030303" stroke-width="6" paint-order="stroke" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="25" font-weight="700" text-anchor="middle">+${us} µs</text>`;
});
// the aircraft, in dots, at the one point the four rings share
g += aircraft(plane.x, plane.y);
// the question mark: the aircraft itself did not say where it is
g += `<text x="${plane.x + 34}" y="${plane.y - 22}" fill="currentColor" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="26" font-weight="700">?</text>`;

function dots(points, r = 3) { return points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/>`).join(""); }
function house(x, y) {
  // a 5x5 dot house: roof, walls
  const rows = ["...#...", "..###..", ".#####.", "#######", ".#...#.", ".#.#.#.", ".#...#.", ".#####."];
  const pts = [];
  rows.forEach((row, j) => [...row].forEach((c, i) => { if (c === "#") pts.push([x - 18 + i * 6, y - 24 + j * 6]); }));
  return `<circle cx="${x}" cy="${y}" r="30" fill="#030303"/>` + dots(pts, 2.6);
}
function aircraft(x, y) {
  return `<circle cx="${x}" cy="${y}" r="40" fill="#030303" stroke="currentColor" stroke-opacity=".6" stroke-width="1.5"/>` + D.drawAt(D.PLANE, x, y, 4.6, 2);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">
<title id="t">Multilateration</title>
<rect width="${W}" height="${H}" fill="#030303"/>
<g color="#ffb000">${g}</g>
</svg>
`;
writeFileSync("public/img/mlat.svg", svg);
console.log("public/img/mlat.svg written");
