 // src/components/Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Adjust path as needed
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-column">
          <NavLink to="/" className="footer-logo">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </NavLink>
          <p className="footer-tagline">Transforming lives with compassion and hope</p>
          <div className="social-links">
            <a href="https://facebook.com/touchedhearts" aria-label="Facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/touchedhearts" aria-label="Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/touchedhearts" aria-label="Instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/touchedhearts" aria-label="LinkedIn" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com/touchedhearts" aria-label="YouTube" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/about" className="footer-link">About Us</NavLink></li>
            <li><NavLink to="/programs" className="footer-link">Our Programs</NavLink></li>
            <li><NavLink to="/get-involved" className="footer-link">Get Involved</NavLink></li>
            <li><NavLink to="/donate" className="footer-link">Donate</NavLink></li>
            <li><NavLink to="/events" className="footer-link">Events</NavLink></li>
            <li><NavLink to="/blog" className="footer-link">News & Updates</NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li><NavLink to="/annual-reports" className="footer-link">Annual Reports</NavLink></li>
            <li><NavLink to="/financial-statements" className="footer-link">Financial Statements</NavLink></li>
            <li><NavLink to="/media" className="footer-link">Media Resources</NavLink></li>
            <li><NavLink to="/stories" className="footer-link">Success Stories</NavLink></li>
            <li><NavLink to="/faq" className="footer-link">FAQs</NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> 123 Kampala Road, Kampala, Uganda</p>
            <p><i className="fas fa-phone"></i> +256 700 834 733</p>
            <p>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:touchedheartsug12@gmail.com">touchedheartsug12@gmail.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 Touched Hearts. All rights reserved.</p>
        <ul className="legal-links">
          <li><NavLink to="/privacy" className="legal-link">Privacy Policy</NavLink></li>
          <li><NavLink to="/terms" className="legal-link">Terms of Service</NavLink></li>
          <li><NavLink to="/accessibility" className="legal-link">Accessibility</NavLink></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;