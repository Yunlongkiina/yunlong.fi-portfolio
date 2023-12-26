import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AuthNavbar = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container style={{display: 'flex',justifyContent: 'center'}}>
                    <Navbar.Brand style={{fontSize:'40px'}}>Login</Navbar.Brand>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default AuthNavbar;