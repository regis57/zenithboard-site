// SPDX-License-Identifier: GPL-3.0-or-later
// The owner's rule (22 October 2026): no untranslated string. This script is how it stays true without anyone
// maintaining twenty languages by hand:
//   - every language has every page (src/content/pages/<lang>/<page>.md) and every interface key (src/i18n/ui/<lang>.json);
//     a missing one is an ERROR (exit 1), because the site would show English there;
//   - a page whose English `updated` is newer than the translation's is STALE: a WARNING, listed, never blocking,
//     so a quick fix to the English goes online now and the other languages catch up in one later commit;
//   - a page with reviewed: false is listed too, as information, so the owner knows what a native speaker has not read.
// In GitHub Actions the warnings become annotations (::warning). Exit code: 1 only for errors.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { LANGS, SLUGS, DEFAULT_LOCALE } from "../src/i18n/langs.js";

const CONTENT = "src/content/pages", UI = "src/i18n/ui";
const ci = !!process.env.GITHUB_ACTIONS;
let errors = 0, stale = 0, unreviewed = [];

// A small front-matter reader: the fields are one per line, the schema (src/content.config.ts) keeps them that way.
function frontMatter(file) {
  const text = readFileSync(file, "utf8");
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1").trim();
  }
  out.body = text.slice(m[0].length).trim();
  return out;
}
function keys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([k, v]) => typeof v === "object" && v ? keys(v, prefix + k + ".") : [prefix + k]);
}
function warn(msg) { console.log(ci ? `::warning::${msg}` : `warning: ${msg}`); }
function error(msg) { errors++; console.log(ci ? `::error::${msg}` : `error: ${msg}`); }

const enUI = JSON.parse(readFileSync(join(UI, `${DEFAULT_LOCALE}.json`), "utf8"));
const enKeys = keys(enUI);
const en = Object.fromEntries(SLUGS.map((s) => [s, frontMatter(join(CONTENT, DEFAULT_LOCALE, `${s}.md`))]));

for (const l of LANGS) {
  // interface strings
  const uiFile = join(UI, `${l.code}.json`);
  if (!existsSync(uiFile)) { error(`${uiFile} is missing`); }
  else {
    const have = new Set(keys(JSON.parse(readFileSync(uiFile, "utf8"))));
    for (const k of enKeys) if (!have.has(k)) error(`${uiFile}: key "${k}" is missing`);
  }
  // pages
  for (const s of SLUGS) {
    const file = join(CONTENT, l.code, `${s}.md`);
    if (!existsSync(file)) { error(`${file} is missing`); continue; }
    const fm = frontMatter(file);
    if (fm.lang !== l.code) error(`${file}: lang is "${fm.lang}", expected "${l.code}"`);
    if (fm.page !== s) error(`${file}: page is "${fm.page}", expected "${s}"`);
    if (!fm.body) error(`${file}: empty body`);
    if (l.code !== DEFAULT_LOCALE) {
      if (fm.updated && en[s].updated && fm.updated < en[s].updated)
        { stale++; warn(`${file} is older (${fm.updated}) than the English (${en[s].updated}): translate the change`); }
      if (fm.reviewed !== "true") unreviewed.push(file);
    }
  }
}

// Only the pages built: a draft language is translated but not published.
const built = LANGS.filter((l) => !l.draft).length;
console.log(`i18n-check: ${LANGS.length} languages (${built} published), ${SLUGS.length} pages each, ${enKeys.length} interface keys.`);
if (stale) console.log(`i18n-check: ${stale} translation(s) behind the English (see warnings above).`);
if (unreviewed.length) console.log(`i18n-check: ${unreviewed.length} page(s) not yet read by a native speaker (reviewed: false).`);
if (errors) { console.log(`i18n-check: ${errors} error(s): something is missing, the site would show English there.`); process.exit(1); }
console.log("i18n-check: nothing missing.");
