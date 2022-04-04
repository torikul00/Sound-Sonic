import React from 'react';
import useReviews from '../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'
import {useNavigate} from 'react-router-dom'

const Reviews = () => {
    const [reviews ] = useReviews()
    const navigate = useNavigate()
    console.log(reviews);
    return (
        <>
        <div className='card-container'>
            {
                reviews.map(review =>  <ReviewCard review ={review} key={review.id} />)
            }
            
            </div>
            <button onClick={()=>navigate('/home')} className="back-home-button">Back to home</button>
            </>
    );
};

export default Reviews;