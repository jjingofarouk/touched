// src/pages/Healthcare.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImpactCards from '../components/ImpactCards';
import '../styles/Healthcare.css';
import headerImage from './reports-header.png';

// Theme variables consistent with Education component
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

const Healthcare = () => {
  const [activeProgram, setActiveProgram] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const programRefs = useRef([]);
  const statRefs = useRef([]);
  const caseRefs = useRef([]);

  // Impact statistics
  const impactData = [
    { number: '5,000+', label: 'Patients Treated (2024)' },
    { number: '4', label: 'Rural Communities Served' },
    { number: '45%', label: 'Vaccination Rate Achieved' },
    { number: '150', label: 'Safe Births Facilitated' },
  ];

  // Program data
  const programs = [
    {
      title: 'Mobile Medical Outreach',
      description:
        'Our mobile clinics deliver primary healthcare to remote Ugandan communities, offering consultations, treatments, and medications. In 2024, we reached over 12,000 patients across 15 villages in Karamoja.',
      image: '/assets/images/mobile-clinic.png',
      alt: 'Mobile clinic in rural Karamoja',
    },
    {
      title: 'Maternal and Child Health',
      description:
        'We support safe births through training, birthing kits, and maternal waiting homes. In Mubende, our program reduced maternal mortality by 45% since 2022, facilitating over 1,200 safe deliveries in 2024.',
      image: '/assets/images/maternal-health.png',
      alt: 'Maternal health support',
    },
    {
      title: 'Disease Prevention and Vaccination',
      description:
        'Our vaccination campaigns target diseases like measles and polio, alongside malaria prevention. In Katete parish, we achieved a 65% immunization rate and distributed 1,000 mosquito nets in 2023-2024.',
      image: '/assets/images/vaccination.png',
      alt: 'Vaccination campaign',
    },
    {
      title: 'Health Education and Training',
      description:
        'We train community health workers and educate on nutrition, hygiene, and disease prevention. In Mbarara, our "Healthy Villages" initiative trained 20 volunteers in 2024 to serve as local health educators.',
      image: '/assets/images/health-education.png',
      alt: 'Health education session',
    },
    {
      title: 'HIV/AIDS Support and Testing',
      description:
        'We provide confidential HIV testing, counseling, and support. In Kampala’s informal settlements, our mobile units screened over 500 individuals in 2024, with a 70% retention rate in treatment programs.',
      image: '/assets/images/hiv-support.png',
      alt: 'HIV testing and support',
    },
  ];

  // Case studies
  const caseStudies = [
    {
      title: 'Maria Namukasa - Mubende',
      description:
        'Maria, pregnant with her third child, faced complications but received timely care at our maternal waiting home. Today, she and her baby boy are healthy and thriving.',
      image: '/assets/images/maria.png',
      alt: 'Maria with her healthy baby',
    },
    {
      title: 'Brenda Ochieng - Soroti',
      description:
        'Brenda, 16, overcame recurring malaria after receiving mosquito nets. Now malaria-free for six months, she excels in school, and her family engages in our health education programs.',
      image: '/assets/images/mosquito-net.png',
      alt: 'Brenda with her mosquito net',
    },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll animation for programs and case studies
  useEffect(() => {
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

    [...programRefs.current, ...caseRefs.current].forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translateY(20px)';
        ref.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Stat counter animation
  useEffect(() => {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stat = entry.target;
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, '')) || parseInt(stat.textContent);
            let count = 0;
            const increment = target / 50;
            const hasPlus = stat.textContent.includes('+');
            const hasPercent = stat.textContent.includes('%');

            const updateCount = () => {
              count += increment;
              if (count >= target) {
                stat.textContent = hasPlus
                  ? `${target.toLocaleString()}+`
                  : hasPercent
                  ? `${target}%`
                  : target.toLocaleString();
              } else {
                stat.textContent = Math.ceil(count).toLocaleString() + (hasPlus ? '+' : hasPercent ? '%' : '');
                requestAnimationFrame(updateCount);
              }
            };
            requestAnimationFrame(updateCount);
            statObserver.unobserve(stat);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((ref) => {
      if (ref) statObserver.observe(ref);
    });

    return () => statObserver.disconnect();
  }, []);

  // Responsive styles
  const responsiveStyles = {
    pageHeader: windowWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : {},
    programsGrid: windowWidth <= 768 ? { gridTemplateColumns: '1fr' } : { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' },
    programImage: windowWidth <= 768 ? { height: '180px' } : { height: '220px' },
    caseGrid: windowWidth <= 768 ? { gridTemplateColumns: '1fr' } : { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' },
  };

  return (
    <div className="healthcare-page">
      <Navbar />
      {/* Header Section */}
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
            Healthcare Initiatives
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
            Delivering quality healthcare to Uganda’s underserved communities. Since 2021, we’ve provided medical services, preventive care, and education to those in need.
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

      {/* Healthcare Section */}
      <section className="healthcare-section">
        <div
          className="healthcare-intro"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
            textAlign: 'center',
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
            Our Commitment to Healthcare
          </h2>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.darkGray,
              lineHeight: 1.6,
            }}
          >
            At Touched Hearts, we believe quality healthcare is a fundamental right. Since 2021, we’ve addressed healthcare challenges in Uganda’s vulnerable communities through mobile clinics, maternal care, vaccinations, and education, creating sustainable solutions with lasting impact.
          </p>
        </div>

        <h2
          style={{
            fontFamily: theme.fontHeading,
            fontSize: theme.h2Size,
            color: theme.dark,
            textAlign: 'center',
            margin: `${theme.spacingMd} 0`,
          }}
        >
          Our Programs
        </h2>
        <div
          className="programs-container"
          style={{
            display: 'grid',
            gap: theme.spacingMd,
            ...responsiveStyles.programsGrid,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
          }}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card"
              ref={(el) => (programRefs.current[index] = el)}
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
                  src={program.image}
                  alt={program.alt}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderBottom: `2px solid ${theme.primaryLight}`,
                    ...responsiveStyles.programImage,
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
                  {program.title}
                </h3>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.bodySize,
                    color: theme.darkGray,
                    lineHeight: 1.6,
                  }}
                >
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2
          style={{
            fontFamily: theme.fontHeading,
            fontSize: theme.h2Size,
            color: theme.dark,
            textAlign: 'center',
            margin: `${theme.spacingMd} 0`,
          }}
        >
          Our Impact
        </h2>
        <ImpactCards data={impactData} />
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <h2
          style={{
            fontFamily: theme.fontHeading,
            fontSize: theme.h2Size,
            color: theme.dark,
            textAlign: 'center',
            margin: `${theme.spacingMd} 0`,
          }}
        >
          Stories of Health Transformation
        </h2>
        <div
          className="case-container"
          style={{
            display: 'grid',
            gap: theme.spacingMd,
            ...responsiveStyles.caseGrid,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="case-card"
              ref={(el) => (caseRefs.current[index] = el)}
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
                  src={caseStudy.image}
                  alt={caseStudy.alt}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderBottom: `2px solid ${theme.primaryLight}`,
                    ...responsiveStyles.programImage,
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
                  {caseStudy.title}
                </h3>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.bodySize,
                    color: theme.darkGray,
                    lineHeight: 1.6,
                  }}
                >
                  {caseStudy.description}
                </p>
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
            Join Us in Transforming Healthcare
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
            Your support can bring vital healthcare to Uganda’s underserved communities. Partner with us or donate to make a lasting