import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className="col">
            <div className="card h-100 review-card border-0">
                <i className="far fa-comments fs-1 pt-2"></i>
                <div className="card-body text-center" style={{ textAlign: "left" }}>
                    <h6 className="card-title m-0">{name}</h6>
                    <p className="card-text text-secondary py-2">{comment.slice(0,80)}</p>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                    ></Rating>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;