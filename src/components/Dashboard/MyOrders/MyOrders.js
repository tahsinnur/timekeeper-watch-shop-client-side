import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect( () => {
        fetch(`http://localhost:5000/purchaseInfo/user?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/purchaseInfo/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }

            })
        }     
    }

    return (
        <div>
            <h2>My Orders</h2>
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
                        <button onClick={()=> handleDelete(order._id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                    </td>
                  </tr>
                </tbody>
              </Table>)
            }
        </div>
    );
};

export default MyOrders;