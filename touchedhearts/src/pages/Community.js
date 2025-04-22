import React, { useEffect, useState } from 'react';
import ImpactCards from '../components/ImpactCards';
import '../styles/community.css';

// Import images
import judithStory from '../assets/images/nalem.jpg';
import communityHeaderImage from './reports-header.png'; // Add your header image path here

// Define theme variables like in the previous example
const theme = {
  // Primary color palette - Warm Teal/Sage
  primaryColor: '#3a8f85',
  primaryDark: '#2c7269',
  primaryLight: '#8cc5bf',
  secondaryColor: '#d68c45',
  secondaryDark: '#b87339',
  secondaryLight: '#e9b384',
  // Neutral colors - Warmer and more organic
  dark: '#2d3a3a',
  darkGray: '#4d5c5c',
  mediumGray: '#7e8c8c',
  lightGray: '#d2d8d8',
  offWhite: '#f8f7f5',
  white: '#ffffff',
  // Accent colors - More earthy and harmonious
  success: '#739e73',
  warning: '#e6b86a',
  error: '#c17b7b',
  info: '#6a91ab',
  // Typography
  fontHeading: "'Lora', serif",
  fontBody: "'Poppins', sans-serif",
  h1Size: 'clamp(2.5rem, 5vw, 3.5rem)',
  h2Size: 'clamp(1.75rem, 4vw, 2.5rem)',
  h3Size: 'clamp(1.25rem, 3vw, 1.75rem)',
  bodySize: 'clamp(1rem, 2vw, 1.125rem)',
  smallText: 'clamp(0.875rem, 1.5vw, 1rem)',
  // Spacing
  spacingXs: '0.5rem',
  spacingSm: '1rem',
  spacingMd: '2rem',
  spacingLg: '4rem',
  spacingXl: '6rem',
};

const Community = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Impact statistics
  const impactData = [
    { number: '8+', label: 'Communities Served' },
    { number: '8,000+', label: 'Lives Touched' },
    { number: '2', label: 'Water Projects Completed' },
    { number: '4+', label: "Women's Groups Supported" },
    { number: '1,000+', label: 'Trees Planted' },
  ];

  // Community initiatives
  const initiatives = [
    {
      title: 'Providing Clean Water',
      details: [
        'Many families in Kisoro District still walk miles for water. We are working to change that by installing a borehole and improving existing springs.',
        'By 2026, our gravity-flow system will bring clean water to 300 homes, reducing waterborne diseases and freeing children from long walks to fetch water.',
      ],
    },
    {
      title: 'Womens Economic Empowerment',
      details: [
        'In Masaka District, 20 women received seed funding and training to start a cooperative mat-weaving business. Today, their work supports their families and strengthens their community.',
        'We continue to provide mentorship, financial literacy training, and market access to expand their reach and impact.',
      ],
    },
    {
      title: 'Keeping Girls in School',
      details: [
        'In many rural areas, lack of sanitary pads forces girls to miss school. We have provided reusable sanitary kits to 300 girls in Kabale District, ensuring they can continue their education with dignity.',
        'Our goal is to expand this program to more schools, reducing dropout rates among adolescent girls.',
      ],
    },
  ];

  // Success stories
  const stories = [
    {
      title: 'Nalem Judiths Journey to Health',
      quote: '"If it were not for Touched Hearts, I would never have known what was wrong with me..."',
      text: 'Nalem Judith, a resident of Moroto District, suffered from undiagnosed health issues for years. Our outreach program connected her with specialists who provided treatment, allowing her to regain her strength and resume work.',
      image: judithStory,
    },
  ];

  useEffect(() => {
    // Handle window resize for responsive styles
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Accordion functionality
    const initiativeHeaders = document.querySelectorAll('.initiative-header');
    initiativeHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const details = header.nextElementSibling;
        const isActive = details.classList.contains('active');
        initiativeHeaders.forEach(h => h.nextElementSibling.classList.remove('active'));
        initiativeHeaders.forEach(h => h.classList.remove('active'));
        if (!isActive) {
          details.classList.add('active');
          header.classList.add('active');
        }
      });
    });

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.initiative-item, .story-card, .impact-card').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive styles for media queries
  const responsiveStyles = {
    pageHeader: windowWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : {},
  };

  return (
    <div className="community-page">
      {/* Enhanced Header Section with background image */}
      <section
        role="banner"
        style={{
          textAlign: 'center',
          padding: `${theme.spacingXl} ${theme.spacingSm}`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${communityHeaderImage})`,
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
            Building Stronger Communities Together
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
            Since 2010, Touched Hearts has partnered with communities across Uganda to create lasting, sustainable change. 
            From clean water to economic empowerment, our work is driven by local needs and solutions, empowering 
            communities to lead their own development journey.
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
              href="/projects"
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
              Our Projects
            </a>
            <a
              href="/get-involved"
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
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-section">
        <h2>Our Impact in Numbers</h2>
        <ImpactCards data={impactData} />
      </section>

      {/* Community Initiatives */}
      <section className="community-initiatives">
        <h2>Key Community Initiatives</h2>
        <div className="initiatives-list">
          {initiatives.map((initiative, index) => (
            <div className="initiative-item" key={index}>
              <div className="initiative-header">
                <h3>{initiative.title}</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="initiative-details">
                {initiative.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Community Transformation Stories</h2>
        <div className="stories-container">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <h3>{story.title}</h3>
              <p className="story-quote">{story.quote}</p>
              <p className="story-text">{story.text}</p>
              <div className="image-placeholder">
                <img src={story.image} alt={`${story.title} story`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Be Part of the Change</h2>
          <p>
            Your support can help bring clean water, education, and economic opportunities to even more communities. 
            Whether you donate, volunteer, or spread the word—every action makes a difference.
          </p>
          <a href="/get-involved" className="cta-button">Get Involved</a>
        </div>
      </section>
    </div>
  );
};

export default Community;