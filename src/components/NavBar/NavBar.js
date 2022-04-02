import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="navpadleft" href="/">
            <img
                src="../logo.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Club Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle className = "navpadright" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="me-auto navpadleft">
                    <Nav.Link href="/">Homepage</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}