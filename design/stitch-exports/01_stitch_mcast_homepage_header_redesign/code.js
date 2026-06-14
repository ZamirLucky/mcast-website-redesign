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
                    "gutter": "1.5rem",
                    "stack-md": "1rem",
                    "stack-sm": "0.5rem",
                    "section-gap": "5rem"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Montserrat"],
                    "body-md": ["Montserrat"],
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

// Site interactions
document.addEventListener('DOMContentLoaded', () => {
  // Navigation interaction logic
          const navLinks = document.querySelectorAll('nav ul li a');
          navLinks.forEach(link => {
              link.addEventListener('click', (e) => {
                  navLinks.forEach(l => {
                      l.classList.remove('text-white', 'border-b-2', 'border-royal-gold');
                      l.classList.add('text-white/80');
                  });
                  link.classList.remove('text-white/80');
                  link.classList.add('text-white', 'border-b-2', 'border-royal-gold');
              });
          });

          // Sticky header shadow logic
          window.addEventListener('scroll', () => {
              const headerContainer = document.querySelector('.fixed.top-0');
              if (window.scrollY > 10) {
                  headerContainer.classList.add('shadow-xl');
              } else {
                  headerContainer.classList.remove('shadow-xl');
              }
          });

          // Search and Accessibility panel toggle logic
          // Header search and accessibility panels
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const accessibilityToggle = document.getElementById('accessibilityToggle');
  const accessibilityPanel = document.getElementById('accessibilityPanel');
  const siteSearch = document.getElementById('siteSearch');

  function closeHeaderPanels() {
    searchPanel.classList.add('hidden');
    accessibilityPanel.classList.add('hidden');

    searchToggle.setAttribute('aria-expanded', 'false');
    accessibilityToggle.setAttribute('aria-expanded', 'false');

    // Show the original search icon again when the search box is closed
    searchToggle.classList.remove('opacity-0', 'pointer-events-none');
  }

  searchToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    const isClosed = searchPanel.classList.contains('hidden');
    closeHeaderPanels();

    if (isClosed) {
      searchPanel.classList.remove('hidden');
      searchToggle.setAttribute('aria-expanded', 'true');

      // Hide the original search icon while the search box is open
      searchToggle.classList.add('opacity-0', 'pointer-events-none');

      siteSearch.focus();
    }
  });

  accessibilityToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    const isClosed = accessibilityPanel.classList.contains('hidden');
    closeHeaderPanels();

    if (isClosed) {
      accessibilityPanel.classList.remove('hidden');
      accessibilityToggle.setAttribute('aria-expanded', 'true');
    }
  });

  searchPanel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  accessibilityPanel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', closeHeaderPanels);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeHeaderPanels();
    }
  });
});

