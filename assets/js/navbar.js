
let lastScrollTop = 0;
const nav = document.querySelector("nav"); // Target the <nav> element

// Ensure the navbar is visible when the page loads
nav.style.transform = "translateY(0)";

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scrolling down and past 50px - Hide nav
    nav.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - Show nav
    nav.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});
