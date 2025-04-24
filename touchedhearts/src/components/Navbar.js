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
  const lastScrollTop = useRef(0);
  const navbarRef = useRef(null);
  const navbarHeight = useRef(0);
  
  // Calculate and store navbar height on mount and window resize
  useEffect(() => {
    const updateNavHeight = () => {
      if (navbarRef.current) {
        navbarHeight.current = navbarRef.current.getBoundingClientRect().height;
      }
    };
    
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    
    return () => {
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  // Scroll effect for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      
      // Don't hide navbar when at the top of the page
      if (st <= 10) {
        setVisible(true);
        lastScrollTop.current = st;
        return;
      }
      
      // Don't hide navbar when menu is expanded on mobile
      if (expanded) {
        lastScrollTop.current = st;
        return;
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (st > lastScrollTop.current && st > navbarHeight.current) {
        // Scrolling DOWN
        setVisible(false);
      } else {
        // Scrolling UP
        setVisible(true);
      }
      
      lastScrollTop.current = st;
    };
    
    // Add event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  // Handle clicks outside navbar to close mobile menu
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

  // Styles with CSS-in-JS
  const navbarClasses = `custom-navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`;

  return (
    <header className="navbar-wrapper">
      <Navbar
        ref={navbarRef}
        expand="lg"
        className={navbarClasses}
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        fixed="top"
        aria-label="Main navigation"
      >
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center brand-link">
            <div className="logo-circle">
              <img src={logo} alt="Touched Hearts Logo" className="logo-image" />
            </div>
            <span className="brand-text d-none d-lg-inline ms-2">Touched Hearts</span>
          </Navbar.Brand>

          {/* Brand Name - Visible on mobile only */}
          <div className="brand-name d-flex d-lg-none flex-grow-1 justify-content-center">
            <span className="brand-text">Touched Hearts</span>
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
        /* Important: These are global styles that need to be applied */
        /* You may need to move these to a global CSS file if they're not applying */
        
        .navbar-wrapper {
          position: relative;
          height: 0;
          z-index: 1030;
        }
        
        .custom-navbar {
          background-color: #2d3a3a !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out !important;
        }
        
        .navbar-visible {
          transform: translateY(0);
        }
        
        .navbar-hidden {
          transform: translateY(-100%);
        }
        
        /* Brand styling */
        .brand-link {
          color: #f8f7f5 !important;
        }
        
        .brand-text {
          color: #f8f7f5;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .logo-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          border: 2px solid #8cc5bf;
          transition: transform 0.3s ease;
        }
        
        .logo-circle:hover {
          transform: scale(1.1);
          border-color: #d68c45;
        }
        
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Navigation Links */
        .nav-link-custom {
          color: #f8f7f5 !important;
          transition: color 0.2s ease;
        }
        
        .nav-link-custom:hover {
          color: #8cc5bf !important;
        }
        
        .nav-link-custom.active {
          color: #ffffff !important;
          font-weight: 600;
        }
        
        /* Dropdown Menu */
        .nav-dropdown-custom .dropdown-toggle {
          color: #f8f7f5 !important;
          transition: color 0.2s ease;
        }
        
        .nav-dropdown-custom .dropdown-toggle:hover {
          color: #8cc5bf !important;
        }
        
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
        
        /* Donate Button */
        .donate-button-custom {
          background-color: #d68c45 !important;
          border-color: #d68c45 !important;
          color: #ffffff;
          font-weight: 600;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
        }
        
        .donate-button-custom:hover {
          background-color: #b87339 !important;
          border-color: #b87339 !important;
          transform: scale(1.05);
        }
      `}</style>
    </header>
  );
};

export default Navbars;