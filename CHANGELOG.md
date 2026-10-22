# Changelog

All notable changes to zenithboard.app. The site has no version number of its own: every commit on `main` is a
release. Dates are the day the change went online.

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
