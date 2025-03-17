// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/HeroSection.css'; // Ensure CSS is imported

// Import your 5 images
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
        interval={5000}
        pause="hover"
        keyboard={true}
        style={{ marginBottom: '2rem' }} // Height controlled by CSS
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%' }}
              ></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="content-overlay d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
        <div className="text-white text-center">
          <h1 className="hero-title mb-3">Touched Hearts</h1>
          <h4 className="mb-3">Transforming Lives in Uganda</h4>
          <NavLink
            to="/donate"
            className="btn btn-lg"
            style={{
              backgroundColor: '#d68c45',
              borderColor: '#d68c45',
              color: '#ffffff',
              fontWeight: 'bold',
              marginTop: '1rem',
              display: 'inline-block'
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