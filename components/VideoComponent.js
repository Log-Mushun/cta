import React from 'react';

const videos = [
  '/videos/bhs.mp4',
  '/videos/bhs3d.mp4',
  '/videos/corporativo.mp4',
  // ... Añade más URLs de video según sea necesario
];

const VideoComponent = ({ videoIndex }) => {
  // Validar que el índice esté dentro del rango de los videos disponibles
  if (videoIndex < 0 || videoIndex >= videos.length) {
    return <p>Video no encontrado</p>;
  }

  return (
    <div className="video-container">
      <video controls>
        <source src={videos[videoIndex]} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoComponent;
