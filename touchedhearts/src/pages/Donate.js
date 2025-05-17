import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Donate.css';

const Donate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '50',
    customAmount: '',
    frequency: 'one-time',
    name: '',
    email: '',
    paymentMethod: 'card',
  });

  const handleAmountSelect = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount,
      customAmount: '',
    }));
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      amount: 'custom',
      customAmount: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    navigate('/success');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="donate-page">
      <header className="donate-header">
        <h1>Support Our Mission</h1>
        <p>Your donation makes a difference worldwide.</p>
      </header>

      <section className="donation-form-section">
        <form className="donation-form" onSubmit={handleSubmit}>
          <h2>Donate Now</h2>

          <div className="donation-frequency">
            <label className="frequency-label">
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={formData.frequency === 'one-time'}
                onChange={handleChange}
              />
              One-Time
            </label>
            <label className="frequency-label">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={formData.frequency === 'monthly'}
                onChange={handleChange}
              />
              Monthly
            </label>
          </div>

          <div className="amount-buttons">
            {['50', '100', '250', '500'].map((amount) => (
              <button
                key={amount}
                type="button"
                className={`amount-btn ${formData.amount === amount ? 'active' : ''}`}
                onClick={() => handleAmountSelect(amount)}
                aria-label={`Donate ${formatCurrency(amount)}`}
              >
                {formatCurrency(amount)}
              </button>
            ))}
            <div className={`custom-amount-container ${formData.amount === 'custom' ? 'active' : ''}`}>
              <span className="currency-symbol">$</span>
              <input
                type="number"
                name="customAmount"
                placeholder="Other Amount"
                min="10"
                value={formData.customAmount}
                onChange={handleCustomAmount}
                className="custom-amount-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <div
                className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'card' } })}
              >
                <span>Credit/Debit Card</span>
              </div>
              <div
                className={`payment-option ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'paypal' } })}
              >
                <span>PayPal</span>
              </div>
            </div>
            {formData.paymentMethod === 'paypal' && (
              <p className="payment-details">
                You will be redirected to PayPal to complete your donation.
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Donate Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Donate;