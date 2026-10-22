// SPDX-License-Identifier: GPL-3.0-or-later
// The site as a visitor sees it: every page in every published language, on a computer and on a phone.
// For each one: it loads, it is in the right language and direction, nothing is fetched from another origin,
// the browser logs no error, the language picker and the colour swatches are there, and axe finds no
// accessibility violation. A screenshot of each goes into test-results/ (an artefact in CI).
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { PUBLISHED, SLUGS, pathFor, lang } from "../src/i18n/langs.js";

const ORIGIN = "http://127.0.0.1:4321";

for (const l of PUBLISHED) {
  for (const slug of SLUGS) {
    const path = pathFor(l.code, slug);
    test(`${l.code} ${slug}`, async ({ page }, info) => {
      const thirdParty: string[] = [];
      const errors: string[] = [];
      page.on("request", (r) => { if (!r.url().startsWith(ORIGIN) && !r.url().startsWith("data:")) thirdParty.push(r.url()); });
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
      page.on("pageerror", (e) => errors.push(String(e)));

      const res = await page.goto(path);
      expect(res?.status(), path).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", l.code);
      await expect(page.locator("html")).toHaveAttribute("dir", lang(l.code).dir);
      await expect(page.locator("main h1")).toHaveCount(1);
      await expect(page.locator("details.lang")).toHaveCount(1);
      await expect(page.locator(".swatch")).toHaveCount(5);
      // the hreflang alternates: one per published language plus x-default
      expect(await page.locator('link[rel="alternate"][hreflang]').count()).toBe(PUBLISHED.length + 1);

      // the colour: choose green, reload, it is remembered (localStorage, no cookie)
      await page.locator('.swatch[data-theme="green"]').click();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "green");
      await page.reload();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "green");
      expect(await page.context().cookies()).toHaveLength(0);
      await page.locator('.swatch[data-theme="amber"]').click();

      await page.screenshot({ path: info.outputPath(`${l.code}-${slug}.png`), fullPage: true });
      expect(thirdParty, "third-party requests").toEqual([]);
      expect(errors, "browser errors").toEqual([]);

      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
      expect(axe.violations, JSON.stringify(axe.violations, null, 2)).toEqual([]);
    });
  }
}

test("404 page", async ({ page }) => {
  const res = await page.goto("/no-such-page/");
  expect(res?.status()).toBe(404);
  await expect(page.locator("main h1")).toHaveText("404");
});
