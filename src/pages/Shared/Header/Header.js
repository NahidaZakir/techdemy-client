import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShekelSign, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Header.css';

import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
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

                        <Nav.Link>
                            {
                                user?.uid ? <>
                                    <Button className='me-3' variant="light" onClick={handleLogOut}>Log Out</Button>
                                    {
                                        user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUser></FaUser>
                                    }



                                </> :
                                    <Link to="/login"><Button variant="light">Log in</Button></Link>
                            }
                        </Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar >
    );
};

export default Header;