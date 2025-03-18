import React from 'react';
import '../styles/ImpactCards.css';

const ImpactCards = () => {
  const impactData = [
    { id: 'lives', number: '10,000+', text: 'Lives Touched', delay: 0.1 },
    { id: 'communities', number: '25', text: 'Communities Served', delay: 0.2 },
    { id: 'years', number: '15', text: 'Years of Service', delay: 0.3 },
    { id: 'funds', number: '90%', text: 'Funds to Programs', delay: 0.4 },
  ];

  return (
    <section className="impact-numbers" aria-label="Our Impact Statistics">
      <div className="impact-container">
        {impactData.map((item) => (
          <div 
            className="impact-item" 
            key={item.id}
            style={{ '--animation-delay': `${item.delay}s` }}
          >
            <span className="impact-number">{item.number}</span>
            <p className="impact-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;