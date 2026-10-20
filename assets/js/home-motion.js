
/* QENOAIX — accessible homepage motion; no dependencies */
(() => {
  "use strict";

  const items = document.querySelectorAll(
    ".intro-grid, .featured, .section-heading, .domain-row, .latest-row, .about-panel, .contact-inner"
  );

  items.forEach((item, index) => {
    item.setAttribute("data-reveal", "");
    const delay = index % 4;
    if (delay) {
      item.setAttribute("data-reveal-delay", String(delay));
    }
  });

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    reduceMotion ||
    !("IntersectionObserver" in window)
  ) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  items.forEach(item => observer.observe(item));
})();
