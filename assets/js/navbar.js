
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".nav");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
