import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../assets/images/logo.jpg';

const Navbars = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
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
          </Nav>
          {/* Search Bar */}
          <Form className="d-flex me-3">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="bg-dark text-light border-secondary"
              />
              <Button variant="outline-light" type="submit">
                <i className="fas fa-search" /> {/* Font Awesome icon */}
              </Button>
            </InputGroup>
          </Form>
          {/* Donate Now Button */}
          <Button
            as={NavLink}
            to="/donate"
            variant="warning" // Colorful option (yellow-orange)
            className="ms-2"
            activeClassName="active"
          >
            Donate Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;