import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '50',
    customAmount: '',
    frequency: 'one-time',
    name: '',
    email: '',
    payment: 'visa',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount,
      customAmount: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    window.location.href = '/success';
  };

  const donationOptions = ['$25', '$50', '$100', '$250'];

  return (
    <div className="donate-page">
      <Navbar />

      {/* Page Header */}
      <section className="page-header" aria-labelledby="donate-title">
        <h1 id="donate-title">Make a Difference</h1>
        <p>Your support helps change lives and empowers communities in need.</p>
      </section>

      {/* Donation Section */}
      <section className="donation-section">
        <div className="donation-container">
          {/* Donation Form */}
          <div className="donation-form">
            <h2>Donate Now</h2>
            <p>Every contribution brings hope and creates lasting change.</p>

            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '40%' }}></div>
            </div>
            <p className="progress-text">Raised: $4,000 of $10,000 Goal</p>

            {/* Donation Amount Options */}
            <div className="donation-options">
              {donationOptions.map((amount) => (
                <button
                  key={amount}
                  className={`donation-amount ${formData.amount === amount ? 'active' : ''}`}
                  onClick={() => handleAmountClick(amount)}
                  type="button"
                >
                  {amount}
                </button>
              ))}
              <input
                type="number"
                name="customAmount"
                id="customAmount"
                placeholder="Other"
                min="1"
                value={formData.customAmount}
                onChange={handleChange}
                className="donation-amount custom"
              />
            </div>

            {/* Frequency Options */}
            <div className="donation-frequency">
              <label className="radio-container">
                <input
                  type="radio"
                  name="frequency"
                  value="one-time"
                  checked={formData.frequency === 'one-time'}
                  onChange={handleChange}
                />
                <span className="radio-label">One-time</span>
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  name="frequency"
                  value="monthly"
                  checked={formData.frequency === 'monthly'}
                  onChange={handleChange}
                />
                <span className="radio-label">Monthly</span>
              </label>
            </div>

            {/* Form */}
            <form id="donation-form" onSubmit={handleSubmit}>
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
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="mtn">MTN Mobile Money</option>
                  <option value="airtel">Airtel Money</option>
                  <option value="paypal">PayPal</option>
                  <option value="chipper">Chipper Cash</option>
                </select>
              </div>

              <button type="submit" className="cta-button">Donate Now</button>
            </form>
          </div>

          {/* Donation Impact */}
          <div className="donation-impact">
            <h3>Your Donation's Impact</h3>
            <ul className="impact-list">
              <li className="impact-item">
                <i className="fas fa-book"></i>
                <div className="impact-description">
                  <span className="impact-highlight">$25</span> provides school supplies for a child
                </div>
              </li>
              <li className="impact-item">
                <i className="fas fa-medkit"></i>
                <div className="impact-description">
                  <span className="impact-highlight">$50</span> delivers medical care for a family
                </div>
              </li>
              <li className="impact-item">
                <i className="fas fa-home"></i>
                <div className="impact-description">
                  <span className="impact-highlight">$100</span> supports housing improvements
                </div>
              </li>
              <li className="impact-item">
                <i className="fas fa-water"></i>
                <div className="impact-description">
                  <span className="impact-highlight">$250</span> helps build clean water systems
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;