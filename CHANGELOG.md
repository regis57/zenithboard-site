# Changelog

All notable changes to zenithboard.app. The site has no version number of its own: every commit on `main` is a
release. Dates are the day the change went online.

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
