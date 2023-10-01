import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LoadingScreen = ({isVisible}) => {
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        const loadingScreen = loadingScreenRef.current;
    
        if (isVisible) {
          gsap.to(loadingScreen, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Puedes ejecutar alguna acción cuando la animación de entrada ha terminado
            },
          });
        } else {
          gsap.to(loadingScreen, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                loadingScreen.style.display = "none";
            },
          });
        }
      }, [isVisible]);


    return (
        <div ref={loadingScreenRef} className='h-screen fixed w-screen bg-gradient-radial-c flex flex-col justify-center items-center z-[100]'>Loading</div>
    )
}

export default LoadingScreen;