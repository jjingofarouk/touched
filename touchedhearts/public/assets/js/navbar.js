document.addEventListener("DOMContentLoaded", function () {
    // Element selections
    const nav = document.querySelector(".nav");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    // Scroll handling variables
    let lastScroll = 0;
    let isScrolling;
    const navHeight = nav.offsetHeight;

    // Mobile menu toggle
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
        // Close any open dropdowns when toggling mobile menu
        dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
    });

    // Dropdown handling for mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector(".nav-link");
        dropdownLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 1023) {
                e.preventDefault();
                dropdown.classList.toggle("open");
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) other.classList.remove("open");
                });
            }
        });
    });

    // Scroll behavior
    window.addEventListener("scroll", function () {
        // Clear existing timeout
        window.clearTimeout(isScrolling);

        // Get current scroll position
        const currentScroll = window.scrollY;

        // Handle scroll direction
        if (currentScroll > lastScroll && currentScroll > navHeight) {
            // Scrolling down
            nav.classList.add("hidden");
            nav.classList.add("scrolled");
            // Close mobile menu if open
            navMenu.classList.remove("active");
            navToggle.classList.remove("active");
        } else {
            // Scrolling up or at top
            nav.classList.remove("hidden");
            if (currentScroll > navHeight) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        }

        // Update last scroll position
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;

        // Add subtle delay to prevent jitter
        isScrolling = setTimeout(function() {
            if (currentScroll <= navHeight) {
                nav.classList.remove("scrolled");
            }
        }, 66);
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
        if (window.innerWidth <= 1023 && 
            !nav.contains(e.target) && 
            navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navToggle.classList.remove("active");
            dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 1023) {
                navMenu.classList.remove("active");
                navToggle.classList.remove("active");
                dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
            }
        }, 250);
    });
});
