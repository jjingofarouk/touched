

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavigation();
  initSlider();
  initMissionVideo();
  initImpactNumbers();
  initDonationOptions();
  initBackToTop();
  initCookieConsent();
  initNewsletterForm();
  initSmoothScrolling();
  initLazyLoading();
  initAccessibility();
});

/**
 * Navigation functionality
 * Handles mobile menu, dropdowns, and scroll behavior
 */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const navLinks = document.querySelectorAll('.nav-link');
  let isMenuOpen = false;

  // Toggle mobile menu
  navbarToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navbarToggle.setAttribute('aria-expanded', isMenuOpen);
    navbarMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open', isMenuOpen);
    
    // Add hamburger animation
    navbarToggle.querySelector('.hamburger').classList.toggle('active');
  });

  // Handle dropdowns for both mouse and keyboard navigation
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    // Click handler (touch-friendly)
    link.addEventListener('click', (e) => {
      // Check if already open or on mobile
      if (window.innerWidth < 992 || dropdown.classList.contains('active')) {
        return; // Let the link work if submenu is already open
      }
      
      e.preventDefault();
      
      // Close all other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('active');
          d.querySelector('.dropdown-menu').classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
      menu.classList.toggle('active');
    });
    
    // Mouse events for desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('active');
        menu.classList.add('active');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('active');
        menu.classList.remove('active');
      });
    }
    
    // Keyboard accessibility
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('active');
        menu.classList.toggle('active');
        
        if (menu.classList.contains('active')) {
          menu.querySelector('a').focus();
        }
      }
    });
    
    // Escape key closes dropdown
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        menu.classList.remove('active');
        link.focus();
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInside = navbar.contains(e.target);
    
    if (!isClickInside && isMenuOpen) {
      isMenuOpen = false;
      navbarToggle.setAttribute('aria-expanded', false);
      navbarMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      navbarToggle.querySelector('.hamburger').classList.remove('active');
    }
  });

  // Handle resize events (for responsive behavior)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && isMenuOpen) {
      isMenuOpen = false;
      navbarToggle.setAttribute('aria-expanded', false);
      navbarMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      navbarToggle.querySelector('.hamburger').classList.remove('active');
    }
  });

  // Sticky navigation on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add sticky class when scrolling down
    if (scrollTop > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
    
    // Hide/show navbar on scroll (mobile only)
    if (window.innerWidth < 992 && !isMenuOpen) {
      if (scrollTop > lastScrollTop && scrollTop > 300) {
        // Scrolling down, hide navbar
        navbar.classList.add('navbar-hidden');
      } else {
        // Scrolling up, show navbar
        navbar.classList.remove('navbar-hidden');
      }
    }
    
    lastScrollTop = scrollTop;
  });

  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (currentPath === linkPath || 
        (currentPath.includes(linkPath) && linkPath !== '/index.html' && linkPath !== '/')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      
      // If in dropdown, mark parent too
      const parentDropdown = link.closest('.nav-dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-link').classList.add('active-parent');
      }
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Slider functionality for success stories
 */
function initSlider() {
  const slider = document.querySelector('.stories-slider');
  
  if (!slider) return;
  
  const slides = slider.querySelectorAll('.story-card');
  const dots = document.querySelectorAll('.slider-dot');
  const nextBtn = document.querySelector('.slider-next');
  const prevBtn = document.querySelector('.slider-prev');
  
  if (!slides.length) return;
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000;
  
  // Initialize slider by setting up first slide
  function initializeSlider() {
    // Make sure first slide is visible and all others are hidden
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'flex' : 'none';
      slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    });
    
    // Set first dot as active
    if (dots.length) {
      dots[0].classList.add('active');
    }
    
    // Start automatic sliding
    startSlideInterval();
  }
  
  // Move to a specific slide
  function goToSlide(slideIndex) {
    // Normalize index within bounds
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    
    // Hide current slide with fade out
    slides[currentSlide].classList.add('fade-out');
    
    // After fade out completes, show new slide
    setTimeout(() => {
      // Hide all slides
      slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.classList.remove('fade-out', 'fade-in');
        slide.setAttribute('aria-hidden', 'true');
      });
      
      // Show selected slide
      slides[slideIndex].style.display = 'flex';
      slides[slideIndex].classList.add('fade-in');
      slides[slideIndex].setAttribute('aria-hidden', 'false');
      
      // Update dots
      if (dots.length) {
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === slideIndex);
        });
      }
      
      // Update current slide index
      currentSlide = slideIndex;
    }, 300); // Match transition time from CSS
  }
  
  // Start automatic sliding
  function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, intervalTime);
  }
  
  // Event listeners for controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      startSlideInterval(); // Reset timer when manually changing slides
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      startSlideInterval(); // Reset timer when manually changing slides
    });
  }
  
  // Click event for dots
  if (dots.length) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startSlideInterval(); // Reset timer when manually changing slides
      });
    });
  }
  
  // Pause sliding on hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  // Resume sliding when mouse leaves
  slider.addEventListener('mouseleave', () => {
    startSlideInterval();
  });
  
  // Handle touch events for swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideInterval);
  }, {passive: true});
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startSlideInterval();
  }, {passive: true});
  
  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const threshold = 50; // Minimum swipe distance
    
    if (swipeDistance > threshold) {
      // Swipe right, show previous slide
      goToSlide(currentSlide - 1);
    } else if (swipeDistance < -threshold) {
      // Swipe left, show next slide
      goToSlide(currentSlide + 1);
    }
  }
  
  // Initialize slider
  initializeSlider();
}

/**
 * Mission video functionality
 */
function initMissionVideo() {
  const playButton = document.querySelector('.play-button');
  const missionImage = document.querySelector('.mission-image');
  
  if (!playButton || !missionImage) return;
  
  playButton.addEventListener('click', () => {
    // Create video element to replace image
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    
    // Video placeholder (in a real implementation, you would replace this with an actual video)
    // Here we're creating a structure for a YouTube embed as an example
    videoContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" 
        title="Touched Hearts mission video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <button class="close-video" aria-label="Close video">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    // Replace image with video
    const missionVideo = document.querySelector('.mission-video');
    missionVideo.appendChild(videoContainer);
    missionImage.style.display = 'none';
    playButton.style.display = 'none';
    
    // Close video button functionality
    const closeButton = videoContainer.querySelector('.close-video');
    closeButton.addEventListener('click', () => {
      videoContainer.remove();
      missionImage.style.display = 'block';
      playButton.style.display = 'flex';
    });
  });
}

/**
 * Animate impact numbers on scroll (counter animation)
 */
function initImpactNumbers() {
  const impactSection = document.querySelector('.impact-numbers');
  const numbers = document.querySelectorAll('.impact-number');
  
  if (!impactSection || !numbers.length) return;
  
  let animated = false;
  
  // Function to animate counting up
  function animateNumbers() {
    numbers.forEach(number => {
      const target = number.innerText;
      const suffix = target.includes('+') ? '+' : '';
      const numTarget = parseInt(target.replace(/,|\+|%/g, ''));
      let count = 0;
      const duration = 2000; // ms
      const interval = Math.ceil(duration / numTarget > 1 ? duration / 100 : duration / numTarget);
      const increment = Math.ceil(numTarget / (duration / interval));
      
      const counter = setInterval(() => {
        count += increment;
        
        if (count >= numTarget) {
          number.innerText = target; // Set final value exactly as specified
          clearInterval(counter);
        } else {
          number.innerText = count.toLocaleString() + suffix;
        }
      }, interval);
    });
  }
  
  // Observe when impact section comes into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateNumbers();
        animated = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  observer.observe(impactSection);
}

/**
 * Donation options functionality
 */
function initDonationOptions() {
  const amountButtons = document.querySelectorAll('.donation-amount');
  
  if (!amountButtons.length) return;
  
  amountButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      amountButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Handle "Other" option by showing input field
      if (button.innerText === 'Other') {
        const parent = button.parentElement;
        
        // Check if input already exists
        if (!parent.querySelector('.donation-custom-amount')) {
          const input = document.createElement('input');
          input.type = 'number';
          input.min = '1';
          input.placeholder = 'Enter amount';
          input.className = 'donation-custom-amount';
          
          parent.appendChild(input);
          input.focus();
        }
      } else {
        // Remove custom amount input if it exists
        const customInput = document.querySelector('.donation-custom-amount');
        if (customInput) {
          customInput.remove();
        }
      }
    });
  });
}

/**
 * Back to top button functionality
 */
function initBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (!backToTopButton) return;
  
  // Show button when scrolled down
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


   
    

/**
 * Newsletter form functionality
 */
function initNewsletterForm() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    const consent = newsletterForm.querySelector('input[name="consent"]').checked;
    
    if (!email || !consent) {
      // Display error
      showFormMessage(newsletterForm, 'Please fill in all required fields', 'error');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage(newsletterForm, 'Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission
    showFormMessage(newsletterForm, 'Submitting...', 'info');
    
    try {
      // In a real implementation, this would be an API call
      // await fetch('subscribe.php', {
      //   method: 'POST',
      //   body: new FormData(newsletterForm)
      // });
      
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showFormMessage(newsletterForm, 'Thank you for subscribing!', 'success');
      newsletterForm.reset();
      
      // Clear success message after a delay
      setTimeout(() => {
        const messageEl = newsletterForm.querySelector('.form-message');
        if (messageEl) messageEl.remove();
      }, 5000);
    } catch (error) {
      showFormMessage(newsletterForm, 'An error occurred. Please try again later.', 'error');
    }
  });
  
  function showFormMessage(form, message, type) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    
    // Add to form
    form.appendChild(messageEl);
  }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        e.preventDefault();
        
        // Get offset to account for fixed header
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const offsetTop = target.offsetTop - navbarHeight - 20; // 20px extra padding
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, this.getAttribute('href'));
      }
    });
  });
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
  // Check if the browser supports IntersectionObserver
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imgObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imgObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    function lazyLoad() {
      lazyImages.forEach(img => {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
      
      // If all images have been loaded, remove the scroll event listener
      if (lazyImages.length === 0) {
        window.removeEventListener('scroll', lazyLoad);
      }
    }
    
    // Load initial images
    lazyLoad();
    
    // Listen for scroll events
    window.addEventListener('scroll', lazyLoad);
  }
}

/**
 * Accessibility enhancements
 */
function initAccessibility() {
  // Focus visible outline
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
  
  // Skip to content link (should be added to HTML)
  if (!document.querySelector('.skip-to-content')) {
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-to-content';
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  // Add missing ARIA attributes
  document.querySelectorAll('button:not([aria-label])').forEach(button => {
    if (!button.textContent.trim()) {
      const icon = button.querySelector('i, svg');
      if (icon && icon.className) {
        // Try to generate a sensible label from icon class
        const iconClass = icon.className.replace('fas fa-', '').replace('far fa-', '').replace('fab fa-', '');
        button.setAttribute('aria-label', iconClass.replace(/-/g, ' '));
      }
    }
  });
}
