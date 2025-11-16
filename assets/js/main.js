document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-sidebar-toggle]');

  toggles.forEach((button) => {
    const targetId = button.getAttribute('aria-controls');
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      target.classList.toggle('is-open', !isExpanded);
    });
  });
});
