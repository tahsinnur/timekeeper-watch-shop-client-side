import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://morning-badlands-90985.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://morning-badlands-90985.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }

                })
        }
    }

    return (
        <div>
            <h2>Manage Products</h2>
            {
                products.map(product=> <Table key={product._id} responsive="sm">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Image</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><img style={{height:"100px"}} src={product.img} alt="" /></td>
                        <td>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    );
};

export default ManageProducts;