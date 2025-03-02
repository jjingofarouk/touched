document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".navbar-toggle"); // Updated class name
    const menu = document.querySelector(".navbar-menu");     // Updated class name
    const nav = document.querySelector(".nav");
    let lastScroll = 0;

    // Mobile menu toggle
    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    // Scroll handling
    window.addEventListener("scroll", function () {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 50) {
            // Scrolling down & past 50px
            nav.classList.add("hidden");
            nav.classList.add("scrolled");
        } else if (currentScroll < lastScroll && currentScroll > 50) {
            // Scrolling up & past 50px
            nav.classList.remove("hidden");
            nav.classList.add("scrolled");
        } else if (currentScroll <= 50) {
            // At top of page
            nav.classList.remove("hidden");
            nav.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    });
});
