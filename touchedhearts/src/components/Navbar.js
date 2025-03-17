import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </NavLink>
          <button
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`navbar-collapse ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item nav-dropdown">
                <NavLink to="/programs" className="nav-link dropdown-toggle" activeClassName="active">
                  Programs
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/education" className="dropdown-item">Education</NavLink>
                  </li>
                  <li>
                    <NavLink to="/healthcare" className="dropdown-item">Healthcare</NavLink>
                  </li>
                  <li>
                    <NavLink to="/disabilities" className="dropdown-item">Disability Support</NavLink>
                  </li>
                  <li>
                    <NavLink to="/community" className="dropdown-item">Community Development</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/stories" className="nav-link" activeClassName="active">
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className="nav-link" activeClassName="active">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/get-involved" className="nav-link" activeClassName="active">
                  Get Involved
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/donate" className="nav-link btn-donate" activeClassName="active">
                  Donate Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;