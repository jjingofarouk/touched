// src/components/DonateWidget.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/DonationWidget.css';

const DonationWidget = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [frequency, setFrequency] = useState('one-time');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="donate-widget" aria-labelledby="donate-widget-title">
      <div className="donate-widget-container">
        <h2 id="donate-widget-title">Support Our Cause</h2>
        <p>Your donation empowers communities and changes lives.</p>

        <div className="amount-options">
          {['25', '50', '100', '200'].map((amount) => (
            <button
              key={amount}
              type="button"
              className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
              onClick={() => handleAmountSelect(amount)}
            >
              {formatCurrency(amount)}
            </button>
          ))}
        </div>

        <div className="frequency-options">
          <label className="frequency-label">
            <input
              type="radio"
              name="frequency"
              value="one-time"
              checked={frequency === 'one-time'}
              onChange={handleFrequencyChange}
            />
            <span>One-time</span>
          </label>
          <label className="frequency-label">
            <input
              type="radio"
              name="frequency"
              value="monthly"
              checked={frequency === 'monthly'}
              onChange={handleFrequencyChange}
            />
            <span>Monthly</span>
          </label>
        </div>

        <NavLink to="/donate" className="donate-btn">
          Donate Now
        </NavLink>

        <div className="impact-summary">
          <h3>Your Impact</h3>
          <p>
            {formatCurrency(selectedAmount)} {frequency === 'one-time' ? 'provides' : 'monthly supports'}:
          </p>
          <ul>
            <li>{formatCurrency(25)} - School supplies for a child</li>
            <li>{formatCurrency(50)} - Medical care for a family</li>
            <li>{formatCurrency(100)} - Housing improvements</li>
            <li>{formatCurrency(200)} - Clean water systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DonationWidget;