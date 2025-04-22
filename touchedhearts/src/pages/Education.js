import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImpactCards from '../components/ImpactCards'; // For impact stats
import '../styles/Education.css'; // Component-specific styles
import headerImage from './reports-header.png'; // Header background image

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

const Education = () => {
  const initiativeRefs = useRef([]);
  const statRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Impact statistics
  const impactData = [
    { number: '10,000+', label: 'Children Facilitated' },
    { number: '5+', label: 'Schools Visited' },
    { number: '150+', label: 'Teachers Trained' },
    { number: '200+', label: 'Adults Trained' },
  ];

  // Initiative data
  const initiatives = [
    {
      title: 'Scholarships Program',
      description:
        'We offer scholarships to children from low-income families, covering tuition, uniforms, and learning materials. In 2024, we supported over 47 students across Uganda to ensure financial barriers don’t stand in the way of their education.',
      image: '/assets/images/scholarships.png',
      alt: 'Students receiving scholarships',
    },
    {
      title: 'School Infrastructure',
      description:
        'We renovate schools in rural areas to create safe and conducive learning environments. Our projects include renovating classrooms and sanitation facilities to benefit thousands of students and teachers annually.',
      image: '/assets/images/school-building.png',
      alt: 'New school construction',
    },
    {
      title: 'Teacher Training',
      description:
        'We empower educators through professional development workshops to enhance teaching quality. Topics include modern pedagogy, inclusive education, and child psychology. We have impacted over 130 teachers since inception.',
      image: '/assets/images/teacher-training.png',
      alt: 'Teacher training session',
    },
    {
      title: 'Adult Literacy Programs',
      description:
        'We extend education to adults by offering literacy and numeracy classes to parents and community members. This strengthens family support for children’s learning and fosters community development.',
      image: '/assets/images/adult-literacy.png',
      alt: 'Adult literacy class',
    },
  ];

  // Handle window resize for responsive styles
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll Animation for Initiative Cards
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

    initiativeRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translateY(20px)';
        ref.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Stat Counter Animation
  useEffect(() => {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stat = entry.target;
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            let count = 0;
            const increment = target / 50; // Animation speed
            const hasPlus = stat.textContent.includes('+');

            const updateCount = () => {
              count += increment;
              if (count >= target) {
                stat.textContent = hasPlus ? `${target.toLocaleString()}+` : target.toLocaleString();
              } else {
                stat.textContent = Math.ceil(count).toLocaleString() + (hasPlus ? '+' : '');
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
    initiativesGrid: windowWidth <= 768 ? { gridTemplateColumns: '1fr' } : { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' },
    initiativeImage: windowWidth <= 768 ? { height: '180px' } : { height: '220px' },
  };

  return (
    <div className="education-page">
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
          paddingTop: '80px',
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
            Education Initiatives
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
            Empowering Uganda’s future through transformative education. Since 2010, we’ve worked to break down barriers to learning, ensuring every child has access to quality education.
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

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div
          className="education-intro"
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
            Our Commitment to Education
          </h2>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.darkGray,
              lineHeight: 1.6,
            }}
          >
            At Touched Hearts, we believe education is the cornerstone of a thriving community. Since 2010, we’ve worked tirelessly to break down barriers to learning for Uganda’s most vulnerable children. From providing scholarships to building schools, our initiatives aim to ensure every child has access to quality education, equipping them with the skills and knowledge to build a brighter future.
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
          What We Do
        </h2>
        <div
          className="initiatives-container"
          style={{
            display: 'grid',
            gap: theme.spacingMd,
            ...responsiveStyles.initiativesGrid,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${theme.spacingMd} ${theme.spacingSm}`,
          }}
        >
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="initiative-card"
              ref={(el) => (initiativeRefs.current[index] = el)}
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
                  src={initiative.image}
                  alt={initiative.alt}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderBottom: `2px solid ${theme.primaryLight}`,
                    ...responsiveStyles.initiativeImage,
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
                  {initiative.title}
                </h3>
                <p
                  style={{
                    fontFamily: theme.fontBody,
                    fontSize: theme.bodySize,
                    color: theme.darkGray,
                    lineHeight: 1.6,
                  }}
                >
                  {initiative.description}
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
            Join Us in Educating Uganda
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
            Your support can help us reach more children and communities. Partner with us or donate to make a lasting impact.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: theme.spacingSm, flexWrap: 'wrap' }}>
            <Link
              to="/get-involved"
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
            </Link>
            <Link
              to="/donate"
              className="cta-button"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: 'transparent',
                color: theme.dark,
                border: `2px solid ${theme.secondaryColor}`,
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

    </div>
  );
};

export default Education;