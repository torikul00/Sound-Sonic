import React from 'react';
import useReviews from '../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews);
    return (
        <div className='card-container'>
            {
                reviews.map(review =>  <ReviewCard review ={review} key={review.id} />)
            }
        </div>
    );
};

export default Reviews;