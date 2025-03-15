import React, { useState, useEffect, useRef } from 'react';
import '../styles/TestimonialSlider.css';

const testimonials = [
  {
    name: 'Aisha N.',
    text: "Touched Hearts gave my children access to quality education. I'm forever grateful!",
  },
  {
    name: 'David K.',
    text: 'Their medical outreach saved my father’s life. A truly impactful organization!',
  },
  {
    name: 'Grace T.',
    text: 'The skills training program helped me start my own business. Thank you!',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change every 5 seconds
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrent(index);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section
      className="testimonial-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>What People Say</h2>
      <div className="testimonial">
        <p>"{testimonials[current].text}"</p>
        <h4>- {testimonials[current].name}</h4>
      </div>
      <button className="nav-button prev" onClick={prevTestimonial}>
        Previous
      </button>
      <button className="nav-button next" onClick={nextTestimonial}>
        Next
      </button>
      <div className="progress-dots" style={{ textAlign: 'center', marginTop: '3rem' }}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => goToTestimonial(index)}
            style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              margin: '0 6px',
              backgroundColor: index === current ? 'var(--primary-dark)' : 'var(--light-gray)',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;