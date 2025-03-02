document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const dropdownLinks = document.querySelectorAll('.nav-dropdown > .nav-link');
  
  // Create overlay element for mobile menu
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);
  
  // Toggle mobile menu
  function toggleMenu() {
    const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
    navbarToggle.setAttribute('aria-expanded', !expanded);
    navbarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = !expanded ? 'hidden' : '';
  }
  
  navbarToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // Handle dropdowns in mobile view
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        const dropdown = link.parentElement;
        dropdown.classList.toggle('open');
        
        // Toggle aria-expanded
        const isExpanded = dropdown.classList.contains('open');
        link.setAttribute('aria-expanded', isExpanded);
      }
    });
  });
  
  // Close menu when clicking on a non-dropdown link in mobile view
  const nonDropdownLinks = document.querySelectorAll('.navbar-menu > li:not(.nav-dropdown) > .nav-link');
  nonDropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1023 && navbarMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Handle scroll effects
  function handleScroll() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      if (navbar.classList.contains('transparent-on-top')) {
        navbar.classList.add('transparent');
      }
      navbar.classList.remove('scrolled');
    }
  }
  
  // Optional: Enable transparent navbar on top
  // Uncomment the line below if you want a transparent navbar at the top of the page
  // navbar.classList.add('transparent', 'transparent-on-top');
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on page load
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
      // Reset mobile menu state when returning to desktop view
      navbarToggle.setAttribute('aria-expanded', 'false');
      navbarMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // Reset dropdown open states
      document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
        dropdown.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
      });
    }
  });
  
  // Handle keyboard navigation for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Add proper ARIA attributes for accessibility
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    const id = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    
    menu.id = id;
    link.setAttribute('aria-controls', id);
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-haspopup', 'true');
  });
});