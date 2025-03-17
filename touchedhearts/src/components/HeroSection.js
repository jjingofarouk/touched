// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeImageDesktop from '../assets/images/home-desktop.jpg'; // Larger image for desktop
import homeImageMobile from '../assets/images/home-mobile.jpg'; // Optimized for mobile
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to toggle mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero" role="banner">
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
      <div className="hero-image-container">
        <img
          src={isMobile ? homeImageMobile : homeImageDesktop}
          alt="Children smiling in Uganda"
          className="hero-image"
          loading="lazy" // Improve performance
        />
      </div>
    </section>
  );
};

export default HeroSection;