import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import DonationWidget from '../components/DonationWidget';
import ImpactCards from '../components/ImpactCards';
import TestimonialSlider from '../components/TestimonialSlider';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';

// Assets
import educationImage from '../assets/images/education.jpg';
import healthcareImage from '../assets/images/healthcare.jpg';
import disabilityImage from '../assets/images/disability.jpg';
import communityImage from '../assets/images/community.jpg';
import campImage from '../assets/images/camp.png';
import skillingImage from '../assets/images/skilling.jpg';
import videoSource from '../assets/images/V1.mp4';
import testimonialBackground from '../assets/images/testimonial.png';

import '../styles/Home.css';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <main className="main-content">
      <HeroSection />
      <DonationWidget />
      <section className="mission" aria-labelledby="mission-title">
        <div className="mission-container">
          <div className="mission-content">
            <h2 id="mission-title" className="section-title">Our Mission</h2>
            <p className="section-text">
              At Touched Hearts, we empower underprivileged communities with education, healthcare, and sustainable growth opportunities.
            </p>
            <NavLink to="/about" className="text-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </NavLink>
          </div>
          <div className="mission-video">
            <video
              ref={videoRef}
              className="mission-video-element"
              muted
              playsInline
              loop
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="play-button"
              aria-label="Play video"
              onClick={() => videoRef.current.play()}
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </section>
      <ImpactCards />
      <section className="programs" aria-labelledby="programs-title">
        <h2 id="programs-title" className="section-title">Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <img src={educationImage} alt="Education program" className="program-image" loading="lazy" />
            <div className="program-content">
              <h3 className="program-title">Education</h3>
              <p className="program-text">
                Quality education and resources for children in underserved communities.
              </p>
              <NavLink to="/education" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={healthcareImage} alt="Healthcare program" className="program-image" loading="lazy" />
            <div className="program-content">
              <h3 className="program-title">Healthcare</h3>
              <p className="program-text">
                Essential medical services and health education for remote villages.
              </p>
              <NavLink to="/healthcare" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={disabilityImage} alt="Disability support program" className="program-image" loading="lazy" />
            <div className="program-content">
              <h3 className="program-title">Disability Support</h3>
              <p className="program-text">
                Inclusive environments and services for persons with disabilities.
              </p>
              <NavLink to="/disabilities" className="program-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="program-card">
            <img src={communityImage} alt="Community development program" className="program-image" loading="lazy" />
            <div className="program-content">
              <h3 className="program-title">Community Development</h3>
              <p className="program-text">
                Infrastructure and sustainable projects to strengthen communities.
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
      <section className="testimonial-section" aria-label="What people say">
        <div className="testimonial-overlay">
          <TestimonialSlider />
        </div>
      </section>
      <section className="news-updates" aria-labelledby="news-title">
        <h2 id="news-title" className="section-title">Latest News</h2>
        <div className="news-grid">
          <article className="news-card">
            <img src={communityImage} alt="Children receiving scholastic materials" className="news-image" loading="lazy" />
            <div className="news-content">
              <span className="news-date">February 20, 2025</span>
              <h3 className="news-title">Scholastic Materials Given to School Children</h3>
              <p className="news-excerpt">
                Essential learning materials provided to hundreds of children.
              </p>
              <NavLink to="/news/community" className="text-link">
                Read More
              </NavLink>
            </div>
          </article>
          <article className="news-card">
            <img src={campImage} alt="Doctors attending to patients at medical camp" className="news-image" loading="lazy" />
            <div className="news-content">
              <span className="news-date">February 10, 2024</span>
              <h3 className="news-title">Medical Camp Brings Healthcare to Karamoja</h3>
              <p className="news-excerpt">
                Free medical services for hundreds in Karamoja.
              </p>
              <NavLink to="/news/camp" className="text-link">
                Read More
              </NavLink>
            </div>
          </article>
          <article className="news-card">
            <img src={skillingImage} alt="Women receiving sewing machines" className="news-image" loading="lazy" />
            <div className="news-content">
              <span className="news-date">January 28, 2023</span>
              <h3 className="news-title">Empowering Women Through Skills</h3>
              <p className="news-excerpt">
                Training and tools for sustainable livelihoods.
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
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Join Our Global Mission</h2>
          <p className="cta-text">
            Support lasting change for communities in Uganda and beyond.
          </p>
          <div className="cta-buttons">
            <NavLink to="/donate" className="cta-button primary">Donate</NavLink>
            <NavLink to="/volunteers" className="cta-button secondary">Volunteer</NavLink>
            <NavLink to="/fundraise" className="cta-button secondary">Fundraise</NavLink>
          </div>
        </div>
      </section>
      <ContactForm />
      <Partners />
    </main>
  );
};

export default Home;