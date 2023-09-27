import { useState, useEffect, useRef } from 'react';

const Plexus = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [increment, setIncrement] = useState(1);
  const totalImages = 148;

  const canvasRef = useRef(null);

  const preloadImages = () => {
    for (let i = 1; i <= totalImages; i++) {
      const img = new Image();
      img.src = `/plexus/PMATEC_${i}.png`;
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = `/plexus/PMATEC_${currentImage}.png`;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === totalImages) {
          setIncrement(-1);
          return prevImage - 1;
        } else if (prevImage === 1) {
          setIncrement(1);
          return prevImage + 1;
        } else {
          return prevImage + increment;
        }
      });
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, [currentImage, increment, totalImages]);

  return (
    <canvas
      ref={canvasRef}
      className='w-full h-full z-0 mix-blend-hard-light'
      width={1920} // Tamaño fijo del canvas
      height={1080} // Tamaño fijo del canvas
    />
  );
};

export default Plexus;
