// Add toggle functionality for footer headings on mobile
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 768) {
    const footerHeadings = document.querySelectorAll('.footer-heading');
    
    footerHeadings.forEach(heading => {
      // Skip the first column with logo
      if (!heading.closest('.footer-column').querySelector('.footer-logo')) {
        heading.addEventListener('click', function() {
          this.classList.toggle('active');
        });
      }
    });
  }
});