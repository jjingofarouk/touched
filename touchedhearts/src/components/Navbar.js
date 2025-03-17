import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Touched Hearts Logo"
            height="30" // Bootstrap default logo height
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About Us
            </Nav.Link>
            <NavDropdown title="Programs" id="programs-nav-dropdown">
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
            <Nav.Link as={NavLink} to="/stories" activeClassName="active">
              Stories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" activeClassName="active">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/get-involved" activeClassName="active">
              Get Involved
            </Nav.Link>
            <Nav.Link as={NavLink} to="/donate" activeClassName="active">
              Donate Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;