# Changelog

All notable changes to zenithboard.app. The site has no version number of its own: every commit on `main` is a
release. Dates are the day the change went online.

## 2026-10-30 — AirNav Radar, the fifth network

- ZenithBoard 0.99.6 feeds AirNav Radar too. In all twenty-two languages: *Join the community* says five networks,
  with a section for AirNav Radar (its feeder rbfeeder, formerly RadarBox; a Business account in return; the station
  linked to an account by pasting the Pi's sharing key on the claim page), five MLAT clients not four, and AirNav Radar
  among the free accounts to make; the home page names its Business account among what the networks give back; the
  *ZenithBoard* page says five networks and lists it among the feeders. Text only.

## 2026-10-30 — The release candidate's month starts again

- The notice at the top of the *ZenithBoard* page, in all twenty-two languages: on 30 October two features came in
  (ZenithBoard 0.99.6: AirNav Radar and Telegram messages), so the month starts again, and 1.0 follows on
  29 November 2026 at the earliest, no longer 25 November. Text only, in the existing callout.

## 2026-10-25 — ZenithBoard is a release candidate for 1.0

- A short notice at the top of the *ZenithBoard* page, in all twenty-two languages: since 25 October 2026 version
  0.99 is frozen, fixes only for a month while the author's Pi runs untouched, and 1.0 follows on 25 November 2026
  at the earliest if nothing is left open; a report on GitHub is welcome. A quoted block, the site's own callout
  style, no new code. Previewed in headless Chromium (French, Arabic right to left, English on a phone).

## 2026-10-25 — Hindi, the site's twenty-second language

- **Hindi (हिन्दी)**, with India's flag, placed after Swahili as in ZenithBoard 0.55.0's console: the seven pages and
  the interface, `reviewed: false` until a native speaker has read them. The console's own Hindi words are reused
  for the same things (वॉल, रिसीवर, कंसोल, the five colours).
- *About* and *ZenithBoard* said twenty-one languages: twenty-two now, in every language, with the *About* heading.
- `CLAUDE.md`: the owner's standing rules for a session, among them that every change goes into every language and
  that the site follows ZenithBoard's languages. The README says how a language is added.

## 2026-10-25 — A copy button on every code block

- Each code block (the commands on "Build a receiver" and wherever else one appears) has a copy button at its top
  right, as on GitHub: one click puts the commands on the clipboard and the icon becomes a tick for two seconds.
  Plain script from the site itself (`public/js/copy-code.js`), no inline code, no third party, so the
  Content-Security-Policy is unchanged. The colour follows the chosen theme.
- Two new interface strings, "Copy" and "Copied", translated into all 21 languages in the same commit
  (`copy`, `copied` in `src/i18n/ui/*.json`, carried to the script by `data-copy-label` and `data-copied-label` on `<html>`).
- New test `tests/copy.spec.ts`: in every language, on a computer and a phone, the button is on each block, labelled
  in the page's language, and really puts the block's text on the clipboard.

## 2026-10-23 — Pictures without words, the wall from the owner's own recording

- The MLAT picture: the arrival times are now 25 px bold with a black edge (they were 15 px and unreadable once
  the page scaled the picture down), and the aircraft is the wall's own glyph.
- What is ADS-B: four wordless pictures in the empty right-hand column, amber dots on black like the MLAT one
  (`tools/make-figures.mjs`): a satellite, an aircraft and its rings; what one message holds, once a second;
  antenna, radio stick, Pi, screen; the line of sight and the horizon. The MLAT picture is repeated under
  its own heading. Only their alt texts are words, translated in all 21 languages.
- Build a receiver: an icon for each of the five parts in the table (Pi, RTL-SDR stick, antenna, micro-SD
  card, power supply), drawn in dots, 64 px.
- The ZenithBoard page: new captures cut from a screen recording of the wall (0.54.0), the aircraft photos
  painted out (the photographers' pictures are not ours to republish): the dot-matrix wall and the split-flap
  roll as animated WebP, a sheet of six colours and looks, and the wall's settings panel, with one new sentence
  about it. The same two animations exist as GIF for posting elsewhere.
- `tools/i18n-check.mjs` now fails on a long line, or an image with its alt text, that is word for word the
  English one: an untranslated sentence cannot go through any more.
- The figures are drawn by `npm run logos`; they are plain SVG, no script, no text.

## 2026-10-22 — First release

- Seven pages (home, what is ADS-B, build a receiver, join the community, ZenithBoard, FAQ, about & support)
  in twenty-one languages, English at the root, the same list as ZenithBoard 0.53.1.
- The look of ZenithBoard's console: black, the wall's five colours (amber by default), dot-matrix logos,
  the same flags and language picker as the console.
- Static site on Cloudflare Workers (assets only, no Worker script), built by Workers Builds from `main`.
- Strict headers (`default-src 'none'`, HSTS preload, COOP/COEP/CORP, Permissions-Policy), no inline code,
  no third-party request, no cookie, no analytics.
- Later the same day: MLAT explained in the FAQ with a wordless picture (`tools/make-mlat.mjs`); the real
  captures of the wall on the ZenithBoard page; the sitemap built from the content; a lighter footer.
- Fixed before the end of the day, found by CI: the wordmark drawn grey instead of the wall's colour, fine
  print below WCAG AA contrast, Arabic pages scrolling sideways because of the skip link's offset.
- CI: npm audit, gitleaks, build, astro check, html-validate, csp-check, placeholders-check, i18n-check,
  lychee, Playwright on every page in every language, computer and phone, with axe.
