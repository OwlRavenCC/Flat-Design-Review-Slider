import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "./data";

import Reviews from "./components/reviews";

function App() {
  const reviews = data;
  const [activeReview, setActiveReview] = useState(0);

  const nextSlide = () => {
    const length = reviews.length;
    if (activeReview < length - 1) {
      setActiveReview(activeReview + 1);
    } else {
      setActiveReview(0);
    }
  };

  const prevSlide = () => {
    if (activeReview === 0) {
      setActiveReview(reviews.length - 1);
    } else {
      setActiveReview(activeReview - 1);
    }
  };

  return (
    <section>
      <div className="title">
        <h2>Flat Design Review Slider</h2>
      </div>
      <div className="reviews-container">
        <Reviews reviewsList={reviews} reviewsState={activeReview}></Reviews>
        <div className="nav-button prev" onClick={() => prevSlide()}>
          <FiChevronLeft></FiChevronLeft>
        </div>
        <div className="nav-button next" onClick={() => nextSlide()}>
          <FiChevronRight></FiChevronRight>
        </div>
      </div>
    </section>
  );
}

export default App;
