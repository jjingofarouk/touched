// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import your 5 images (ensure these paths are correct)
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import photo4 from '../assets/images/photo4.jpg';
import photo5 from '../assets/images/photo5.jpg';

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4, photo5];

  return (
    <header style={{ paddingLeft: 0, marginTop: 0, position: 'relative' }}>
      <Carousel
        controls={true}
        indicators={true}
        interval={5000} // 5 seconds per slide
        pause="hover" // Pauses on hover
        keyboard={true} // Adds keyboard navigation
        style={{ marginBottom: '2rem', height: '400px' }} // Explicit height
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${image})`,
                height: '400px', // Explicit pixels
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="mask"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  height: '100%'
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Static content overlay */}
      <div
        className="content-overlay d-flex justify-content-center align-items-center"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '400px', // Matches carousel height
          zIndex: 2 // Higher than carousel default
        }}
      >
        <div className="text-white text-center">
          <h1
            className="hero-title mb-3"
            style={{
              color: '#ffffff',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}
          >
            Touched Hearts
          </h1>
          <h4
            className="mb-3"
            style={{
              color: '#ffffff',
              fontSize: '1.25rem'
            }}
          >
            Transforming Lives in Uganda
          </h4>
          <NavLink
            to="/donate"
            className="btn btn-lg"
            style={{
              backgroundColor: '#d68c45', // secondary-color
              borderColor: '#d68c45',
              color: '#ffffff',
              fontWeight: 'bold',
              padding: '12px 30px',
              marginTop: '1rem',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#b87339'; // secondary-dark
              e.target.style.borderColor = '#b87339';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#d68c45';
              e.target.style.borderColor = '#d68c45';
            }}
            role="button"
            aria-label="Donate Now to Support Our Cause" // Accessibility
          >
            Donate Now
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;