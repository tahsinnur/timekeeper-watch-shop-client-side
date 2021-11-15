import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch("https://morning-badlands-90985.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container id="services">
            <div className="pt-5 pb-4 text-center">
                <h2 style={{ color: "rgba(4, 9, 30, 0.9)" }}>Some Features that Made us Unique</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </Container>
    );
};

export default Services;