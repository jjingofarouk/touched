// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Adjust path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </NavLink>
          <button
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-dropdown">
              <NavLink to="/programs" className="nav-link" activeClassName="active">
                Programs <i className="fas fa-chevron-down"></i>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/healthcare">Healthcare</NavLink>
                </li>
                <li>
                  <NavLink to="/disabilities">Disability Support</NavLink>
                </li>
                <li>
                  <NavLink to="/community">Community Development</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/stories" className="nav-link" activeClassName="active">
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="nav-link" activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li className="nav-dropdown">
              <NavLink to="/get-involved" className="nav-link" activeClassName="active">
                Get Involved <i className="fas fa-chevron-down"></i>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/volunteers">Volunteers</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">Partners</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/donate" className="nav-link btn-donate" activeClassName="active">
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