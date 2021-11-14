import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductsCard from '../Home/ProductsCard/ProductsCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container id="packages">
            <div className="pt-5 pb-4 text-center">
                <h2 style={{ color: "rgba(4, 9, 30, 0.9)" }}>Our All Products</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5 pb-3">
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
        </Container>
    );
};

export default AllProducts;