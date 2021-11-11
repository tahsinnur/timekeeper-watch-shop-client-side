import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar style={{backgroundColor:"rgba(4, 9, 30, 0.9)"}} sticky="top" className="p-3" collapseOnSelect expand="lg">
                <Container>
                    <Nav.Link as={HashLink} to="/home" className="text-uppercase fs-3 fw-bold text-white"><i class="fas fa-hourglass-start"></i> Timekeeper</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{fontSize:"14px"}}>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-uppercase text-white" as={HashLink} to="/home#products">Featured Products</Nav.Link>
                        <Nav.Link><Link style={{textDecoration:"none"}} className="text-uppercase text-white" to="/allproducts">Explore More</Link></Nav.Link>

                        <Nav.Link><Link style={{textDecoration:"none"}} className="text-uppercase text-white" to="/dashboard">Dashboard</Link></Nav.Link>
                        {/* {user?.email ?
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{ fontSize: "18px", color: "white", backgroundColor: "tomato", border: "none" }}>
                                    {user.displayName}
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ fontSize: "18px" }}>
                                    <Dropdown.Item><Link to="/myorders" style={{ textDecoration: "none", color: "#264247" }}>My Orders</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/manageorders" style={{ textDecoration: "none", color: "#264247" }}>Manage Orders</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/addanewpackage" style={{ textDecoration: "none", color: "#264247" }}>Add A New Package</Link></Dropdown.Item>
                                    <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> :
                            <Nav.Link as={Link} to="/login" ><Button className="px-4" style={{ fontSize: "18px", backgroundColor: "tomato", border: "none" }}>Login</Button></Nav.Link>
                        } */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;