// SPDX-License-Identifier: GPL-3.0-or-later
// Little helpers shared by the picture generators (make-mlat.mjs, make-figures.mjs): a sprite is a grid of lit
// and unlit dots, drawn as circles like the wall's own display. Amber on black, no text anywhere, so a picture
// needs no translation (the owner's rule: nothing untranslated, and the cheapest translation is no words).
export const AMBER = "#ffb000", BLACK = "#030303";

export function grid(w, h) { return { w, h, c: Array.from({ length: h }, () => Array(w).fill(0)) }; }
export function px(g, x, y) { if (x >= 0 && y >= 0 && x < g.w && y < g.h) g.c[y][x] = 1; return g; }
export function fill(g, x, y, w, h) { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) px(g, x + i, y + j); return g; }
export function box(g, x, y, w, h) {
  for (let i = 0; i < w; i++) { px(g, x + i, y); px(g, x + i, y + h - 1); }
  for (let j = 0; j < h; j++) { px(g, x, y + j); px(g, x + w - 1, y + j); }
  return g;
}
// a sprite from rows of text: # is lit
export function rows(list) {
  const g = grid(Math.max(...list.map((r) => r.length)), list.length);
  list.forEach((r, j) => [...r].forEach((ch, i) => { if (ch === "#") px(g, i, j); }));
  return g;
}
// turn a sprite a quarter turn clockwise (the aircraft points up in its grid, right when turned)
export function turn(g) {
  const o = grid(g.h, g.w);
  for (let j = 0; j < g.h; j++) for (let i = 0; i < g.w; i++) if (g.c[j][i]) o.c[i][g.h - 1 - j] = 1;
  return o;
}
// an arc of dots: centre, radius in cells, from a to b degrees (0 = right, counter-clockwise on screen is negative)
export function arc(g, cx, cy, r, a, b) {
  for (let d = a; d <= b; d += 6) px(g, Math.round(cx + r * Math.cos((d * Math.PI) / 180)), Math.round(cy + r * Math.sin((d * Math.PI) / 180)));
  return g;
}
// draw the sprite as circles; (x, y) is its top-left corner in picture units
export function draw(g, x, y, cell, r = cell * 0.4) {
  let s = "";
  g.c.forEach((row, j) => row.forEach((v, i) => { if (v) s += `<circle cx="${(x + i * cell + cell / 2).toFixed(1)}" cy="${(y + j * cell + cell / 2).toFixed(1)}" r="${r.toFixed(2)}" fill="currentColor"/>`; }));
  return s;
}
// the same, centred on a point
export function drawAt(g, cx, cy, cell, r) { return draw(g, cx - (g.w * cell) / 2, cy - (g.h * cell) / 2, cell, r); }

// the sprites
// the aircraft as the wall draws it, seen from above: nose to the right, swept wings, small tail
export const PLANE_R = (() => {
  const g = grid(15, 11);
  fill(g, 0, 5, 15, 1); fill(g, 7, 4, 6, 3); px(g, 14, 5);
  for (let k = 0; k <= 5; k++) { px(g, 9 - k, 4 - k); px(g, 10 - k, 4 - k); px(g, 9 - k, 6 + k); px(g, 10 - k, 6 + k); }
  for (let k = 0; k <= 2; k++) { px(g, 2 - k, 4 - k); px(g, 3 - k, 4 - k); px(g, 2 - k, 6 + k); px(g, 3 - k, 6 + k); }
  return g;
})();
export const PLANE = turn(turn(turn(PLANE_R))); // nose up
export const HOUSE = rows(["...#...", "..###..", ".#####.", "#######", ".#...#.", ".#.#.#.", ".#...#.", ".#####."]);

export const PI = (() => {
  const g = grid(17, 12);
  box(g, 0, 0, 14, 12);
  for (let x = 2; x <= 12; x += 2) { px(g, x, 1); px(g, x, 2); } // the GPIO header
  fill(g, 4, 5, 3, 3); fill(g, 9, 6, 2, 2); // the chips
  box(g, 12, 3, 5, 3); box(g, 12, 7, 5, 3); // the USB sockets, sticking out of the edge
  return g;
})();
export const STICK = (() => {
  const g = grid(19, 9);
  box(g, 0, 2, 5, 5); px(g, 2, 3); px(g, 2, 5); // the USB plug
  box(g, 5, 0, 10, 9); fill(g, 7, 2, 3, 5); px(g, 12, 2); // the body, its chip, its light
  fill(g, 15, 3, 2, 3); fill(g, 17, 4, 2, 1); // the antenna socket and its pin
  return g;
})();
export const ANTENNA = (() => {
  const g = grid(15, 19);
  fill(g, 3, 17, 9, 2); fill(g, 7, 5, 1, 12); // the base, the mast
  fill(g, 6, 9, 3, 1); fill(g, 6, 13, 3, 1); // the elements
  for (const [x, y] of [[10, 1], [11, 2], [11, 3], [11, 4], [10, 5], [12, 0], [13, 1], [14, 2], [14, 3], [14, 4], [13, 5], [12, 6]]) { px(g, x, y); px(g, 14 - x, y); } // the waves
  px(g, 7, 3);
  return g;
})();
export const SDCARD = (() => {
  const g = grid(12, 16);
  for (let j = 0; j < 16; j++) for (let i = 1; i < 11; i++) {
    const inside = (a, b) => a >= 1 && a <= 10 && b >= 0 && b <= 15 && (a - 1) + b >= 3;
    if (inside(i, j) && !(inside(i - 1, j) && inside(i + 1, j) && inside(i, j - 1) && inside(i, j + 1))) px(g, i, j);
  }
  for (const x of [3, 5, 7]) fill(g, x, 9, 1, 5); // the contacts
  px(g, 8, 3);
  return g;
})();
export const PSU = (() => {
  const g = grid(14, 19);
  fill(g, 6, 0, 2, 3); box(g, 0, 3, 14, 12); // the cable, the block
  [["...##.", "..##..", ".##...", ".####.", "...##.", "..##..", ".##..."]].forEach((b) => b.forEach((r, j) => [...r].forEach((c, i) => { if (c === "#") px(g, 4 + i, 5 + j); }))); // the bolt: it powers
  fill(g, 3, 15, 2, 3); fill(g, 9, 15, 2, 3); // the prongs
  return g;
})();
export const SATELLITE = (() => {
  const g = grid(23, 11);
  for (let j = 2; j < 8; j++) for (let i = 0; i < 8; i++) { if ((i + j) % 2 === 0) { px(g, i, j); px(g, 22 - i, j); } } // the solar panels, as a checker
  fill(g, 8, 4, 2, 2); fill(g, 13, 4, 2, 2); fill(g, 10, 2, 3, 6); fill(g, 11, 8, 1, 3); // the struts, the body, the dish
  return g;
})();
export const PIN = rows(["..###..", ".#####.", "###.###", "##...##", "###.###", ".#####.", ".#####.", "..###..", "..###..", "...#..."]);
export const ALTITUDE = rows(["....#....", "...###...", "..#.#.#..", "....#....", "....#....", "....#....", "....#....", "..#.#.#..", "...###...", "....#...."]);
export const SPEED = rows(["#..#..#", ".#..#..#", "..#..#..#", ".#..#..#", "#..#..#"].map((r) => r.padEnd(9, ".")));
export const BADGE = (() => {
  const g = grid(13, 9);
  box(g, 0, 0, 13, 9); fill(g, 2, 2, 3, 3); fill(g, 2, 6, 3, 1); fill(g, 6, 2, 5, 1); fill(g, 6, 4, 5, 1); fill(g, 6, 6, 3, 1);
  return g;
})();
export const TABLET = (() => {
  const g = grid(26, 18);
  box(g, 0, 0, 26, 18); box(g, 2, 2, 22, 14);
  for (let j = 0; j < 11; j++) for (let i = 0; i < 15; i++) if (PLANE_R.c[j][i]) px(g, 5 + i, 4 + j); // the aircraft on its screen
  return g;
})();
export const CLOCK = (() => {
  const g = grid(15, 15);
  arc(g, 7, 7, 7, 0, 360); fill(g, 7, 3, 1, 5); fill(g, 8, 7, 3, 1); px(g, 7, 7);
  return g;
})();

// a plain arrow, stroked (the only non-dot mark: it needs to read at any size)
export function arrow(x1, y1, x2, y2, w = 3) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 13;
  const hx = (d) => (x2 - L * Math.cos(a + d)).toFixed(1), hy = (d) => (y2 - L * Math.sin(a + d)).toFixed(1);
  return `<g stroke="currentColor" stroke-width="${w}" stroke-linecap="round" fill="none" opacity=".85"><line x1="${x1}" y1="${y1}" x2="${(x2 - 4 * Math.cos(a)).toFixed(1)}" y2="${(y2 - 4 * Math.sin(a)).toFixed(1)}" stroke-dasharray="1 9"/><path d="M${hx(0.5)} ${hy(0.5)} L${x2} ${y2} L${hx(-0.5)} ${hy(-0.5)}"/></g>`;
}
export function page(W, H, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">\n<title id="t">${title}</title>\n<rect width="${W}" height="${H}" fill="${BLACK}"/>\n<g color="${AMBER}">${body}</g>\n</svg>\n`;
}
