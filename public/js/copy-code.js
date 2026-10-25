// SPDX-License-Identifier: GPL-3.0-or-later
// Adds a GitHub-style "copy" button to every <pre>. Same-origin script (CSP script-src 'self'), no inline code.
// Labels come from data attributes on <html> so each language page supplies its own translation.
(function () {
  var root = document.documentElement;
  var label = root.dataset.copyLabel || "Copy";
  var done = root.dataset.copiedLabel || "Copied";
  var ICON_COPY = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M0 6.75C0 5.78.78 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .14.11.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path fill="currentColor" d="M5 1.75C5 .78 5.78 0 6.75 0h7.5C15.22 0 16 .78 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .14.11.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>';

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, ko) { // fallback for old browsers
      var t = document.createElement("textarea");
      t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy") ? ok() : ko(); } catch (e) { ko(e); } finally { t.remove(); }
    });
  }

  document.querySelectorAll("pre").forEach(function (pre) {
    if (pre.parentElement && pre.parentElement.classList.contains("code-wrap")) return;
    var wrap = document.createElement("div");
    wrap.className = "code-wrap";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var b = document.createElement("button");
    b.type = "button"; b.className = "copy-btn"; b.title = label; b.setAttribute("aria-label", label);
    b.innerHTML = ICON_COPY;
    var live = document.createElement("span"); live.className = "sr"; live.setAttribute("aria-live", "polite");
    wrap.appendChild(b); wrap.appendChild(live);
    var timer;
    b.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      copy(code.innerText.replace(/\n$/, "")).then(function () {
        b.innerHTML = ICON_OK; b.classList.add("ok"); b.title = done; live.textContent = done;
        clearTimeout(timer);
        timer = setTimeout(function () { b.innerHTML = ICON_COPY; b.classList.remove("ok"); b.title = label; live.textContent = ""; }, 2000);
      });
    });
  });
})();
