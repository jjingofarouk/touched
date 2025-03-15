// src/pages/Disabilities.js
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
 // Assuming styles are managed here

import '../styles/disabilities.css'; // Assuming styles are managed here

const Disabilities = () => {
  // Programs data
  const programs = [
    {
      title: 'Assistive Devices Outreach',
      details: [
        'We provide wheelchairs, hearing aids, and prosthetic limbs to PWDs in rural areas. In 2023, our outreach in Gulu District distributed over 150 wheelchairs to individuals like Peter Okello, a 32-year-old farmer who lost his leg in a motorcycle accident. With his new wheelchair, Peter regained mobility and now supports his family through farming.',
        'This program also includes training on device maintenance and follow-up visits to ensure long-term usability.',
      ],
    },
    {
      title: 'Vocational Skills Training',
      details: [
        'In Kampala, we run tailoring and carpentry workshops for PWDs, empowering them with skills for financial independence. Sarah Atim, a 25-year-old visually impaired woman from Lira, completed our tailoring course in 2024 and now runs a small business, stitching school uniforms for her community.',
        'These workshops are adapted with braille materials, sign language interpreters, and accessible tools.',
      ],
    },
    {
      title: 'Inclusive Education Support',
      details: [
        'We collaborate with schools in Mbale to provide learning aids like braille books and sign language training for teachers. In 2022, we supported 12-year-old Emmanuel Ouma, a deaf student from Tororo, with hearing aids and tutoring. Today, Emmanuel excels in class and dreams of becoming a teacher.',
      ],
    },
    {
      title: 'Healthcare Access Program',
      details: [
        'Our mobile clinics bring physiotherapy and eye care to remote areas like Arua. In 2024, we treated over 300 PWDs, including Grace Akello, a 40-year-old mother with cerebral palsy, who received physiotherapy to improve her mobility after years of neglect.',
      ],
    },
  ];

  // Case studies data
  const caseStudies = [
    {
      title: 'Peter Okello - Gulu',
      description: 'Peter, a father of three, lost his leg in a 2019 accident. Without resources for a wheelchair, he struggled to farm. Our 2023 Gulu outreach provided him with a wheelchair, restoring his ability to work and support his family.',
      image: 'Image: [Peter with his wheelchair]', // Replace with actual path when available
    },
    {
      title: 'Sarah Atim - Lira',
      description: 'Blind since childhood, Sarah faced exclusion until she joined our tailoring program. Now, she earns a living stitching uniforms, proving that disability is not inability.',
      image: 'Image: [Sarah at her sewing machine]',
    },
    {
      title: 'Emmanuel Ouma - Tororo',
      description: 'Deaf since birth, Emmanuel struggled in school until our education support provided hearing aids and teacher training. He’s now a top student with big dreams.',
      image: 'Image: [Emmanuel in class]',
    },
  ];

  useEffect(() => {
    // Accordion Functionality
    const programHeaders = document.querySelectorAll('.program-header');
    programHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const details = header.nextElementSibling;
        const isActive = details.classList.contains('active');
        programHeaders.forEach(h => h.nextElementSibling.classList.remove('active'));
        programHeaders.forEach(h => h.classList.remove('active'));
        if (!isActive) {
          details.classList.add('active');
          header.classList.add('active');
        }
      });
    });

    // Scroll Animation
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

    document.querySelectorAll('.program-item, .case-card').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });
  }, []);

  return (
    <div className="disabilities-page">
      {/* New Header Section */}
      <header className="disabilities-header">
        <h1>Supporting Persons with Disabilities</h1>
        <p>
          At Touched Hearts, we empower individuals with disabilities in Uganda through inclusive programs, healthcare access, and community integration, ensuring they live with dignity and opportunity.
        </p>
      </header>

      <section className="disabilities-content">
        <h2>Our Commitment to Disability Support</h2>
        <p>
          Since our founding in 2010, Touched Hearts has been dedicated to addressing the unique challenges faced by persons with disabilities (PWDs) in Uganda. With over 1.5 million Ugandans living with some form of disability—ranging from physical impairments to visual, hearing, and intellectual challenges—we work tirelessly to bridge gaps in access to healthcare, education, and economic opportunities.
        </p>
        <p>
          Our approach combines direct support with advocacy, partnering with local communities, government bodies, and international organizations to create sustainable change. Below are some of the key programs and outreaches we’ve undertaken to uplift PWDs across Uganda.
        </p>
        <div className="image-placeholder">
          <img src="/assets/images/wheelchair-gulu.jpg" alt="Wheelchair distribution in Gulu" />
        </div>

        <div className="programs-list">
          {programs.map((program, index) => (
            <div className="program-item" key={index}>
              <div className="program-header">
                <h3>{program.title}</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="program-details">
                {program.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="case-studies">
        <h2>Real Lives, Real Impact</h2>
        <div className="case-container">
          {caseStudies.map((study, index) => (
            <div className="case-card" key={index}>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <div className="image-placeholder">{study.image}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Disabilities;