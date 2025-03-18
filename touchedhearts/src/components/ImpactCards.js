import React, { useEffect, useRef } from 'react';
import '../styles/ImpactCards.css';

const ImpactCards = () => {
  const impactData = [
    { number: '10,000+', text: 'Lives Touched', icon: 'heart' },
    { number: '25', text: 'Communities Served', icon: 'users' },
    { number: '15', text: 'Years of Service', icon: 'calendar' },
    { number: '90%', text: 'Funds to Programs', icon: 'dollar-sign' },
  ];
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.impact-item');
      cards.forEach(card => observer.observe(card));
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <section className="impact-numbers" ref={sectionRef}>
      <div className="impact-container">
        {impactData.map((item, index) => (
          <div 
            className="impact-item" 
            key={index}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="impact-icon">
              <i className={`icon-${item.icon}`}></i>
            </div>
            <span className="impact-number">{item.number}</span>
            <p className="impact-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;