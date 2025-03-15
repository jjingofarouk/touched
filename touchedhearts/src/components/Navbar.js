import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.jpg'; // Adjust path as needed
import '../styles/Navbar.css';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <header>
      <Navbar expand="lg" expanded={expanded} className="navbar">
        <Container className="nav-container">
          <Navbar.Brand as={NavLink} to="/" className="nav-logo">
            <img src={logo} alt="Touched Hearts Logo" className="logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={toggleMenu}
            className={expanded ? 'active' : ''}
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" exact className="nav-link">
                Home
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About Us
              </Nav.Link>
              
              <NavDropdown title="Programs" id="programs-dropdown" className="nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/education">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/healthcare">
                  Healthcare
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/disabilities">
                  Disability Support
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/community">
                  Community Development
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={NavLink} to="/stories" className="nav-link">
                Stories
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/gallery" className="nav-link">
                Gallery
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/get-involved" className="nav-link">
                Get Involved
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/donate" className="nav-link btn-donate">
                Donate Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbar;