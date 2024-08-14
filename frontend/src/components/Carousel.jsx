import React, { useState, useEffect } from 'react';

const images = [
  './images/welcomeCart.png',
  './images/display1.png',
  './images/display2.png',
  './images/display3.png',
  
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
