// src/pages/Healthcare.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import your existing Header component
import Footer from '../components/Footer'; // Import your existing Footer component
import '../styles/healthcare.css'; // Assuming you have this CSS file

const Healthcare = () => {
  // State for accordion functionality
  const [activeProgram, setActiveProgram] = useState(null);

  // Handle accordion toggle
  const toggleProgram = (index) => {
    setActiveProgram(activeProgram === index ? null : index);
  };

  // Scroll animation effect
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

    document.querySelectorAll('.program-item, .case-card, .stat-card').forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="healthcare-page">
      <Navbar />

      {/* Hero Section */}
      <section className="healthcare-hero">
        <h1>Healthcare for All Communities</h1>
        <p>
          At Touched Hearts, we believe quality healthcare is a basic human right. Our initiatives bring vital medical services, preventive care, and health education to underserved communities throughout Uganda.
        </p>
      </section>

      {/* Main Content */}
      <section className="healthcare-content">
        <h2>Our Healthcare Mission</h2>
        <p>
          Since 2021, Touched Hearts has been committed to addressing the healthcare challenges facing vulnerable communities across Uganda. With limited access to medical facilities, inadequate resources, and preventable diseases causing significant suffering, we've implemented comprehensive healthcare programs that bring vital services directly to those in need.
        </p>
        <p>
          Working alongside local health professionals, government health departments, and international partners, we deliver sustainable healthcare solutions that create lasting impact. Our holistic approach combines immediate medical care with preventive education and community empowerment.
        </p>
        <img src="/assets/images/clinic.png" alt="Mobile clinic in rural Karamoja" className="image-placeholder" />

        {/* Impact Stats */}
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Patients Treated (2024)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">Rural Communities Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">45%</div>
            <div className="stat-label">Vaccination Rate Achieved</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">150</div>
            <div className="stat-label">Safe Births Facilitated</div>
          </div>
        </div>

        {/* Programs Accordion */}
        <h2>Our Healthcare Programs</h2>
        <div className="programs-list">
          {[
            {
              title: 'Mobile Medical Outreach',
              details: [
                'Our fleet of mobile clinics travels to remote areas across Uganda, bringing primary healthcare services to communities with limited access to medical facilities. Each mobile unit is staffed with doctors, nurses, and community health workers who provide consultations, basic treatments, and medication.',
                'In 2024, our mobile clinics conducted outreaches in Karamoja, reaching over 12,000 patients across 15 villages. These visits included general medical check-ups, dental care, eye examinations, and treatment for common illnesses such as malaria, respiratory infections, and diarrheal diseases.',
              ],
            },
            {
              title: 'Maternal and Child Health',
              details: [
                'Our maternal health initiative provides comprehensive care for pregnant women and newborns. We support safe births by training traditional birth attendants, providing birthing kits, and offering transportation to health facilities for complicated deliveries.',
                'In Mubende District, we worked with local midwives to establish a maternal waiting home where high-risk mothers can stay near the health center before delivery. This program has reduced maternal mortality in the region by 45% since its inception in 2022, and facilitated over 1,200 safe deliveries last year alone.',
              ],
            },
            {
              title: 'Disease Prevention and Vaccination',
              details: [
                'We conduct vaccination campaigns targeting preventable diseases like measles, polio, and tetanus. Our growing community of health workers go door-to-door to ensure all children receive their essential immunizations, while also distributing mosquito nets to prevent malaria.',
                'In 2023-2024, our vaccination drive in Katete parish reached over 100 children, achieving a 65% immunization rate. We also distributed 1,000 insecticide-treated mosquito nets to families with children under five and pregnant women, hoping for a 60% reduction in reported malaria cases.',
              ],
            },
            {
              title: 'Health Education and Training',
              details: [
                'Knowledge is power in disease prevention. We train community health workers and conduct public health education campaigns on nutrition, hygiene, family planning, and disease prevention.',
                'Our "Healthy Villages" initiative in Mbarara District trains local volunteers to become health educators within their communities. These volunteers hold regular sessions on handwashing, safe water handling, balanced diets, and early disease recognition. In 2024, we trained 20 community health workers who now serve as the first point of contact for health information in their villages.',
              ],
            },
            {
              title: 'HIV/AIDS Support and Testing',
              details: [
                'Our HIV/AIDS program provides confidential testing, counseling, and support groups for affected individuals. We partner with local clinics to ensure access to antiretroviral therapy and work to reduce stigma through community education.',
                'In Kampala\'s informal settlements, our mobile testing units provided HIV screening to over 500 individuals in 2024. For those testing positive, we established support networks and ensured linkage to care, with a 70% retention rate in treatment programs.',
              ],
            },
          ].map((program, index) => (
            <div className="program-item" key={index}>
              <div
                className={`program-header ${activeProgram === index ? 'active' : ''}`}
                onClick={() => toggleProgram(index)}
              >
                <h3>{program.title}</h3>
                <span className="toggle-icon">{activeProgram === index ? '▲' : '▼'}</span>
              </div>
              <div className={`program-details ${activeProgram === index ? 'active' : ''}`}>
                {program.details.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <h2>Stories of Health Transformation</h2>
        <div className="case-container">
          <div className="case-card">
            <h3>Maria Namukasa - Mubende</h3>
            <p>
              Maria was pregnant with her third child when complications developed. Thanks to our first maternal waiting home, she received timely care during a difficult delivery. Today, both Maria and her baby boy are healthy.
            </p>
            <img src="/assets/images/maria.png" alt="Maria with her healthy baby" className="image-placeholder" />
          </div>
          <div className="case-card">
            <h3>Brenda Ochieng - Soroti</h3>
            <p>
              Sixteen-year-old Brenda suffered from recurring malaria until her family received insecticide-treated nets through our program. Now malaria-free for over six months, she's thriving in school and her parents have become active participants in our community health education sessions.
            </p>
            <img src="/assets/images/mosquito-net.png" alt="Brenda with her mosquito net" className="image-placeholder" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;