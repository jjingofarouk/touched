import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImage from '../assets/images/D1.jpg';
import educationSupportImage from '../assets/images/C3.jpg';
import healthcareSupportImage from '../assets/images/H50.jpg';
import womenEmpowermentImage from '../assets/images/C5.jpg';

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

const About = () => {
  const responsiveStyles = {
    aboutContent: window.innerWidth <= 768 ? { flexDirection: 'column', padding: theme.spacingMd } : { flexDirection: 'row' },
    aboutImage: window.innerWidth <= 768 ? { width: '100%', height: 'auto' } : { width: '50%' },
    existContainer: window.innerWidth <= 768 ? { gridTemplateColumns: '1fr' } : { gridTemplateColumns: 'repeat(3, 1fr)' },
    sectionPadding: window.innerWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : { padding: `${theme.spacingLg} ${theme.spacingSm}` },
  };

  return (
    <main >
      {/* Page Header */}
      <section
        role="banner"
        style={{
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: theme.white,
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...responsiveStyles.sectionPadding,
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
            About Touched Hearts
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
            Learn about our mission, vision, and the impactful work we do to uplift Uganda’s most vulnerable communities.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        aria-labelledby="our-story"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          ...responsiveStyles.sectionPadding,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: theme.spacingMd,
            alignItems: 'center',
            ...responsiveStyles.aboutContent,
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              id="our-story"
              style={{
                fontFamily: theme.fontHeading,
                fontSize: theme.h2Size,
                color: theme.primaryDark,
                marginBottom: theme.spacingSm,
              }}
            >
              Our Story
            </h2>
            <p
              style={{
                fontFamily: theme.fontBody,
                fontSize: theme.bodySize,
                color: theme.darkGray,
                lineHeight: 1.6,
                marginBottom: theme.spacingMd,
              }}
            >
              Touched Hearts was founded in 2020 with a mission to support Uganda’s most vulnerable communities, including children, women, and persons with disabilities. Our journey began with a small group of passionate medical students dedicated to making a difference in Kabale District. Today, we have impacted thousands of Ugandans through education, healthcare, and empowerment programs.
            </p>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: theme.h2Size,
                color: theme.primaryDark,
                marginBottom: theme.spacingSm,
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontFamily: theme.fontBody,
                fontSize: theme.bodySize,
                color: theme.darkGray,
                lineHeight: 1.6,
                marginBottom: theme.spacingMd,
              }}
            >
              We strive to uplift underprivileged individuals by providing access to basic needs, education, and development opportunities for a decent life.
            </p>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: theme.h2Size,
                color: theme.primaryDark,
                marginBottom: theme.spacingSm,
              }}
            >
              Our Vision
            </h2>
            <p
              style={{
                fontFamily: theme.fontBody,
                fontSize: theme.bodySize,
                color: theme.darkGray,
                lineHeight: 1.6,
              }}
            >
              We envision a future where every vulnerable person in Uganda has access to a dignified life.
            </p>
          </div>
          <figure style={{ flex: 1, margin: 0 }}>
            <img
              src={aboutImage}
              alt="Touched Hearts team working with community in Uganda"
              style={{
                width: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                ...responsiveStyles.aboutImage,
              }}
            />
            <figcaption style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)' }}>
              Touched Hearts in action supporting Uganda's communities
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section
        aria-labelledby="why-we-exist-heading"
        style={{
          backgroundColor: theme.offWhite,
          ...responsiveStyles.sectionPadding,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            id="why-we-exist-heading"
            style={{
              fontFamily: theme.fontHeading,
              fontSize: theme.h2Size,
              color: theme.primaryDark,
              textAlign: 'center',
              marginBottom: theme.spacingMd,
            }}
          >
            Why We Exist
          </h2>
          <div style={{ display: 'grid', gap: theme.spacingMd, ...responsiveStyles.existContainer }}>
            {[
              {
                image: educationSupportImage,
                title: 'Education for All',
                description: 'We provide scholarships and learning materials to children from low-income families.',
                alt: 'Children receiving education support',
              },
              {
                image: healthcareSupportImage,
                title: 'Healthcare Support',
                description: 'We offer free medical check-ups and ensure access to essential health services for people in remote areas.',
                alt: 'Healthcare professional assisting patient',
              },
              {
                image: womenEmpowermentImage,
                title: 'Women’s Empowerment',
                description: 'We equip women with vocational skills to help them achieve financial independence.',
                alt: 'Women in vocational training',
              },
            ].map((item, index) => (
              <article
                key={index}
                style={{
                  backgroundColor: theme.white,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    borderBottom: `2px solid ${theme.primaryLight}`,
                    ...responsiveStyles.aboutImage,
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
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: theme.fontBody,
                      fontSize: theme.bodySize,
                      color: theme.darkGray,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Teaser */}
      <section
        aria-labelledby="meet-team-heading"
        style={{
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          ...responsiveStyles.sectionPadding,
        }}
      >
        <h2
          id="meet-team-heading"
          style={{
            fontFamily: theme.fontHeading,
            fontSize: theme.h2Size,
            color: theme.primaryDark,
            marginBottom: theme.spacingSm,
          }}
        >
          Meet Our Team
        </h2>
        <p
          style={{
            fontFamily: theme.fontBody,
            fontSize: theme.bodySize,
            color: theme.darkGray,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            marginBottom: theme.spacingMd,
          }}
        >
          Behind Touched Hearts is a team of dedicated individuals committed to making a difference.
        </p>
        <NavLink
          to="/team"
          style={{
            display: 'inline-block',
            padding: `${theme.spacingXs} ${theme.spacingMd}`,
            backgroundColor: theme.secondaryColor,
            color: theme.white,
            fontFamily: theme.fontBody,
            fontSize: theme.bodySize,
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '6px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Meet the Team
        </NavLink>
      </section>
    </main>
  );
};

export default About;