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
                    <Nav.Link as={HashLink} to="/home" className="text-uppercase fs-3 fw-bold text-white"><i class="fas fa-hourglass-start"></i> Timekeeper</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{ fontSize: "14px" }}>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#products">Featured Products</Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: "none" }} className="text-uppercase text-white" to="/allproducts">Explore More</Link></Nav.Link>

                        {user?.email ?
                            <div className="d-flex">
                                <Nav.Link><Link style={{ textDecoration: "none" }} className="text-uppercase text-white" to="/dashboard">Dashboard</Link></Nav.Link>
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