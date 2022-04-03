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
    <>
      <div className="home-container">
        <div>
          <h1 className="title">
            WELCOME TO SONIC SOUND <br /> BEST COLLECTIONS FOR YOU
          </h1>
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
    </>
  );
};

export default Home;
