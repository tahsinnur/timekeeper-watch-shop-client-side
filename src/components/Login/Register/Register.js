import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginImg from '../../../images/Login.jpg';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password Didn't Matched");
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    return (
        <Container className="my-5">
            <h1>Create Your Account</h1>
            <div className="row row-cols-1 row-cols-md-2 g-5 py-4">
                <div className="col">
                    {
                        !isLoading && <form className="text-start" onSubmit={handleRegisterSubmit}>
                            <div class="mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-control w-75 py-2" placeholder="Give Your Name" name="name" onBlur={handleOnBlur} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control w-75 py-2" placeholder="Give Your Email" name="email" onBlur={handleOnBlur} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control w-75 py-2" placeholder="Give A Password" name="password" onBlur={handleOnBlur} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control w-75 py-2" placeholder="Re-Enter Your Password" name="password2" onBlur={handleOnBlur} />
                            </div>
                            <div>
                                <button type="submit" className="btn text-white mb-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Register</button>
                            </div>

                            {
                                isLoading && <Spinner style={{ textAlign: "center"}} animation="grow" />
                            }

                            {
                                user?.email && <p className="text-success">User Created Successfully!</p>
                            }
                            {
                                authError && <p className="text-danger">{authError}</p>
                            }

                            <NavLink
                                style={{ textDecoration: "none", color: "rgba(4, 9, 30, 0.9)" }}
                                to="/login">
                                <p>Already Registered ? Please Click Here To Login</p>
                            </NavLink>
                        </form>
                    }
                </div>
                <div className="col">
                    <img className="img-fluid" src={LoginImg} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Register;