document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hide navbar when scrolling down and show when scrolling up
        if (currentScroll > lastScrollTop) {
            // Scroll Down: Hide Navbar
            navbar.style.top = "-80px";  // Adjust to the height of your navbar
        } else {
            // Scroll Up: Show Navbar
            navbar.style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    });
});
    
