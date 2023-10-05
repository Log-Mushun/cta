import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressBarStyles = {
    position: 'fixed',
    top: '30vh', // Centrado verticalmente
    right: '5rem',
    width: '2px', // Ancho de la barra de progreso
    height: '50vh', // Altura de la barra de progreso (50% de la ventana)
    backgroundColor: '#ffffff', // Color de fondo de la barra
    zIndex: '11', // Asegura que esté en la parte superior
    borderRadius:'15px',
  };

  const fillStyles = {
/*     height: `${scrollPercentage}%`,
 */    backgroundColor: '#ffffff', // Color de la barra de progreso
    transition: 'height 0.2s', // Transición suave de la altura
  };

  const rectStyles = {
    position: 'absolute',
    top: `${scrollPercentage}%`,
    right: '-4px',
    width: '10px',
    height: '60px',
    borderRadius:'20px',
    background: 'linear-gradient(to bottom, #72b5df, #ffffff)', // Gradiente vertical
    transform: 'translateY(-50%)', // Centrar verticalmente el rectángulo
  };

  return (
    <div style={progressBarStyles}>
      <div style={fillStyles}></div>
      <div style={rectStyles}></div>
    </div>
  );
};

export default ProgressBar;
