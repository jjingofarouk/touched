import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from '../assets/images/bgs/reports-header.png'; // Import the image
import './AnnualReports.css';

const AnnualReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports data from API or use static data
    const fetchedReports = [
      {
        id: 1,
        title: 'Community Health Initiative 2023',
        description: 'Improved healthcare access for 500+ families in rural areas.',
        imageUrl: '/images/health-initiative-2023.jpg', // Still in public/
        googleDriveLink: 'https://drive.google.com/file/d/EXAMPLE_ID_2023/view',
        projectDate: 'December 2023',
        relatedDetails: 'Partnered with local clinics, funded by ABC Foundation.',
      },
      {
        id: 2,
        title: 'Education Program 2022',
        description: 'Provided scholarships and resources to 200 students.',
        imageUrl: '/images/education-program-2022.jpg', // Still in public/
        googleDriveLink: 'https://drive.google.com/file/d/EXAMPLE_ID_2022/view',
        projectDate: 'August 2022',
        relatedDetails: 'Collaborated with XYZ Education Trust.',
      },
    ];

    setReports(fetchedReports);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Page Header with inline background image */}
      <section
        className="page-header"
        role="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
        }}
      >
        <h1>Annual Reports</h1>
        <p className="header-subtitle">Explore our projects and their impact</p>
      </section>

      {/* Reports Section */}
      <section className="reports-section" aria-labelledby="reports-heading">
        <h2 id="reports-heading" className="visually-hidden">Annual Reports</h2>
        <div className="reports-grid">
          {reports.map((report) => (
            <div key={report.id} className="report-card">
              <img
                src={report.imageUrl}
                alt={`${report.title} preview`}
                className="report-image"
              />
              <div className="report-content">
                <h3 className="report-title">{report.title}</h3>
                <p className="report-description">{report.description}</p>
                <p className="report-date">
                  <strong>Completed:</strong> {report.projectDate}
                </p>
                <p className="report-details">
                  <strong>Details:</strong> {report.relatedDetails}
                </p>
                <a
                  href={report.googleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-link"
                >
                  View Full Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnnualReports;