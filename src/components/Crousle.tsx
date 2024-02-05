//@ts-nocheck
import 'animate.css';
import React, { useState, useEffect } from 'react';

//typing animations 
// import { TypeAnimation } from 'react-type-animation';
import Image1 from "../media/services/1.png";
import Image2 from "../media/services/2.png";
import Image3 from "../media/services/3.png";
import Image4 from "../media/services/4.png";
import Image5 from "../media/services/5.png";

const images = [Image1, Image2, Image3, Image4, Image5];
const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textElement = document.getElementById('animated-text');
    textElement.classList.remove('animate__fadeIn');
    void textElement.offsetWidth; 
    textElement.classList.add('animate__fadeIn');
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-[500px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 absolute inset-0`}
          style={{ position: 'absolute' }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(50%)' }}
          />
          <div
            id="animated-text"
            className={`absolute text-[4rem] font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center animate__animated animate__fadeIn`}
          >
            {texts[index]}
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-1 text-white text-3xl transform -translate-y-1/2 p-6 rounded-r-2xl focus:outline-none"
        style={{ background: 'linear-gradient(90deg,#000000 -10%, rgba(255,255,255, 0) 240%)' }}
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-1 text-white text-3xl transform -translate-y-1/2  p-6 rounded-l-2xl focus:outline-none"
        style={{ background: 'linear-gradient(270deg,#000000 -10%, rgba(255,255,255, 0) 240%)' }}
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}


// <TypeAnimation
// id="animated-text"
// className={`absolute text-[4rem] font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center animate__animated animate__fadeIn`}
// text={texts[index]}
// cursorColor="transparent"
// typingDelay={100}
// backspaceDelay={50}
// />