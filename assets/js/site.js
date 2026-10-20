
/* QENOAIX — Shared site interactions
   Step 3 of the website rebuild.
   Safe to load on pages without these elements. */

(() => {
  "use strict";

  /* Keep the footer year current wherever this element exists. */
  const yearElements = document.querySelectorAll("[data-current-year]");

  yearElements.forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  /* Add an accessible state to navigation toggles.
     This activates only when matching elements exist. */
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-site-menu]");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.hidden = isExpanded;
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menu.hidden = true;
      });
    });
  }

  /* Prevent empty placeholder links from jumping to the top.
     Real links remain unaffected. */
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
})();
