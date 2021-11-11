import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import B1 from '../../../images/Banner1.jpg';
import B2 from '../../../images/Banner2.jpg';
import B3 from '../../../images/Banner3.jpg';

const Banner = () => {
    return (
        <Container fluid className="p-0">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        height="750px"
                        className="d-block w-100"
                        src={B1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold">Welcome to Timekeeper</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="750px"
                        className="d-block w-100"
                        src={B2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold">Select Your New Perfect Style</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="750px"
                        className="d-block w-100"
                        src={B3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" >Time is what we want most but what we use worst.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;