import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import ImpactCards from '../components/ImpactCards'; // Assuming this can handle the stats section
import '../styles/Education.css'; // Component-specific styles

const Education = () => {
  const initiativeRefs = useRef([]);
  const statRefs = useRef([]);

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
      if (ref) observer.observe(ref);
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

  return (
    <div className="education-page">
      {/* Navigation */}


      {/* Page Header */}
      <section className="page-header">
        <h1>Education Initiatives</h1>
        <p className="header-subtitle">Empowering Uganda’s future through transformative education</p>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="education-intro">
          <h2>Our Commitment to Education</h2>
          <p>
            At Touched Hearts, we believe education is the cornerstone of a thriving community. Since 2010, we’ve worked tirelessly to break down barriers to learning for Uganda’s most vulnerable children. From providing scholarships to building schools, our initiatives aim to ensure every child has access to quality education, equipping them with the skills and knowledge to build a brighter future.
          </p>
        </div>

        <h2>What We Do</h2>
        <div className="initiatives-container">
          <div className="initiative-card" ref={(el) => initiativeRefs.current[0] = el}>
            <img src="/assets/images/scholarships.png" alt="Students receiving scholarships" className="initiative-image" />
            <div className="initiative-content">
              <h3>Scholarships Program</h3>
              <p>
                We offer scholarships to children from low-income families, which cover tuition, uniforms, and learning materials. In 2024, we supported over 47 students across Uganda to ensure that financial barriers don’t stand in the way of their education.
              </p>
            </div>
          </div>
          <div className="initiative-card" ref={(el) => initiativeRefs.current[1] = el}>
            <img src="/assets/images/school-building.png" alt="New school construction" className="initiative-image" />
            <div className="initiative-content">
              <h3>School Infrastructure</h3>
              <p>
                We renovate schools in rural areas to create safe and conducive learning environments. Our projects include renovating classrooms and sanitation facilities to benefit thousands of students and teachers annually.
              </p>
            </div>
          </div>
          <div className="initiative-card" ref={(el) => initiativeRefs.current[2] = el}>
            <img src="/assets/images/teacher-training.png" alt="Teacher training session" className="initiative-image" />
            <div className="initiative-content">
              <h3>Teacher Training</h3>
              <p>
                We empower educators through professional development workshops to enhance teaching quality. Topics include modern pedagogy, inclusive education, and child psychology. We have impacted over 130 teachers since inception.
              </p>
            </div>
          </div>
          <div className="initiative-card" ref={(el) => initiativeRefs.current[3] = el}>
            <img src="/assets/images/adult-literacy.png" alt="Adult literacy class" className="initiative-image" />
            <div className="initiative-content">
              <h3>Adult Literacy Programs</h3>
              <p>
                We extend education to adults by offering literacy and numeracy classes to parents and community members. This strengthens family support for children’s learning and fosters community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number" ref={(el) => statRefs.current[0] = el}>10,000+</div>
            <div className="stat-label">Children Facilitated</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={(el) => statRefs.current[1] = el}>5+</div>
            <div className="stat-label">Schools Visited</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={(el) => statRefs.current[2] = el}>150+</div>
            <div className="stat-label">Teachers Trained</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={(el) => statRefs.current[3] = el}>200+</div>
            <div className="stat-label">Adults Trained</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us in Educating Uganda</h2>
        <p>Your support can help us reach more children and communities. Partner with us or donate to make a lasting impact.</p>
        <Link to="/get-involved" className="cta-button">Get Involved</Link>
        <Link to="/donate" className="cta-button" style={{ marginLeft: '1rem' }}>Donate Now</Link>
      </section>

      
    </div>
  );
};

export default Education;