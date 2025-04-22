import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/get-involved.css';
import VolunteerForm from '../components/VolunteerForm';
import Partners from '../components/Partners';
import Fundraise from './Fundraise';
import DonationWidget from '../components/DonationWidget';
import headerImage from './reports-header.jpg'; // Add a relevant header image

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
          <h1
            style={{
              fontFamily: theme.fontHeading,
              fontSize: theme.h1Size,
              margin: `0 0 ${theme.spacingSm}`,
              color: theme.white,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Get Involved
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
              to="/get-involved"
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
              Get Involved
            </Link>
            <Link
              to="/donate"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: 'transparent',
                color: theme.white,
                border: `2px solid ${theme.white}`,
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Donate Now
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
            }}
          >
            At Touched Hearts, we believe that every individual has the power to create change. Whether you're passionate
            about education, healthcare, disability support, or community development, your involvement helps us reach
            more people and transform lives.
          </p>
        </section>

        <section className="involve-section volunteer">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.primaryDark }}>
            Volunteer with Us
          </h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
            Volunteering with Touched Hearts is a rewarding way to make a direct impact.
          </p>
          <h3 style={{ fontFamily: theme.fontHeading, fontSize: theme.h3Size, color: theme.primaryDark }}>
            Opportunities Include:
          </h3>
          <ul
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.darkGray,
              lineHeight: 1.6,
              paddingLeft: '1.5rem',
            }}
          >
            <li>
              <strong>Education Support:</strong> Tutor students or assist with school supply drives.
            </li>
            <li>
              <strong>Healthcare Outreach:</strong> Help with mobile clinics or health education workshops.
            </li>
            <li>
              <strong>Community Building:</strong> Participate in construction projects or skill-building programs.
            </li>
            <li>
              <strong>Event Support:</strong> Organize or assist at fundraising and awareness events.
            </li>
          </ul>
          <VolunteerForm />
        </section>

        <section className="involve-section donate">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.primaryDark }}>
            Make a Donation
          </h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
            Your financial support fuels our programs and allows us to reach more individuals in need.
          </p>
          <Link
            to="/donate"
            style={{
              display: 'inline-block',
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
              margin: `${theme.spacingSm} 0`,
            }}
          >
            Donate Now
          </Link>
          <DonationWidget />
        </section>

        <section className="involve-section fundraise">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.primaryDark }}>
            Start a Fundraiser
          </h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
            Turn your passion into action by organizing a fundraising campaign for Touched Hearts.
          </p>
          <a
            href="/fundraising-guide.pdf"
            download
            style={{
              display: 'inline-block',
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
              margin: `${theme.spacingSm} 0`,
            }}
          >
            Download Fundraising Guide
          </a>
          <Fundraise />
        </section>

        <section className="involve-section partner">
          <h2 style={{ fontFamily: theme.fontHeading, fontSize: theme.h2Size, color: theme.primaryDark }}>
            Become a Partner
          </h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: theme.bodySize, color: theme.darkGray, lineHeight: 1.6 }}>
            We collaborate with businesses, organizations, and institutions to amplify our impact.
          </p>
          <a
            href="mailto:touchedheartsug12@gmail.com"
            style={{
              display: 'inline-block',
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
              margin: `${theme.spacingSm} 0`,
            }}
          >
            Contact Us
          </a>
          <Partners />
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;