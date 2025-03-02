// assets/js/events.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample event data (replace with API call in production)
    const events = [
        {
            id: 1,
            title: "Annual Charity Run",
            date: "2025-04-15",
            description: "Join us for a 5K run to raise funds for education in Uganda.",
            image: "./assets/images/charity-run.jpg",
            type: "upcoming"
        },
        {
            id: 2,
            title: "Healthcare Outreach",
            date: "2025-03-20",
            description: "Free medical check-ups for rural communities.",
            image: "./assets/images/healthcare2.jpg",
            type: "upcoming"
        },
        {
            id: 3,
            title: "Women's Empowerment Workshop",
            date: "2025-02-10",
            description: "Vocational training for women in Kampala.",
            image: "./assets/images/empowerment.jpg",
            type: "past"
        },
        {
            id: 4,
            title: "Back-to-School Drive",
            date: "2025-01-05",
            description: "Distributed school supplies to 500 children.",
            image: "./assets/images/education2.jpg",
            type: "past"
        }
    ];

    const eventsContainer = document.querySelector('.events-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const currentDate = new Date('2025-03-01'); // Current date for demo (matches your instruction)

    // Function to render events
    function renderEvents(filter = 'upcoming') {
        eventsContainer.innerHTML = '';
        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            return filter === 'upcoming' ? eventDate >= currentDate : eventDate < currentDate;
        });

        filteredEvents.forEach((event, index) => {
            const eventCard = document.createElement('article');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title}" class="event-image" loading="lazy">
                <div class="event-content">
                    <span class="event-date">${new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-desc">${event.description}</p>
                </div>
            `;
            eventsContainer.appendChild(eventCard);

            // Staggered animation
            setTimeout(() => eventCard.classList.add('show'), index * 100);
        });
    }

    // Filter button event listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEvents(btn.dataset.filter);
        });
    });

    // Initial render
    renderEvents();

    // Intersection Observer for lazy loading and animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.event-card').forEach(card => observer.observe(card));
});
