.impact-numbers {
  --card-transition-duration: 0.6s;
  --number-animation-duration: 2s;
  
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  position: relative;
  overflow: hidden;
}

/* Background decoration */
.impact-numbers::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
  opacity: 0.4;
  border-radius: 50%;
}

.impact-numbers::after {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -5%;
  width: 30%;
  height: 30%;
  background: radial-gradient(circle, var(--secondary-light) 0%, transparent 70%);
  opacity: 0.3;
  border-radius: 50%;
}

.impact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.impact-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: calc(var(--index) * 0.1s);
}

.impact-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.impact-card {
  background: var(--white);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform var(--card-transition-duration) ease, 
              box-shadow var(--card-transition-duration) ease;
}

.impact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--secondary-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease-out;
}

.impact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.impact-card:hover::before {
  transform: scaleX(1);
}

.impact-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--off-white);
  box-shadow: 0 4px 15px rgba(58, 143, 133, 0.15);
}

.impact-number {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.impact-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--dark-gray);
  margin: 0;
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .impact-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .impact-container {
    grid-template-columns: 1fr;
  }
  
  .impact-card {
    padding: 1.5rem 1rem;
  }
  
  .impact-number {
    font-size: 2.8rem;
  }
}

/* Animation for the card appearance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Subtle pulse animation for the numbers */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.impact-number.animated {
  animation: pulse 2s ease-in-out;
}