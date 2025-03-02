document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".nav-overlay");
    const nav = document.querySelector(".nav");
    
    let lastScrollTop = 0;
    
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
    
    // Handle scroll behavior for navbar
    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Don't do anything if at the very top (navbar should be visible by default)
        if (currentScroll <= 0) {
            nav.style.transform = "translateY(0)";
            return;
        }
        
        // Scrolling down
        if (currentScroll > lastScrollTop) {
            // Hide the navbar
            nav.style.transform = "translateY(-100%)";
        } 
        // Scrolling up
        else {
            // Show the navbar
            nav.style.transform = "translateY(0)";
        }
        
        lastScrollTop = currentScroll;
    });
});
