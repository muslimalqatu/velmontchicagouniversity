(function () {
  "use strict";

  const content = window.VELMONT_CONTENT;
  if (!content) return;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function comingSoonUrl(label) {
    return `coming-soon.html?section=${encodeURIComponent(label)}`;
  }

  function route(label) {
    return content.routes[label] || comingSoonUrl(label);
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function renderChrome() {
    const header = qs("#site-header-slot");
    const footer = qs("#site-footer-slot");
    if (header) header.innerHTML = `  <div class="status-strip" aria-label="University development status">
    <div class="container"><span class="status-dot" aria-hidden="true"></span><strong id="status-main"></strong><span aria-hidden="true">•</span><span id="status-detail"></span></div>
  </div>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Velmont Chicago University home">
        <img src="assets/brand/velmont-horizontal.webp" alt="Velmont Chicago University — Turn knowledge into practice">
      </a>

      <nav id="desktop-nav" class="desktop-nav" aria-label="Primary navigation"></nav>

      <div class="header-actions">
        <a class="utility-link" data-coming-soon="Search" href="coming-soon.html">Search</a>
        <a class="btn btn--primary" href="programs.html">Explore Programs</a>
        <button id="menu-toggle" class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu"><span></span></button>
      </div>
    </div>
  </header>

  <nav id="mobile-menu" class="mobile-menu" hidden inert aria-label="Mobile navigation">
    <div id="mobile-nav-groups"></div>
    <div class="mobile-menu-actions">
      <a class="btn btn--primary" href="programs.html">Explore Programs</a>
      <a class="btn btn--secondary" data-coming-soon="Search" href="coming-soon.html">Search</a>
      <a class="btn btn--secondary" data-coming-soon="Contact" href="coming-soon.html">Talk to a Person</a>
    </div>
  </nav>

`;
    if (footer) footer.innerHTML = `  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo-wrap"><img src="assets/brand/velmont-horizontal.webp" alt="Velmont Chicago University"></div>
          <p id="footer-status"></p>
        </div>
        <div class="footer-col"><h2>Academics</h2><a href="programs.html">Programs</a><a data-coming-soon="Undergraduate Programs" href="coming-soon.html">Undergraduate</a><a data-coming-soon="Graduate Programs" href="coming-soon.html">Graduate</a><a data-coming-soon="How Learning Works" href="coming-soon.html">How Learning Works</a></div>
        <div class="footer-col"><h2>Admissions & Cost</h2><a data-coming-soon="Admissions" href="coming-soon.html">Admissions</a><a data-coming-soon="Tuition & Fees" href="coming-soon.html">Tuition & Fees</a><a data-coming-soon="Scholarships" href="coming-soon.html">Scholarships</a><a data-coming-soon="International Students" href="coming-soon.html">International Students</a></div>
        <div class="footer-col"><h2>About</h2><a data-coming-soon="Mission and Vision" href="coming-soon.html">Mission & Vision</a><a data-coming-soon="University Status" href="coming-soon.html">University Status</a><a data-coming-soon="Contact" href="coming-soon.html">Contact</a><a data-coming-soon="Policies" href="coming-soon.html">Policies</a></div>
        <div class="footer-col"><h2>Resources</h2><a data-coming-soon="Student Portal" href="coming-soon.html">Student Portal</a><a data-coming-soon="Learning Platform" href="coming-soon.html">Learning Platform</a><a data-coming-soon="Student Email" href="coming-soon.html">Student Email</a><a data-coming-soon="Investor Access" href="coming-soon.html">Investor Access</a></div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Velmont Chicago University. Prototype for planning and demonstration.</span>
        <span data-content="university.admissionsStatus"></span>
      </div>
    </div>
  </footer>

`;
  }

  function renderNavigation() {
    const desktop = qs("#desktop-nav");
    const mobile = qs("#mobile-nav-groups");
    if (!desktop || !mobile) return;

    desktop.innerHTML = content.navigation.map((group, index) => `
      <div class="nav-group">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-controls="nav-menu-${index}">
          ${group.label}
          <span aria-hidden="true" class="nav-chevron">⌄</span>
        </button>
        <div class="nav-menu" id="nav-menu-${index}">
          ${group.items.map(item => `<a href="${route(item)}">${item}</a>`).join("")}
        </div>
      </div>
    `).join("");

    mobile.innerHTML = content.navigation.map((group, index) => `
      <div class="mobile-nav-group">
        <button class="mobile-nav-trigger" type="button" aria-expanded="false" aria-controls="mobile-group-${index}">
          <span>${group.label}</span><span aria-hidden="true">+</span>
        </button>
        <div class="mobile-nav-links" id="mobile-group-${index}">
          ${group.items.map(item => `<a href="${route(item)}">${item}</a>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderPrograms() {
    const grid = qs("#program-grid");
    if (!grid) return;
    grid.innerHTML = content.academicPortfolio.areas.map(area => `
      <article class="program-card">
        <div class="program-card__topline"><span>${area.level}</span><span class="status-badge">${area.status}</span></div>
        <h3>${area.title}</h3>
        <p>${area.description}</p>
        <dl class="program-facts">
          <div><dt>Completion</dt><dd>${area.completion}</dd></div>
          <div><dt>Cost</dt><dd>${area.cost}</dd></div>
          <div><dt>Funding</dt><dd>${area.funding}</dd></div>
          <div><dt>Career relevance</dt><dd>${area.careers}</dd></div>
        </dl>
        <a class="text-link" href="academic-area.html?area=${encodeURIComponent(area.id)}">Explore this academic area <span aria-hidden="true">→</span></a>
      </article>
    `).join("");
  }

  function renderDecisionFactors() {
    const root = qs("#decision-grid");
    if (!root) return;
    root.innerHTML = content.decisionFactors.map(item => `
      <article class="decision-card">
        <span class="decision-number" aria-hidden="true">${item.number}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  function renderPrinciples() {
    const root = qs("#principles-grid");
    if (!root) return;
    root.innerHTML = content.academicModel.principles.map(item => `
      <article class="principle-card">
        <span class="principle-mark" aria-hidden="true"></span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  function renderLearningExamples() {
    const root = qs("#learning-examples");
    if (!root) return;
    root.innerHTML = content.aiLearning.examples.map(item => `
      <article class="learning-example">
        <span>${item.area}</span>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `).join("");
  }

  function renderRoadmap() {
    const root = qs("#roadmap-list");
    if (!root) return;
    root.innerHTML = content.roadmap.map((item, index) => `
      <li class="roadmap-item">
        <span class="roadmap-dot" aria-hidden="true">${index + 1}</span>
        <div><span class="roadmap-period">${item.period}</span><h3>${item.title}</h3><p>${item.text}</p></div>
      </li>
    `).join("");
  }

  function hydrateText() {
    const set = (id, value) => { const el = qs(`#${id}`); if (el) el.textContent = value; };
    set("status-main", content.university.developmentStatus);
    set("status-detail", content.university.statusDetail);
    set("hero-eyebrow", content.hero.eyebrow);
    set("hero-title", content.hero.title);
    set("hero-body", content.hero.body);
    set("portfolio-intro", content.academicPortfolio.intro);
    set("academic-model-title", content.academicModel.title);
    set("academic-model-body", content.academicModel.body);
    set("ai-label", content.aiLearning.label);
    set("ai-title", content.aiLearning.title);
    set("ai-body", content.aiLearning.body);
    set("local-title", content.students.local.title);
    set("local-body", content.students.local.text);
    set("international-title", content.students.international.title);
    set("international-body", content.students.international.text);
    set("support-title", content.support.title);
    set("support-body", content.support.body);
    set("mission-preview", content.university.mission);
    set("footer-status", content.university.developmentStatus);

    qsa("[data-content]").forEach(el => {
      const value = el.dataset.content.split(".").reduce((node, key) => node && node[key], content);
      if (typeof value === "string") el.textContent = value;
    });
    const supportList = qs("#support-list");
    if (supportList) supportList.innerHTML = content.support.items.map(item => `<li>${item}</li>`).join("");
  }

  function initDesktopMenus() {
    qsa(".nav-trigger").forEach(button => {
      const group = button.closest(".nav-group");
      const close = () => { button.setAttribute("aria-expanded", "false"); group.classList.remove("is-open"); };
      button.addEventListener("click", event => {
        event.stopPropagation();
        const willOpen = button.getAttribute("aria-expanded") !== "true";
        qsa(".nav-trigger[aria-expanded='true']").forEach(other => {
          if (other !== button) { other.setAttribute("aria-expanded", "false"); other.closest(".nav-group").classList.remove("is-open"); }
        });
        button.setAttribute("aria-expanded", String(willOpen));
        group.classList.toggle("is-open", willOpen);
      });
      group.addEventListener("focusout", event => {
        if (!group.contains(event.relatedTarget)) close();
      });
      group.addEventListener("keydown", event => { if (event.key === "Escape") { close(); button.focus(); } });
    });
    document.addEventListener("click", () => qsa(".nav-group.is-open").forEach(group => {
      group.classList.remove("is-open");
      const trigger = qs(".nav-trigger", group); if (trigger) trigger.setAttribute("aria-expanded", "false");
    }));
  }

  function initMobileMenu() {
    const menuButton = qs("#menu-toggle");
    const panel = qs("#mobile-menu");
    const header = qs(".site-header");
    if (!menuButton || !panel || !header) return;
    const mobile = window.matchMedia("(max-width: 1120px)");
    const background = qsa("main, .site-footer, .status-strip");
    const positionPanel = () => {
      panel.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    };
    const closeMenu = (restoreFocus = false) => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      panel.classList.remove("is-open");
      panel.inert = true;
      panel.hidden = true;
      background.forEach(el => { el.inert = false; });
      document.body.classList.remove("menu-open");
      if (restoreFocus && mobile.matches) menuButton.focus();
    };
    menuButton.addEventListener("click", () => {
      if (menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
        return;
      }
      if (!mobile.matches) return;
      positionPanel();
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation menu");
      panel.hidden = false;
      panel.inert = false;
      panel.classList.add("is-open");
      background.forEach(el => { el.inert = true; });
      document.body.classList.add("menu-open");
      qs("button, a", panel)?.focus();
    });
    qsa(".mobile-nav-trigger").forEach(button => {
      button.addEventListener("click", () => {
        const group = button.closest(".mobile-nav-group");
        const open = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(open));
        group.classList.toggle("is-open", open);
        button.lastElementChild.textContent = open ? "−" : "+";
      });
    });
    document.addEventListener("keydown", event => {
      if (panel.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      } else if (event.key === "Tab") {
        const focusable = [menuButton, ...qsa("a, button", panel).filter(el => el.getClientRects().length)];
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !focusable.includes(document.activeElement))) {
          event.preventDefault(); first.focus();
        }
      }
    });
    qsa("#mobile-menu a").forEach(link => link.addEventListener("click", () => closeMenu(true)));
    const breakpointChanged = () => {
      if (!mobile.matches) {
        const wasInMenu = panel.contains(document.activeElement) || document.activeElement === menuButton;
        closeMenu();
        if (wasInMenu) qs(".nav-trigger")?.focus();
      }
      positionPanel();
    };
    mobile.addEventListener("change", breakpointChanged);
    window.addEventListener("resize", positionPanel);
    window.addEventListener("scroll", positionPanel, { passive: true });
    if ("ResizeObserver" in window) new ResizeObserver(positionPanel).observe(header);
    closeMenu();
    positionPanel();
  }

  function initHeaderScroll() {
    const header = qs(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initReveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      qsa(".reveal").forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    qsa(".reveal").forEach(el => observer.observe(el));
  }

  function initTemporaryActions() {
    qsa("[data-coming-soon]").forEach(link => {
      const label = link.getAttribute("data-coming-soon") || link.textContent.trim();
      link.setAttribute("href", route(label));
    });
  }

  function initBotpressWebchat() {
  if (document.querySelector('script[data-botpress-webchat="inject"]')) return;

  const injectScript = document.createElement("script");
  injectScript.src = "https://cdn.botpress.cloud/webchat/v3.7/inject.js";
  injectScript.setAttribute("data-botpress-webchat", "inject");

  injectScript.onload = () => {
    if (document.querySelector('script[data-botpress-webchat="config"]')) return;

    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2026/10/14/20/20261014203108-LYY36KW1.js";
    configScript.setAttribute("data-botpress-webchat", "config");

    document.head.appendChild(configScript);
  };

  document.head.appendChild(injectScript);
}
  window.VELMONT_UI = { escapeHTML, route };
  renderChrome();
  renderNavigation();
  renderPrograms();
  renderDecisionFactors();
  renderPrinciples();
  renderLearningExamples();
  renderRoadmap();
  hydrateText();
  initDesktopMenus();
  initHeaderScroll();
  initReveal();
  initTemporaryActions();
  initBotpressWebchat();
  qsa(".nav-menu a, .mobile-nav-links a").forEach(link => {
    if (link.getAttribute("href") === location.pathname.split("/").pop() + location.search + location.hash) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
