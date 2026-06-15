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

// Site interactions
document.addEventListener('DOMContentLoaded', () => {
  // Load the page partials from the external HTML files.
  // Use VS Code Live Server, because fetch() may fail from a direct file:// path.
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

  loadInclude('footerMount', './code_footer.html', 'Footer', `
    <footer class="bg-inverse-surface dark:bg-surface-container-high full-width py-section-gap mt-section-gap">
      <div class="max-w-7xl mx-auto px-grid-margin text-white">
        <p class="font-bold">Footer could not load</p>
        <p>Open this project using VS Code Live Server. Loading an external HTML partial usually does not work with a direct file:// browser path.</p>
      </div>
    </footer>
  `);


  // Navigation interaction logic
          const navLinks = document.querySelectorAll('nav > div ul > li > a');
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

          const dropdownMenus = {
              Study: [
                  'Academic Calendar',
                  'Apply Online',
                  'Late Applications',
                  'Full-Time Courses Important Dates 2025/2026',
                  'Full-time courses',
                  'Part-time courses',
                  'Master Courses',
                  'Doctoral Programme DRes',
                  'Online Learning',
                  'Continuous Professional Development',
                  'International Students'
              ],
              Services: [
                  'Apprenticeships',
                  'Career Guidance',
                  'Chaplaincy',
                  'Childcare Centre',
                  'Community Social Responsibility (CSR)',
                  'CLE',
                  'ERASMUS+ Projects & Mobility Office',
                  'Grievance Office',
                  'Hair and Beauty Salon',
                  'IEU',
                  'Sports and Fitness',
                  'Stipends Office',
                  'Student Liaison',
                  'Wellbeing Hub',
                  'Youth Hub'
              ],
              Research: [
                  'Applied Research Journal',
                  'Research Themes',
                  'Postdoctoral Fellowship',
                  'MCAST Monograph Series',
                  'Library',
                  'Research Fellowship Scheme',
                  'Research Framework',
                  'Research Conferences',
                  'Research Procedures',
                  'Innovation'
              ],
              About: [
                  'Mission Statement',
                  'MCAST Act',
                  'Board of Governors',
                  "Principal's Office",
                  'Corporate Services',
                  'Institutes',
                  'Regulatory Services',
                  'Research and Student Academic Management',
                  'Student Experience',
                  'IT Systems and Data Securities',
                  'Publications',
                  'Statutory Meetings',
                  'Graduation Pass Rates'
              ]
          };

          navLinks.forEach(link => {
              const menuItems = dropdownMenus[link.textContent.trim()];
              if (!menuItems) {
                  return;
              }

              const navItem = link.closest('li');
              if (!navItem) {
                  return;
              }

              navItem.classList.add('nav-item-has-dropdown');
              link.setAttribute('aria-haspopup', 'true');
              link.setAttribute('aria-expanded', 'false');

              const dropdown = document.createElement('div');
              dropdown.className = 'nav-dropdown';
              dropdown.setAttribute('aria-hidden', 'true');

              const dropdownList = document.createElement('ul');
              dropdownList.className = 'nav-dropdown-list';

              menuItems.forEach(itemText => {
                  const item = document.createElement('li');
                  const itemLink = document.createElement('a');
                  itemLink.className = 'nav-dropdown-link';
                  itemLink.href = '#';
                  itemLink.textContent = itemText;
                  item.appendChild(itemLink);
                  dropdownList.appendChild(item);
              });

              dropdown.appendChild(dropdownList);
              navItem.appendChild(dropdown);

              const showDropdown = () => {
                  dropdown.classList.add('is-open');
                  dropdown.setAttribute('aria-hidden', 'false');
                  link.setAttribute('aria-expanded', 'true');
              };

              const hideDropdown = () => {
                  dropdown.classList.remove('is-open');
                  dropdown.setAttribute('aria-hidden', 'true');
                  link.setAttribute('aria-expanded', 'false');
              };

              navItem.addEventListener('mouseenter', showDropdown);
              navItem.addEventListener('mouseleave', hideDropdown);
              navItem.addEventListener('focusin', showDropdown);
              navItem.addEventListener('focusout', (event) => {
                  if (!navItem.contains(event.relatedTarget)) {
                      hideDropdown();
                  }
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
