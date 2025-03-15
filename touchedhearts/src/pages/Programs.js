// src/pages/Programs.js

import React from 'react';
import Navbar from '../components/Navbar';  // Import Navbar component
import Footer from '../components/Footer';  // Import Footer component

const Programs = () => {
    return (
        <div>
            {/* Navbar */}
      

            {/* Hero Section */}
            <section className="programs-hero">
                <h1>Our Programs</h1>
                <p>At Touched Hearts, we empower Uganda’s most vulnerable through transformative initiatives in healthcare, education, disability support, and community development.</p>
            </section>

            {/* Programs Overview */}
            <section className="programs-overview">
                <h2>Explore Our Impact</h2>
                <div className="programs-grid">
                    <div className="program-card">
                        <h3>Healthcare</h3>
                        <p>We deliver free medical check-ups, mobile clinics, and essential health services to underserved communities across Uganda, ensuring access to care for all.</p>
                        <a href="/healthcare">Learn More</a>
                    </div>
                    <div className="program-card">
                        <h3>Community Development</h3>
                        <p>Through sustainable projects, we uplift entire communities with clean water, infrastructure, and economic opportunities, fostering resilience and growth.</p>
                        <a href="/community">Learn More</a>
                    </div>
                    <div className="program-card">
                        <h3>Disability Support</h3>
                        <p>We empower persons with disabilities with assistive devices, vocational training, and inclusive education, breaking barriers to dignity and opportunity.</p>
                        <a href="/disabilities">Learn More</a>
                    </div>
                    <div className="program-card">
                        <h3>Education</h3>
                        <p>We provide scholarships, learning materials, and teacher training to ensure every child in Uganda has the chance to learn and thrive.</p>
                        <a href="/education">Learn More</a>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Join Our Mission</h2>
                <p>Partner with us, volunteer, or donate to support these life-changing programs and make a lasting difference in Uganda.</p>
                <a href="/get-involved">Get Involved</a>
            </section>

            {/* Footer */}
            
        </div>
    );
};

export default Programs;