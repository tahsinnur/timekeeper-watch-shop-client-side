import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    };
    return (
        <Container>
            <h2>Add A Product</h2>
            <form className="fs-5 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Product Name</label>
                <input className="w-50 mb-3" {...register("name", { required: true, maxLength: 20 })} />
                <label htmlFor="">Give A Description</label>
                <textarea className="w-50 mb-3" {...register("description")} />
                <label htmlFor="">Price</label>
                <input className="w-50 mb-3" type="number" {...register("price")} />
                <label htmlFor="">Image Url</label>
                <input className="w-50 mb-3" {...register("img")} />
                <button type="submit" className="btn text-white my-3 w-25" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }}>ADD</button>
            </form>
        </Container>
    );
};

export default AddAProduct;