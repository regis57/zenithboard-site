# Operations

What to do when something must change, go back, or be checked. Everything here is done either on github.com
or in the Cloudflare dashboard; there is no server to log into, because there is none.

## Deploy

Automatic. Every commit on `main` is built by Cloudflare Workers Builds (`npm ci && npm run build`, Node 24,
`ASTRO_TELEMETRY_DISABLED=1`) and served one to two minutes later. A build that fails changes nothing: the
previous version stays online and Cloudflare sends an email. The build log is under Workers & Pages →
zenithboard-site → Deployments.

## Roll back

- **A wrong text:** on github.com, open the commit, *Revert*, commit. The chain runs again.
- **A broken build or a bad deploy:** Cloudflare → Workers & Pages → zenithboard-site → Deployments → the
  previous good one → *Rollback*. Instant. Then fix on `main`, which redeploys over it.

## Check the site is well

```bash
curl -sI https://zenithboard.app/ | grep -iE "content-security-policy|strict-transport|x-frame|referrer|permissions|cross-origin"
curl -sI http://zenithboard.app/           # 301 to https
curl -sI https://www.zenithboard.app/      # 301 to the apex, path kept
curl -sI https://zenithboard.app/fr/       # 200, every language works the same way
```

Then https://securityheaders.com/?q=zenithboard.app and https://developer.mozilla.org/en-US/observatory/analyze?host=zenithboard.app

## Measurements at go-live

| Date | Where | Result |
|---|---|---|
| 2026-10-22 | securityheaders.com | **A+**; every header of `public/_headers` seen on the live response |
| 2026-10-22 | Mozilla HTTP Observatory | **A+**, 160/100, 12 tests of 12 |
| 2026-10-22 | HSTS preload | Already preloaded: `.app` is a preloaded top-level domain, every `.app` name is HTTPS-only in browsers. No submission needed |

## Cloudflare settings that matter (and must stay)

- Workers & Pages → zenithboard-site: **workers.dev route off**, **preview URLs / non-production branch builds
  off**. The site answers on `zenithboard.app` only. If either is turned on, the site becomes reachable on
  another hostname; nothing secret is exposed (it is all public), but HSTS preload and the headers only make
  sense on the real name.
- Custom domain `zenithboard.app` on the Worker. `www.zenithboard.app` is **not** on the Worker: it is a zone
  **Redirect Rule** (Rules → Redirect Rules), 301 to `https://zenithboard.app${path}`.
- SSL/TLS: **Full (strict)**, **Always Use HTTPS** on, **Minimum TLS 1.2**, **HSTS** enabled with
  includeSubDomains and preload (the `_headers` file sends the same, this is belt and braces).
- Cloudflare's GitHub App has access to `regis57/zenithboard-site` only.

## GitHub settings that matter (and must stay)

- Repository **public** (the branch rules and the secret scanning below depend on it).
- Ruleset on `main`: no force-push, no deletion, linear history.
- Secret scanning and push protection on; Dependabot alerts on; private vulnerability reporting on.
- No collaborator. Two passkeys, an authenticator app and printed recovery codes on the account: the account is
  the key to everything.

## Node and dependencies

- `.nvmrc` says the Node version Workers Builds uses (`NODE_VERSION` variable in the project's build settings
  must match). Node 24 today; move to 26 once it is LTS and Workers Builds offers it: change `.nvmrc`,
  `package.json` `engines`, the Cloudflare variable, run `npm test`, commit.
- Dependabot opens update pull requests weekly, 14 days after each release. CI must be green before merging;
  `npm audit --audit-level=high` runs on every push.
- To add a dependency: `npm install --save-exact name@version`, then say in the commit why it is needed.

## Translations

`npm run i18n:check` (also in CI, as warnings). To bring every language up to date with the English after a
batch of edits, a Claude Code session with the repository open: "every page whose English is newer than its
translation: translate the change into that language, keep the front matter, bump `updated`". Then `npm test`,
one commit.

## If a secret ever exists

There is none today. If one is ever needed (it should not be), it lives in the service that needs it
(Cloudflare's or GitHub's encrypted settings), never in the repository, and its rotation date goes here.

## Measurements log

| Date | What | Result |
|---|---|---|
| 2026-10-22 | First build, local | 8 English pages; csp-check, placeholders-check, html-validate clean |
| 2026-10-22 | CI green | Full run on GitHub Actions: audit, gitleaks, build, types, HTML, CSP, placeholders, translations, lychee (243 links), Playwright 296 tests (148 pages × computer and phone) with axe WCAG 2 A/AA, after three fixes it found: wordmark colour, fine-print contrast, right-to-left horizontal overflow |
| 2026-10-22 | Go-live | 141 pages (20 languages; 148 and 21 an hour later, Swahili published with ZenithBoard 0.53.1), Workers Builds with Node 24.22.1, custom domain, workers.dev and previews off, www → apex redirect with path and query kept, Always HTTPS, TLS 1.2 minimum. `connect-src 'none'` confirmed: a same-origin `fetch()` from the page is refused |

## Search engines

The sitemap is https://zenithboard.app/sitemap.xml (147 URLs, one per page and language, with the real
`updated` date, hreflang alternates and a priority). It is named in robots.txt, so crawlers find it alone;
registering the site with the engines gives their reports (indexing, errors, queries). Each one wants a proof
of ownership: a DNS TXT record on the zone (Cloudflare → DNS → Records) is the way that leaves nothing in the
pages, and the only one compatible with the headers (no meta tag of theirs, no file of theirs at the root).

| Engine | Where | Proof |
|---|---|---|
| Google Search Console | https://search.google.com/search-console/ → *Domain* property `zenithboard.app` | DNS TXT |
| Bing Webmaster Tools | https://www.bing.com/webmasters/ → *Add a site* (importing from Google Search Console works too) | DNS CNAME or TXT |
| Yandex Webmaster | https://webmaster.yandex.com/ → *Add site* | DNS TXT |
| Naver (Korea) | https://searchadvisor.naver.com/ | HTML file or meta tag (not DNS): skip unless Korean traffic matters |
| Baidu (China) | https://ziyuan.baidu.com/ | needs a Chinese phone number and an ICP-licensed host for most features: not applicable |
| Seznam (Czech) | https://reporter.seznam.cz/ | DNS TXT |
| DuckDuckGo, Brave, Ecosia, Qwant | no registration: they read Bing's index, Brave its own crawler; the sitemap in robots.txt is enough | — |

After the proof, submit `https://zenithboard.app/sitemap.xml` in each console; indexing follows in days.
