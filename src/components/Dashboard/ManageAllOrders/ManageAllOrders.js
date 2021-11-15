import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllOrders = () => { 
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/purchaseInfo')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/purchaseInfo/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }


    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/purchaseInfo/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount > 0){
                        console.log(data)
                        alert('Updated Successfully');
                    }
                })
        }

    }


    return (
        <Container>
            <h2>Manage All Orders</h2>
            {
                orders.map(order => <Table key={order._id} responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{order.userName}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdate(order._id)} className="btn btn-success me-2"><i className="fas fa-truck"></i></button>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </Table>)
            }
        </Container>
    );
};

export default ManageAllOrders;