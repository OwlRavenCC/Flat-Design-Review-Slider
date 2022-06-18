import React from "react";
import Rating from "./rating";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = ({ reviewsList, reviewsState }) => {
  return (
    <>
      {reviewsList.map((review, reviewIndex) => {
        const { id, image, name, title, quote, rating } = review;

        let currentState = "next-review";

        if (reviewsState === reviewIndex) {
          currentState = "active-review";
        }

        if (reviewsState === reviewIndex - 1) {
          currentState = "prev-review";
        }

        return (
          <article key={id} className={currentState}>
            <div className="img-container">
              <img src={image} alt={name}></img>
            </div>
            <Rating stars={rating} />
            <h3>{title}</h3>
            <h4>by {name}</h4>
            <FaQuoteRight></FaQuoteRight>
            <p>{quote}</p>
          </article>
        );
      })}
    </>
  );
};

export default Reviews;
