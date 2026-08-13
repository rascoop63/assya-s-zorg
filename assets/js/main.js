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
     Verzendt via Formspree (AJAX, zonder pagina-herlaad) naar het
     endpoint ingesteld in het action-attribuut van #contact-form.
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
      if (statusEl) {
        statusEl.classList.remove("success", "error", "is-visible");
      }

      var formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Verzenden mislukt");
          }
          if (statusEl) {
            statusEl.textContent =
              "Bedankt voor uw bericht! Het is goed ontvangen en er wordt zo spoedig mogelijk " +
              "contact met u opgenomen.";
            statusEl.classList.remove("error");
            statusEl.classList.add("success", "is-visible");
          }
          form.reset();
        })
        .catch(function () {
          if (statusEl) {
            statusEl.textContent =
              "Er ging helaas iets mis bij het verzenden. Probeert u het nogmaals, of neem " +
              "rechtstreeks contact op via telefoon of e-mail.";
            statusEl.classList.remove("success");
            statusEl.classList.add("error", "is-visible");
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        });
    });
  }
})();
