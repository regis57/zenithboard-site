// SPDX-License-Identifier: GPL-3.0-or-later
// The sitemap, built from the content itself: one <url> per published page in every published language, its
// real last-modified date (the page's `updated`), hreflang alternates for every language plus x-default, and
// a priority (home first, the guides next). Served at /sitemap.xml and named in robots.txt; this is the one
// address to register with Google, Bing, Yandex and the others.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, PUBLISHED, LOCALES, DEFAULT_LOCALE, SLUGS, pathFor } from "../i18n/langs.js";

const PRIORITY: Record<string, string> = { home: "1.0", adsb: "0.9", build: "0.9", join: "0.8", zenithboard: "0.8", faq: "0.6", about: "0.5" };

export const GET: APIRoute = async () => {
  const pages = await getCollection("pages", (e) => !e.data.draft && LOCALES.includes(e.data.lang));
  const byKey = new Map(pages.map((e) => [`${e.data.lang}/${e.data.page}`, e]));
  const urls: string[] = [];
  for (const slug of SLUGS) {
    // the alternates are the same for every language of a page: the languages that have it
    const langs = PUBLISHED.filter((l) => byKey.has(`${l.code}/${slug}`));
    const alternates = [
      ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE}${pathFor(l.code, slug)}"/>`),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pathFor(DEFAULT_LOCALE, slug)}"/>`,
    ].join("");
    for (const l of langs) {
      const e = byKey.get(`${l.code}/${slug}`)!;
      urls.push(
        `<url><loc>${SITE}${pathFor(l.code, slug)}</loc>` +
          `<lastmod>${e.data.updated.toISOString().slice(0, 10)}</lastmod>` +
          `<changefreq>monthly</changefreq><priority>${PRIORITY[slug] ?? "0.5"}</priority>` +
          alternates +
          `</url>`,
      );
    }
  }
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    urls.join("\n") +
    `\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
