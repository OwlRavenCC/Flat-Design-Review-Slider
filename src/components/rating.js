import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ stars }) => {
  const numberStars = [];

  for (let index = 0; index < stars; index++) {
    numberStars.push(<FaStar></FaStar>);
  }

  return (
    <div className="rating">
      {numberStars.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </div>
  );
};

export default Rating;
