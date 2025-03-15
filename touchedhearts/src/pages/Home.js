// src/pages/Home.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ImpactCards from '../components/ImpactCards';
import TestimonialSlider from '../components/TestimonialSlider';
import Partners from '../components/Partners';
import DonationWidget from '../components/DonationWidget';
import ContactForm from '../components/ContactForm';

// Assets
import homeImage from '../assets/images/home.jpg';
import educationImage from '../assets/images/education.jpg';
import healthcareImage from '../assets/images/healthcare.jpg';
import disabilityImage from '../assets/images/disability.jpg';
import communityImage from '../assets/images/community.jpg';
import eminatiImage from '../assets/images/eminati.jpg';
import batwaImage from '../assets/images/batwa.jpg';
import skillingImage from '../assets/images/skilling.jpg';
import campImage from '../assets/images/camp.png';
import videoSource from '../assets/V1.mp4';

const Home = () => {
  const [selectedAmount, setSelectedAmount] = useState('$100');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <main className="main-content">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Numbers */}
      <ImpactCards />

      {/* Mission Section */}
      <section className="mission" aria-labelledby="mission-title">
        <div className="mission-container">
          <div className="mission-content">
            <h2 id="mission-title" className="section-title">Our Mission</h2>
            <p className="section-text">
              At Touched Hearts, we empower underprivileged communities by providing education,
              healthcare, and opportunities for growth. We believe in creating sustainable solutions
              that allow individuals to build better futures for themselves and their communities.
            </p>
            <NavLink to="/about" className="text-link">
              Learn more about our vision <i className="fas fa-arrow-right"></i>
            </NavLink>
          </div>
          <div className="mission-video">
            <video className="mission-video-element" muted playsInline>
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="play-button" aria-label="Play video">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs" aria-labelledby="programs-title">
        <h2 id="programs-title" className="section-title">Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <img src={educationImage} alt="Education program" className="program-image" />
            <div className="program-content">
              <h3 className="program-title">Education</h3>
              <p className="program-text">
                Providing quality education and learning resources for children in underserved
                communities.
              </p>
              <NavLink to="/education" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={healthcareImage} alt="Healthcare program" className="program-image" />
            <div className="program-content">
              <h3 className="program-title">Healthcare</h3>
              <p className="program-text">
                Delivering essential medical services and health education to remote villages.
              </p>
              <NavLink to="/healthcare" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={disabilityImage} alt="Disability support program" className="program-image" />
            <div className="program-content">
              <h3 className="program-title">Disability Support</h3>
              <p className="program-text">
                Creating inclusive environments and specialized services for persons with
                disabilities.
              </p>
              <NavLink to="/disabilities" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={communityImage} alt="Community development program" className="program-image" />
            <div className="program-content">
              <h3 className="program-title">Community Development</h3>
              <p className="program-text">
                Building infrastructure and sustainable projects to strengthen local communities.
              </p>
              <NavLink to="/community" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="programs-cta">
          <NavLink to="/programs" className="cta-button secondary">
            View All Programs
          </NavLink>
        </div>
      </section>

      {/* Success Stories */}
      <TestimonialSlider />

      {/* Latest News & Updates */}
      <section className="news-updates" aria-labelledby="news-title">
        <h2 id="news-title" className="section-title">Latest News</h2>
        <div className="news-grid">
          <article className="news-card">
            <img src={communityImage} alt="Children receiving scholastic materials" className="news-image" />
            <div className="news-content">
              <span className="news-date">February 20, 2025</span>
              <h3 className="news-title">Scholastic Materials Given to School Children</h3>
              <p className="news-excerpt">
                Our recent community outreach provided essential learning materials to hundreds of
                children.
              </p>
              <NavLink to="/news/community" className="text-link">
                Read More
              </NavLink>
            </div>
          </article>
          <article className="news-card">
            <img src={campImage} alt="Doctors attending to patients at medical camp" className="news-image" />
            <div className="news-content">
              <span className="news-date">February 10, 2024</span>
              <h3 className="news-title">Medical Camp Brings Healthcare to Karamoja</h3>
              <p className="news-excerpt">
                Hundreds received free medical services during our outreach in Karamoja, improving
                community health.
              </p>
              <NavLink to="/news/camp" className="text-link">
                Read More
              </NavLink>
            </div>
          </article>
          <article className="news-card">
            <img src={skillingImage} alt="Women receiving sewing machines" className="news-image" />
            <div className="news-content">
              <span className="news-date">January 28, 2023</span>
              <h3 className="news-title">Empowering Women Through Skills & Tools</h3>
              <p className="news-excerpt">
                Widows, young mothers, and marginalized groups received training and sewing machines
                to build sustainable livelihoods.
              </p>
              <NavLink to="/news/community-skilling" className="text-link">
                Read More
              </NavLink>
            </div>
          </article>
        </div>
        <div className="news-cta">
          <NavLink to="/blog" className="text-link">
            View All News <i className="fas fa-arrow-right"></i>
          </NavLink>
        </div>
      </section>

      {/* Donation Section */}
      <DonationWidget />

      {/* Newsletter Signup */}
      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter-container">
          <h2 id="newsletter-title" className="section-title">Stay Connected</h2>
          <p className="newsletter-text">
            Subscribe to our newsletter to receive updates on our projects, success stories, and
            upcoming events.
          </p>
          <form className="newsletter-form" action="subscribe.php" method="post">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                required
              />
              <button type="submit" className="cta-button primary">Subscribe</button>
            </div>
            <label className="checkbox-container">
              <input type="checkbox" name="consent" required />
              <span className="checkbox-label">
                I agree to receive communications from Touched Hearts. View our{' '}
                <NavLink to="/privacy">Privacy Policy</NavLink>.
              </span>
            </label>
          </form>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <Partners />

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Together, We Can Make a Difference</h2>
          <p className="cta-text">
            Join our community of supporters and help us create lasting change for the people of
            Uganda.
          </p>
          <div className="cta-buttons">
            <NavLink to="/donate" className="cta-button primary">Donate</NavLink>
            <NavLink to="/volunteers" className="cta-button secondary">Volunteer</NavLink>
            <NavLink to="/fundraise" className="cta-button secondary">Fundraise</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;