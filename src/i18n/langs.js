// SPDX-License-Identifier: GPL-3.0-or-later
// The site's languages: the same twenty as ZenithBoard's web pages (its flightinfo/static/i18n.js), in the same
// order, with the same flags. English is the default and lives at the root; every other language under /xx/.
// Swahili is translated but held back (draft) until a native speaker has reviewed it, as in ZenithBoard.
// Plain JavaScript on purpose: astro.config.mjs and the tools/ scripts import it as well as the pages.

export const SITE = "https://zenithboard.app";
export const DEFAULT_LOCALE = "en";

// code, the language's own name, flag file(s) under /img/flags/ (two: the second drawn below the diagonal),
// text direction, draft (not built, not in the sitemap, not in the picker).
export const LANGS = [
  { code: "en", name: "English", flags: ["GB", "US"], dir: "ltr" },
  { code: "fr", name: "Français", flags: ["FR"], dir: "ltr" },
  { code: "de", name: "Deutsch", flags: ["DE"], dir: "ltr" },
  { code: "nl", name: "Nederlands", flags: ["NL"], dir: "ltr" },
  { code: "it", name: "Italiano", flags: ["IT"], dir: "ltr" },
  { code: "es", name: "Español", flags: ["ES"], dir: "ltr" },
  { code: "pt-BR", name: "Português (Brasil)", flags: ["BR"], dir: "ltr" },
  { code: "pl", name: "Polski", flags: ["PL"], dir: "ltr" },
  { code: "fi", name: "Suomi", flags: ["FI"], dir: "ltr" },
  { code: "et", name: "Eesti", flags: ["EE"], dir: "ltr" },
  { code: "lv", name: "Latviešu", flags: ["LV"], dir: "ltr" },
  { code: "lt", name: "Lietuvių", flags: ["LT"], dir: "ltr" },
  { code: "id", name: "Bahasa Indonesia", flags: ["ID"], dir: "ltr" },
  { code: "sw", name: "Kiswahili", flags: ["@africa"], dir: "ltr", draft: true },
  { code: "ru", name: "Русский", flags: ["RU"], dir: "ltr" },
  { code: "uk", name: "Українська", flags: ["UA"], dir: "ltr" },
  { code: "ar", name: "العربية", flags: ["@arabic"], dir: "rtl" },
  { code: "ja", name: "日本語", flags: ["JP"], dir: "ltr" },
  { code: "ko", name: "한국어", flags: ["KR"], dir: "ltr" },
  { code: "zh-Hans", name: "简体中文", flags: ["CN"], dir: "ltr" },
  { code: "zh-Hant", name: "繁體中文", flags: ["TW"], dir: "ltr" },
];

export const PUBLISHED = LANGS.filter((l) => !l.draft);
export const LOCALES = PUBLISHED.map((l) => l.code);

// The pages, in the order of the navigation. One Markdown file per page and per language:
// src/content/pages/<lang>/<slug>.md. The slug is the same in every language.
export const SLUGS = ["home", "adsb", "build", "join", "zenithboard", "faq", "about"];
export const NAV = SLUGS.filter((s) => s !== "home");

export function lang(code) {
  return LANGS.find((l) => l.code === code) || LANGS[0];
}

// The path of a page in a language: English at the root, the others under /xx/.
export function pathFor(code, slug) {
  const base = code === DEFAULT_LOCALE ? "/" : `/${code}/`;
  return slug && slug !== "home" ? `${base}${slug}/` : base;
}

// A flag's URL: a country code is a PNG from country-flag-icons; "@name" is a picture of the site's own.
export function flagSrc(f) {
  return f.startsWith("@") ? `/img/flags/${f.slice(1)}.svg` : `/img/flags/${f}.png`;
}
