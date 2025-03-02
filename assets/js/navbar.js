// Use strict mode for better error handling and safer coding
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Selectors
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.nav-overlay') || document.createElement('div'); // Fallback
  
  // State
  let lastScroll = 0;
  let ticking = false; // For requestAnimationFrame optimization

  // Early returns for missing elements
  if (!toggle || !menu || !navbar) {
    console.warn('Navigation elements not found');
    return;
  }

  // Initialize overlay if not present
  if (!document.querySelector('.nav-overlay')) {
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!isExpanded).toString());
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu); // Close on overlay click

  // Handle scroll behavior with throttling
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const isMenuActive = menu.classList.contains('active');

    if (!isMenuActive) {
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hide');
        navbar.classList.add('scrolled');
      } else if (currentScroll < lastScroll && currentScroll > 50) {
        navbar.classList.remove('hide');
        navbar.classList.add('scrolled');
      } else if (currentScroll <= 50) {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('hide');
      }
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true }); // Passive event listener for performance

  // Keyboard accessibility for dropdowns
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const submenu = dropdown.querySelector('.dropdown-menu');

    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  });
});
