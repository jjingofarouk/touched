import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Added NavDropdown
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

// Utility function to debounce scroll events
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const navbarRef = useRef(null);

  const styles = {
    navbar: {
      backgroundColor: '#2d3a3a',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'top 0.3s ease-in-out',
      position: 'fixed',
      top: visible ? '0' : '-100px',
      left: 0,
      width: '100%',
      zIndex: 1000,
    },
    navLink: { color: '#f8f7f5' },
    donateButton: {
      backgroundColor: '#d68c45',
      borderColor: '#d68c45',
      color: '#ffffff',
      fontWeight: 600,
      padding: '0.5rem 1rem',
      transition: 'all 0.2s ease',
    },
    brandText: {
      color: '#f8f7f5',
      fontSize: '1.2rem',
      fontWeight: 700,
      letterSpacing: '1px',
      marginLeft: '0.5rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    logoContainer: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      border: '2px solid #8cc5bf',
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  // Scroll effect for hide/show navbar
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setVisible(false);
        setExpanded(false); // Close mobile menu when hiding
      } else if (currentScrollY < prevScrollY || currentScrollY <= 50) {
        setVisible(true);
      }
      setPrevScrollY(currentScrollY);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Handle clicks outside navbar and Escape key for mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && expanded) {
        setExpanded(false);
        navbarRef.current.querySelector('.navbar-toggler').focus(); // Return focus to toggler
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [expanded]);

  return (
    <Navbar
      expand="lg"
      style={styles.navbar}
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      ref={navbarRef}
      aria-label="Main navigation"
    >
      <Container className="d-flex align-items-center">
        <Navbar.Brand as={NavLink} to="/" style={styles.navLink} className="d-flex align-items-center">
          <div style={styles.logoContainer} className="logo-circle">
            <img
              src={logo}
              alt="Touched Hearts Logo"
              style={styles.logoImage}
              className="logo-image"
            />
          </div>
          <span style={styles.brandText} className="d-none d-lg-inline ms-2">
            Touched Hearts
          </span>
        </Navbar.Brand>

        {/* Brand Name - Visible on mobile only */}
        <div className="brand-name d-flex d-lg-none flex-grow-1 justify-content-center">
          <span style={styles.brandText}>Touched Hearts</span>
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/stories', label: 'Stories' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/get-involved', label: 'Get Involved' },
            ].map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                style={styles.navLink}
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
                aria-current={item.to === window.location.pathname ? 'page' : undefined}
              >
                {item.label}
              </Nav.Link>
            ))}
            {/* Programs Dropdown */}
            <NavDropdown
              title="Programs"
              id="programs-nav-dropdown"
              style={styles.navLink}
              className="nav-link-custom"
              onClick={() => setExpanded(false)} // Close mobile menu on dropdown click
            >
              {[
                { to: '/education', label: 'Education' },
                { to: '/healthcare', label: 'Healthcare' },
                { to: '/disabilities', label: 'Disability Support' },
                { to: '/community', label: 'Community' },
              ].map((item) => (
                <NavDropdown.Item
                  key={item.to}
                  as={NavLink}
                  to={item.to}
                  onClick={() => setExpanded(false)}
                  aria-current={item.to === window.location.pathname ? 'page' : undefined}
                >
                  {item.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Button
              as={NavLink}
              to="/donate"
              style={styles.donateButton}
              className="donate-button-custom ms-2"
              onClick={() => setExpanded(false)}
            >
              Donate Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-link-custom:hover,
        .nav-dropdown-custom:hover {
          color: #8cc5bf !important;
          transition: color 0.2s ease;
        }
        .nav-link-custom.active {
          color: #ffffff !important;
          font-weight: 600;
        }
        .dropdown-item:hover {
          background-color: #8cc5bf !important;
          color: #ffffff !important;
        }
        .dropdown-item.active {
          background-color: #2d3a3a !important;
          color: #ffffff !important;
          font-weight: 600;
        }
        .donate-button-custom {
          background-color: #d68c45 !important;
          border-color: #d68c45 !important;
        }
        .donate-button-custom:hover {
          background-color: #b87339 !important;
          border-color: #b87339 !important;
          transform: scale(1.05);
        }
        .brand-name span:hover {
          color: #8cc5bf !important;
          transition: color 0.2s ease;
        }
        .logo-circle {
          transition: transform 0.3s ease;
        }
        .logo-circle:hover {
          transform: scale(1.1);
          border-color: #d68c45;
        }
        .logo-image {
          transition: transform 0.3s ease;
        }
      `}</style>
    </Navbar>
  );
};

export default Navbars;