
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".navbar-toggle"); // Updated selector to match HTML
    const menu = document.querySelector(".navbar-menu");     // Updated selector to match HTML
    const navbar = document.querySelector(".navbar");
    
    let lastScroll = 0;

    // Mobile menu toggle
    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.setAttribute("aria-expanded", 
            toggle.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
    });

    // Scroll behavior
    window.addEventListener("scroll", function () {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down & past 100px
            navbar.classList.add("hide");
            navbar.classList.add("scrolled");
        } else if (currentScroll < lastScroll) {
            // Scrolling up
            navbar.classList.remove("hide");
            navbar.classList.add("scrolled");
        }

        if (currentScroll <= 50) {
            // At top of page
            navbar.classList.remove("scrolled");
            navbar.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
});
