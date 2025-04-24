import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(true);
  const prevScrollY = useRef(0);
  const navbarRef = useRef(null);

  const styles = {
    navbarContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'transform 0.3s ease',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    },
    navbar: {
      backgroundColor: '#2d3a3a',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%',
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

  // Improved scroll effect for hiding/showing navbar
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolling up or down
      const isScrollingUp = currentScrollY < prevScrollY.current;
      setScrollingUp(isScrollingUp);
      
      // Update visibility based on scroll direction and position
      if (!isScrollingUp && currentScrollY > 100) {
        setVisible(false);
        // Also close the menu if it's expanded
        if (expanded) setExpanded(false);
      } else if (isScrollingUp || currentScrollY < 50) {
        setVisible(true);
      }
      
      // Save current scroll position for next comparison
      prevScrollY.current = currentScrollY;
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]); // Re-run when expanded state changes

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
        const togglerElement = navbarRef.current?.querySelector('.navbar-toggler');
        if (togglerElement) togglerElement.focus();
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
    <div style={styles.navbarContainer} className="navbar-container">
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
                className="nav-dropdown-custom"
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
                    className="dropdown-item-custom"
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
      </Navbar>

      <style jsx>{`
        /* Set space to compensate for fixed navbar */
        body {
          padding-top: 56px;
        }
        
        @media (min-width: 992px) {
          body {
            padding-top: 64px;
          }
        }
        
        /* Navigation Links */
        .nav-link-custom, .nav-dropdown-custom .dropdown-toggle {
          color: #f8f7f5 !important;
          transition: color 0.2s ease;
        }
        
        .nav-link-custom:hover, 
        .nav-dropdown-custom .dropdown-toggle:hover {
          color: #8cc5bf !important;
        }
        
        .nav-link-custom.active {
          color: #ffffff !important;
          font-weight: 600;
        }
        
        /* Dropdown Menu Styling */
        .dropdown-menu {
          background-color: #343f3f !important;
          border: 1px solid #495757 !important;
          padding: 0.5rem 0 !important;
          margin-top: 0.5rem !important;
          min-width: 12rem !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
        }
        
        .dropdown-item-custom {
          color: #f8f7f5 !important;
          padding: 0.5rem 1.5rem !important;
          font-size: 0.95rem !important;
        }
        
        .dropdown-item-custom:hover {
          background-color: #8cc5bf !important;
          color: #ffffff !important;
        }
        
        .dropdown-item-custom.active {
          background-color: #2d3a3a !important;
          color: #ffffff !important;
          font-weight: 600;
        }
        
        /* Dropdown toggle appearance */
        .dropdown-toggle::after {
          vertical-align: middle;
        }
        
        /* Button styling */
        .donate-button-custom {
          background-color: #d68c45 !important;
          border-color: #d68c45 !important;
        }
        
        .donate-button-custom:hover {
          background-color: #b87339 !important;
          border-color: #b87339 !important;
          transform: scale(1.05);
        }
        
        /* Logo and brand styling */
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
        
        /* Make nav dropdown text white too */
        .nav-dropdown-custom .dropdown-toggle {
          color: #f8f7f5 !important;
        }
      `}</style>
    </div>
  );
};

export default Navbars;