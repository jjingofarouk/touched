// src/components/TestimonialSlider.js
import React, { useState } from 'react';
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

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-slider">
      <h2>What People Say</h2>
      <div className="testimonial">
        <p>"{testimonials[current].text}"</p>
        <h4>- {testimonials[current].name}</h4>
      </div>
      <button onClick={nextTestimonial}>Next</button>
    </section>
  );
};

export default TestimonialSlider;