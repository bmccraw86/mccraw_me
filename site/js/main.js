// Footer build-date stamp
const buildDateEl = document.getElementById("build-date");
if (buildDateEl) {
  buildDateEl.textContent = new Date().toISOString().slice(0, 10);
}

// Scroll-reveal for section headers/content — skipped entirely if the
// visitor prefers reduced motion.
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".section > .wrap > *, .service-row"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("is-visible");
  });
}
