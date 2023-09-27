import { useState, useEffect } from 'react';

import Image from 'next/image';

const Plexus = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [increment, setIncrement] = useState(1);
  const totalImages = 148;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === totalImages) {
          // Cambia la dirección a decrementar cuando llega a 148
          setIncrement(-1);
          return prevImage - 1;
        } else if (prevImage === 1) {
          // Cambia la dirección a incrementar cuando llega a 1
          setIncrement(1);
          return prevImage + 1;
        } else {
          // Incrementa o decrementa según la dirección actual
          return prevImage + increment;
        }
      });
    }, (1000/30));  // Controla la velocidad de la animación ajustando este valor
    return () => clearInterval(interval);
  }, [totalImages, increment]);

  const imageUrl = `/plexus/PMATEC_${currentImage}.png`;

  return (
    <img
      src={imageUrl}
      alt={`Image ${currentImage}`}
      className='w-full h-full z-0 mix-blend-hard-light'
    />
  );
};

export default Plexus;
