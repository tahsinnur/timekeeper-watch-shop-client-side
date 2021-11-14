import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const { icon, name, description } = service;
    return (
        <div className="col">
            <div className="card h-100 service-card border-0 p-2">
                <div className="card-body text-center" style={{textAlign:"left"}}>
                    <h4 className="card-title"><i className={icon}></i>  {name}</h4>
                    <p className="card-text fs-6 text-secondary pt-3">{description.slice(0,100)}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;