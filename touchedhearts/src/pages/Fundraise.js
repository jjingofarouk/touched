import React, { useState } from "react";
import "../styles/fundraise.css"; // Assuming a separate CSS file for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Fundraise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fundraiserTitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate an API call or email service
    console.log("Fundraiser Submitted:", formData);
    alert("Thank you! We'll review your fundraiser idea and get back to you soon.");
    setFormData({ name: "", email: "", fundraiserTitle: "", description: "" });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <h1>Start a Fundraiser</h1>
        <p>
          Turn your passion into action by creating a fundraising campaign to support Touched Hearts’ mission in Uganda.
        </p>
      </section>

      {/* Main Content */}
      <div className="fundraise-container">
        {/* Introduction Section */}
        <section className="fundraise-section intro">
          <h2>Why Fundraise?</h2>
          <p>
            Fundraising is a powerful way to rally your community and raise funds for causes you care about—like education, healthcare, disability support, or community development. Every dollar you raise helps us transform lives.
          </p>
          <a href="/fundraising-guide.pdf" className="btn" download>
            Download Fundraising Guide
          </a>
        </section>

        {/* Sample Campaigns */}
        <section className="fundraise-section campaigns">
          <h2>Campaign Ideas</h2>
          <div className="campaign-grid">
            <div className="campaign-card">
              <h3>Birthday Fundraiser</h3>
              <p>
                Ask friends and family to donate to Touched Hearts instead of giving gifts for your birthday.
              </p>
            </div>
            <div className="campaign-card">
              <h3>Run for a Cause</h3>
              <p>
                Participate in a marathon or fun run and collect pledges for every mile you complete.
              </p>
            </div>
            <div className="campaign-card">
              <h3>Bake Sale</h3>
              <p>
                Host a bake sale at your school or workplace and donate the proceeds to our programs.
              </p>
            </div>
          </div>
        </section>

        {/* Fundraiser Form */}
        <section className="fundraise-section form-section">
          <h2>Create Your Fundraiser</h2>
          <p>Submit your idea below, and we’ll help you get started!</p>
          <form className="fundraiser-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fundraiserTitle">Fundraiser Title</label>
              <input
                type="text"
                id="fundraiserTitle"
                name="fundraiserTitle"
                value={formData.fundraiserTitle}
                onChange={handleChange}
                required
                placeholder="e.g., 'Run for Education'"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Tell us about your fundraiser idea"
                rows="5"
              />
            </div>
            <button type="submit" className="btn">
              Submit Your Idea
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Fundraise;