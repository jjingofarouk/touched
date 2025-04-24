import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const navbarRef = useRef(null);
  const navbarHeight = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st <= 10) {
        setVisible(true);
        lastScrollTop.current = st;
        return;
      }

      if (expanded) {
        lastScrollTop.current = st;
        return;
      }

      if (st > lastScrollTop.current && st > navbarHeight.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollTop.current = st;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        expanded &&
        !event.target.closest('.dropdown-menu')
      ) {
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

          <div className="brand-name d-flex d-lg-none flex-grow-1 justify-content-center">
            <span className="brand-text">Touched Hearts</span>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
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
              <NavDropdown
                title="Programs"
                id="programs-nav-dropdown"
                className="nav-dropdown-custom"
                renderMenuOnMount={true}
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
    </header>
  );
};

export default Navbars;