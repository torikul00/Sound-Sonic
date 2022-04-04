import React from "react";
import "./Home.css";
import useReviews from "../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews();
  const sliceReview = reviews.slice(0, 3);
  const navigate = useNavigate();

  return (
    <header>
      <div className="home-container">
        <div>
          <h1 className="title">
            WELCOME TO SONIC SOUND <br /> BEST COLLECTIONS FOR YOU
          </h1>
          <p className="desc">Hey ! We are waiting for you . Every friday  10% off for you . Get  the best and good quality products with low price ! keep in touch with us . Buy one with Visa card and get one totally free . keep smiling and keep buying from SONIC SOUND </p>
          <button className="button">START BUYING NOW</button>
        </div>
        <div>
          <img src="images/soundbox.png" alt="" />
        </div>
      </div>
      <h1 className="review-title">People Say About Us ! </h1>
      <div className="card-container">
        {sliceReview.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
      <div className="more-button">
        <button onClick={() => navigate("/reviews")}>More Reviews</button>
      </div>
    </header>
  );
};

export default Home;
