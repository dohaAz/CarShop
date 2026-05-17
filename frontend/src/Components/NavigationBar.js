import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carLogo from '../assets/car-logo.jfif';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          <img
            src={carLogo}
            width="25"
            height="25"
            alt="Car Logo"
            className="me-2"
          />
          Car Shop
        </Link>

        <Nav className="me-auto">
          <Link to="/add" className="nav-link">Add Car</Link>
          <Link to="/list" className="nav-link">Car List</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;