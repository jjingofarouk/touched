import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  // Helper function to determine if a link is active (for react-router-dom v6)
  const getLinkClassName = ({ isActive }) => isActive ? "nav-link active" : "nav-link";
  const getDropdownItemClassName = ({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item";

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
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
            <Nav.Link as={NavLink} to="/" className={getLinkClassName}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={getLinkClassName}>
              About Us
            </Nav.Link>
            <NavDropdown title="Programs" id="programs-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/education" className={getDropdownItemClassName}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/healthcare" className={getDropdownItemClassName}>
                Healthcare
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/disabilities" className={getDropdownItemClassName}>
                Disability Support
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/community" className={getDropdownItemClassName}>
                Community Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/stories" className={getLinkClassName}>
              Stories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className={getLinkClassName}>
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/get-involved" className={getLinkClassName}>
              Get Involved
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Button
              as={NavLink}
              to="/donate"
              variant="warning"
              className="ms-2"
            >
              Donate Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;