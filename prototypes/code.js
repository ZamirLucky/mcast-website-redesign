// Tailwind CSS configuration
// Keep this before the page markup is rendered so custom Tailwind classes are available.
tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "inverse-surface": "#2f3131",
                    "on-primary-fixed-variant": "#3d417d",
                    "tertiary-fixed": "#ffdad4",
                    "error-container": "#ffdad6",
                    "outline-variant": "#c7c5d1",
                    "surface-container-high": "#e8e8e8",
                    "on-secondary-container": "#755700",
                    "on-error": "#ffffff",
                    "on-surface": "#1a1c1c",
                    "secondary": "#785a00",
                    "primary-fixed": "#e0e0ff",
                    "surface": "#f9f9f9",
                    "gold-hover": "#C29B3F",
                    "royal-gold": "#D7AC46",
                    "mcast-blue": "#000043",
                    "tertiary-container": "#3a0a05",
                    "on-error-container": "#93000a",
                    "surface-container-low": "#f3f3f3",
                    "on-primary-container": "#7a7ebf",
                    "on-secondary-fixed": "#251a00",
                    "outline": "#777681",
                    "surface-container": "#eeeeee",
                    "on-surface-variant": "#464650",
                    "on-primary": "#ffffff",
                    "white": "#FFFFFF",
                    "surface-variant": "#e2e2e2",
                    "background": "#f9f9f9",
                    "error": "#ba1a1a",
                    "tertiary-fixed-dim": "#ffb4a8",
                    "deep-blue-light": "#1A1A56",
                    "surface-container-highest": "#e2e2e2",
                    "mcast-white": "#FFFFFF",
                    "mcast-grey": "#F3F3F3",
                    "mcast-border": "#E2E2E2",
                    "mcast-text-dim": "#464650",
                    "mcast-gold": "#D7AC46",
                    "on-secondary-fixed-variant": "#5b4300",
                    "secondary-container": "#fdce65",
                    "surface-tint": "#555996",
                    "on-tertiary-fixed": "#3a0a05",
                    "secondary-fixed-dim": "#edc058",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed": "#0f134f",
                    "on-tertiary": "#ffffff",
                    "on-background": "#1a1c1c",
                    "inverse-primary": "#bfc2ff",
                    "surface-bright": "#f9f9f9",
                    "primary": "#000000",
                    "on-tertiary-container": "#bc6f63",
                    "secondary-fixed": "#ffdf9c",
                    "primary-container": "#0f134f",
                    "on-tertiary-fixed-variant": "#72342b",
                    "primary-fixed-dim": "#bfc2ff",
                    "surface-dim": "#dadada",
                    "tertiary": "#000000",
                    "inverse-on-surface": "#f1f1f1"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "stack-lg": "2rem",
                    "grid-margin": "2rem",
                    "margin-desktop": "80px",
                    "margin-mobile": "20px",
                    "gutter": "1.5rem",
                    "stack-md": "1rem",
                    "stack-sm": "0.5rem",
                    "section-gap": "5rem"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Montserrat"],
                    "body-md": ["Montserrat"],
                    "label-lg": ["Montserrat"],
                    "label-sm": ["Montserrat"],
                    "title-lg": ["Montserrat"],
                    "label-md": ["Montserrat"],
                    "display-lg": ["Montserrat"],
                    "body-lg": ["Montserrat"],
                    "headline-md": ["Montserrat"],
                    "headline-sm": ["Montserrat"],
                    "caption": ["Montserrat"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                    "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "caption": ["12px", {"lineHeight": "16px", "fontWeight": "400"}]
            }
          },
        },
      }

const FOOTER_BREAKPOINT = '(min-width: 768px)';
let footerLoadRequestId = 0;
let headerLoadRequestId = 0;
let headerConceptCSearchState = null;
let headerConceptCMobileMenuState = null;
let accessibilityWidgetState = null;

const ACCESSIBILITY_BODY_CLASSES = [
  'accessibility-text-large',
  'accessibility-text-small',
  'accessibility-grayscale',
  'accessibility-high-contrast',
  'accessibility-negative-contrast',
  'accessibility-light-background',
  'accessibility-underline-links',
  'accessibility-readable-font'
];

const HEADER_CONCEPT_C_CLASS_TOKEN_REPLACEMENTS = [
  ['mcastGold', 'royal-gold'],
  ['mcastBlue', 'mcast-blue'],
  ['mcastBorder', 'mcast-border'],
  ['mcastMuted', 'mcast-text-dim'],
  ['mcastLight', 'background'],
  ['mcastGrey', 'mcast-grey']
];

function loadInclude(mountId, includePath, errorLabel, fallbackHtml) {
  const mount = document.getElementById(mountId);
  if (!mount) {
    return;
  }

  fetch(includePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Unable to load ${includePath}: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      mount.innerHTML = html;
    })
    .catch((error) => {
      console.error(`[${mountId}] ${errorLabel} failed to load:`, error);
      mount.innerHTML = fallbackHtml;
    });
}

function ensurePageStylesheet(href) {
  if (document.querySelector(`link[href="${href}"]`)) {
    return;
  }

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = href;
  document.head.appendChild(stylesheet);
}

function ensurePageScript(src) {
  if (document.querySelector(`script[src="${src}"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
}

function getHeaderConceptCPaths() {
  const isPrototypePage = window.location.pathname.includes('/prototypes/');

  if (isPrototypePage) {
    return ['./headers/header_c.html', './prototypes/headers/header_c.html'];
  }

  return ['./prototypes/headers/header_c.html', './headers/header_c.html'];
}

function fetchHeaderConceptC(paths) {
  let currentIndex = 0;
  let lastError = null;

  function tryNextPath() {
    if (currentIndex >= paths.length) {
      return Promise.reject(lastError || new Error('Unable to load Header Concept C.'));
    }

    const headerPath = paths[currentIndex];
    currentIndex += 1;

    return fetch(headerPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${headerPath}: ${response.status}`);
        }

        return response.text().then((html) => ({ html, headerPath }));
      })
      .catch((error) => {
        lastError = error;
        return tryNextPath();
      });
  }

  return tryNextPath();
}

function replaceHeaderConceptCClassTokens(className) {
  return HEADER_CONCEPT_C_CLASS_TOKEN_REPLACEMENTS.reduce(
    (updatedClassName, [fromToken, toToken]) => updatedClassName.replaceAll(fromToken, toToken),
    className
  );
}

function removeHeaderConceptCAccessibilityButton(header) {
  const interactiveElements = [...header.querySelectorAll('button, a')];

  interactiveElements.forEach((element) => {
    const ariaLabel = (element.getAttribute('aria-label') || '').trim().toLowerCase();
    const hasAccessibilityIcon = [...element.querySelectorAll('.material-symbols-outlined')].some(
      (icon) => {
        const iconName = icon.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
        return iconName === 'accessibility_new' || iconName === 'accessibility';
      }
    );

    if (ariaLabel.includes('accessibility') || hasAccessibilityIcon) {
      element.remove();
    }
  });
}

function normaliseHeaderConceptCMarkup(header) {
  const headerElements = [header, ...header.querySelectorAll('*')];
  const classNameReplacements = new Map([
    ['nav-dropdown', 'header-c-dropdown'],
    ['nav-dropdown__trigger', 'header-c-dropdown__trigger'],
    ['nav-dropdown__panel', 'header-c-dropdown__panel'],
    ['nav-dropdown__link', 'header-c-dropdown__link'],
    ['nav-dropdown--services', 'header-c-dropdown--services'],
    ['nav-dropdown--about', 'header-c-dropdown--about']
  ]);

  header.dataset.headerConcept = 'c';
  removeHeaderConceptCAccessibilityButton(header);

  headerElements.forEach((element) => {
    if (element.hasAttribute('class')) {
      element.setAttribute(
        'class',
        replaceHeaderConceptCClassTokens(element.getAttribute('class'))
      );
    }

    classNameReplacements.forEach((replacement, original) => {
      if (element.classList.contains(original)) {
        element.classList.replace(original, replacement);
      }
    });
  });

  const logos = [...header.querySelectorAll('img[alt*="MCAST"]')];
  logos.forEach((logo) => {
    logo.setAttribute('src', './images/mcast_logo.png');
  });

  const homeLink = header.querySelector('a[aria-label="MCAST home"]');
  if (homeLink) {
    homeLink.dataset.pageTarget = 'home';
    homeLink.setAttribute('href', '#');
  }

  const supportLink = [...header.querySelectorAll('a')].find(
    (link) => link.textContent.trim() === 'Support'
  );
  if (supportLink) {
    supportLink.dataset.pageTarget = 'contact';
  }

  const fullTimeCoursesLink = [...header.querySelectorAll('a')].find(
    (link) => link.textContent.trim() === 'Full-time courses'
  );
  if (fullTimeCoursesLink) {
    fullTimeCoursesLink.dataset.pageTarget = 'catalogue';
  }

  const searchForm = header.querySelector('[data-header-search] form');
  if (searchForm) {
    searchForm.setAttribute('action', '#');
  }

  return header;
}

function setHeaderConceptCSearchOpen(isOpen) {
  if (!headerConceptCSearchState) {
    return;
  }

  const { headerSearch, searchInput, searchToggle } = headerConceptCSearchState;
  headerSearch.classList.toggle('is-open', isOpen);
  searchToggle.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    window.requestAnimationFrame(() => {
      searchInput.focus();
    });
  }
}

function setAccessibilityWidgetOpen(isOpen) {
  if (!accessibilityWidgetState) {
    return;
  }

  const { widget, toggle, panel } = accessibilityWidgetState;

  widget.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  panel.setAttribute('aria-hidden', String(!isOpen));
}

function resetAccessibilityModes() {
  document.body.classList.remove(...ACCESSIBILITY_BODY_CLASSES);
}

function toggleAccessibilityMode(className, classesToClear = []) {
  const body = document.body;
  const shouldEnable = !body.classList.contains(className);

  body.classList.remove(...classesToClear);

  if (shouldEnable) {
    body.classList.add(className);
  } else {
    body.classList.remove(className);
  }
}

function handleAccessibilityAction(action) {
  switch (action) {
    case 'increase-text':
      toggleAccessibilityMode('accessibility-text-large', ['accessibility-text-small']);
      break;
    case 'decrease-text':
      toggleAccessibilityMode('accessibility-text-small', ['accessibility-text-large']);
      break;
    case 'grayscale':
      toggleAccessibilityMode('accessibility-grayscale');
      break;
    case 'high-contrast':
      toggleAccessibilityMode('accessibility-high-contrast', [
        'accessibility-negative-contrast',
        'accessibility-light-background'
      ]);
      break;
    case 'negative-contrast':
      toggleAccessibilityMode('accessibility-negative-contrast', [
        'accessibility-high-contrast',
        'accessibility-light-background'
      ]);
      break;
    case 'light-background':
      toggleAccessibilityMode('accessibility-light-background', [
        'accessibility-high-contrast',
        'accessibility-negative-contrast'
      ]);
      break;
    case 'underline-links':
      toggleAccessibilityMode('accessibility-underline-links');
      break;
    case 'readable-font':
      toggleAccessibilityMode('accessibility-readable-font');
      break;
    case 'reset':
      resetAccessibilityModes();
      break;
    default:
      break;
  }
}

function initAccessibilityWidget() {
  const mount = document.getElementById('accessibilityWidgetMount');
  const widget = mount ? mount.querySelector('[data-accessibility-widget]') : null;
  const toggle = widget ? widget.querySelector('[data-accessibility-toggle]') : null;
  const panel = widget ? widget.querySelector('[data-accessibility-panel]') : null;
  const actionButtons = widget
    ? [...widget.querySelectorAll('[data-accessibility-action]')]
    : [];

  if (!widget || !toggle || !panel) {
    accessibilityWidgetState = null;
    return;
  }

  accessibilityWidgetState = { widget, toggle, panel };

  if (widget.dataset.initialized === 'true') {
    return;
  }

  widget.dataset.initialized = 'true';

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    setAccessibilityWidgetOpen(!widget.classList.contains('is-open'));
  });

  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      handleAccessibilityAction(button.dataset.accessibilityAction || '');
    });
  });

  document.addEventListener('click', (event) => {
    if (
      accessibilityWidgetState &&
      !accessibilityWidgetState.widget.contains(event.target)
    ) {
      setAccessibilityWidgetOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      accessibilityWidgetState &&
      accessibilityWidgetState.widget.classList.contains('is-open')
    ) {
      setAccessibilityWidgetOpen(false);
      accessibilityWidgetState.toggle.focus();
    }
  });
}

function renderAccessibilityWidget() {
  const mount = document.getElementById('accessibilityWidgetMount');
  if (!mount || mount.dataset.initialized === 'true') {
    return;
  }

  mount.innerHTML = `
    <div class="site-accessibility-widget" data-accessibility-widget>
      <button
        class="site-accessibility-widget__toggle"
        type="button"
        aria-label="Open accessibility tools"
        aria-expanded="false"
        data-accessibility-toggle
      >
        <span class="material-symbols-outlined" aria-hidden="true">accessibility_new</span>
      </button>

      <div
        class="site-accessibility-widget__panel"
        data-accessibility-panel
        aria-hidden="true"
      >
        <div class="site-accessibility-widget__panel-header">
          <span class="material-symbols-outlined" aria-hidden="true">accessibility_new</span>
          <h2>Accessibility Tools</h2>
        </div>

        <ul class="site-accessibility-widget__list">
          <li><button type="button" data-accessibility-action="increase-text"><span class="material-symbols-outlined" aria-hidden="true">zoom_in</span> Increase Text</button></li>
          <li><button type="button" data-accessibility-action="decrease-text"><span class="material-symbols-outlined" aria-hidden="true">zoom_out</span> Decrease Text</button></li>
          <li><button type="button" data-accessibility-action="grayscale"><span class="material-symbols-outlined" aria-hidden="true">gradient</span> Grayscale</button></li>
          <li><button type="button" data-accessibility-action="high-contrast"><span class="material-symbols-outlined" aria-hidden="true">contrast</span> High Contrast</button></li>
          <li><button type="button" data-accessibility-action="negative-contrast"><span class="material-symbols-outlined" aria-hidden="true">visibility</span> Negative Contrast</button></li>
          <li><button type="button" data-accessibility-action="light-background"><span class="material-symbols-outlined" aria-hidden="true">lightbulb</span> Light Background</button></li>
          <li><button type="button" data-accessibility-action="underline-links"><span class="material-symbols-outlined" aria-hidden="true">link</span> Links Underline</button></li>
          <li><button type="button" data-accessibility-action="readable-font"><span class="material-symbols-outlined" aria-hidden="true">text_fields</span> Readable Font</button></li>
          <li><button type="button" data-accessibility-action="reset"><span class="material-symbols-outlined" aria-hidden="true">restart_alt</span> Reset</button></li>
        </ul>
      </div>
    </div>
  `;

  mount.dataset.initialized = 'true';
  initAccessibilityWidget();
}

function initHeaderConceptC() {
  const headerMount = document.getElementById('headerMount');
  if (!headerMount) {
    headerConceptCSearchState = null;
    return;
  }

  const header = headerMount.querySelector('header');
  const headerSearch = header ? header.querySelector('[data-header-search]') : null;
  const searchForm = headerSearch ? headerSearch.querySelector('form') : null;
  const searchInput = headerSearch ? headerSearch.querySelector('.header-search__input') : null;
  const searchToggle = headerSearch ? headerSearch.querySelector('.header-search__toggle') : null;

  if (!headerSearch || !searchForm || !searchInput || !searchToggle) {
    headerConceptCSearchState = null;
    return;
  }

  headerConceptCSearchState = {
    headerSearch,
    searchInput,
    searchToggle
  };

  if (headerSearch.dataset.initialized === 'true') {
    return;
  }

  headerSearch.dataset.initialized = 'true';

  searchToggle.addEventListener('click', (event) => {
    event.preventDefault();
    setHeaderConceptCSearchOpen(!headerSearch.classList.contains('is-open'));
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

function initHeaderConceptCMobileMenu() {
  const headerMount = document.getElementById('headerMount');
  const header = headerMount ? headerMount.querySelector('header') : null;
  const menu = header ? header.querySelector('[data-mobile-menu]') : null;
  const toggle = header ? header.querySelector('[data-mobile-menu-toggle]') : null;
  const closeButtons = header ? [...header.querySelectorAll('[data-mobile-menu-close]')] : [];
  const sectionToggles = header ? [...header.querySelectorAll('.header-mobile-menu__section-toggle')] : [];

  if (!header || !menu || !toggle) {
    headerConceptCMobileMenuState = null;
    document.body.classList.remove('is-mobile-menu-open');
    return;
  }

  headerConceptCMobileMenuState = { menu, toggle };

  if (menu.dataset.initialized === 'true') {
    return;
  }

  menu.dataset.initialized = 'true';

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('is-mobile-menu-open', isOpen);

    if (isOpen) {
      window.requestAnimationFrame(() => {
        const firstFocusable = menu.querySelector('button, a');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      });
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    setMenuOpen(!menu.classList.contains('is-open'));
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      setMenuOpen(false);
    });
  });

  sectionToggles.forEach((sectionToggle) => {
    const panel = sectionToggle.nextElementSibling;

    sectionToggle.addEventListener('click', () => {
      const isOpen = sectionToggle.getAttribute('aria-expanded') === 'true';
      sectionToggle.setAttribute('aria-expanded', String(!isOpen));

      if (panel) {
        panel.hidden = isOpen;
      }
    });
  });

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false);
    }
  });
}

function loadHeaderConceptC() {
  const headerMount = document.getElementById('headerMount');
  if (!headerMount) {
    return;
  }

  const requestId = ++headerLoadRequestId;

  fetchHeaderConceptC(getHeaderConceptCPaths())
    .then(({ html, headerPath }) => {
      if (requestId !== headerLoadRequestId) {
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const header = doc.querySelector('header');

      if (!header) {
        throw new Error(`No header element found in ${headerPath}`);
      }

      headerMount.innerHTML = normaliseHeaderConceptCMarkup(header).outerHTML;
      headerMount.dataset.loadedHeaderPath = headerPath;
      initHeaderConceptC();
      initHeaderConceptCMobileMenu();
    })
    .catch((error) => {
      if (requestId !== headerLoadRequestId) {
        return;
      }

      console.error('[headerMount] Header failed to load:', error);
      headerMount.innerHTML = `
        <header class="bg-mcast-blue text-white p-6">
          <p class="font-bold">Header could not load</p>
          <p>Open this project using VS Code Live Server.</p>
        </header>
      `;
      delete headerMount.dataset.loadedHeaderPath;
      headerConceptCSearchState = null;
      headerConceptCMobileMenuState = null;
      document.body.classList.remove('is-mobile-menu-open');
    });
}

function getResponsiveFooterPaths(isDesktop) {
  const footerFile = isDesktop ? 'footer_a.html' : 'footer_a_mobile.html';
  const isPrototypePage = window.location.pathname.includes('/prototypes/');

  if (isPrototypePage) {
    return [`./footers/${footerFile}`, `./prototypes/footers/${footerFile}`];
  }

  return [`./prototypes/footers/${footerFile}`, `./footers/${footerFile}`];
}

function fetchResponsiveFooter(paths) {
  let currentIndex = 0;
  let lastError = null;

  function tryNextPath() {
    if (currentIndex >= paths.length) {
      return Promise.reject(lastError || new Error('Unable to load responsive footer.'));
    }

    const footerPath = paths[currentIndex];
    currentIndex += 1;

    return fetch(footerPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${footerPath}: ${response.status}`);
        }

        return response.text().then((html) => ({ html, footerPath }));
      })
      .catch((error) => {
        lastError = error;
        return tryNextPath();
      });
  }

  return tryNextPath();
}

function loadResponsiveFooter() {
  const footerMount = document.getElementById('footerMount');
  if (!footerMount) {
    return;
  }

  const isDesktop = window.matchMedia(FOOTER_BREAKPOINT).matches;
  const footerKey = isDesktop ? 'desktop' : 'mobile';

  if (footerMount.dataset.loadedFooter === footerKey) {
    return;
  }

  const requestId = ++footerLoadRequestId;

  fetchResponsiveFooter(getResponsiveFooterPaths(isDesktop))
    .then(({ html, footerPath }) => {
      if (requestId !== footerLoadRequestId) {
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const footer = doc.querySelector('footer');

      if (!footer) {
        throw new Error(`No footer element found in ${footerPath}`);
      }

      footerMount.innerHTML = footer.outerHTML;
      footerMount.dataset.loadedFooter = footerKey;
      footerMount.dataset.loadedFooterPath = footerPath;
    })
    .catch((error) => {
      if (requestId !== footerLoadRequestId) {
        return;
      }

      console.error('[footerMount] Responsive footer failed to load:', error);
      footerMount.innerHTML = `
        <footer class="bg-mcast-blue text-white py-section-gap">
          <div class="max-w-7xl mx-auto px-grid-margin">
            <p class="font-bold">Footer could not load</p>
            <p>Open this project using VS Code Live Server. Loading external HTML partials usually does not work with a direct file:// browser path.</p>
          </div>
        </footer>
      `;
      delete footerMount.dataset.loadedFooter;
      delete footerMount.dataset.loadedFooterPath;
    });
}

function loadMainSection() {
  loadInclude('mainBodyMount', './code_main_section.html', 'Main section', `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-grid-margin">
        <div class="border border-red-300 bg-red-50 p-6 text-red-800">
          <h2 class="font-bold text-xl mb-2">Main section could not load</h2>
          <p>Open this project using VS Code Live Server. Loading an external HTML partial usually does not work with a direct file:// browser path.</p>
        </div>
      </div>
    </section>
  `);
}

function scrollMainContentIntoView() {
  const mainContent = document.getElementById('mainBodyMount');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function loadContactPage() {
  ensurePageStylesheet('./contact/contact.css');
  ensurePageScript('./contact/contact.js');

  loadInclude('mainBodyMount', './contact/contact.html', 'Contact section', `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-grid-margin">
        <div class="border border-red-300 bg-red-50 p-6 text-red-800">
          <h2 class="font-bold text-xl mb-2">Contact section could not load</h2>
          <p>Open this project using VS Code Live Server. Loading an external HTML partial usually does not work with a direct file:// browser path.</p>
        </div>
      </div>
    </section>
  `);

  scrollMainContentIntoView();
}

function loadCataloguePage() {
  ensurePageStylesheet('./full-catalogue/catalogue.css');
  ensurePageScript('./full-catalogue/catalogue.js');

  loadInclude('mainBodyMount', './full-catalogue/catalogue.html', 'Catalogue section', `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-grid-margin">
        <div class="border border-red-300 bg-red-50 p-6 text-red-800">
          <h2 class="font-bold text-xl mb-2">Catalogue section could not load</h2>
          <p>Open this project using VS Code Live Server. Loading an external HTML partial usually does not work with a direct file:// browser path.</p>
        </div>
      </div>
    </section>
  `);

  scrollMainContentIntoView();
}

// Site interactions
document.addEventListener('DOMContentLoaded', () => {
  loadHeaderConceptC();
  renderAccessibilityWidget();
  loadMainSection();
  loadResponsiveFooter();

  const footerMediaQuery = window.matchMedia(FOOTER_BREAKPOINT);

  if (footerMediaQuery.addEventListener) {
    footerMediaQuery.addEventListener('change', loadResponsiveFooter);
  } else {
    footerMediaQuery.addListener(loadResponsiveFooter);
  }

  document.addEventListener('click', (event) => {
    const contactTrigger = event.target.closest('[data-page-target="contact"]');
    if (contactTrigger) {
      event.preventDefault();
      loadContactPage();
      return;
    }

    const catalogueTrigger = event.target.closest('[data-page-target="catalogue"]');
    if (catalogueTrigger) {
      event.preventDefault();
      loadCataloguePage();
      return;
    }

    const homeTrigger = event.target.closest('[data-page-target="home"]');
    if (homeTrigger) {
      event.preventDefault();
      loadMainSection();
      scrollMainContentIntoView();
      return;
    }

    if (
      headerConceptCSearchState &&
      !headerConceptCSearchState.headerSearch.contains(event.target)
    ) {
      setHeaderConceptCSearchOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      headerConceptCSearchState &&
      headerConceptCSearchState.headerSearch.classList.contains('is-open')
    ) {
      setHeaderConceptCSearchOpen(false);
      headerConceptCSearchState.searchToggle.focus();
    }
  });
});
