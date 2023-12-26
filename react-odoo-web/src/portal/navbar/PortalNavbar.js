import React from "react";
import { Button, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const PortalNavbar = () => {

    const navigate = useNavigate();    
    const logout = () => {
        localStorage.clear();
        navigate('/auth/login');
    }

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" className="navbar-dark" fixed="top">
                <Container>
                    <Navbar.Brand>Goldencrop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <button onClick={()=>navigate('/')}>
                            Home
                        </button>
                        {/* <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>                         */}
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Button className="btn-warning" onClick={logout}>Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default PortalNavbar;