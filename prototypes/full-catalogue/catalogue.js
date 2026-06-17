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
      details: '61 courses - 8 departments',
      accent: '#ef533f',
      tags: ['iet', 'full-time', 'apprenticeship'],
      campus: 'malta'
    },
    {
      code: 'IAS',
      name: 'Institute of Applied Sciences',
      details: '40 courses - 2 departments',
      accent: '#4caf6d',
      tags: ['ias', 'full-time'],
      campus: 'malta'
    },
    {
      code: 'ICA',
      name: 'Institute for the Creative Arts',
      details: '32 courses',
      accent: '#dc4687',
      tags: ['ica', 'full-time', 'part-time'],
      campus: 'malta'
    },
    {
      code: 'ICS',
      name: 'Institute of Community Services',
      details: '29 courses',
      accent: '#7a58b3',
      tags: ['ics', 'full-time', 'part-time'],
      campus: 'malta'
    },
    {
      code: 'ICT',
      name: 'Institute of Information and Communication Technology',
      details: '18 courses',
      accent: '#6e47ae',
      tags: ['ict', 'full-time', 'part-time', 'international'],
      campus: 'malta'
    },
    {
      code: 'IBMC',
      name: 'Institute of Business Management and Commerce',
      details: '13 courses',
      accent: '#ef4564',
      tags: ['ibmc', 'full-time', 'short'],
      campus: 'malta'
    },
    {
      code: 'GOZO',
      name: 'Gozo Campus',
      details: '23 courses',
      accent: '#36bad7',
      tags: ['full-time', 'part-time', 'short'],
      campus: 'gozo'
    },
    {
      code: 'TRD',
      name: 'Institute for the Trades',
      details: '3 courses',
      accent: '#6975c6',
      tags: ['apprenticeship', 'short'],
      campus: 'malta'
    },
    {
      code: 'CLE',
      name: 'Centre for Learning and Employability',
      details: '3 courses',
      accent: '#d7ac46',
      tags: ['short', 'part-time'],
      campus: 'malta',
      wide: true
    },
    {
      code: 'ARIC',
      name: 'Applied Research and Innovation Centre',
      details: '4 courses',
      accent: '#4d63c7',
      tags: ['international', 'part-time'],
      campus: 'malta',
      wide: true
    }
  ];

  const state = {
    filter: 'all',
    keyword: '',
    level: '',
    institute: '',
    mode: '',
    campus: ''
  };

  function matchesFilters(item) {
    const haystack = `${item.title || item.name} ${item.description || ''} ${item.details || ''}`.toLowerCase();
    const keywordMatch = !state.keyword || haystack.includes(state.keyword);
    const tabMatch = state.filter === 'all' || item.tags.includes(state.filter);
    const modeMatch = !state.mode || item.tags.includes(state.mode);
    const instituteMatch = !state.institute || item.tags.includes(state.institute);
    const levelMatch = !state.level || !item.level || item.level === state.level;
    const campusMatch = !state.campus || item.campus === state.campus;

    return keywordMatch && tabMatch && modeMatch && instituteMatch && levelMatch && campusMatch;
  }

  function renderCourseAreas() {
    const grid = document.querySelector('#courseAreaGrid');
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

  function renderInstitutes() {
    const grid = document.querySelector('#instituteGrid');
    if (!grid) {
      return;
    }

    grid.innerHTML = institutes.map((institute) => `
      <article class="institute-card${institute.wide ? ' institute-card--wide' : ''}" data-name="${institute.name}" style="--accent: ${institute.accent}">
        <div class="institute-card__head">
          <span class="institute-badge">${institute.code}</span>
          <h3>${institute.name}</h3>
        </div>
        <p>${institute.details}</p>
        <button class="text-link" type="button">View courses +</button>
      </article>
    `).join('');
  }

  function applyFilters() {
    document.querySelectorAll('.course-card').forEach((card, index) => {
      card.classList.toggle('is-hidden', !matchesFilters(courseAreas[index]));
    });

    document.querySelectorAll('.institute-card').forEach((card, index) => {
      card.classList.toggle('is-hidden', !matchesFilters(institutes[index]));
    });
  }

  function bindEvents() {
    const form = document.querySelector('#catalogueSearch');
    const keyword = document.querySelector('#catalogueKeyword');
    const level = document.querySelector('#catalogueLevel');
    const institute = document.querySelector('#catalogueInstitute');
    const mode = document.querySelector('#catalogueMode');
    const campus = document.querySelector('#catalogueCampus');

    document.querySelectorAll('.catalogue-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.catalogue-tab').forEach((item) => item.classList.remove('is-active'));
        tab.classList.add('is-active');
        state.filter = tab.dataset.filter || 'all';
        applyFilters();
      });
    });

    [keyword, level, institute, mode, campus].forEach((control) => {
      if (!control) {
        return;
      }

      control.addEventListener('input', () => {
        state.keyword = keyword.value.trim().toLowerCase();
        state.level = level.value;
        state.institute = institute.value;
        state.mode = mode.value;
        state.campus = campus.value;
        applyFilters();
      });
    });

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        applyFilters();
      });
    }
  }

  function bootCatalogue() {
    renderCourseAreas();
    renderInstitutes();
    bindEvents();
    applyFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootCatalogue);
  } else {
    bootCatalogue();
  }
})();
