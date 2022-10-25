import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShekelSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Header.css';
import ReactSwitch from 'react-switch';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container className="d-lg-flex justify-content-lg-between" >
                <Navbar.Brand href="#home">Techdemy <FaShekelSign></FaShekelSign> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav.Link><Link to="/courses"><Button variant="light">Courses</Button></Link></Nav.Link>
                        <Nav.Link><Link to="/faq"><Button variant="light">FAQ</Button></Link></Nav.Link>
                        <Nav.Link><Link to="/blog"><Button variant="light">Blogs</Button></Link></Nav.Link>

                        <Nav.Link><Link to="/login"><Button variant="light">Log in</Button></Link></Nav.Link>
                        <Nav.Link><ReactSwitch></ReactSwitch></Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar >
    );
};

export default Header;