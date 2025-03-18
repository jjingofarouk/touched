import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Donate.css'

const Donate = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: '100',
    customAmount: '',
    frequency: 'one-time',
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    mobileProvider: '',
    mobileNumber: '',
  });

  const handleAmountSelect = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount,
      customAmount: ''
    }));
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      amount: 'custom',
      customAmount: value
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

  const nextStep = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getActualAmount = () => {
    if (formData.amount === 'custom') {
      return formData.customAmount || 0;
    }
    return formData.amount;
  };

  return (
    <div className="donate-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Make a Difference Today</h1>
          <p>Your support helps change lives and empowers communities.</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="donation-progress">
        <div className="donation-progress-container">
          <div className="progress-stats">
            <h3>Help us reach our goal</h3>
            <p className="progress-text">Raised: {formatCurrency(4000)} of {formatCurrency(10000)} Goal</p>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="donation-form-section">
        <div className="donation-form-container">
          {/* Step Indicator */}
          <div className="step-indicator">
            <div className={`step ${activeStep === 1 ? 'active' : activeStep > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-title">Choose Amount</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${activeStep === 2 ? 'active' : activeStep > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-title">Your Details</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${activeStep === 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-title">Payment</div>
            </div>
          </div>

          <form id="donation-form" onSubmit={handleSubmit}>
            {/* Step 1: Choose Amount */}
            {activeStep === 1 && (
              <div className="form-step">
                <h2>Select Your Donation Amount</h2>
                <div className="donation-frequency">
                  <button 
                    type="button"
                    className={`frequency-btn ${formData.frequency === 'one-time' ? 'active' : ''}`}
                    onClick={() => handleChange({ target: { name: 'frequency', value: 'one-time' } })}
                  >
                    One-time
                  </button>
                  <button 
                    type="button"
                    className={`frequency-btn ${formData.frequency === 'monthly' ? 'active' : ''}`}
                    onClick={() => handleChange({ target: { name: 'frequency', value: 'monthly' } })}
                  >
                    Monthly
                  </button>
                </div>

                <div className="amount-buttons">
                  {['25', '50', '100', '200'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${formData.amount === amount ? 'active' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      {formatCurrency(amount)}
                    </button>
                  ))}
                  <div className={`custom-amount-container ${formData.amount === 'custom' ? 'active' : ''}`}>
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      name="customAmount"
                      placeholder="Custom Amount"
                      min="1"
                      value={formData.customAmount}
                      onChange={handleCustomAmount}
                      className="custom-amount-input"
                    />
                  </div>
                </div>

                <div className="donation-impact">
                  <h3>Your Donation's Impact</h3>
                  <div className="impact-grid">
                    <div className="impact-item">
                      <div className="impact-icon">📚</div>
                      <div className="impact-text">
                        <span className="impact-value">{formatCurrency(25)}</span> provides school supplies for a child
                      </div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-icon">🏥</div>
                      <div className="impact-text">
                        <span className="impact-value">{formatCurrency(50)}</span> delivers medical care for a family
                      </div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-icon">🏠</div>
                      <div className="impact-text">
                        <span className="impact-value">{formatCurrency(100)}</span> supports housing improvements
                      </div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-icon">💧</div>
                      <div className="impact-text">
                        <span className="impact-value">{formatCurrency(200)}</span> helps build clean water systems
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-primary" onClick={nextStep}>Continue</button>
                </div>
              </div>
            )}

            {/* Step 2: Your Details */}
            {activeStep === 2 && (
              <div className="form-step">
                <h2>Your Information</h2>
                <p>Please provide your contact details. Your information is secure and will not be shared.</p>

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

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                  <button type="button" className="btn btn-primary" onClick={nextStep}>Continue to Payment</button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {activeStep === 3 && (
              <div className="form-step">
                <h2>Payment Details</h2>
                <div className="donation-summary">
                  <div className="summary-header">
                    <h3>Donation Summary</h3>
                  </div>
                  <div className="summary-content">
                    <div className="summary-item">
                      <span>Amount:</span>
                      <span>{formData.amount === 'custom' ? formatCurrency(formData.customAmount) : formatCurrency(formData.amount)}</span>
                    </div>
                    <div className="summary-item">
                      <span>Frequency:</span>
                      <span>{formData.frequency === 'one-time' ? 'One-time donation' : 'Monthly donation'}</span>
                    </div>
                  </div>
                </div>

                <div className="payment-methods">
                  <h3>Select Payment Method</h3>
                  <div className="payment-options">
                    <div 
                      className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'card' } })}
                    >
                      <div className="payment-option-icon">💳</div>
                      <div className="payment-option-text">Credit/Debit Card</div>
                    </div>
                    <div 
                      className={`payment-option ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}
                      onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'paypal' } })}
                    >
                      <div className="payment-option-icon">🅿️</div>
                      <div className="payment-option-text">PayPal</div>
                    </div>
                    <div 
                      className={`payment-option ${formData.paymentMethod === 'mtn' ? 'active' : ''}`}
                      onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'mtn' } })}
                    >
                      <div className="payment-option-icon">📱</div>
                      <div className="payment-option-text">MTN Mobile Money</div>
                    </div>
                    <div 
                      className={`payment-option ${formData.paymentMethod === 'airtel' ? 'active' : ''}`}
                      onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'airtel' } })}
                    >
                      <div className="payment-option-icon">📲</div>
                      <div className="payment-option-text">Airtel Money</div>
                    </div>
                    <div 
                      className={`payment-option ${formData.paymentMethod === 'chipper' ? 'active' : ''}`}
                      onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'chipper' } })}
                    >
                      <div className="payment-option-icon">🌍</div>
                      <div className="payment-option-text">Chipper Cash</div>
                    </div>
                  </div>

                  {/* Card Payment Form */}
                  {formData.paymentMethod === 'card' && (
                    <div className="payment-details">
                      <div className="card-brands">
                        <span className="card-brand">Visa</span>
                        <span className="card-brand">Mastercard</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group half">
                          <label htmlFor="cardExpiry">Expiry Date</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            id="cardExpiry"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group half">
                          <label htmlFor="cardCVC">CVC</label>
                          <input
                            type="text"
                            name="cardCVC"
                            id="cardCVC"
                            placeholder="123"
                            value={formData.cardCVC}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Money Payment Form */}
                  {(formData.paymentMethod === 'mtn' || formData.paymentMethod === 'airtel') && (
                    <div className="payment-details">
                      <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          id="mobileNumber"
                          placeholder="e.g. 0700123456"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <p className="payment-info">
                        You will receive a prompt on your mobile phone to confirm the payment.
                      </p>
                    </div>
                  )}

                  {/* PayPal & Chipper Cash */}
                  {(formData.paymentMethod === 'paypal' || formData.paymentMethod === 'chipper') && (
                    <div className="payment-details">
                      <p className="payment-info">
                        You will be redirected to {formData.paymentMethod === 'paypal' ? 'PayPal' : 'Chipper Cash'} to complete your donation after clicking the button below.
                      </p>
                    </div>
                  )}
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                  <button type="submit" className="btn btn-primary">Complete Donation</button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Side Information Panel */}
        <div className="donation-info-panel">
          <div className="info-panel-content">
            <h3>Why Donate?</h3>
            <p>Your donation makes a real impact in our communities. We ensure that 90% of all donations go directly to our programs.</p>
            
            <div className="testimonial">
              <blockquote>
                "Thanks to donors like you, my children can now attend school and have access to clean water. Your generosity has transformed our lives."
              </blockquote>
              <cite>— Sarah, Community Member</cite>
            </div>
            
            <div className="security-info">
              <h4>Secure Donation</h4>
              <p>All transactions are encrypted and secure. We never store your payment details.</p>
              <div className="security-icons">
                <span className="security-icon">🔒</span>
                <span className="security-text">SSL Secured</span>
              </div>
            </div>
            
            <div className="contact-info">
              <h4>Need Help?</h4>
              <p>Contact our support team:</p>
              <p><strong>Email:</strong> support@touchedhearts.org</p>
              <p><strong>Phone:</strong> +256 700 834 733</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;