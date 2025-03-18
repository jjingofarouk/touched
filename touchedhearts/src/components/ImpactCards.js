import React, { useEffect, useRef } from 'react';
import '../styles/ImpactCards.css';

const ImpactCards = () => {
  const impactData = [
    { id: 'lives', number: '10,000+', text: 'Lives Touched', icon: '❤️' },
    { id: 'communities', number: '25', text: 'Communities Served', icon: '🏘️' },
    { id: 'years', number: '15', text: 'Years of Service', icon: '⏱️' },
    { id: 'funds', number: '90%', text: 'Funds to Programs', icon: '💰' },
  ];
  
  // Refs for intersection observer
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  
  // Setup counter animation function
  const animateCounter = (element, targetNumber) => {
    if (!element) return;
    
    // Parse the target number (handling special characters)
    let target = parseInt(targetNumber.replace(/[^0-9]/g, ''));
    if (isNaN(target)) target = 0;
    
    // Get special characters
    const specialChars = targetNumber.replace(/[0-9]/g, '');
    
    // Animation duration and FPS
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    
    // Easing function
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
    
    let frame = 0;
    
    // Animation function
    const counter = () => {
      frame++;
      const progress = easeOutQuart(frame / totalFrames);
      const currentCount = Math.round(target * progress);
      
      // Update the counter content with special characters
      element.textContent = `${currentCount}${specialChars}`;
      
      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      }
    };
    
    requestAnimationFrame(counter);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // If this is a counter element, animate it
            if (entry.target.classList.contains('impact-item')) {
              const numberElement = entry.target.querySelector('.impact-number');
              const targetNumber = numberElement.getAttribute('data-target');
              animateCounter(numberElement, targetNumber);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe the main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe each impact item
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="impact-numbers" 
      aria-label="Our Impact Statistics"
    >
      <div className="impact-container">
        {impactData.map((item, index) => (
          <div 
            className="impact-item" 
            key={item.id}
            ref={el => itemRefs.current[index] = el}
            style={{ '--index': index }}
          >
            <div className="impact-card">
              <div className="impact-icon">{item.icon}</div>
              <span 
                className="impact-number" 
                data-target={item.number}
              >
                0
              </span>
              <p className="impact-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;