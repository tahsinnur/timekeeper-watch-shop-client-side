import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container id="featured-products">
            <div className="pt-5 pb-4 text-center">
                <h2 style={{ color: "rgba(4, 9, 30, 0.9)" }}>Our Featured Products</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5 pb-3">
                {
                    products.slice(0,6).map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
            <div className="mt-4">
                <Link to="/allproducts"><button className="btn text-white py-2 px-3" style={{backgroundColor:"rgba(4, 9, 30, 0.9)"}}>Explore More</button></Link>
            </div>
        </Container>
    );
};

export default FeaturedProducts;