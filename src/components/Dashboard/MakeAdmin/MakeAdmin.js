import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://morning-badlands-90985.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <Container className="mt-5">
            <h3 className="mb-3">Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <div className="text-center">
                    <input type="email" className="form-control w-50 py-2 mx-auto" placeholder="Put A Email Address" onBlur={handleOnBlur} />
                </div>
                <div>
                    <button type="submit" className="btn text-white my-3" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Make Admin</button>
                </div>
            </form>
            {
                success && <p className="text-success">Made Admin Successfully!</p>
            }
        </Container>
    );
};

export default MakeAdmin;