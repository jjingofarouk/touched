let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down - Hide navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - Show navbar
    navbar.style.transform = "translateY(0)";
  }
  
  lastScrollTop = currentScroll;
});
