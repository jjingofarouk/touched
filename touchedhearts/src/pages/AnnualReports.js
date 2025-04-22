import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/annual-reports.css'; // Assuming a similar CSS file for styling
import headerImage from './reports-header.png';

// Define theme variables consistent with the Community component
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [reports, setReports] = useState([]);
  const [latestReport, setLatestReport] = useState(null);

  // Reports data
  const reportsData = [
    {
      id: 1,
      title: 'Hope After Floods Project 2025',
      description: 'Extended relief to Kawempe flood victims.',
      imageUrl: '/assets/images/reports/kawempe.jpg',
      googleDriveLink: 'https://drive.google.com/file/d/1zILWKhZ8Kzc3w2WGhsMfImY2MRTy0TOl/view?usp=drivesdk',
      projectDate: '2025-04-03',
      relatedDetails: 'Provided relief for victims of floods that swept through Kawempe Division on April 3, 2025.',
    },
    {
      id: 2,
      title: 'Scholarship Program 2024',
      description: 'Provided scholarships and resources to 20 students.',
      imageUrl: '/assets/images/reports/scholarships.png',
      googleDriveLink: 'https://drive.google.com/file/d/1zILWKhZ8Kzc3w2WGhsMfImY2MRTy0TOl/view?usp=drivesdk',
      projectDate: '2023-09-01',
      relatedDetails: 'Collaborated with Rines Secondary School Scholarship Trust.',
    },
  ];

  useEffect(() => {
    // Sort and set reports
    const sortedReports = reportsData.sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate));
    setReports(sortedReports);
    setLatestReport(sortedReports[0]);

    // Handle window resize for responsive styles
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.report-card').forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive styles
  const responsiveStyles = {
    pageHeader: windowWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : {},
    reportsGrid: windowWidth <= 768 ? { gridTemplateColumns: '1fr' } : { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' },
    reportImage: windowWidth <= 768 ? { height: '180px' } : { height: '220px' },
  };

  return (
    <div className="annual-reports-page">

      {/* Enhanced Header Section */}
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
            Annual Reports & Impact Documentation
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
            Explore our comprehensive collection of annual reports documenting our community projects, their outcomes, and the lasting positive impact we've made together.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: theme.spacingSm,
              flexWrap: 'wrap',
            }}
          >
            <a
              href={latestReport?.googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
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
              Latest Report
            </a>
            <a
              href="/reports-archive"
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
              View Archive
            </a>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports-section">
        <h2>Our Annual Reports</h2>
        <div
          className="reports-container"
          style={{
            display: 'grid',
            gap: theme.spacingMd,
            ...responsiveStyles.reportsGrid,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
          }}
        >
          {reports.map((report) => (
            <div
              key={report.id}
              className="report-card"
              style={{
                backgroundColor: theme.white,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className="image-placeholder">
                <img
                  src={report.imageUrl}
                  alt={`${report.title} preview`}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderBottom: `2px solid ${theme.primaryLight}`,
                    ...responsiveStyles.reportImage,
                  }}
                />
              </div>
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
                  <strong style={{ color: theme.dark }}>Completed:</strong>{' '}
                  {new Date(report.projectDate).toLocaleDateString()}
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
                  }}
                >
                  View Full Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div
          className="cta-container"
          style={{
            textAlign: 'center',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: theme.fontHeading,
              fontSize: theme.h2Size,
              color: theme.dark,
              margin: `0 0 ${theme.spacingSm}`,
            }}
          >
            Support Our Mission
          </h2>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.darkGray,
              margin: `0 0 ${theme.spacingMd}`,
              lineHeight: 1.6,
            }}
          >
            Your support helps us continue documenting and expanding our impact. Whether through donations, volunteering, or sharing our reports, every action counts.
          </p>
          <a
            href="/get-involved"
            className="cta-button"
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
          </a>
        </div>
      </section>


    </div>
  );
};

export default AnnualReports;