// SPDX-License-Identifier: GPL-3.0-or-later
// The wordless pictures of the ADS-B and Build pages, drawn like the MLAT one (make-mlat.mjs): amber dots on
// black, no text, so none of the twenty-one languages has anything to translate but the alt text. Run `npm run logos`.
import { writeFileSync } from "node:fs";
import * as D from "./dots.mjs";

const out = (name, svg) => { writeFileSync(`public/img/${name}.svg`, svg); console.log(`public/img/${name}.svg`); };
const plane = D.PLANE_R; // pointing right
const ring = (cx, cy, r, o, dash = "4 7") => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-opacity="${o}" stroke-width="2" stroke-dasharray="${dash}"/>`;
const backing = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${D.BLACK}"/>`;
const line = (x1, y1, x2, y2, o = 0.3, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-opacity="${o}" stroke-width="${w}"/>`;

// 1. A plane that says where it is: the satellites tell it, it tells everyone (rings), every ground station hears it.
{
  const W = 480, H = 330, gy = 292, px = 290, py = 120;
  let g = line(14, gy + 14, W - 14, gy + 14);
  for (const [r, o] of [[55, 0.55], [100, 0.42], [145, 0.3], [190, 0.2]]) g += `<g clip-path="url(#sky)">${ring(px, py, r, o)}</g>`;
  g = `<defs><clipPath id="sky"><rect width="${W}" height="${gy + 8}"/></clipPath></defs>` + g;
  g += D.arrow(98, 52, px - 52, py - 20); // the satellite fix, down to the aircraft
  g += backing(px, py, 34) + D.drawAt(plane, px, py, 6, 2.6);
  g += D.drawAt(D.SATELLITE, 62, 40, 5, 2.1);
  const small = D.PLANE_R;
  g += backing(430, 66, 22) + D.drawAt(small, 430, 66, 3.6, 1.5); // another aircraft hears it too
  for (const x of [80, 215, 360]) g += backing(x, gy - 4, 28) + D.drawAt(D.HOUSE, x, gy - 4, 6, 2.4);
  out("fig-adsb-broadcast", D.page(W, H, g, "figure"));
}

// 2. What one message carries (who, where, how high, how fast), and that it comes again every second.
{
  const W = 480, H = 230;
  let g = D.drawAt(plane, 52, 78, 5.4, 2.2);
  for (const r of [20, 36, 52]) g += `<path d="M${(78 + r * 0.5).toFixed(0)} ${78 - r * 0.8} A${r} ${r * 0.9} 0 0 1 ${(78 + r * 0.5).toFixed(0)} ${78 + r * 0.8}" fill="none" stroke="currentColor" stroke-opacity="${(0.8 - r / 90).toFixed(2)}" stroke-width="2.4" stroke-dasharray="3 6"/>`;
  g += `<rect x="172" y="16" width="292" height="124" rx="12" fill="none" stroke="currentColor" stroke-opacity=".7" stroke-width="2.5"/>`;
  g += D.drawAt(D.BADGE, 215, 78, 5, 2.1) + D.drawAt(D.PIN, 285, 78, 5.4, 2.2) + D.drawAt(D.ALTITUDE, 352, 78, 5.4, 2.2) + D.drawAt(D.SPEED, 420, 78, 5.4, 2.2);
  g += line(250, 36, 250, 120, 0.2) + line(318, 36, 318, 120, 0.2) + line(386, 36, 386, 120, 0.2);
  // once a second: a clock, then the same message again and again
  g += D.drawAt(D.CLOCK, 58, 190, 4.4, 1.8) + line(110, 190, 460, 190, 0.2);
  for (const x of [170, 250, 330, 410]) g += `<rect x="${x - 17}" y="176" width="34" height="28" rx="5" fill="${D.BLACK}" stroke="currentColor" stroke-opacity=".75" stroke-width="2.2"/><circle cx="${x}" cy="190" r="3.4" fill="currentColor"/>`;
  out("fig-adsb-message", D.page(W, H, g, "figure"));
}

// 3. Why you can listen: antenna, a stick that costs a few euros, a Pi, a screen. Nothing else.
{
  const W = 480, H = 330;
  let g = D.drawAt(D.ANTENNA, 70, 100, 6.4, 2.6);
  g += D.drawAt(D.STICK, 300, 100, 6.2, 2.5);
  g += D.arrow(135, 100, 225, 100);
  g += D.drawAt(D.PI, 300, 245, 6.2, 2.5);
  g += D.arrow(300, 150, 300, 205);
  g += D.drawAt(D.TABLET, 84, 245, 4.6, 1.9);
  g += D.arrow(238, 245, 150, 245);
  out("fig-adsb-chain", D.page(W, H, g, "figure"));
}

// 4. How far you hear: the signal goes in a straight line, the earth curves away. A higher antenna sees further.
{
  const W = 480, H = 330, R = 520, cx = 300, cy = 215 + R; // the earth, a big circle whose top is at y = 215
  const onEarth = (x) => cy - Math.sqrt(R * R - (x - cx) ** 2);
  let g = "";
  for (let x = 14; x <= W - 14; x += 7) g += `<circle cx="${x}" cy="${onEarth(x).toFixed(1)}" r="2.2" fill="currentColor" fill-opacity=".55"/>`;
  const hx = 100, hy = onEarth(hx); // the receiver, its antenna on the roof
  g += D.drawAt(D.HOUSE, hx, hy - 24, 5, 2);
  const y0 = hy - 44 - 19 * 3.4; // the antenna stands on the roof
  g += D.draw(D.ANTENNA, hx - 7.5 * 3.4, y0, 3.4, 1.4);
  const qx = hx, qy = y0 + 3 * 3.4 + 1.7; // the point the waves come from
  // the line of sight: tangent from the antenna to the earth
  const dx = qx - cx, dy = qy - cy, d = Math.hypot(dx, dy), base = Math.atan2(dy, dx), off = Math.acos(R / d);
  const t = base + off, tx = cx + R * Math.cos(t), ty = cy + R * Math.sin(t); // the horizon point
  const k = 1.9, ex = qx + (tx - qx) * k, ey = qy + (ty - qy) * k;
  g += `<line x1="${qx}" y1="${qy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="currentColor" stroke-opacity=".5" stroke-width="2" stroke-dasharray="2 8"/>`;
  const lineY = (x) => qy + (ty - qy) * ((x - qx) / (tx - qx));
  // an aircraft above the line: heard; one below it, beyond the horizon: the earth hides it
  const above = { x: 300, y: lineY(300) - 70 };
  g += D.arrow(above.x - 24, above.y + 20, qx + 40, lineY(qx + 40) - 34, 2.6) + backing(above.x, above.y, 24) + D.drawAt(plane, above.x, above.y, 4.4, 1.8);
  const bx = 430, below = { x: bx, y: onEarth(bx) - 38 };
  g += `<g opacity=".4">${backing(below.x, below.y, 24)}${D.drawAt(plane, below.x, below.y, 4.4, 1.8)}</g>`;
  g += `<g stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity=".9"><line x1="${(tx - 8).toFixed(1)}" y1="${(ty - 8).toFixed(1)}" x2="${(tx + 8).toFixed(1)}" y2="${(ty + 8).toFixed(1)}"/><line x1="${(tx - 8).toFixed(1)}" y1="${(ty + 8).toFixed(1)}" x2="${(tx + 8).toFixed(1)}" y2="${(ty - 8).toFixed(1)}"/></g>`;
  out("fig-adsb-range", D.page(W, H, g, "figure"));
}

// The five parts of the receiver, icon size (64x64), for the table of the Build page.
const parts = { pi: D.PI, stick: D.STICK, antenna: D.ANTENNA, sdcard: D.SDCARD, psu: D.PSU };
for (const [name, g] of Object.entries(parts)) {
  const cell = Math.min(52 / g.w, 52 / g.h);
  out(`part-${name}`, D.page(64, 64, D.drawAt(g, 32, 32, cell, cell * 0.4), "icon"));
}
