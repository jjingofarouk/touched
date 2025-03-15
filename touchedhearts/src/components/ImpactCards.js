// src/components/ImpactCards.js
import React from 'react';
import '../styles/ImpactCards.css';

const ImpactCards = () => {
  const impactData = [
    { number: '10,000+', text: 'Lives Touched' },
    { number: '25', text: 'Communities Served' },
    { number: '15', text: 'Years of Service' },
    { number: '90%', text: 'Funds to Programs' },
  ];

  return (
    <section className="impact-numbers">
      <div className="impact-container">
        {impactData.map((item, index) => (
          <div className="impact-item" key={index}>
            <span className="impact-number">{item.number}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;