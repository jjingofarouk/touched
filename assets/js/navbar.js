document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".nav-overlay");
    const navbar = document.querySelector(".navbar"); // Assuming your navbar has a class of "navbar"

    let lastScrollTop = 0; // To keep track of the last scroll position

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

    // Detect scroll direction
    window.addEventListener("scroll", function () {
        let currentScrollTop = window.scrollY; // Current scroll position

        // Check if the user is scrolling down or up
        if (currentScrollTop > lastScrollTop) {
            // User is scrolling down, hide the navbar
            navbar.style.transform = "translateY(-100%)"; // Hide the navbar
        } else {
            // User is scrolling up, show the navbar
            navbar.style.transform = "translateY(0)"; // Show the navbar
        }

        // Update the last scroll position
        lastScrollTop = currentScrollTop;
    });
});
