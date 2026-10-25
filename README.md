# zenithboard.app

[![CI](https://github.com/regis57/zenithboard-site/actions/workflows/ci.yml/badge.svg)](https://github.com/regis57/zenithboard-site/actions/workflows/ci.yml)
[![Code: GPL-3.0-or-later](https://img.shields.io/badge/code-GPL--3.0--or--later-blue.svg)](LICENSE)
[![Text: CC BY-SA 4.0](https://img.shields.io/badge/text-CC_BY--SA_4.0-blue.svg)](LICENSE-CONTENT)

The site of [ZenithBoard](https://github.com/regis57/ZenithBoard): what ADS-B is, how to build a receiver with a
Raspberry Pi, how to join the networks that share the sky, and what ZenithBoard does. Twenty-two languages, one static
site, nothing running on a server, no cookie, no tracker, no third-party request.

**The sky above you, decoded by you, shared with the world.**

## How to update the site

Everything a visitor reads is a plain text file on the `main` branch. Change the file, commit, and Cloudflare
rebuilds the site by itself; the change is online one to two minutes later. There is no admin page and no CMS,
on purpose: the only key to the site is this GitHub account.

| What | Where |
|---|---|
| A page, in one language | `src/content/pages/<lang>/<page>.md` (pages: `home`, `adsb`, `build`, `join`, `zenithboard`, `faq`, `about`) |
| The navigation, footer and picker labels | `src/i18n/ui/<lang>.json` |
| A picture | `public/img/`, then `![alt text](/img/name.webp)` in the page. The alt text is translated in every language (i18n-check fails on an English one) |
| A wordless figure | add it to `tools/make-figures.mjs` (dot sprites in `tools/dots.mjs`), run `npm run logos`; name it `fig-…` and it floats in the right-hand column on a wide screen |
| The languages, their names and flags | `src/i18n/langs.js` |
| The look (colours, fonts, layout) | `src/styles/site.css` (derived from ZenithBoard's `console.css`) |
| The security headers | `public/_headers` |

Three ways to edit:

1. **github.com, any browser, phone included.** Open the file, click the pencil, edit, write one line in
   *Commit changes*, commit to `main`. For a picture: `public/img` → *Add file* → *Upload files*.
2. **github.dev.** On the repository page, press the `.` key: VS Code in the browser, with search across all files
   and a Markdown preview. Best for the same change in several languages at once.
3. **Your computer.** `git pull`, edit, `npm run dev` to see it at `http://localhost:4321/`, `npm test` to check,
   `git push`.

Each page starts with a front matter the build validates:

```yaml
---
title: "What is ADS-B"            # under 90 characters
description: "One sentence."      # under 200 characters; the lead and the <meta description>
lang: en                          # the folder's language code
page: adsb                        # the file name, the same in every language
updated: 2026-10-22               # bump it when the text changes
reviewed: true                    # a native speaker has read this version
next:                             # the one concrete next step at the end of the page
  label: "Build your receiver"
  href: build                     # a page name, or a full URL
---
```

A malformed front matter fails the build and the old site stays online, so a typo there cannot take the site
down; Cloudflare emails the failure.

### The twenty-two languages

The owner's rule: no untranslated string. English (`en`, at the root) is the reference; every other language has
the same seven pages and the same interface keys. `npm run i18n:check` tells you where things stand:

- a **missing** page or key is an error: the site would show English there;
- a translation whose `updated` is older than the English is **stale**: a warning, listed, never blocking, so a
  quick fix to the English goes online now and the other languages catch up later, in one commit (a Claude Code
  session does that well: "bring every language up to date with the English");
- `reviewed: false` pages are listed as information: translated, not yet read by a native speaker.

A language with `draft: true` in `src/i18n/langs.js` is translated but not published: not built, not in the
picker, not in the sitemap. Swahili was held that way until ZenithBoard 0.53.1 offered it (22 October 2026).

**The site follows ZenithBoard's languages.** When ZenithBoard's web pages gain a language (Hindi in 0.55.0,
25 October 2026), the site gains it in the same order with the same flag: an entry in `src/i18n/langs.js`, the
flag PNG from ZenithBoard's `flightinfo/data/flags/`, `src/i18n/ui/<lang>.json`, the seven pages under
`src/content/pages/<lang>/`, and the count of languages in *About* and *ZenithBoard* updated in every language.
After that the language is maintained like the others: `i18n:check` fails on anything missing.

### Undo

- **GitHub:** open the commit, *Revert*. The same chain runs and the previous text is back online.
- **Cloudflare:** Workers & Pages → zenithboard-site → Deployments → *Rollback* to any earlier build.

Nothing is ever lost: `main` holds the whole history.

## Development

```bash
nvm use            # Node 24 (.nvmrc)
npm ci             # exact versions; install scripts are ignored (.npmrc)
npm run dev        # http://localhost:4321/
npm run build      # dist/
npm test           # build, types, HTML, CSP, placeholders, translations, every page in a browser
```

`npm test` needs Chromium once: `npx playwright install --with-deps chromium`.

## Stack

Astro (static output, native i18n routing, content collections with a strict schema), Markdown and YAML, one CSS
file, one 1 KB script for the colour. Hosted on Cloudflare Workers as static assets only (`wrangler.jsonc`, no
Worker script), built by Workers Builds on every commit to `main`. CI on GitHub Actions. Details in
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md); day-to-day operations, rollback and the security measurements in
[docs/OPERATIONS.md](docs/OPERATIONS.md).

## Security, in short

Static files only; no server-side code anywhere, no admin page. `Content-Security-Policy: default-src 'none'`
with scripts and styles from the site itself only, no inline code; HSTS two years with preload; COOP, COEP,
CORP; `Permissions-Policy` off for camera, microphone, geolocation, USB, payment. Public repository with branch
rules, secret scanning and push protection; actions pinned by commit SHA; read-only workflow token; exact
dependency versions, `npm ci`, install scripts disabled, `npm audit` and gitleaks on every push; Dependabot
weekly with a 14-day cooldown. Measured at go-live: see [docs/OPERATIONS.md](docs/OPERATIONS.md).

## Licences

Code: [GPL-3.0-or-later](LICENSE), like ZenithBoard. Text and pictures: [CC BY-SA 4.0](LICENSE-CONTENT).
The flags are from country-flag-icons (MIT) via ZenithBoard; the dot-matrix logos use ZenithBoard's 5×7 glyphs.
