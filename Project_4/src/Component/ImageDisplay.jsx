import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React from "react";

const ImageDisplay = ({ images, currentSlide, setCurrentSlide }) => {
  const handlePrevious = () => {
    const slides = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(slides);
  };

   const handleNext = () => {
    const slides = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(slides);
  };

  return (
    <>
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrevious()}
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.author}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
    </>
  );
};

export default ImageDisplay;
