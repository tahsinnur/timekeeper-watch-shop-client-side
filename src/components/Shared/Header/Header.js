import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }} sticky="top" className="p-3" collapseOnSelect expand="lg">
                <Container>
                    <Nav.Link as={HashLink} to="/home" className="text-uppercase fs-3 fw-bold text-white"><i className="fas fa-hourglass-start"></i> Timekeeper</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{ fontSize: "14px" }}>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#featured-products">Featured Products</Nav.Link>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link as={Link} style={{ textDecoration: "none" }} className="text-uppercase text-white" to="/allproducts">Explore More</Nav.Link>

                        {user?.email ?
                            <div className="d-flex justify-content-center">
                                <Nav.Link as={Link} style={{ textDecoration: "none" }} className="text-uppercase text-white" to="/dashboard">Dashboard</Nav.Link>
                                <Button onClick={logOut} className="px-4 text-black" style={{ backgroundColor: "white", border: "none" }}>Logout</Button>
                            </div> :
                            <Nav.Link as={Link} to="/login" ><Button className="px-4 text-black" style={{ backgroundColor: "white", border: "none" }}>Login</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;