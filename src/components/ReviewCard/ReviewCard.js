import React from 'react';
import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
    const {name, image, rating,comment} = review
    return (
        <div className='card'>
            <div className="user-info">
            <img src={image} alt="" />
            <h3>{name}</h3>
                
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} /><br />
                <small> Rating : {rating}</small> 
            <p>{ comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;