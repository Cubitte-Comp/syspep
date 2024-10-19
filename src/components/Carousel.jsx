import React, { useState } from 'react';

const Carousel = () => {
  // Lista de imágenes y descripciones
  const cards = [
    { img: 'imagen1.jpg', desc: 'Descripción 1' },
    { img: 'imagen2.jpg', desc: 'Descripción 2' },
    { img: 'imagen3.jpg', desc: 'Descripción 3' },
    { img: 'imagen4.jpg', desc: 'Descripción 4' },
    { img: 'imagen5.jpg', desc: 'Descripción 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover el carrusel a la izquierda
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Función para mover el carrusel a la derecha
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Flecha izquierda */}
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
      >
        &#8592;
      </button>

      {/* Carrusel de Cards */}
      <div className="flex overflow-hidden w-96 justify-between">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div key={index} className="w-28 mx-2 flex-shrink-0">
            <img
              src={card.img}
              alt={`Imagen ${index + 1}`}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="bg-white p-2 text-center rounded-b-lg">
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
