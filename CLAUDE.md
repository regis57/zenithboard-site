# zenithboard.app — working rules for an AI session

The site of [ZenithBoard](https://github.com/regis57/ZenithBoard). The README says how it is built and run; this
file holds the owner's (Régis, regis57) standing rules for a session.

- **Replies to the owner in French**; code, comments, README, CHANGELOG and commit messages in English.
- **Every language, every time** (the owner, 22 and 25 October 2026): a new or changed English string, page or
  sentence is translated into every language of `src/i18n/langs.js` in the same commit. Nothing ships in English
  only. `npm run i18n:check` fails on a missing page or key and on a sentence left word for word in English.
- **The site follows ZenithBoard's languages**: when its web pages gain a language (Hindi, 0.55.0), the site gains
  it in the same order with the same flag, as described under *The twenty-two languages* in the README.
- **Nothing ships that nobody has seen**: a new screen or picture is screenshotted in headless Chromium first.
- **Security by design stays as it is**: no inline script or style, no third-party request, no cookie, no tracker.
  `npm run csp:check` proves it on every build.
- **Promote, never sell**: the only call for money is the *Buy me a beer* link in the footer.
- **Full local check before pushing**: `npm test` (build, types, HTML, CSP, placeholders, translations, Playwright
  on every page in every language with axe). Then a branch, a pull request, its CI green (check the conclusion is
  `success`), and a squash merge: Cloudflare Workers Builds deploys `main`.
- **Commit as the owner**: `git -c user.name=regis57 -c user.email=regis.hennequin@gmail.com commit`, with no
  `Co-authored-by` and no "Generated with" line (the owner's standing rule, as in ZenithBoard).
- A CHANGELOG section at the top for every change, dated the day it goes online.
