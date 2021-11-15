import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ratings')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container id="reviews">
            <div className="pt-5 pb-4 text-center">
                <h2 style={{ color: "rgba(4, 9, 30, 0.9)" }}>Customer Reviews</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>

        </Container>
    );
};

export default Reviews;