// SPDX-License-Identifier: GPL-3.0-or-later
// The built site against its own Content-Security-Policy (public/_headers): no inline <script>, no inline
// <style>, no style= or on*= attribute, and nothing loaded from another origin. Astro is configured to
// produce none of these; this is the proof, run on dist/ in CI. Exit 1 on the first finding.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] || "dist";
const SITE = "https://zenithboard.app";
let files = 0, findings = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) check(p);
  }
}

function check(file) {
  files++;
  const html = readFileSync(file, "utf8");
  const bad = (what, m) => findings.push(`${file}: ${what}: ${m.slice(0, 100)}`);
  // inline scripts: a <script> without src, or with content
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc=/.test(m[1])) bad("inline script", m[0]);
    else if (m[2].trim()) bad("script with content", m[0]);
  }
  for (const m of html.matchAll(/<style\b[^>]*>/gi)) bad("inline style element", m[0]);
  for (const m of html.matchAll(/\sstyle="[^"]*"/gi)) bad("style attribute", m[0]);
  for (const m of html.matchAll(/\son[a-z]+="[^"]*"/gi)) bad("inline event handler", m[0]);
  // anything fetched from elsewhere: script, style, img, font, iframe, object, embed, link rel=stylesheet/icon/preload
  for (const m of html.matchAll(/<(script|link|img|iframe|object|embed|source|video|audio)\b[^>]*>/gi)) {
    const tag = m[0];
    if (/^<link/i.test(tag) && /rel="(alternate|canonical|sitemap)"/i.test(tag)) continue; // metadata, not a fetch
    const url = (tag.match(/\s(?:src|href)="([^"]*)"/i) || [])[1];
    if (url && /^(https?:)?\/\//i.test(url) && !url.startsWith(SITE)) bad("third-party resource", tag);
    if (url && /^(https?:)?\/\//i.test(url) && url.startsWith(SITE)) bad("absolute self URL (use a path)", tag);
  }
  for (const m of html.matchAll(/url\(\s*['"]?(https?:)?\/\//gi)) bad("url() to another origin", m[0]);
  for (const m of html.matchAll(/<(iframe|object|embed|form)\b/gi)) bad("forbidden element", m[0]);
}

walk(root);
if (findings.length) {
  console.error(`csp-check: ${findings.length} finding(s) in ${files} page(s)`);
  for (const f of findings) console.error("  " + f);
  process.exit(1);
}
console.log(`csp-check: ${files} page(s), no inline code, no third-party resource.`);
