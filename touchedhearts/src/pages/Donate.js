import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Import payment images
import visaImage from '../assets/images/visa.png';
import mastercardImage from '../assets/images/mastercard.png';
import paypalImage from '../assets/images/paypal.png';

const paymentImages = {
  visa: visaImage,
  mastercard: mastercardImage,
  paypal: paypalImage,
};

const Donate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '500',
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
      <section className="page-header donate-page-header">
        <div className="page-header-content">
          <h1>Transform Lives with Your Donation</h1>
          <p>Your generosity drives global impact, empowering communities worldwide.</p>
        </div>
      </section>

      <div className="donation-form-section">
        <div className="donation-form-container">
          <form id="donation-form" onSubmit={handleSubmit}>
            <h2>Make Your Donation</h2>
            <div className="donation-frequency">
              <label className="frequency-label">
                <input
                  type="radio"
                  name="frequency"
                  value="one-time"
                  checked={formData.frequency === 'one-time'}
                  onChange={handleChange}
                />
                <span>One-Time</span>
              </label>
              <label className="frequency-label">
                <input
                  type="radio"
                  name="frequency"
                  value="monthly"
                  checked={formData.frequency === 'monthly'}
                  onChange={handleChange}
                />
                <span>Monthly</span>
              </label>
            </div>

            <div className="amount-buttons">
              {['500', '1000', '5000', '10000'].map((amount) => (
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
                  min="100"
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
                  <img
                    src={paymentImages.visa}
                    alt="Visa"
                    style={{ width: '40px', height: '24px', objectFit: 'contain', marginRight: '8px' }}
                  />
                  <img
                    src={paymentImages.mastercard}
                    alt="Mastercard"
                    style={{ width: '40px', height: '24px', objectFit: 'contain' }}
                  />
                  <span>Credit/Debit Card</span>
                </div>
                <div
                  className={`payment-option ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}
                  onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'paypal' } })}
                >
                  <img
                    src={paymentImages.paypal}
                    alt="PayPal"
                    style={{ width: '40px', height: '24px', objectFit: 'contain', marginRight: '8px' }}
                  />
                  <span>PayPal</span>
                </div>
              </div>

              {formData.paymentMethod === 'paypal' && (
                <div className="payment-details">
                  <p>You will be redirected to PayPal to complete your donation.</p>
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Complete Donation
            </button>
          </form>
        </div>

        <div className="donation-info-panel">
          <div className="info-panel-content">
            <h3>Global Impact</h3>
            <p>90% of your donation directly funds transformative programs worldwide, ensuring transparency and accountability.</p>
            <div className="security-info">
              <h4>Secure & Trusted</h4>
              <p>All transactions are protected with industry-standard encryption.</p>
              <div className="security-icons">
                <span className="security-icon">🔒</span>
                <span className="security-text">SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;