
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const nav = document.querySelector('.nav');
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  let lastScrollTop = 0;
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);
  
  // Ensure the navbar is visible when the page loads
  nav.style.transform = "translateY(0)";
  
  // Toggle menu
  navToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = !expanded ? 'hidden' : '';
  });
  
  // Close menu when clicking outside
  overlay.addEventListener('click', function() {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Handle dropdowns in mobile view
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    
    link.addEventListener('click', function(e) {
      // Only in mobile view
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        dropdown.classList.toggle('open');
        
        // Close other open dropdowns
        dropdowns.forEach(other => {
          if (other !== dropdown && other.classList.contains('open')) {
            other.classList.remove('open');
          }
        });
      }
    });
  });
  
  // Handle resize events
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1023) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
  
  // Combined scroll event handler for both hide/show and style changes
  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    // Handle navbar hide/show behavior
    if (currentScroll > lastScrollTop && currentScroll > 50 && !navMenu.classList.contains('active')) {
      // Scrolling down and past 50px - Hide nav
      // Don't hide if mobile menu is open
      nav.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up - Show nav
      nav.style.transform = "translateY(0)";
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    
    // Handle navbar style changes
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
      nav.classList.remove('transparent');
    } else {
      nav.classList.remove('scrolled');
      if (nav.hasAttribute('data-transparent')) {
        nav.classList.add('transparent');
      }
    }
  });
  
  // Add transparent class on initial load if at top and has data-transparent attribute
  if (window.scrollY <= 50 && nav.hasAttribute('data-transparent')) {
    nav.classList.add('transparent');
  }
});
