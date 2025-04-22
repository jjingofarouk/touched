import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from './reports-header.png';

// Define theme variables
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

const AnnualReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchedReports = [
      {
        id: 1,
        title: 'Community Health Initiative 2023',
        description: 'Improved healthcare access for 500+ families in rural areas.',
        imageUrl: '/assets/images/reports/kawempe.jpg',
        googleDriveLink: 'https://drive.google.com/file/d/EXAMPLE_ID_2023/view',
        projectDate: 'December 2023',
        relatedDetails: 'Partnered with local clinics, funded by ABC Foundation.',
      },
      {
        id: 2,
        title: 'Education Program 2022',
        description: 'Provided scholarships and resources to 20 students.',
        imageUrl: '/assets/images/scholarships.png',
        googleDriveLink: 'https://drive.google.com/file/d/1zILWKhZ8Kzc3w2WGhsMfImY2MRTy0TOl/view?usp=drivesdk',
        projectDate: 'September 2023',
        relatedDetails: 'Collaborated with Rines Secondary School Scholarship Trust.',
      },
    ];
    setReports(fetchedReports);
  }, []);

  const responsiveStyles = {
    reportsGrid: window.innerWidth <= 768 ? { gridTemplateColumns: '1fr' } : {},
    pageHeader: window.innerWidth <= 768 
      ? { minHeight: '60vh', padding: `${theme.spacingMd} ${theme.spacingSm}` } 
      : { minHeight: '100vh' },
    reportImage: window.innerWidth <= 768 ? { height: '180px' } : {},
  };

  return (
    <div>

      {/* Hero Section */}
      <section
        role="banner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: `${theme.spacingLg} ${theme.spacingSm}`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: theme.white,
          position: 'relative',
          textAlign: 'center',
          ...responsiveStyles.pageHeader,
        }}
      >
        <h1
          style={{
            fontFamily: theme.fontHeading,
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            margin: `0 0 ${theme.spacingSm}`,
            color: theme.white,
            lineHeight: 1.2,
            maxWidth: '800px',
          }}
        >
          Annual Reports
        </h1>
        <p
          style={{
            fontFamily: theme.fontBody,
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: theme.offWhite,
            maxWidth: '700px',
            margin: `0 auto ${theme.spacingMd}`,
            lineHeight: 1.6,
          }}
        >
          Discover the impact of our projects and initiatives through our detailed annual reports.
        </p>
        <a
          href="#reports-section"
          style={{
            display: 'inline-block',
            padding: `${theme.spacingSm} ${theme.spacingMd}`,
            backgroundColor: theme.secondaryColor,
            color: theme.white,
            fontFamily: theme.fontBody,
            fontSize: theme.bodySize,
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            ':hover': {
              backgroundColor: theme.secondaryDark,
              transform: 'scale(1.05)',
            },
          }}
        >
          Explore Reports
        </a>
      </section>

      {/* Reports Section */}
      <section
        id="reports-section"
        aria-labelledby="reports-heading"
        style={{
          padding: `${theme.spacingMd} ${theme.spacingSm}`,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          id="reports-heading"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: 0,
          }}
        >
          Annual Reports
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: theme.spacingMd,
            ...responsiveStyles.reportsGrid,
          }}
        >
          {reports.map((report) => (
            <div
              key={report.id}
              style={{
                backgroundColor: theme.white,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition:엄: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <img
                src={report.imageUrl}
                alt={`${report.title} preview`}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderBottom: `2px solid ${theme.primaryLight}`,
                  ...responsiveStyles.reportImage,
                }}
              />
              <div style={{ padding: theme.spacingSm }}>
                <h3
                  style={{
                    fontFamily: theme.fontHeading,
                    fontSize: theme.h3Size,
                    color: theme.primaryDark,
                    margin: `0 0 ${theme.spacingXs}`,
                  }}
                >
                  {report.title}
                </h3>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.bodySize,
                    color: theme.darkGray,
                    margin: `0 0 ${theme.spacingSm}`,
                    lineHeight: 1.6,
                  }}
                >
                  {report.description}
                </p>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.smallText,
                    color: theme.mediumGray,
                    margin: `0 0 ${theme.spacingXs}`,
                  }}
                >
                  <strong style={{ color: theme.dark }}>Completed:</strong> {report.projectDate}
                </p>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.smallText,
                    color: theme.mediumGray,
                    margin: `0 0 ${theme.spacingXs}`,
                  }}
                >
                  <strong style={{ color: theme.dark }}>Details:</strong> {report.relatedDetails}
                </p>
                <a
                  href={report.googleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: `${theme.spacingXs} ${theme.spacingSm}`,
                    backgroundColor: theme.secondaryColor,
                    color: theme.white,
                    fontFamily: theme.fontBody,
                    fontSize: theme.smallText,
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s ease',
                    ':hover': {
                      backgroundColor: theme.secondaryDark,
                    },
                  }}
                >
                  View Full Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AnnualReports;