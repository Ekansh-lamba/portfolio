// ================= Utilities =================

// Smooth scrolling for internal nav links (with focus management)
function smoothScrollTo(target) {
  const el = document.querySelector(target);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 70; // offset for sticky header
  window.scrollTo({ top: y, behavior: "smooth" });
  // Move focus for accessibility after scroll completes
  setTimeout(() => { el.setAttribute("tabindex", "-1"); el.focus({ preventScroll: true }); }, 500);
}

// Active link highlighting with IntersectionObserver
function setupActiveLinkObserver() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  const byHref = {};
  navLinks.forEach(a => { byHref[a.getAttribute("href")] = a; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = "#" + entry.target.id;
      const link = byHref[id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(n => n.classList.remove("active"));
        link.classList.add("active");
        history.replaceState(null, "", id);
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
}

// Mobile menu toggle
function setupMobileMenu() {
  const burger = document.getElementById("hamburger");
  const nav = document.getElementById("site-nav");

  function setOpen(isOpen) {
    burger.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) nav.classList.add("open"); else nav.classList.remove("open");
  }

  burger?.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  // Close on link click (mobile)
  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setOpen(false));
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== burger) setOpen(false);
  });
}

// Smooth-scroll for all # links
function setupSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}

// Footer year
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// ================= Init =================
document.addEventListener("DOMContentLoaded", () => {
  setupSmoothLinks();
  setupActiveLinkObserver();
  setupMobileMenu();
  setYear();
});
