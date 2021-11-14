import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.css'

const ProductsCard = ({product}) => {
    const { _id, img, name, description, price } = product;
    return (
        <div className="col">
            <div className="card h-100 product-card border-0">
                
                <img style={{ height: "350px" }} src={img} className="card-img-top" alt="" />

                <div className="card-body" style={{textAlign:"left"}}>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text fs-6 text-secondary">{description.slice(0,70)}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    <Link to={`/purchase/${_id}`}><button style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }} className="border-0 rounded text-white fs-6 px-3 py-2 mt-4">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;