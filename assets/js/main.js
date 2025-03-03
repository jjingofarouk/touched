// main.js
document.addEventListener('DOMContentLoaded', function () {
    // === Utility Functions ===
    const select = (selector) => document.querySelector(selector);
    const selectAll = (selector) => document.querySelectorAll(selector);

    // === Cookie Banner Logic ===
    const cookieBanner = select('#cookieBanner');
    const acceptCookies = select('#acceptCookies');
    if (cookieBanner && acceptCookies) {
        acceptCookies.addEventListener('click', function () {
            cookieBanner.style.display = 'none';
            // Optional: Set a cookie or localStorage to remember the choice
            localStorage.setItem('cookiesAccepted', 'true');
        });

        // Check if user has already accepted cookies
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            cookieBanner.style.display = 'none';
        }

        // Placeholder for Preferences and Reject buttons (expand as needed)
        select('.cookie-button.preferences').addEventListener('click', function () {
            console.log('Preferences clicked - Add modal logic here');
        });
        select('.cookie-button.reject').addEventListener('click', function () {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'false');
        });
    }

    // === Navigation Logic ===
    const nav = select('.nav');
    const navToggle = select('.nav-toggle');
    const navMenu = select('.nav-menu');
    const dropdowns = selectAll('.nav-dropdown');
    const navHeight = nav ? nav.offsetHeight : 0;
    let lastScroll = 0;
    let isScrolling;

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        });
    }

    // Dropdown handling for mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', function (e) {
                if (window.innerWidth <= 1023) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                    dropdowns.forEach(other => {
                        if (other !== dropdown) other.classList.remove('open');
                    });
                }
            });
        }
    });

    // Scroll behavior
    window.addEventListener('scroll', function () {
        window.clearTimeout(isScrolling);
        const currentScroll = window.scrollY;

        if (nav) {
            if (currentScroll > lastScroll && currentScroll > navHeight) {
                nav.classList.add('hidden');
                nav.classList.add('scrolled');
                if (navMenu) navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            } else {
                nav.classList.remove('hidden');
                if (currentScroll > navHeight) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        isScrolling = setTimeout(function () {
            if (currentScroll <= navHeight && nav) {
                nav.classList.remove('scrolled');
            }
        }, 66);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 1023 && nav && navMenu && 
            !nav.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > 1023 && navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
            }
        }, 250);
    });

    // === Video Playback Logic ===
    const video = select('.mission-video-element');
    const playButton = select('.play-button');
    if (video && playButton) {
        playButton.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        video.addEventListener('ended', function () {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        });

        // Auto-play on hover (optional, remove if not desired)
        video.addEventListener('mouseover', () => video.play());
        video.addEventListener('mouseout', () => video.pause());
    }

    // === Back to Top Button ===
    const backToTop = select('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // === Donation Amount Selection ===
    const donationAmounts = selectAll('.donation-amount');
    donationAmounts.forEach(amount => {
        amount.addEventListener('click', function () {
            donationAmounts.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // === Success Stories Slider (Basic Implementation) ===
    const slider = select('.stories-slider');
    const storyCards = selectAll('.story-card');
    const prevButton = select('.slider-prev');
    const nextButton = select('.slider-next');
    const dots = selectAll('.slider-dot');
    let currentIndex = 0;

    if (slider && storyCards.length > 0) {
        function updateSlider() {
            storyCards.forEach((card, index) => {
                card.style.display = index === currentIndex ? 'block' : 'none';
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + storyCards.length) % storyCards.length;
            updateSlider();
        });

        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % storyCards.length;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
                currentIndex = index;
                updateSlider();
            });
        });

        updateSlider(); // Initial setup
    }

    // === Partners Carousel (Basic Implementation) ===
    const partnersGrid = select('.partners-grid');
    const partnersPrev = select('.partners-nav-prev');
    const partnersNext = select('.partners-nav-next');
    const partnerDots = selectAll('.partners-dot');
    let partnerIndex = 0;

    if (partnersGrid) {
        const partnerItems = selectAll('.partner-logo');
        const itemsPerPage = 5; // Adjust based on visible items

        function updatePartners() {
            const offset = -(partnerIndex * (100 / itemsPerPage));
            partnersGrid.style.transform = `translateX(${offset}%)`;
            partnerDots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === partnerIndex);
            });
        }

        partnersPrev.addEventListener('click', function () {
            partnerIndex = Math.max(0, partnerIndex - 1);
            updatePartners();
        });

        partnersNext.addEventListener('click', function () {
            partnerIndex = Math.min(Math.ceil(partnerItems.length / itemsPerPage) - 1, partnerIndex + 1);
            updatePartners();
        });

        partnerDots.forEach((dot, idx) => {
            dot.addEventListener('click', function () {
                partnerIndex = idx;
                updatePartners();
            });
        });

        updatePartners(); // Initial setup
    }
});