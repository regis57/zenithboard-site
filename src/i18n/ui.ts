// SPDX-License-Identifier: GPL-3.0-or-later
// The interface strings (navigation, footer, the pickers), one JSON file per language in src/i18n/ui/.
// English is the reference; tools/i18n-check.mjs verifies every language has every key.
import en from "./ui/en.json";

type UI = typeof en;
const files = import.meta.glob<{ default: UI }>("./ui/*.json", { eager: true });

const byLang: Record<string, UI> = {};
for (const [path, mod] of Object.entries(files)) {
  const code = path.replace("./ui/", "").replace(".json", "");
  byLang[code] = mod.default;
}

export function ui(code: string): UI {
  return byLang[code] ?? en;
}
