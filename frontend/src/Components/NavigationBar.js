import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carLogo from '../assets/car-logo.jfif';

class NavigationBar extends React.Component {

    logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.href = "/";
    }

    render() {
        const isLoggedIn =
            localStorage.getItem("username") &&
            localStorage.getItem("password");

        return (
            <Navbar bg="dark" variant="dark" className="px-3">
                <Link to={isLoggedIn ? "/welcome" : "/"} className="navbar-brand">
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
                    {isLoggedIn && (
                        <>
                            <Link to="/welcome" className="nav-link">Home</Link>
                            <Link to="/add" className="nav-link">Add Car</Link>
                            <Link to="/list" className="nav-link">Car List</Link>
                        </>
                    )}
                </Nav>

                <Nav>
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                        </>
                    ) : (
                        <Button variant="outline-light" size="sm" onClick={this.logout}>
                            Logout
                        </Button>
                    )}
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;