(function () {
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
    });
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
