import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://morning-badlands-90985.herokuapp.com/ratings', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Submitted Successfully");
                reset();
            }
        })
    };

    return (
        <div>
            <h2>Give A Review</h2>
            <form className="fs-5 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">User Name</label>
                <input className="w-50 mb-3 fs-6 py-2" {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                
                <label htmlFor="">Write A Comment</label>
                <textarea className="w-50 mb-3 fs-6 py-2" {...register("comment")} />
                
                <label htmlFor="">Give Rating</label>
                <input className="w-50 mb-3 fs-6 py-2" type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rate 0-5 out of 5" />
                
                <button type="submit" className="btn text-white my-3 w-25" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>Submit</button>
            </form>
        </div>
    );
};

export default Review;