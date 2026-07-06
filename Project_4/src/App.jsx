import ImageSlider from './Component/ImageSlider'
import { useState } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const IMAGE_URL = "https://picsum.photos/v2/list";
  const limit = 5;
  const page = 1;

  return (
    <>
      <ImageSlider 
        imageUrl={IMAGE_URL}
        imageLimit={limit}
        page={page}
        images={images}
        setImages={setImages}
        loading={loading}
        setLoading={setLoading}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </>
  )
}

export default App
