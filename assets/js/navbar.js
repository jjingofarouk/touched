let lastScrollTop = 0;
const nav = document.querySelector("nav"); // Target the <nav> element

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down - Hide nav
    nav.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - Show nav
    nav.style.transform = "translateY(0)";
  }
  
  lastScrollTop = currentScroll;
});
