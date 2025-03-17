// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Adjust path as needed
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" onClick={closeMenu}>
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </NavLink>
          
          <button
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menu">
            <li role="none">
              <NavLink to="/" className="nav-link" activeClassName="active" exact onClick={closeMenu} role="menuitem">
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={closeMenu} role="menuitem">
                About Us
              </NavLink>
            </li>
            <li className="nav-dropdown" role="none">
              <button 
                className="nav-link dropdown-toggle" 
                aria-haspopup="true" 
                aria-expanded={activeDropdown === 'programs'} 
                onClick={() => toggleDropdown('programs')}
                role="menuitem"
              >
                Programs <i className={`fas fa-chevron-${activeDropdown === 'programs' ? 'up' : 'down'}`}></i>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'programs' ? 'show' : ''}`} role="menu">
                <li role="none">
                  <NavLink to="/education" onClick={closeMenu} role="menuitem">Education</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/healthcare" onClick={closeMenu} role="menuitem">Healthcare</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/disabilities" onClick={closeMenu} role="menuitem">Disability Support</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/community" onClick={closeMenu} role="menuitem">Community Development</NavLink>
                </li>
              </ul>
            </li>
            <li role="none">
              <NavLink to="/stories" className="nav-link" activeClassName="active" onClick={closeMenu} role="menuitem">
                Stories
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="/gallery" className="nav-link" activeClassName="active" onClick={closeMenu} role="menuitem">
                Gallery
              </NavLink>
            </li>
            <li className="nav-dropdown" role="none">
              <button 
                className="nav-link dropdown-toggle" 
                aria-haspopup="true" 
                aria-expanded={activeDropdown === 'getInvolved'} 
                onClick={() => toggleDropdown('getInvolved')}
                role="menuitem"
              >
                Get Involved <i className={`fas fa-chevron-${activeDropdown === 'getInvolved' ? 'up' : 'down'}`}></i>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'getInvolved' ? 'show' : ''}`} role="menu">
                <li role="none">
                  <NavLink to="/volunteers" onClick={closeMenu} role="menuitem">Volunteers</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/partners" onClick={closeMenu} role="menuitem">Partners</NavLink>
                </li>
              </ul>
            </li>
            <li role="none" className="donate-button">
              <NavLink to="/donate" className="nav-link btn-donate" activeClassName="active" onClick={closeMenu} role="menuitem">
                Donate Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;