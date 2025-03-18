// GetInvolved.jsx
import React from "react";
import "../styles/get-involved.css";

const GetInvolved = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <h1>Get Involved</h1>
        <p>
          Join us in making a lasting impact on communities in Uganda through volunteering, donating, fundraising, or partnering with Touched Hearts.
        </p>
      </section>

      {/* Main Content */}
      <div className="get-involved-container">
        
        {/* Introduction Section */}
        <section className="involve-section intro">
          <h2>Why Get Involved?</h2>
          <p>
            At Touched Hearts, we believe that every individual has the power to create change. Whether you're passionate about education, healthcare, disability support, or community development, your involvement helps us reach more people and transform lives.
          </p>
        </section>

        {/* Volunteer Section */}
        <section className="involve-section volunteer">
          <i className="fas fa-hands-helping"></i>
          <h2>Volunteer with Us</h2>
          <p>Volunteering with Touched Hearts is a rewarding way to make a direct impact.</p>
          <h3>Opportunities Include:</h3>
          <ul>
            <li><strong>Education Support:</strong> Tutor students or assist with school supply drives.</li>
            <li><strong>Healthcare Outreach:</strong> Help with mobile clinics or health education workshops.</li>
            <li><strong>Community Building:</strong> Participate in construction projects or skill-building programs.</li>
            <li><strong>Event Support:</strong> Organize or assist at fundraising and awareness events.</li>
          </ul>
          <a href="/volunteer" className="btn">Join as a Volunteer</a>
        </section>

        {/* Donation Section */}
        <section className="involve-section donate">
          <i className="fas fa-donate"></i>
          <h2>Make a Donation</h2>
          <p>Your financial support fuels our programs and allows us to reach more individuals in need.</p>
          <a href="/donate" className="btn">Donate Now</a>
        </section>

        {/* Fundraise Section */}
        <section className="involve-section fundraise">
          <i className="fas fa-chart-line"></i>
          <h2>Start a Fundraiser</h2>
          <p>Turn your passion into action by organizing a fundraising campaign for Touched Hearts.</p>
          <a href="/fundraise" className="btn">Learn How to Fundraise</a>
          <a href="/fundraising-guide.pdf" className="btn btn-secondary" download>Download Guide</a>
        </section>

        {/* Partner Section */}
        <section className="involve-section partner">
          <i className="fas fa-handshake"></i>
          <h2>Become a Partner</h2>
          <p>We collaborate with businesses, organizations, and institutions to amplify our impact.</p>
          <a href="/partners" className="btn">Explore Partnerships</a>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;