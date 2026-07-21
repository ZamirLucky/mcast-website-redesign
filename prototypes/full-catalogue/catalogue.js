(function () {
  const courseAreas = [
    {
      title: 'Technology and ICT',
      imageLabel: 'ICT lab image',
      description: 'Software, networks, data, digital systems and applied computing.',
      courses: 18,
      tags: ['ict', 'full-time', 'part-time', 'international'],
      level: '6',
      campus: 'malta'
    },
    {
      title: 'Engineering and Transport',
      imageLabel: 'Engineering workshop image',
      description: 'Workshops, vehicles, aviation, maritime and engineering practice.',
      courses: 61,
      tags: ['iet', 'full-time', 'apprenticeship'],
      level: '4-5',
      campus: 'malta'
    },
    {
      title: 'Applied Sciences',
      imageLabel: 'Science lab image',
      description: 'Laboratories, health science, sustainability and applied research.',
      courses: 40,
      tags: ['ias', 'full-time', 'international'],
      level: '7',
      campus: 'malta'
    },
    {
      title: 'Business and Management',
      imageLabel: 'Business learning image',
      description: 'Commerce, finance, operations, marketing and enterprise skills.',
      courses: 13,
      tags: ['ibmc', 'full-time', 'part-time', 'short'],
      level: '6',
      campus: 'malta'
    },
    {
      title: 'Creative Arts',
      imageLabel: 'Creative studio image',
      description: 'Design, media, performance, visual communication and production.',
      courses: 32,
      tags: ['ica', 'full-time', 'part-time', 'international'],
      level: '4-5',
      campus: 'malta'
    },
    {
      title: 'Community Services',
      imageLabel: 'Campus learning image',
      description: 'Care, education, social support and community-focused practice.',
      courses: 29,
      tags: ['ics', 'full-time', 'part-time'],
      level: '1-3',
      campus: 'malta'
    }
  ];

  const institutes = [
    {
      code: 'IET',
      name: 'Institute of Engineering and Transport',
      courses: 61,
      departments: 8,
      description: 'Engineering, transport, aviation, maritime and technical workshop pathways.',
      tags: ['iet', 'full-time', 'apprenticeship'],
      campus: 'malta',
      featured: true,
      theme: 'deep'
    },
    {
      code: 'IAS',
      name: 'Institute of Applied Sciences',
      courses: 40,
      departments: 2,
      description: 'Applied science routes across laboratories, health, sustainability and research.',
      tags: ['ias', 'full-time'],
      campus: 'malta',
      featured: true,
      theme: 'light'
    },
    {
      code: 'ICT',
      name: 'Institute of Information and Communication Technology',
      courses: 18,
      description: 'Computing, networks, software, cyber, data and digital infrastructure courses.',
      tags: ['ict', 'full-time', 'part-time', 'international'],
      campus: 'malta',
      featured: true,
      theme: 'light'
    },
    {
      code: 'ICA',
      name: 'Institute for the Creative Arts',
      courses: 32,
      tags: ['ica', 'full-time', 'part-time'],
      campus: 'malta',
      group: 'Creative and Community'
    },
    {
      code: 'ICS',
      name: 'Institute of Community Services',
      courses: 29,
      tags: ['ics', 'full-time', 'part-time'],
      campus: 'malta',
      group: 'Creative and Community'
    },
    {
      code: 'IBMC',
      name: 'Institute of Business Management and Commerce',
      courses: 13,
      tags: ['ibmc', 'full-time', 'short'],
      campus: 'malta',
      group: 'Business and Research'
    },
    {
      code: 'ARIC',
      name: 'Applied Research and Innovation Centre',
      courses: 4,
      tags: ['international', 'part-time'],
      campus: 'malta',
      group: 'Business and Research'
    },
    {
      code: 'GOZO',
      name: 'Gozo Campus',
      courses: 23,
      tags: ['full-time', 'part-time', 'short'],
      campus: 'gozo',
      group: 'Campuses and Trades'
    },
    {
      code: 'TRD',
      name: 'Institute for the Trades',
      courses: 3,
      tags: ['apprenticeship', 'short'],
      campus: 'malta',
      group: 'Campuses and Trades'
    },
    {
      code: 'CLE',
      name: 'Centre for Learning and Employability',
      courses: 3,
      tags: ['short', 'part-time'],
      campus: 'malta',
      group: 'Access and Employability'
    }
  ];

  const instituteGroups = [
    'Creative and Community',
    'Business and Research',
    'Campuses and Trades',
    'Access and Employability'
  ];

  const state = {
    keyword: '',
    level: '',
    institute: '',
    campus: ''
  };

  function matchesFilters(item) {
    const haystack = `${item.title || item.name} ${item.description || ''} ${item.group || ''}`.toLowerCase();
    const keywordMatch = !state.keyword || haystack.includes(state.keyword);
    const instituteMatch = !state.institute || item.tags.includes(state.institute);
    const levelMatch = !state.level || !item.level || item.level === state.level;
    const campusMatch = !state.campus || item.campus === state.campus;

    return keywordMatch && instituteMatch && levelMatch && campusMatch;
  }

  function renderCourseAreas(page) {
    const grid = page.querySelector('#courseAreaGrid');
    if (!grid) {
      return;
    }

    grid.innerHTML = courseAreas.map((area) => `
      <article class="course-card" data-title="${area.title}">
        <div class="course-card__media" aria-hidden="true">
          <span class="course-card__label">${area.imageLabel}</span>
        </div>
        <div class="course-card__body">
          <h3>${area.title}</h3>
          <p>${area.description}</p>
          <span class="course-card__meta">${area.courses} courses</span>
          <button class="text-link" type="button">Explore courses +</button>
        </div>
      </article>
    `).join('');
  }

  function renderInstitutes(page) {
    const grid = page.querySelector('#instituteGrid');
    if (!grid) {
      return;
    }

    const featuredCards = institutes
      .map((institute, index) => ({ ...institute, index }))
      .filter((institute) => institute.featured && institute.tags.includes('full-time'))
      .map((institute) => `
        <article class="institute-feature-card institute-feature-card--${institute.theme}" data-institute-index="${institute.index}">
          <div class="institute-feature-card__top">
            <span class="institute-badge">${institute.code}</span>
            <span class="institute-feature-card__arrow" aria-hidden="true">-&gt;</span>
          </div>
          <h3>${institute.name}</h3>
          <p>${institute.description}</p>
          <div class="institute-feature-card__meta">
            <span><strong>${institute.courses}</strong> courses</span>
            ${institute.departments ? `<span><strong>${institute.departments}</strong> departments</span>` : ''}
          </div>
          <button class="text-link" type="button">View courses -&gt;</button>
        </article>
      `).join('');

    const directoryColumns = instituteGroups.map((group) => {
      const groupItems = institutes
        .map((institute, index) => ({ ...institute, index }))
        .filter((institute) => institute.group === group && institute.tags.includes('full-time'))
        .map((institute) => `
          <article class="institute-directory-item" data-institute-index="${institute.index}">
            <span class="institute-directory-item__dot" aria-hidden="true"></span>
            <div>
              <h4>${institute.name}</h4>
              <p>${institute.courses} courses</p>
              <button class="text-link text-link--micro" type="button">View courses</button>
            </div>
          </article>
        `).join('');

      return `
        <section class="institute-directory-column" aria-label="${group}">
          <h3>${group}</h3>
          ${groupItems}
        </section>
      `;
    }).join('');

    grid.innerHTML = `
      <div class="institute-feature-grid">
        ${featuredCards}
      </div>
      <div class="institute-directory">
        ${directoryColumns}
      </div>
    `;
  }

  function applyFilters(page) {
    page.querySelectorAll('.course-card').forEach((card, index) => {
      card.classList.toggle('is-hidden', !matchesFilters(courseAreas[index]));
    });

    page.querySelectorAll('[data-institute-index]').forEach((card) => {
      const institute = institutes[Number(card.dataset.instituteIndex)];
      card.classList.toggle('is-hidden', !matchesFilters(institute));
    });

    page.querySelectorAll('.institute-directory-column').forEach((column) => {
      const visibleItems = column.querySelectorAll('.institute-directory-item:not(.is-hidden)');
      column.classList.toggle('is-hidden', visibleItems.length === 0);
    });
  }

  function bindEvents(page) {
    const form = page.querySelector('#catalogueSearch');
    const keyword = page.querySelector('#catalogueKeyword');
    const level = page.querySelector('#catalogueLevel');
    const institute = page.querySelector('#catalogueInstitute');
    const campus = page.querySelector('#catalogueCampus');

    [keyword, level, institute, campus].forEach((control) => {
      if (!control) {
        return;
      }

      control.addEventListener('input', () => {
        state.keyword = keyword.value.trim().toLowerCase();
        state.level = level.value;
        state.institute = institute.value;
        state.campus = campus.value;
        applyFilters(page);
      });
    });

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        applyFilters(page);
      });
    }
  }

  function resetState() {
    state.keyword = '';
    state.level = '';
    state.institute = '';
    state.campus = '';
  }

  function initCataloguePage(root) {
    const pages = root.querySelectorAll
      ? root.querySelectorAll('.catalogue-page:not([data-catalogue-ready])')
      : [];

    pages.forEach((page) => {
      page.dataset.catalogueReady = 'true';
      resetState();
      renderCourseAreas(page);
      renderInstitutes(page);
      bindEvents(page);
      applyFilters(page);
    });
  }

  function bootCatalogue() {
    initCataloguePage(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            initCataloguePage(node.matches('.catalogue-page') ? node.parentNode : node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootCatalogue);
  } else {
    bootCatalogue();
  }
})();
