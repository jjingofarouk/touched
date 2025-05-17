// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/not-found.css';

const theme = {
  primaryColor: '#3a8f85',
  primaryDark: '#2c7269',
  secondaryColor: '#d68c45',
  dark: '#2d3a3a',
  darkGray: '#4d5c5c',
  offWhite: '#f8f7f5',
  white: '#ffffff',
  fontHeading: "'Lora', serif",
  fontBody: "'Poppins', sans-serif",
  h1Size: 'clamp(2.5rem, 5vw, 3.5rem)',
  h2Size: 'clamp(1.75rem, 4vw, 2.5rem)',
  bodySize: 'clamp(1rem, 2vw, 1.125rem)',
  spacingSm: '1rem',
  spacingMd: '2rem',
};

const NotFound = () => {
  return (
    <div className="not-found-page">
      <section
        style={{
          textAlign: 'center',
          padding: `${theme.spacingMd} ${theme.spacingSm}`,
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontFamily: theme.fontHeading, fontSize: theme.h1Size, color: theme.dark }}>
          404 - Page Not Found
        </h1>
        <p
          style={{
            fontFamily: theme.fontBody,
            fontSize: theme.bodySize,
            color: theme.darkGray,
            margin: `${theme.spacingSm} 0`,
            maxWidth: '600px',
          }}
        >
          Sorry, the page you're looking for doesn't exist. Let's get you back to making a difference!
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: `${theme.spacingSm} ${theme.spacingMd}`,
            backgroundColor: theme.primaryColor,
            color: theme.white,
            borderRadius: '6px',
            fontFamily: theme.fontBody,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
        >
          Return to Home
        </Link>
      </section>
    </div>
  );
};

export default NotFound;