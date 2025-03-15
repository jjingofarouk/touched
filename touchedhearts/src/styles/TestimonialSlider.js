/* testimonial-slider.css */
.testimonial-slider {
  padding: 5rem 2rem;
  background: var(--white);
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* Title */
.testimonial-slider h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--dark);
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonial-slider h2::after {
  content: '';
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Testimonial Container */
.testimonial {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(60, 143, 133, 0.05), rgba(44, 114, 105, 0.05));
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(45, 58, 58, 0.1);
  position: relative;
  animation: slideUp 0.8s ease-out forwards;
}

/* Testimonial Text */
.testimonial p {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: var(--dark-gray);
  line-height: 1.8;
  font-style: italic;
  margin: 0 0 1.5rem;
  position: relative;
  padding: 0 2rem;
}

.testimonial p::before,
.testimonial p::after {
  content: '"';
  position: absolute;
  font-size: 3rem;
  color: var(--primary-light);
  opacity: 0.3;
}

.testimonial p::before {
  top: -1rem;
  left: 0;
}

.testimonial p::after {
  bottom: -2rem;
  right: 0;
}

/* Testimonial Author */
.testimonial h4 {
  font-size: 1.2rem;
  color: var(--primary-dark);
  font-weight: 600;
  margin: 0;
  text-align: right;
}

/* Next Button */
.testimonial-slider button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--secondary-color);
  color: var(--white);
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.testimonial-slider button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
}

.testimonial-slider button:hover {
  background: var(--secondary-dark);
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(214, 140, 69, 0.4);
}

.testimonial-slider button:hover::after {
  width: 200%;
  height: 200%;
}

/* Background Effect */
.testimonial-slider::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(60, 143, 133, 0.05) 0%, transparent 70%);
  animation: rotatePulse 25s ease-in-out infinite;
  z-index: 0;
}

/* Animations */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotatePulse {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: rotate(180deg) scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonial-slider {
    padding: 3rem 1rem;
  }

  .testimonial {
    padding: 1.5rem;
    margin: 0 1rem 2rem;
  }

  .testimonial p {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  .testimonial-slider button {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .testimonial-slider h2 {
    font-size: 1.8rem;
  }

  .testimonial p {
    font-size: 1rem;
  }

  .testimonial h4 {
    font-size: 1rem;
  }

  .testimonial p::before,
  .testimonial p::after {
    font-size: 2rem;
  }
}
