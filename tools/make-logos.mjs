// SPDX-License-Identifier: GPL-3.0-or-later
// The logos, drawn in dots like the wall: the same classic 5x7 dot-matrix glyphs as ZenithBoard's
// flightinfo/static/font5x7.js (GPL-3.0-or-later). Run `npm run logos` after changing anything here.
// Lit dots are `currentColor` so the page's --on colours them; the favicon is amber, fixed.
import { writeFileSync, mkdirSync } from "node:fs";

const G = {
  "A": [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  "B": ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
  "D": ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
  "E": ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
  "H": ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  "I": [".###.", "..#..", "..#..", "..#..", "..#..", "..#..", ".###."],
  "N": ["#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#", "#...#"],
  "O": [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
  "T": ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  "Z": ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"],
  " ": [".....", ".....", ".....", ".....", ".....", ".....", "....."],
};

// text -> SVG. pitch: distance between dot centres; r: dot radius; margin in dots; off: draw the unlit dots too.
function dots(text, { pitch = 10, r = 3.6, margin = 1, off = true, fixed = null, label = text } = {}) {
  const cols = text.length * 6 - 1 + margin * 2, rows = 7 + margin * 2;
  const w = cols * pitch, h = rows * pitch;
  const on = [], offs = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = (col + 0.5) * pitch, cy = (row + 0.5) * pitch;
      let lit = false;
      const gr = row - margin, gc = col - margin;
      if (gr >= 0 && gr < 7 && gc >= 0) {
        const i = Math.floor(gc / 6), k = gc % 6;
        const ch = text[i];
        if (ch && k < 5 && G[ch][gr][k] === "#") lit = true;
      }
      (lit ? on : offs).push(`<circle cx="${cx}" cy="${cy}" r="${r}"/>`);
    }
  }
  const onFill = fixed ? ` fill="${fixed}"` : ` fill="currentColor"`;
  const bg = fixed ? `<rect width="${w}" height="${h}" fill="#030303"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">` + bg +
    (off && offs.length ? `<g class="d-off" fill="#1c1c1c">${offs.join("")}</g>` : "") +
    `<g class="d-on"${onFill}>${on.join("")}</g></svg>\n`;
}

mkdirSync("public/img", { recursive: true });
mkdirSync("src/assets", { recursive: true });
// The marks inlined in the pages (currentColor): the small "ZB" in the bar, the wordmark of the home page.
writeFileSync("src/assets/logo-zb.svg", dots("ZB", { label: "ZenithBoard" }));
writeFileSync("src/assets/wordmark.svg", dots("ZENITHBOARD", { label: "ZenithBoard" }));
// The favicon: amber, on black. (The social image public/img/og.png is the owner's own banner.)
writeFileSync("public/favicon.svg", dots("ZB", { fixed: "#ffb000", off: false, margin: 1, r: 4.2 }));
