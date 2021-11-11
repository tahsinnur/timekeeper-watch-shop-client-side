import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <Container fluid style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }} className="footer text-white text-center footer py-5 mt-5">

                <div className="container row row-cols-1 row-cols-md-3 g-5 pb-3 mx-auto">
                    <div className="col text-start">
                        <h5 className="fw-bold">About Us</h5>
                        <small className="text-secondary">Here at TIMEKEEPER, our goal and mission is to be the most trusted marketplace for watches online.
                            We’re here to help you find and buy the perfect luxury watch that you’ve been looking for. We do our part by purchasing luxury watches directly from all around the world to provide you with the lowest cost, but still best quality of watches for all of our customers.</small>
                    </div>
                    <div className="col text-start">
                        <h5 className="fw-bold">Newsletter</h5>
                    </div>
                    <div className="col text-start">
                        <h5 className="fw-bold">Follow Us</h5>
                        <p className="text-secondary">Let us be social</p>
                        <div className="social-icon">
                            <ul>
                                <li><Link style={{ color: "white" }} to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link style={{ color: "white" }} to="/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link style={{ color: "white" }} to="/"><i className="fab fa-google-plus-g"></i></Link></li>
                                <li><Link style={{ color: "white" }} to="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-secondary"><small><i className="far fa-copyright"></i> 2021 TIMEKEEPER BD, Inc. All Rights reserved</small></p>
                </div>
            </Container>
        </>
    );
};

export default Footer;