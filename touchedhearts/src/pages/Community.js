import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImpactCards from '../components/ImpactCards';
import '../styles/community.css';

// Import images
import judithStory from '../assets/images/nalem.jpg';

const Community = () => {
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
        'Many families in Kisoro District still walk miles for water. We’re working to change that by installing a borehole and improving existing springs.',
        'By 2026, our gravity-flow system will bring clean water to 300 homes, reducing waterborne diseases and freeing children from long walks to fetch water.',
      ],
    },
    {
      title: 'Women’s Economic Empowerment',
      details: [
        'In Masaka District, 20 women received seed funding and training to start a cooperative mat-weaving business. Today, their work supports their families and strengthens their community.',
        'We continue to provide mentorship, financial literacy training, and market access to expand their reach and impact.',
      ],
    },
    {
      title: 'Keeping Girls in School',
      details: [
        'In many rural areas, lack of sanitary pads forces girls to miss school. We’ve provided reusable sanitary kits to 300 girls in Kabale District, ensuring they can continue their education with dignity.',
        'Our goal is to expand this program to more schools, reducing dropout rates among adolescent girls.',
      ],
    },
  ];

  // Success stories
  const stories = [
    {
      title: 'Nalem Judith’s Journey to Health',
      quote: '"If it were not for Touched Hearts, I would never have known what was wrong with me..."',
      text: 'Nalem Judith, a resident of Moroto District, suffered from undiagnosed health issues for years. Our outreach program connected her with specialists who provided treatment, allowing her to regain her strength and resume work.',
      image: judithStory,
    },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <div className="community-page">
      {/* Header Section */}
      <header className="community-header">
        <h1>Building Stronger Communities</h1>
        <p>
          Since 2010, Touched Hearts has partnered with communities across Uganda to create lasting, sustainable change. 
          From clean water to economic empowerment, our work is driven by local needs and solutions.
        </p>
      </header>

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