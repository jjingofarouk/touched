// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImage from '../assets/images/home.jpg';

const HeroSection = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-content">
        <h1 className="hero-title">Transforming Lives in Uganda</h1>
        <p className="hero-subtitle">
          Supporting persons with disabilities, children, and vulnerable communities with
          compassion and hope.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={homeImage} alt="Children smiling in Uganda" className="hero-image" />
      </div>
      <div className="hero-cta">
          <NavLink to="/donate" className="cta-button primary" role="button">
            Donate Now
          </NavLink>
          <NavLink to="/get-involved" className="cta-button secondary" role="button">
            Get Involved
          </NavLink>
        </div>
    </section>
  );
};

export default HeroSection;