import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/DonationWidget.css';

const DonationWidget = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
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
        <h2 id="donate-widget-title">Make a Difference Today</h2>
        <p>Your support transforms lives in underserved communities.</p>

        <div className="amount-options">
          {['25', '50', '100', '200'].map((amount) => (
            <button
              key={amount}
              type="button"
              className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
              onClick={() => handleAmountSelect(amount)}
              aria-label={`Donate ${formatCurrency(amount)}`}
            >
              {formatCurrency(amount)}
            </button>
          ))}
        </div>

        <NavLink
          to={`/donate?amount=${selectedAmount}`}
          className="donate-btn"
          aria-label={`Donate ${formatCurrency(selectedAmount)} now`}
        >
          Donate Now
        </NavLink>

        <div className="impact-highlight">
          <p>
            {formatCurrency(selectedAmount)} provides:{' '}
            <span>
              {selectedAmount === '25' && 'school supplies for a child.'}
              {selectedAmount === '50' && 'medical care for a family.'}
              {selectedAmount === '100' && 'housing improvements.'}
              {selectedAmount === '200' && 'clean water systems.'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationWidget;