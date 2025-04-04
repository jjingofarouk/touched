import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0); // Renamed for clarity
  const navbarRef = useRef(null);

  const styles = {
    navbar: {
      backgroundColor: '#2d3a3a',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'top 0.3s ease-in-out', // Changed to 'top' for simpler control
      position: 'fixed',
      top: visible ? '0' : '-100px', // Move navbar up/down instead of transform
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
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down past 50px
        setVisible(false);
      } else if (currentScrollY < prevScrollY || currentScrollY === 0) {
        // Scrolling up or at the top
        setVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Handle click outside and Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && expanded) {
        setExpanded(false);
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
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={styles.navLink}>
          <img
            src={logo}
            alt="Touched Hearts Logo"
            height="25"
            width="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={styles.navLink} className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={styles.navLink} className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/education" style={styles.navLink} className="nav-link-custom">
              Education
            </Nav.Link>
            <Nav.Link as={NavLink} to="/healthcare" style={styles.navLink} className="nav-link-custom">
              Healthcare
            </Nav.Link>
            <Nav.Link as={NavLink} to="/disabilities" style={styles.navLink} className="nav-link-custom">
              Disability Support
            </Nav.Link>
            <Nav.Link as={NavLink} to="/community" style={styles.navLink} className="nav-link-custom">
              Community
            </Nav.Link>
            <Nav.Link as={NavLink} to="/stories" style={styles.navLink} className="nav-link-custom">
              Stories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" style={styles.navLink} className="nav-link-custom">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/get-involved" style={styles.navLink} className="nav-link-custom">
              Get Involved
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Button
              as={NavLink}
              to="/donate"
              style={styles.donateButton}
              className="donate-button-custom ms-2"
            >
              Donate Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-link-custom:hover {
          color: #8cc5bf !important;
          transition: color 0.2s ease;
        }
        .nav-link-custom.active {
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
      `}</style>
    </Navbar>
  );
};

export default Navbars;