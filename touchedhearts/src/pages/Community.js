// src/pages/Community.js
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ImpactCards from '../components/ImpactCards';
import '../styles/components.css'; // Assuming styles are handled here

const Community = () => {
  // Impact data
  const impactData = [
    { number: '8+', label: 'Communities Served' },
    { number: '8,000+', label: 'Lives Touched' },
    { number: '2', label: 'Water Projects Completed' },
    { number: '4+', label: 'Women\'s Groups Supported' },
    { number: '1,000+', label: 'Trees Planted' },
  ];

  // Initiatives data
  const initiatives = [
    {
      title: 'What We’ve Done So Far',
      details: [
        'We’ve already made a quiet mark in these villages. Over the past year, we handed out sanitary pads to 300 girls in Kabale District, giving them a chance to stay in school without worry. It’s a small thing, but their smiles say it’s big.',
        'We also fixed up a rusty spring with local help to bring clean water to 100 people who used to walk miles. And in Masaka District, we gave 20 women a little seed money and tools to start weaving mats together—now they sell them at the market.',
      ],
    },
    {
      title: 'Clean Water for Families',
      details: [
        'We dream of a day when no one here hauls water over long, dusty paths. By 2026, we hope to install 1 borehole and patch up a few springs in Kisoro District. Picture a simple gravity-flow system flowing clean water to 300 homes—folks who’ve never had it so close.',
        'We’ll train a handful of villagers to keep it running, who will also collect a few coins for repairs and teach kids to wash their hands. If it works, we could cut sickness in this area nearly in half.',
      ],
    },
    // Add other initiatives similarly...
  ];

  // Success stories data
  const stories = [
    {
      title: 'A New Hope for Nalem Judith',
      quote: '"If it were not for Touched Hearts, I would never have known what was wrong with me..."',
      text: 'Nalem Judith, a resident of Nakapirimen in Moroto District...',
      image: '/assets/images/judith.jpg',
    },
    // Add other stories similarly...
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

    // Scroll animation
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
      <Navbar />
      
      <HeroSection
        title="Empowering Communities"
        description="Touched Hearts builds sustainable, resilient communities across Uganda through holistic development initiatives that address fundamental needs while preserving local culture and promoting self-reliance."
        className="community-hero"
      />

      <section className="community-content">
        <h2>Our Community Development Approach</h2>
        <p>Since 2010, Touched Hearts has partnered with over 35 communities across Uganda to create lasting positive change...</p>
        <p>Our community development work focuses on addressing fundamental needs—clean water, food security, economic empowerment, and infrastructure...</p>
        <div className="image-placeholder">
          <img src="/assets/images/D5.jpg" alt="Community meeting in Kabale village" />
        </div>

        <h2>Our Impact by the Numbers</h2>
        <ImpactCards data={impactData} />

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
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Join Our Community Development Efforts</h2>
          <p>Through volunteering, donating, or partnering with us, your contribution can help transform more communities across Uganda.</p>
          <a href="/get-involved" className="cta-button">Get Involved Today</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;