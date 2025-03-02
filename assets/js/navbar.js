document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".nav-overlay");
    let lastScrollTop = 0; // To track the last scroll position
    const navbar = document.querySelector(".nav");

    // Function to open the menu
    function openMenu() {
        navMenu.classList.add("active");
        overlay.classList.add("active");
        navToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    // Function to close the menu
    function closeMenu() {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = ""; // Restore scrolling
    }

    // Toggle menu when clicking the button
    navToggle.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent bubbling issues
        if (navMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Prevent clicks inside the menu from closing it
    navMenu.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // Close menu when clicking the overlay
    overlay.addEventListener("click", closeMenu);

    // Close menu when clicking anywhere outside of it
    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu when pressing the Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

    // Scroll functionality to hide navbar on scroll down and show on scroll up
    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // User is scrolling down, hide navbar
            navbar.classList.add("hidden");
        } else {
            // User is scrolling up, show navbar
            navbar.classList.remove("hidden");
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
    });
});
