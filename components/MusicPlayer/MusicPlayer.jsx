import React, { useState } from 'react';
import Sound from 'react-sound';
import { FaMusic } from 'react-icons/fa'; // Importa el icono de música de react-icons

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción del sonido

  // Función para alternar la reproducción del sonido
  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', bottom: '10vh', zIndex: '10',  // Centrado verticalmente
    right: '3.2rem',}}>
      {/* Botón circular de estilo "floating" */}
      <button
        style={{
          width: '60px',
          height: '60px',
          
          borderRadius: '50%',
          backgroundColor: '#134579',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
        }}
        onClick={toggleSound}
      >
        <FaMusic size={30} />
      </button>
      {/* Reproductor de sonido */}
      <Sound
        url="URL_DEL_SONIDO.mp3" // Reemplaza con la URL de tu archivo de sonido
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
        loop={true} // Reproducción en bucle
      />
    </div>
  );
}

export default MusicPlayer;
