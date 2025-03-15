import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.css'; // Global styles
import '../styles/components.css'; // Component-specific styles

const Events = () => {
  const [filter, setFilter] = useState('upcoming');

  // Sample event data (replace with API call or actual data source in production)
  const eventsData = [
    {
      id: 1,
      title: 'Annual Charity Run',
      date: 'April 20, 2025',
      location: 'Kampala, Uganda',
      description: 'Join us for a 5K run to raise funds for education programs.',
      type: 'upcoming',
      image: '/assets/images/charity-run.jpg',
    },
    {
      id: 2,
      title: 'Community Health Camp',
      date: 'June 15, 2025',
      location: 'Gulu, Uganda',
      description: 'Free health check-ups and workshops for local communities.',
      type: 'upcoming',
      image: '/assets/images/health-camp.jpg',
    },
    {
      id: 3,
      title: 'School Renovation Fundraiser',
      date: 'December 10, 2024',
      location: 'Jinja, Uganda',
      description: 'A gala event that raised funds for school infrastructure.',
      type: 'past',
      image: '/assets/images/fundraiser.jpg',
    },
    {
      id: 4,
      title: 'Teacher Training Workshop',
      date: 'September 5, 2024',
      location: 'Mbale, Uganda',
      description: 'Empowering educators with modern teaching techniques.',
      type: 'past',
      image: '/assets/images/teacher-workshop.jpg',
    },
  ];

  const filteredEvents = eventsData.filter((event) => event.type === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="events-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header" role="banner">
        <h1>Our Events</h1>
      </section>

      {/* Events Section */}
      <section className="events-section" aria-labelledby="events-heading">
        <h2 id="events-heading" className="visually-hidden">Events</h2>
        <div className="events-filter">
          <button
            className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
            onClick={() => handleFilterChange('upcoming')}
            data-filter="upcoming"
          >
            Upcoming Events
          </button>
          <button
            className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
            onClick={() => handleFilterChange('past')}
            data-filter="past"
          >
            Past Events
          </button>
        </div>
        <div className="events-container">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No events available for this category.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;