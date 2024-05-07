import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center" bg="dark" data-bs-theme="dark">
            <Container >
                <Nav>
                    <Nav.Link href="/" style={{ marginRight: '10px' }} >Home</Nav.Link>
                    <Nav.Link href="/login" style={{ marginRight: '10px' }} >Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
              
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;

