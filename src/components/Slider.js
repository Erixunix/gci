// Slider.js
import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/800x300?text=Slide+1',
      alt: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/800x300?text=Slide+2',
      alt: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/800x300?text=Slide+3',
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
