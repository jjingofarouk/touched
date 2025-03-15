// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.jpg'; // Adjust path as needed
import '../styles/Navbar.css';

const CustomNavLink = ({ to, children, ...props }) => (
  <Nav.Link as={NavLink} to={to} activeClassName="active" {...props}>
    {children}
  </Nav.Link>
);

const CustomDropdownItem = ({ to, children }) => (
  <NavDropdown.Item as={NavLink} to={to} activeClassName="active">
    {children}
  </NavDropdown.Item>
);

const NavbarComponent = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="nav-logo">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menu">
              <CustomNavLink to="/" exact>Home</CustomNavLink>
              <CustomNavLink to="/about">About Us</CustomNavLink>
              <NavDropdown
                title={<>Programs <i className="fas fa-chevron-down"></i></>}
                id="programs-dropdown"
                className="nav-dropdown"
              >
                <CustomDropdownItem to="/education">Education</CustomDropdownItem>
                <CustomDropdownItem to="/healthcare">Healthcare</CustomDropdownItem>
                <CustomDropdownItem to="/disabilities">Disability Support</CustomDropdownItem>
                <CustomDropdownItem to="/community">Community Development</CustomDropdownItem>
              </NavDropdown>
              <CustomNavLink to="/stories">Stories</CustomNavLink>
              <CustomNavLink to="/gallery">Gallery</CustomNavLink>
              <CustomNavLink to="/get-involved">Get Involved</CustomNavLink>
              <CustomNavLink to="/donate" className="btn-donate">Donate Now</CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbar;