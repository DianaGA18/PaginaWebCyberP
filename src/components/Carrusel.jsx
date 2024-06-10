import React, { useState } from 'react';
import Anuncio from './Anuncio';

const images = [
  '/static/img/image7.jpg',
  '/static/img/image8.jpg',
  '/static/img/image9.png'
];

function App() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-start m-3">
      <div className="relative w-3/4">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((image, idx) => (
              <div key={idx} className="min-w-full">
                <img src={image} alt={`Imagen ${idx + 1}`} className="w-full h-96 object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
      <div className="ml-3 w-1/4">
        <Anuncio />
      </div>
    </div>
  );
}

export default App;
