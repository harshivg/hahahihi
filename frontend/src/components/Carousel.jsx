import React, { useState, useEffect } from 'react';

const images = [
  './images/display1.png',
  './images/display2.png',
  './images/display3.png',
  './images/display4.jpeg',
  './images/display5.jpeg',
  './images/display6.png',
  './images/display7.jpeg',
  './images/display8.jpeg',
  './images/display9.jpeg',
  './images/display10.jpeg',
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="carousel-container w-full h-[28rem] mb-8">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Carousel;
