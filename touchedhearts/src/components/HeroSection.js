// src/components/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImage from '../assets/images/home.jpg';

const HeroSection = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${homeImage})`,
          height: 400,
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
        >
          <div 
            className="d-flex justify-content-center align-items-center h-100"
          >
            <div className="text-white text-center">
              <h1 
                className="hero-title mb-3"
                style={{ 
                  color: '#ffffff',
                  fontSize: '2.5rem'
                }}
              >
                Transforming Lives in Uganda
              </h1>
              <NavLink
                to="/donate"
                className="btn btn-lg"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#d68c45', // secondary-color
                  color: '#d68c45',
                  marginTop: '1rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#d68c45';
                  e.target.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#d68c45';
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