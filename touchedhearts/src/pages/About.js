// src/pages/About.js
import React from 'react';
import { NavLink } from 'react-router-dom';

// Assets
import aboutImage from '../assets/images/D1.jpg';
import educationSupportImage from '../assets/images/C3.jpg';
import healthcareSupportImage from '../assets/images/H50.jpg';
import womenEmpowermentImage from '../assets/images/C5.jpg';

const About = () => {
  return (
    <main className="main-content">
      {/* About Section */}
      <section className="about-content" aria-labelledby="our-story">
        <div className="about-text">
          <h2 id="our-story">Our Story</h2>
          <p>
            Touched Hearts was founded in 2020 with a mission to support Uganda’s most vulnerable
            communities, including children, women, and persons with disabilities. Our journey began
            with a small group of passionate medical students dedicated to making a difference in
            Kabale District. Today, we have impacted thousands of Ugandans through education,
            healthcare, and alternative empowerment programs.
          </p>

          <h2>Our Mission</h2>
          <p>
            We strive to uplift underprivileged individuals by providing them with access to basic
            needs, education, and other related development opportunities so that they live a
            decent life.
          </p>

          <h2>Our Vision</h2>
          <p>We envision a future where every vulnerable person in Uganda has access to a dignified life.</p>
        </div>
        <figure className="about-image">
          <img
            src={aboutImage}
            alt="Touched Hearts team working with community in Uganda"
          />
          <figcaption className="visually-hidden">
            Touched Hearts in action supporting Uganda's communities
          </figcaption>
        </figure>
      </section>

      {/* Why We Exist Section */}
      <section className="why-we-exist" aria-labelledby="why-we-exist-heading">
        <h2 id="why-we-exist-heading">Why We Exist</h2>
        <div className="exist-container">
          <article className="exist-item">
            <img src={educationSupportImage} alt="Children receiving education support" />
            <h3>Education for All</h3>
            <p>We provide scholarships and learning materials to children from low-income families.</p>
          </article>
          <article className="exist-item">
            <img src={healthcareSupportImage} alt="Healthcare professional assisting patient" />
            <h3>Healthcare Support</h3>
            <p>
              We offer free medical check-ups and ensure access to essential health services for
              people living in remote areas.
            </p>
          </article>
          <article className="exist-item">
            <img src={womenEmpowermentImage} alt="Women in vocational training" />
            <h3>Women’s Empowerment</h3>
            <p>We equip women with vocational skills to help them achieve financial independence.</p>
          </article>
        </div>
      </section>

      {/* Meet the Team Teaser */}
      <section className="meet-team" aria-labelledby="meet-team-heading">
        <h2 id="meet-team-heading">Meet Our Team</h2>
        <p>Behind Touched Hearts is a team of dedicated individuals committed to making a difference.</p>
        <NavLink to="/team" className="btn cta-button primary" aria-label="Meet the Touched Hearts Team">
          Meet the Team
        </NavLink>
      </section>
    </main>
  );
};

export default About;