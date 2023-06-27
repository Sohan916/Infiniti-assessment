import { useState } from 'react';

const ImageSlider = () => {
  const slides = [
    { url: './Images/Industrial_Image.jpg' },
    { url: './Images/Industrial_Image_2.jpg' },
    { url: './Images/Industrial_Image_3.jpg' },
    { url: './Images/Industrial_Image_4.jpg' },
    { url: './Images/Industrial_Image_5.jpg' },
    { url: './Images/Industrial_Image_6.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="imageslider-container">
      {' '}
      <div className="slider-styles">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="slide-styles"
          alt="Image"
        ></div>
        <div className="dots-container">
          {slides.map((slide, slideIndex) => (
            <div
              className="dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              &#9679;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
