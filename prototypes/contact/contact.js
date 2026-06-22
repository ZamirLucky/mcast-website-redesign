(function () {
  // Replace locally or inject from environment/config in production; do not commit a private Google Maps API key.
  const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
  const GOOGLE_MAPS_SCRIPT_ID = 'mcast-google-maps-api';
  let googleMapsLoadPromise;

  function setFaqState(item, isOpen) {
    const trigger = item.querySelector('.faq-trigger');
    const icon = item.querySelector('.faq-trigger__icon');

    item.classList.toggle('is-open', isOpen);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(isOpen));
    }

    if (icon) {
      icon.textContent = isOpen ? '-' : '+';
    }
  }

  function getMapContainers(root) {
    if (!root.querySelectorAll) {
      return [];
    }

    if (root.matches && root.matches('.contact-page')) {
      return root.querySelectorAll('[data-map]:not([data-map-ready])');
    }

    return root.querySelectorAll('.contact-page [data-map]:not([data-map-ready])');
  }

  function showMapFallback(container) {
    if (!container.querySelector('.campus-map__fallback')) {
      const fallback = document.createElement('p');
      fallback.className = 'campus-map__fallback';
      fallback.textContent = 'Map preview unavailable. Use Go to Maps.';
      container.replaceChildren(fallback);
    }
  }

  function showMapFallbacks(containers) {
    containers.forEach((container) => {
      showMapFallback(container);
    });
  }

  function loadGoogleMapsScript() {
    if (window.google && window.google.maps) {
      return Promise.resolve(window.google.maps);
    }

    if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
      return Promise.reject(new Error('Google Maps API key is not configured.'));
    }

    if (googleMapsLoadPromise) {
      return googleMapsLoadPromise;
    }

    googleMapsLoadPromise = new Promise((resolve, reject) => {
      const existingScript = document.getElementById(GOOGLE_MAPS_SCRIPT_ID);

      window.gm_authFailure = function () {
        reject(new Error('Google Maps authentication failed.'));
      };

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.google.maps), { once: true });
        existingScript.addEventListener('error', () => reject(new Error('Google Maps failed to load.')), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.id = GOOGLE_MAPS_SCRIPT_ID;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(window.google.maps);
      script.onerror = () => reject(new Error('Google Maps failed to load.'));

      document.head.appendChild(script);
    });

    return googleMapsLoadPromise;
  }

  function initMcastContactMaps(root) {
    const mapContainers = Array.from(getMapContainers(root || document));

    if (!mapContainers.length) {
      return;
    }

    loadGoogleMapsScript()
      .then(() => {
        mapContainers.forEach((container) => {
          if (container.dataset.mapReady === 'true') {
            return;
          }

          const lat = Number(container.dataset.lat);
          const lng = Number(container.dataset.lng);
          const campus = container.dataset.campus || 'MCAST campus';

          if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            showMapFallback(container);
            return;
          }

          const center = { lat, lng };
          container.replaceChildren();

          const map = new window.google.maps.Map(container, {
            center,
            zoom: 16,
            mapTypeId: 'satellite',
            disableDefaultUI: false,
            streetViewControl: false,
            fullscreenControl: true,
            mapTypeControl: true,
            zoomControl: true,
          });

          new window.google.maps.Marker({
            position: center,
            map,
            title: campus,
          });

          container.dataset.mapReady = 'true';
          container.classList.add('campus-map--ready');
        });
      })
      .catch(() => {
        showMapFallbacks(mapContainers);
      });
  }

  function initContactPage(root) {
    const contactPages = root.querySelectorAll
      ? root.querySelectorAll('.contact-page:not([data-contact-ready])')
      : [];

    contactPages.forEach((page) => {
      page.dataset.contactReady = 'true';

      page.querySelectorAll('.faq-item').forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        if (!trigger) {
          return;
        }

        setFaqState(item, trigger.getAttribute('aria-expanded') === 'true');

        trigger.addEventListener('click', () => {
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          setFaqState(item, !isOpen);
        });
      });

      page.querySelectorAll('form[action="#"]').forEach((form) => {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
        });
      });

      initMcastContactMaps(page);
    });

    initMcastContactMaps(root);
  }

  function bootContactPage() {
    initContactPage(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            initContactPage(node.matches('.contact-page') ? node.parentNode : node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootContactPage);
  } else {
    bootContactPage();
  }
})();
