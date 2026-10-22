// SPDX-License-Identifier: GPL-3.0-or-later
// The wall's colour on this site, as on ZenithBoard's console: one of five, kept in this browser's localStorage.
// No cookie, nothing sent anywhere. Loaded as a blocking script in <head> so the first paint already has the
// colour (the Content-Security-Policy allows no inline script, so it cannot live in the page itself).
(function () {
  "use strict";
  var THEMES = ["amber", "green", "red", "white", "turquoise"], KEY = "zb-theme", cur = "amber";
  try { var s = localStorage.getItem(KEY); if (THEMES.indexOf(s) >= 0) cur = s; } catch (e) {}
  if (cur !== "amber") document.documentElement.setAttribute("data-theme", cur);

  function apply(t) {
    cur = t;
    if (t === "amber") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var all = document.querySelectorAll(".swatch");
    for (var i = 0; i < all.length; i++) {
      var on = all[i].getAttribute("data-theme") === t;
      all[i].classList.toggle("on", on);
      all[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var all = document.querySelectorAll(".swatch");
    for (var i = 0; i < all.length; i++) {
      all[i].addEventListener("click", function (ev) { apply(ev.currentTarget.getAttribute("data-theme")); });
    }
    apply(cur);
    // The language menu closes when a click lands elsewhere; without this script it still opens and closes
    // from its own button.
    document.addEventListener("click", function (ev) {
      var d = document.querySelector("details.lang[open]");
      if (d && !d.contains(ev.target)) d.removeAttribute("open");
    });
  });
})();
