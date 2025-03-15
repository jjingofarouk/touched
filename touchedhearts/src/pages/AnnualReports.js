import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a separate Header component
import Footer from '../components/Footer'; // Assuming you have a separate Footer component
import { Line } from 'react-chartjs-2'; // If you're using a chart library like Chart.js

const AnnualReports = () => {
    const [reports, setReports] = useState([]);
    
    // This is a placeholder for your impact data, you can replace it with actual data.
    const impactData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Impact Statistics',
                data: [10, 20, 30, 40, 50, 60],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    useEffect(() => {
        // Fetch reports data from API or file
        // For now, we're using static data as a placeholder
        const fetchedReports = [
            {
                year: 2023,
                summary: "Summary of the impact in 2023",
                downloadLink: "/path/to/report-2023.pdf",
            },
            {
                year: 2022,
                summary: "Summary of the impact in 2022",
                downloadLink: "/path/to/report-2022.pdf",
            },
            // Add more reports as needed
        ];

        setReports(fetchedReports);
    }, []);

    const openModal = (report) => {
        const modal = document.getElementById('reportModal');
        modal.querySelector('.modal-title').textContent = `Report for ${report.year}`;
        modal.querySelector('.modal-summary').textContent = report.summary;
        modal.querySelector('.modal-download').href = report.downloadLink;
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        const modal = document.getElementById('reportModal');
        modal.setAttribute('aria-hidden', 'true');
    };

    return (
        <div>
            <Navbar />
            
            {/* Page Header */}
            <section className="page-header" role="banner">
                <h1>Annual Reports</h1>
                <p className="header-subtitle">Discover our journey, impact, and financial transparency</p>
            </section>

            {/* Reports Section */}
            <section className="reports-section" aria-labelledby="reports-heading">
                <h2 id="reports-heading" className="visually-hidden">Annual Reports</h2>
                <div className="reports-timeline">
                    <div className="timeline-line"></div>
                    {reports.map((report, index) => (
                        <div key={index} className="timeline-entry">
                            <button className="timeline-button" onClick={() => openModal(report)}>
                                <span>{report.year}</span>
                            </button>
                        </div>
                    ))}
                </div>
                <div className="reports-stats">
                    <Line data={impactData} />
                </div>
            </section>

            {/* Interactive Modal for Report Details */}
            <div className="report-modal" id="reportModal" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <button className="modal-close" aria-label="Close modal" onClick={closeModal}>✕</button>
                    <h3 className="modal-title"></h3>
                    <p className="modal-summary"></p>
                    <a className="modal-download" href="#" target="_blank" download>Download Report</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AnnualReports;