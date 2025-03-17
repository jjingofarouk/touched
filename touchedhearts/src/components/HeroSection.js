import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImage from '../assets/images/home.jpg';

const HeroSection = () => {
  return (
    <section className="hero" role="banner" aria-label="Hero section with mission statement">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">Transforming Lives in Uganda</h1>
          <p className="hero-subtitle">
            Supporting persons with disabilities, children, and vulnerable communities with
            compassion and hope.
          </p>
          <div className="hero-cta">
            <NavLink to="/donate" className="cta-button primary" role="button">
              Donate Now
            </NavLink>
            <NavLink to="/get-involved" className="cta-button secondary" role="button">
              Get Involved
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-container">
          <img 
            src={homeImage} 
            alt="Children smiling in Uganda" 
            className="hero-image" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;