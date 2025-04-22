import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AnnualReports.css'; // Assuming you have a CSS file for styling

const AnnualReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports data from API or use static data
    const fetchedReports = [
      {
        id: 1,
        title: 'Hope After Floods Project 2025',
        description: 'Extended relief to Kawempe flood victims.',
        imageUrl: '/assets/images/reports/kawempe.jpg', // Replace with actual image path
        googleDriveLink: 'https://drive.google.com/file/d/1zILWKhZ8Kzc3w2WGhsMfImY2MRTy0TOl/view?usp=drivesdk',
        projectDate: 'April 3, 2025',
        relatedDetails: 'Provided relief for victims of floods that swept through Kawempe Division on April 3, 2025.',
      },
      {
        id: 2,
        title: 'Education Program 2022',
        description: 'Provided scholarships and resources to 200 students.',
        imageUrl: '/assets/images/reports/scholarships.png', // Replace with actual image path
        googleDriveLink: 'https://drive.google.com/file/d/EXAMPLE_ID_2022/view',
        projectDate: 'August 2022',
        relatedDetails: 'Collaborated with XYZ Education Trust.',
      },
      // Add more reports as needed
    ];

    setReports(fetchedReports);
  }, []);

  return (
    <div>

      {/* Page Header43 */}
      <section className="page-header" role="banner">
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

    </div>
  );
};

export default AnnualReports;