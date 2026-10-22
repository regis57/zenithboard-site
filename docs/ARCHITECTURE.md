# Architecture

zenithboard.app is a static site: a folder of HTML, CSS, pictures and one small script, served from Cloudflare's
edge. Nothing runs on a server, there is no database, no form, no login, no admin page. The repository is the
only source of truth and GitHub is the only place anyone signs in.

```
  Régis (github.com, github.dev or git)          Dependabot (weekly, 14-day cooldown)
            │ commit to main                                │ pull request, CI, merge
            ▼                                               ▼
  ┌─────────────────────────── GitHub: regis57/zenithboard-site (public) ────────────────────────────┐
  │  src/content/pages/<lang>/<page>.md   src/i18n/ui/<lang>.json   src/i18n/langs.js               │
  │  src/layouts, src/components, src/pages (Astro)   src/styles/site.css   public/_headers           │
  │  GitHub Actions on every push: audit, gitleaks, build, astro check, html-validate, csp-check,      │
  │  placeholders-check, i18n-check, lychee, Playwright (every page × language × computer/phone, axe)  │
  └──────────────────────────────────────────────┬───────────────────────────────────────────────────┘
                                                 │ Workers Builds: npm ci && npm run build (Node 24)
                                                 ▼
  ┌──────────── Cloudflare Workers, static assets only (wrangler.jsonc: assets.directory = dist) ────┐
  │  dist/ served from the edge on https://zenithboard.app/ ; _headers applied to every response       │
  │  workers.dev route off, preview URLs off ; www → apex by a zone Redirect Rule ; HSTS, TLS ≥ 1.2    │
  └──────────────────────────────────────────────┬───────────────────────────────────────────────────┘
                                                 │
                                                 ▼
                              Visitors: static pages, no cookie, no third-party request
```

## Content

- One Markdown file per page and per language, `src/content/pages/<lang>/<page>.md`, with a front matter the
  build validates (`src/content.config.ts`): `title`, `description`, `lang`, `page`, `updated`, `reviewed`,
  `draft`, `next`. A malformed file fails the build; the old site stays online.
- The interface strings (navigation, footer, pickers) in `src/i18n/ui/<lang>.json`; English is the reference.
- The languages, their names, flags and direction in `src/i18n/langs.js`, in ZenithBoard's order. A language
  with `draft: true` is translated but not built (Swahili was, until ZenithBoard 0.53.1 offered it).
- `tools/i18n-check.mjs` enforces completeness (error) and reports staleness and unreviewed pages (warning).

## Rendering

Astro 7, static output. `src/pages/index.astro` and `src/pages/[slug].astro` build English at the root;
`src/pages/[lang]/index.astro` and `src/pages/[lang]/[slug].astro` build the other languages under `/xx/`.
`src/components/Page.astro` renders one entry: the wordmark and the tiles on the home page, the title, lead, table
of contents (when a page has three or more sections) and the Markdown, then the one concrete next step and the
date. `src/layouts/Base.astro` adds the bar (logo, language picker), the navigation and the foot (the beer, the
colour, the licences), the `hreflang` alternates and the social metadata.

The look is `src/styles/site.css`, derived from ZenithBoard's `flightinfo/static/console.css`: the same variables
(`--on`, `--on-hot`, `--on-dim`, `--bg`, `--panel`, `--line`, `--ink`, `--muted`, `--mono`, `--sans`), the flap
buttons, cards, chips, tiles. The five colours are the exact values of the wall's `style.css`; `data-theme` on
`<html>` switches them, `public/js/theme.js` remembers the choice in `localStorage`. The logos are drawn in dots
from ZenithBoard's 5×7 glyphs by `tools/make-logos.mjs`. The flags are the PNGs ZenithBoard carries
(country-flag-icons, MIT) plus its two pictures for Swahili and Arabic.

## What the Content-Security-Policy imposes on the build

`public/_headers` sends `default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'none'; ...`. To stay true to it:

- `build.inlineStylesheets: 'never'`: Astro would otherwise inline small stylesheets;
- `markdown.syntaxHighlight: false`: Shiki would write `style=""` on every token;
- no `is:inline` code, no `<ClientRouter />`, no `on*=` attribute; the one script is an external file,
  `<script is:inline src="/js/theme.js">` (here `is:inline` only means "emit the tag as written");
- `tools/csp-check.mjs` walks `dist/` and fails on any inline `<script>` or `<style>`, `style=` or `on*=`
  attribute, or resource from another origin. The Playwright tests also record every network request and fail
  on one to another origin.

## Hosting

Cloudflare Workers with static assets and **no Worker script** (`wrangler.jsonc` has `assets` and no `main`):
requests are served from the asset store, free and with nothing to audit. `_headers` and the `_astro/*` cache
rule are applied by the platform. Workers Builds watches `main` and runs `npm run build` with `NODE_VERSION=24`;
Cloudflare's GitHub App is installed on this one repository. `workers.dev` and preview URLs are disabled so the
site answers on `zenithboard.app` only. `www` is redirected by a zone-level Redirect Rule, not by the site.

## Repository safeguards

Public repository: ruleset on `main` (no force-push, no deletion, linear history), secret scanning and push
protection, Dependabot alerts, private vulnerability reporting. CI token read-only; actions pinned to a full
commit SHA; no workflow for forks; `.npmrc` with `ignore-scripts=true` and `save-exact=true`; `npm ci` from
the lock file; `npm audit --audit-level=high`; gitleaks on the history. There is no secret anywhere: not in the
repository, not in CI, not in Cloudflare.

## What this design does not do

- CI does not gate deployment: the owner pushes straight to `main`, so a required check would block him. A red
  run is an alarm; the safety nets are the schema at build time, Cloudflare's Rollback and GitHub's Revert.
- There is no edit-from-a-form admin: editing happens on github.com (which works on a phone), github.dev, or a
  computer. That is a choice: one less thing that runs code, one less secret, one less door.
- Translations are not blocked for being behind: the rule "no untranslated string" is kept by `i18n-check`
  (nothing missing) and by catching up stale pages in one later commit, not by stopping a one-line fix.
