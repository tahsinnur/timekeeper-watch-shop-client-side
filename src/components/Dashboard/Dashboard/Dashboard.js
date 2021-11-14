import React from 'react';
import { Container } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const { admin } = useAuth();

    return (
        <Container style={{ height: "90vh" }}>
            <h2 className="pt-5 pb-4">Welcome To Dashboard</h2>
            <div>
                {
                    admin && <div>
                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/makeAdmin`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Make Admin</button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/manageAllOrders`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Manage All Orders</button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/manageProducts`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Manage Products</button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/addAProduct`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Add A Product</button>
                        </Link>
                    </div>
                }


                {
                    !admin && <div>
                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/myOrders`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>My Orders</button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/payment`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Make Payment</button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "white" }} to={`${url}/review`}>
                            <button className="btn text-white me-3 mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Give Review</button>
                        </Link>
                    </div>
                }

            </div>
            <div>
                <Switch>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/AddAProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                </Switch>
            </div>
        </Container>
    );
};

export default Dashboard;