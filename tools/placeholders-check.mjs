// SPDX-License-Identifier: GPL-3.0-or-later
// Nothing half-written goes online: the built pages must not contain a placeholder left by an author or a
// translation session. Exit 1 on the first hit.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] || "dist";
const MARKERS = [/A_COMPLETER/, /\bTODO\b/, /\bTBD\b/, /\bFIXME\b/, /\bPlaceholder\.?\b/, /\bLorem ipsum\b/i, /\[translate\]/i, /\{\{[^}]*\}\}/];
let files = 0, hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) {
      files++;
      const html = readFileSync(p, "utf8");
      for (const re of MARKERS) { const m = html.match(re); if (m) hits.push(`${p}: ${m[0]}`); }
    }
  }
}
walk(root);
if (hits.length) { console.error(`placeholders-check: ${hits.length} hit(s)`); hits.forEach((h) => console.error("  " + h)); process.exit(1); }
console.log(`placeholders-check: ${files} page(s), no placeholder.`);
