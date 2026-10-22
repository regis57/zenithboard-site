// SPDX-License-Identifier: GPL-3.0-or-later
// The content: one Markdown file per page and per language, src/content/pages/<lang>/<slug>.md.
// The schema is strict on purpose: a page with a missing or malformed field fails the build, and the old site
// stays online. That is the first safety net for an edit made by hand on github.com.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { LANGS, SLUGS } from "./i18n/langs.js";

const codes = LANGS.map((l) => l.code) as [string, ...string[]];
const slugs = SLUGS as [string, ...string[]];

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().min(1).max(90),
    description: z.string().min(1).max(200),
    lang: z.enum(codes),
    page: z.enum(slugs),
    draft: z.boolean().default(false),
    updated: z.coerce.date(),
    // A human who speaks the language has read this version. English and French start true; the others
    // start false and flip when a native speaker has checked them. `npm run i18n:check` lists them.
    reviewed: z.boolean().default(false),
    // The one concrete next step every page ends with: a label and a link (a page slug or a URL).
    next: z.object({ label: z.string().min(1), href: z.string().min(1) }),
  }),
});

export const collections = { pages };
