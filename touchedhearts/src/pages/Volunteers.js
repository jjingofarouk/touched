import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Volunteers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formData);
    alert("Thank you for signing up to volunteer!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="volunteers-page">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <h1>Get Involved</h1>
        <p>Join us in making a difference through volunteering, donating, or fundraising.</p>
      </section>

      {/* Main Content */}
      <div className="get-involved-container">
        {/* Volunteer Section */}
        <section className="involve-section volunteer">
          <i className="fas fa-hands-helping"></i>
          <h2>Volunteer</h2>
          <p>Be a part of our impactful programs by signing up as a volunteer.</p>

          <form id="volunteer-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Why do you want to volunteer?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Sign Up</button>
          </form>
        </section>

        {/* Donate Section */}
        <section className="involve-section donate">
          <i className="fas fa-donate"></i>
          <h2>Donate</h2>
          <p>Your contribution helps us create lasting change.</p>
          <a href="/donate" className="btn">
            Donate Now
          </a>
        </section>

        {/* Fundraise Section */}
        <section className="involve-section fundraise">
          <i className="fas fa-chart-line"></i>
          <h2>Fundraise</h2>
          <p>Organize a fundraising campaign and support our mission.</p>
          <a href="/assets/fundraising-guide.pdf" className="btn" download>
            Download Guide
          </a>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Volunteers;