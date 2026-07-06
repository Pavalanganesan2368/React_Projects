import React, { useEffect } from "react";
import ImageDisplay from "./ImageDisplay";
import ImageErrorMsg from "./ImageErrorMsg";
import ImageCircleIndicator from "./ImageCircleIndicator";

const ImageSlider = ({
  imageUrl,
  imageLimit,
  page,
  images,
  setImages,
  loading,
  setLoading,
  errorMsg,
  setErrorMsg,
  currentSlide,
  setCurrentSlide,
}) => {
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(
          `${imageUrl}?page=${page}&limit=${imageLimit}`,
        );
        if (!response.ok) throw new Error("Error in Fetching Data.");
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Image Slider</h1>

        {!loading && !errorMsg ? (
          <ImageDisplay 
            images={images}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        ) : (
          <ImageErrorMsg 
            errorMsg={errorMsg}
          />
        )}

        <span className="circle-indicators">
          <ImageCircleIndicator
            images={images}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
        </span>
      </div>
    </>
  );
};

export default ImageSlider;