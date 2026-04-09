/* ============================================================
   ERIC LIN PORTFOLIO — app.js
   Scroll spy, spotlight effect, theme toggle, scroll reveal
   ============================================================ */

(function () {
  'use strict';

  // ── Theme Toggle ──────────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  
  // Default to dark theme
  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  // Initialize — default dark (no attribute needed)

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // ── Mouse Spotlight Effect ────────────────────────────────
  const spotlight = document.getElementById('spotlight');

  if (spotlight) {
    document.addEventListener('mousemove', function (e) {
      spotlight.style.setProperty('--mouse-x', e.clientX + 'px');
      spotlight.style.setProperty('--mouse-y', e.clientY + 'px');
    });
  }

  // ── Scroll Spy (Nav Highlight) ────────────────────────────
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [];

  navLinks.forEach(function (link) {
    const targetId = link.getAttribute('data-target');
    const section = document.getElementById(targetId);
    if (section) {
      sections.push({ id: targetId, el: section, link: link });
    }
  });

  function updateActiveNav() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // If near bottom, activate last section
    if (scrollY + viewportHeight >= docHeight - 100) {
      setActiveLink(sections[sections.length - 1]);
      return;
    }

    let current = null;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].el.getBoundingClientRect();
      // Section is considered active when its top is within the top 40% of viewport
      if (rect.top <= viewportHeight * 0.4) {
        current = sections[i];
      }
    }

    if (current) {
      setActiveLink(current);
    }
  }

  function setActiveLink(activeSection) {
    sections.forEach(function (s) {
      s.link.classList.remove('active');
    });
    if (activeSection) {
      activeSection.link.classList.add('active');
    }
  }

  // Debounced scroll handler
  let scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Initial check
  updateActiveNav();

  // ── Scroll Reveal ─────────────────────────────────────────
  const revealSections = document.querySelectorAll('.section');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealSections.forEach(function (section) {
      revealObserver.observe(section);
    });
  } else {
    // Fallback: show all sections
    revealSections.forEach(function (section) {
      section.classList.add('visible');
    });
  }

  // ── Smooth Scroll for Nav Links ───────────────────────────
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
