import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [productInfo, setProductInfo] = useState({});
    const initialInfo = { userName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProductInfo(data))
    }, [productId])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {
        const purchase = {
            ...purchaseInfo,
            productName: productInfo.name,
            price: productInfo.price
        }

        fetch('http://localhost:5000/purchaseInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Your Purchase Completed Successfully");
                    history.push('/');
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <h2 className="pb-4 pt-5">Complete Your Purchase</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4 pb-5 pt-4">
                <div className="col text-center">
                    <img style={{ height: "350px" }} className="img-fluid mb-3" src={productInfo?.img} alt="" />
                    <h3>{productInfo.name}</h3>
                    <p className="text-secondary fs-5">{productInfo?.description}</p>
                    <h3>Price: {productInfo.price}</h3>
                </div>
                <div className="ps-5">
                    <form onSubmit={handlePurchaseSubmit}>
                        <div className="mb-3 text-start">
                            <label className="form-label">Product Name</label>
                            <input disabled className="form-control w-75 py-2" defaultValue={productInfo.name} name="productName" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Product Price</label>
                            <input disabled className="form-control w-75 py-2" defaultValue={productInfo.price} name="productPrice" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">User Name</label>
                            <input disabled className="form-control w-75 py-2" defaultValue={user.displayName}
                                name="userName" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Email</label>
                            <input disabled className="form-control w-75 py-2" defaultValue={user.email} name="email" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Phone</label>
                            <input required type="number" className="form-control w-75 py-2" name="phone" onBlur={handleOnBlur} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Address</label>
                            <input required type="text" className="form-control w-75 py-2" name="address" onBlur={handleOnBlur} />
                        </div>
                        <div className="text-start">
                            <button type="submit" style={{ backgroundColor: "rgba(4, 9, 30, 0.9)" }} className="border-0 rounded text-white fs-6 px-3 py-2 mt-4">Purchase Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Purchase;