// src/components/ContactForm.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactForm = ({ title = 'Stay Connected', text = 'Subscribe to our newsletter to receive updates on our projects, success stories, and upcoming events.', action = 'subscribe.php', method = 'post' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted:', new FormData(e.target));
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-container">
        <h2 id="newsletter-title" className="section-title">{title}</h2>
        <p className="newsletter-text">{text}</p>
        <form className="newsletter-form" action={action} method={method} onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <button type="submit" className="cta-button primary">Subscribe</button>
          </div>
          <label className="checkbox-container">
            <input type="checkbox" name="consent" required />
            <span className="checkbox-label">
              I agree to receive communications from Touched Hearts. View our{' '}
              <NavLink to="/privacy">Privacy Policy</NavLink>.
            </span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;