import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  // Helper function to determine if a link is active (for react-router-dom v6)
  const getLinkClassName = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar expand="lg" style={{backgroundColor: '#b0c4de'}} variant="light">
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
            
            {/* Programs links directly in the navbar */}
            <Nav.Link as={NavLink} to="/education" className={getLinkClassName}>
              Education
            </Nav.Link>
            <Nav.Link as={NavLink} to="/healthcare" className={getLinkClassName}>
              Healthcare
            </Nav.Link>
            <Nav.Link as={NavLink} to="/disabilities" className={getLinkClassName}>
              Disability Support
            </Nav.Link>
            <Nav.Link as={NavLink} to="/community" className={getLinkClassName}>
              Community Dev
            </Nav.Link>
            
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
              style={{
                backgroundColor: '#FF6D42',
                borderColor: '#FF6D42',
                fontWeight: '600'
              }}
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