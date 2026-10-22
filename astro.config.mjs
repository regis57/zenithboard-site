// SPDX-License-Identifier: GPL-3.0-or-later
// zenithboard.app: a static site, nothing runs on a server. The choices below keep the strict
// Content-Security-Policy in public/_headers true: no inline style, no inline script, nothing external.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { LOCALES, DEFAULT_LOCALE, SITE } from "./src/i18n/langs.js";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: { prefixDefaultLocale: false },
  },
  build: {
    // Astro inlines small stylesheets by default; under style-src 'self' an inline <style> is blocked.
    inlineStylesheets: "never",
    // Fingerprinted output goes under /_astro/, which public/_headers caches for a year.
    assets: "_astro",
  },
  markdown: {
    // Shiki writes style="" on every token; under style-src 'self' those are blocked. Code blocks are plain.
    syntaxHighlight: false,
  },
  integrations: [
    sitemap({
      // One sitemap, with hreflang alternates for every page in every published language.
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
      changefreq: "monthly",
    }),
  ],
  devToolbar: { enabled: false },
});
