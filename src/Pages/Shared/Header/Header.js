import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>

                            <button className='btn btn-link text-light text-decoration-none'>sign out</button>
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;