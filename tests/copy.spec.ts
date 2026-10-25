// SPDX-License-Identifier: GPL-3.0-or-later
// The copy button on code blocks (every language): present on each <pre>, labelled in the page's language,
// puts the block's text on the clipboard and shows the "copied" state, then goes back.
import { test, expect } from "@playwright/test";
import { PUBLISHED, pathFor } from "../src/i18n/langs.js";

for (const l of PUBLISHED) {
  test(`copy button ${l.code}`, async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]).catch(() => {});
    await page.goto(pathFor(l.code, "build"));
    const pres = page.locator("main pre");
    const n = await pres.count();
    expect(n).toBeGreaterThan(0);
    await expect(page.locator(".code-wrap .copy-btn")).toHaveCount(n);
    const btn = page.locator(".code-wrap .copy-btn").first();
    const label = await page.locator("html").getAttribute("data-copy-label");
    const done = await page.locator("html").getAttribute("data-copied-label");
    expect(label && done && label !== done).toBeTruthy();
    await expect(btn).toHaveAttribute("aria-label", label!);
    await btn.click();
    await expect(btn).toHaveAttribute("title", done!);
    await expect(btn).toHaveClass(/ok/);
    const want = (await pres.first().innerText()).replace(/\n$/, "");
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(want);
    await expect(btn).toHaveAttribute("title", label!, { timeout: 4000 });
  });
}
