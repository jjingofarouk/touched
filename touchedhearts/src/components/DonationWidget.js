// src/components/DonationWidget.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DonationWidget = () => {
  const [selectedAmount, setSelectedAmount] = useState('$100');
  const [frequency, setFrequency] = useState('one-time');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  return (
    <section className="donation-section" aria-labelledby="donate-title">
      <div className="donation-container">
        <div className="donation-content">
          <h2 id="donate-title" className="section-title">Make a Difference Today</h2>
          <p className="section-text">
            Your contribution helps us continue our vital work with vulnerable communities in
            Uganda. Every donation, no matter the size, brings hope and creates lasting change.
          </p>
          <div className="donation-options">
            {['$25', '$50', '$100', '$250', 'Other'].map((amount) => (
              <button
                key={amount}
                className={`donation-amount ${selectedAmount === amount ? 'active' : ''}`}
                onClick={() => handleAmountClick(amount)}
              >
                {amount}
              </button>
            ))}
          </div>
          <div className="donation-frequency">
            <label className="radio-container">
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={frequency === 'one-time'}
                onChange={handleFrequencyChange}
              />
              <span className="radio-label">One-time</span>
            </label>
            <label className="radio-container">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={frequency === 'monthly'}
                onChange={handleFrequencyChange}
              />
              <span className="radio-label">Monthly</span>
            </label>
          </div>
          <NavLink to="/donate" className="cta-button primary">
            Donate Now
          </NavLink>
        </div>
        <div className="donation-impact">
          <h3 className="impact-title">Your Donation's Impact</h3>
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
  );
};

export default DonationWidget;