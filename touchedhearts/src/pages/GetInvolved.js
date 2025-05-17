// pages/GetInvolved.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/get-involved.css';
import headerImage from './reports-header.png';

const theme = {
  primaryColor: '#3a8f85',
  primaryDark: '#2c7269',
  primaryLight: '#8cc5bf',
  secondaryColor: '#d68c45',
  secondaryDark: '#b87339',
  secondaryLight: '#e9b384',
  dark: '#2d3a3a',
  darkGray: '#4d5c5c',
  mediumGray: '#7e8c8c',
  lightGray: '#d2d8d8',
  offWhite: '#f8f7f5',
  white: '#ffffff',
  success: '#739e73',
  warning: '#e6b86a',
  error: '#c17b7b',
  info: '#6a91ab',
  fontHeading: "'Lora', serif",
  fontBody: "'Poppins', sans-serif",
  h1Size: 'clamp(2.5rem, 5vw, 3.5rem)',
  h2Size: 'clamp(1.75rem, 4vw, 2.5rem)',
  h3Size: 'clamp(1.25rem, 3vw, 1.75rem)',
  bodySize: 'clamp(1rem, 2vw, 1.125rem)',
  smallText: 'clamp(0.875rem, 1.5vw, 1rem)',
  spacingXs: '0.5rem',
  spacingSm: '1rem',
  spacingMd: '2rem',
  spacingLg: '4rem',
  spacingXl: '6rem',
};

const GetInvolved = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsiveStyles = {
    pageHeader: windowWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : {},
  };

  return (
    <div className="get-involved-page">
      <section
        role="banner"
        style={{
          textAlign: 'center',
          padding: `${theme.spacingXl} ${theme.spacingSm}`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: theme.white,
          paddingTop: '80px',
          position: 'relative',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...responsiveStyles.pageHeader,
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: theme.fontHeading, fontSize: theme.h1Size, color: theme.white }}>
            Get Involved with Touched Hearts
          </h1>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.offWhite,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              marginBottom: theme.spacingMd,
            }}
          >
            Join us in making a lasting impact on communities in Uganda through volunteering, donating, fundraising, or partnering with Touched Hearts.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: theme.spacingSm,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/volunteers"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: theme.secondaryColor,
                color: theme.white,
                border: 'none',
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: theme.secondaryColor,
                color: theme.white,
                border: 'none',
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              Donate Now
            </Link>
            <Link
              to="/fundraise"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: theme.secondaryColor,
                color: theme.white,
                border: 'none',
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              Fundraise
            </Link>
            <Link
              to="/partners"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: theme.secondaryColor,
                color: theme.white,
                border: 'none',
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              Partner
            </Link>
          </div>
        </div>
      </section>

      <div className="get-involved-container">
        <section className="involve-section intro">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.dark, textAlign: 'center' }}>
            Why Get Involved?
          </h2>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.darkGray,
              lineHeight: 1.6,
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            At Touched Hearts, we believe every individual can drive change. Your involvement in our programs—whether through time, resources, or partnerships—helps us empower communities in Uganda with education, healthcare, disability support, and sustainable development.
          </p>
        </section>

        <section className="involve-section options">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.dark, textAlign: 'center' }}>
            Ways to Make a Difference
          </h2>
          <div className="options-grid">
            <div className="option-card">
              <h3 style={{ fontFamily: theme.fontHeading, fontSize: theme.h3Size, color: theme.primaryDark }}>
                Volunteer
              </h3>
              <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
                Contribute your skills and time to support education, healthcare, or community projects.
              </p>
              <Link
                to="/volunteers"
                style={{
                  display: 'inline-block',
                  padding: `${theme.spacingXs} ${theme.spacingMd}`,
                  backgroundColor: theme.primaryColor,
                  color: theme.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: theme.fontBody,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  marginTop: theme.spacingSm,
                }}
              >
                Learn More
              </Link>
            </div>
            <div className="option-card">
              <h3 style={{ fontFamily: theme.fontHeading, fontSize: theme.h3Size, color: theme.primaryDark }}>
                Donate
              </h3>
              <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
                Your financial support fuels our programs, reaching more individuals in need.
              </p>
              <Link
                to="/donate"
                style={{
                  display: 'inline-block',
                  padding: `${theme.spacingXs} ${theme.spacingMd}`,
                  backgroundColor: theme.primaryColor,
                  color: theme.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: theme.fontBody,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  marginTop: theme.spacingSm,
                }}
              >
                Learn More
              </Link>
            </div>
            <div className="option-card">
              <h3 style={{ fontFamily: theme.fontHeading, fontSize: theme.h3Size, color: theme.primaryDark }}>
                Fundraise
              </h3>
              <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
                Organize a campaign to rally support and resources for our mission.
              </p>
              <Link
                to="/fundraise"
                style={{
                  display: 'inline-block',
                  padding: `${theme.spacingXs} ${theme.spacingMd}`,
                  backgroundColor: theme.primaryColor,
                  color: theme.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: theme.fontBody,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  marginTop: theme.spacingSm,
                }}
              >
                Learn More
              </Link>
            </div>
            <div className="option-card">
              <h3 style={{ fontFamily: theme.fontHeading, fontSize: theme.h3Size, color: theme.primaryDark }}>
                Partner
              </h3>
              <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
                Collaborate with us to amplify our impact through shared goals and resources.
              </p>
              <Link
                to="/partners"
                style={{
                  display: 'inline-block',
                  padding: `${theme.spacingXs} ${theme.spacingMd}`,
                  backgroundColor: theme.primaryColor,
                  color: theme.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: theme.fontBody,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  marginTop: theme.spacingSm,
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;