import React from "react";

const ImageCircleIndicator = ({ images, setCurrentSlide, currentSlide }) => {
  return (
    <>
      {images && images.length
        ? images.map((_, index) => (
            <button
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator hide-current-indicator"
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))
        : null}
    </>
  );
};

export default ImageCircleIndicator;
