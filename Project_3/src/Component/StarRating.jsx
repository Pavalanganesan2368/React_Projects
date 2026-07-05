import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

const StarRating = ({ stars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (id) => {
    setRating(id);
  };

  const handleMouseOver = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      <h1>Star Rating :</h1>
      {[...Array(stars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "in-active"}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
