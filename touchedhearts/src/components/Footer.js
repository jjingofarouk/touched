import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-column footer-brand">
          <NavLink to="/" className="footer-logo" aria-label="Touched Hearts Home">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </NavLink>
          <p className="footer-tagline">Transforming lives with compassion and hope</p>
          <div className="social-links">
            <a href="https://facebook.com/touchedhearts" aria-label="Follow us on Facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/touchedhearts" aria-label="Follow us on Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/touchedhearts" aria-label="Follow us on Instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/touchedhearts" aria-label="Connect with us on LinkedIn" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com/touchedhearts" aria-label="Subscribe to our YouTube channel" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <nav aria-label="Footer quick links">
            <ul className="footer-links">
              <li><NavLink to="/about" className="footer-link">About Us</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">Our Programs</NavLink></li>
              <li><NavLink to="/get-involved" className="footer-link">Get Involved</NavLink></li>
              <li><NavLink to="/donate" className="footer-link" data-highlight="true">Donate</NavLink></li>
              <li><NavLink to="/events" className="footer-link">Events</NavLink></li>
              <li><NavLink to="/blog" className="footer-link">News & Updates</NavLink></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <nav aria-label="Footer resources">
            <ul className="footer-links">
              <li><NavLink to="/annual-reports" className="footer-link">Project Reports</NavLink></li>
              <li><NavLink to="/financial-statements" className="footer-link">Financial Statements</NavLink></li>
              <li><NavLink to="/media" className="footer-link">Media Resources</NavLink></li>
              <li><NavLink to="/stories" className="footer-link">Success Stories</NavLink></li>
              <li><NavLink to="/faq" className="footer-link">FAQs</NavLink></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>123 Kampala Road, Kampala, Uganda</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <a href="tel:+256700834733">+256 700 834 733</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:touchedheartsfoundation@gmail.com">touchedheartsfoundation@gmail.com</a>
            </div>
          </address>
          <div className="newsletter">
            <h4 className="newsletter-heading">Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" aria-label="Email for newsletter" />
              <button type="submit" className="newsletter-button" aria-label="Subscribe">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© 2025 Touched Hearts. All rights reserved.</p>
        <div className="footer-bottom-right">
          <ul className="legal-links">
            <li><NavLink to="/privacy" className="legal-link">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="legal-link">Terms of Service</NavLink></li>
            <li><NavLink to="/accessibility" className="legal-link">Accessibility</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;