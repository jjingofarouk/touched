import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HeroSection.css';

// Import optimized WebP images
import photo1 from '../assets/images/photo1-1920.webp';
import photo2 from '../assets/images/photo2-1920.webp';
import photo3 from '../assets/images/photo3-1920.webp';
import photo4 from '../assets/images/photo4-1920.webp';
import photo5 from '../assets/images/photo5-1920.webp';

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4, photo5];

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = images[0]; // Preload first image
  }, []);

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
            <img
              src={image}
              srcSet={`
                ${image.replace('1920', '1200')} 1200w,
                ${image} 1920w
              `}
              sizes="(max-width: 1200px) 1200px, 1920px"
              alt={`Slide ${index + 1}`}
              className="hero-image"
              loading="lazy"
            />
            <div className="hero-mask"></div>
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