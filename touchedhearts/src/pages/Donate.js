import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Reusing Navbar component
import Footer from '../components/Footer'; // Reusing Footer component
import DonationWidget from '../components/DonationWidget'; // Assuming this handles donation form logic
import '../styles/index.css'; // Global styles
import '../styles/components.css'; // Component-specific styles

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '50',
    customAmount: '',
    name: '',
    email: '',
    payment: 'mobileMoney',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to a backend or redirect
    console.log('Donation submitted:', formData);
    // Redirect to success page (assuming you have routing set up)
    window.location.href = '/success';
  };

  return (
    <div className="donate-page">
      {/* Navigation */}


      {/* Page Header */}
      <section className="page-header">
        <h1>Make a Difference</h1>
        <p>Your support helps change lives and empowers our community.</p>
      </section>

      {/* Donation Form Section */}
      <div className="donation-form-container">
        <h2>Donate Now</h2>
        <p>Choose your donation amount and payment method below to contribute.</p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: '40%' }}></div>
        </div>
        <p className="progress-text">Raised: $4,000 of $10,000 Goal</p>

        {/* Donation Form */}
        <form id="donation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <div className="amount-options">
              <input
                type="radio"
                name="amount"
                value="50"
                id="amount-50"
                checked={formData.amount === '50'}
                onChange={handleChange}
              />
              <label htmlFor="amount-50">$50</label>
              <input
                type="radio"
                name="amount"
                value="100"
                id="amount-100"
                checked={formData.amount === '100'}
                onChange={handleChange}
              />
              <label htmlFor="amount-100">$100</label>
              <input
                type="radio"
                name="amount"
                value="200"
                id="amount-200"
                checked={formData.amount === '200'}
                onChange={handleChange}
              />
              <label htmlFor="amount-200">$200</label>
              <input
                type="number"
                name="customAmount"
                id="customAmount"
                placeholder="Custom Amount"
                min="1"
                value={formData.customAmount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="payment">Payment Method</label>
            <select
              name="payment"
              id="payment"
              value={formData.payment}
              onChange={handleChange}
              required
            >
              <option value="mobileMoney">Mobile Money</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <button type="submit">Donate Now</button>
        </form>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Donate;