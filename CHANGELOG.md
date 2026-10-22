# Changelog

All notable changes to zenithboard.app. The site has no version number of its own: every commit on `main` is a
release. Dates are the day the change went online.

## 2026-10-22 — First release

- Seven pages (home, what is ADS-B, build a receiver, join the community, ZenithBoard, FAQ, about & support)
  in twenty languages, English at the root; Swahili translated and held as a draft until a native review.
- The look of ZenithBoard's console: black, the wall's five colours (amber by default), dot-matrix logos,
  the same flags and language picker as the console.
- Static site on Cloudflare Workers (assets only, no Worker script), built by Workers Builds from `main`.
- Strict headers (`default-src 'none'`, HSTS preload, COOP/COEP/CORP, Permissions-Policy), no inline code,
  no third-party request, no cookie, no analytics.
- CI: npm audit, gitleaks, build, astro check, html-validate, csp-check, placeholders-check, i18n-check,
  lychee, Playwright on every page in every language, computer and phone, with axe.
