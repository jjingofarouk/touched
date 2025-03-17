// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../styles/HeroSection.css'; // Custom CSS

// Import your 5 images (ensure paths are correct)
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import photo4 from '../assets/images/photo4.jpg';
import photo5 from '../assets/images/photo5.jpg';

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4, photo5];

  return (
    <header className="hero-header">
      <Carousel
        controls={true}
        indicators={true}
        interval={5000}
        pause="hover"
        keyboard={true}
        className="hero-carousel"
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-image"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="hero-mask"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-overlay d-flex justify-content-center align-items-center">
        <div className="hero-content">
          <h1 className="hero-title">Touched Hearts</h1>
          <h4 className="hero-subtitle">Transforming Lives in Uganda</h4>
          <NavLink
            to="/donate"
            className="hero-button"
            style={{
              backgroundColor: '#d68c45',
              borderColor: '#d68c45'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#b87339';
              e.target.style.borderColor = '#b87339';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#d68c45';
              e.target.style.borderColor = '#d68c45';
            }}
            role="button"
            aria-label="Donate Now to Support Our Cause"
          >
            Donate Now
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;