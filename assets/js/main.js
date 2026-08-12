/* ===========================================================
   [BEDRIJFSNAAM] — site-interactie
   Sticky header, mobiel menu, subtiele scroll-animaties,
   contactformulier (front-end validatie + placeholder-verzending)
   =========================================================== */
(function () {
  "use strict";

  /* -----------------------------------------------------------
     Sticky header: schaduw/rand tonen na scrollen
     ----------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* -----------------------------------------------------------
     Mobiel menu
     ----------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      body.style.overflow = isOpen ? "hidden" : "";
    });

    // Sluit menu bij klik op een link of bij resize naar desktop
    document.querySelectorAll(".primary-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
      }
    });
  }

  /* -----------------------------------------------------------
     Subtiele reveal-animatie bij scrollen
     ----------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* -----------------------------------------------------------
     Footer: huidig jaar
     ----------------------------------------------------------- */
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* -----------------------------------------------------------
     Contactformulier
     LET OP: dit formulier heeft nog GEEN backend-verwerking.
     Zie de instructies in contact.html / README.md om dit te
     koppelen aan bijvoorbeeld Formspree, Netlify Forms, of een
     eigen e-mailservice.
     ----------------------------------------------------------- */
  var form = document.querySelector("#contact-form");
  if (form) {
    var statusEl = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Bezig met verzenden…";
      }

      // Placeholder-afhandeling: er is nog geen formulier-backend
      // geconfigureerd. Vervang dit blok door een echte fetch()-call
      // naar de door u gekozen formulierdienst zodra deze is ingesteld.
      window.setTimeout(function () {
        if (statusEl) {
          statusEl.textContent =
            "Let op: het versturen is nog niet actief. Configureer een formulierdienst " +
            "(bijv. Formspree of Netlify Forms) — zie de toelichting hieronder. Neem tot die tijd " +
            "rechtstreeks contact op via e-mail of telefoon.";
          statusEl.classList.remove("success");
          statusEl.classList.add("error", "is-visible");
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      }, 500);
    });
  }
})();
