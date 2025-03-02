
// Navbar JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    // Toggle Mobile Menu
    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isOpen = menu.classList.contains('active');
        toggleBtn.setAttribute('aria-expanded', isOpen);
        toggleBtn.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'; // Prevent scroll when open
    });

    // Handle Dropdowns on Mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        const submenu = dropdown.querySelector('.dropdown-menu');

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close Menu on Link Click (Mobile)
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && !link.classList.contains('btn-donate') && !link.parentElement.classList.contains('nav-dropdown')) {
                menu.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Scroll Effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth Intersection Observer for Active Link Highlighting
    const observerOptions = {
        root: null,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (entry.isIntersecting && navLink) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                navLink.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
});
