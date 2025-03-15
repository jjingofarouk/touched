// src/pages/Mission.js
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import your existing Header component
import Footer from '../components/Footer'; // Import your existing Footer component
import '../styles/mission.css'; // New CSS file for this page

const Mission = () => {
  // Scroll animation effect (similar to Healthcare.js)
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

    document.querySelectorAll('.mission-section, .value-card').forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mission-page">
      <Navbar />

      {/* Hero Section */}
      <section className="mission-hero">
        <h1>Our Mission</h1>
        <p>
          Transforming lives with compassion and hope, Touched Hearts is dedicated to uplifting underserved communities in Uganda through sustainable programs in healthcare, education, and community development.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mission-section mission-statement">
        <h2>Who We Are</h2>
        <p>
          At Touched Hearts, our mission is to empower vulnerable populations by addressing their most pressing needs with innovative, community-driven solutions. Since our inception in 2021, we’ve worked tirelessly to bridge gaps in access to essential services, fostering resilience and self-reliance across Uganda.
        </p>
        <img src="/assets/images/mission-community.png" alt="Community gathering" className="image-placeholder" />
      </section>

      {/* Vision */}
      <section className="mission-section vision">
        <h2>Our Vision</h2>
        <p>
          We envision a Uganda where every individual, regardless of circumstance, has the opportunity to thrive—supported by quality healthcare, equitable education, and strong, inclusive communities. Our work aims to create a ripple effect of positive change that lasts for generations.
        </p>
      </section>

      {/* Core Values */}
      <section className="mission-section core-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Compassion</h3>
            <p>We approach every initiative with empathy, ensuring our actions reflect the needs and dignity of those we serve.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Transparency and accountability guide our operations, building trust with communities and partners alike.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We believe in the power of partnerships—working with local leaders, organizations, and volunteers to amplify impact.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Our programs are designed for long-term success, empowering communities to sustain progress independently.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mission-section call-to-action">
        <h2>Join Our Mission</h2>
        <p>
          Be a part of our journey to transform lives. Whether through volunteering, donating, or partnering with us, your support helps us reach more communities in need.
        </p>
        <div className="cta-buttons">
          <a href="/get-involved" className="btn btn-primary">Get Involved</a>
          <a href="/donate" className="btn btn-secondary">Donate Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;