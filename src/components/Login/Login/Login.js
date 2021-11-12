import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginImg from '../../../images/Login.jpg';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container className="my-5">
            <h1>Please Login</h1>
            <div className="row row-cols-1 row-cols-md-2 g-5 py-4">
                <div className="col">
                    <form className="text-start" onSubmit={handleLoginSubmit}>
                        <div class="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control w-75 py-2" placeholder="Your Email" onChange={handleOnChange} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control w-75 py-2" placeholder="Your Password" onChange={handleOnChange} />
                        </div>
                        <div>
                            <button type="submit" className="btn text-white mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Login</button>
                        </div>
                        {
                            isLoading && <Spinner style={{ textAlign: "center"}} animation="grow" />
                        }

                        {
                            user?.email && <p className="text-success">Login Successfully!</p>
                        }
                        {
                            authError && <p className="text-danger">{authError}</p>
                        }

                        <NavLink
                            style={{ textDecoration: "none", color: "rgba(4, 9, 30, 0.9)" }}
                            to="/register">
                            <p>New User ? Please Click Here To Register</p>
                        </NavLink>
                    </form>
                    <div className="text-start">
                        <p>-OR-</p>
                    </div>
                    <div className="text-start">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary text-white"><i class="fab fa-google"></i> Login with Google</button>
                    </div>
                </div>
                <div className="col">
                    <img className="img-fluid" src={LoginImg} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Login;