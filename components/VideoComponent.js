import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const videos = [
  '/videos/bhs.mp4',
  '/videos/bhs3d.mp4',
  '/videos/corporativo.mp4',
  // ... Añade más URLs de video según sea necesario
];

const VideoComponent = ({ videoIndex }) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[videoIndex];
      videoRef.current.load();
    }
  }, [videoIndex]);

  const handleLoad = () => {
    setIsVideoLoaded(true);
    controls.start({ opacity: 1 }); // Iniciar animación de carga
  };

  const handleUnload = () => {
    setIsVideoLoaded(false);
  };

  return (
    <div className='relative'>
      <motion.video
        autoPlay
        loop
        muted
        className="h-screen absolute left-0 top-0 z-[11]"
        ref={videoRef}
        onCanPlay={handleLoad}
        onLoadedMetadata={handleLoad}
        onAbort={handleUnload}
        onError={handleUnload}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </motion.video>
      {!isVideoLoaded && <div className="loading-indicator">Cargando video...</div>}
    </div>
  );
};

export default VideoComponent;
