// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImage from '../assets/images/home.jpg';

const HeroSection = () => {
  return (
    <header style={{ paddingLeft: 0, marginTop: 0 }}>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${homeImage})`,
          height: 400,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginBottom: '2rem' // Adds space below the hero section
        }}
      >
        <div 
          className="mask" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: '100%'
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
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
              >
                Donate Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;