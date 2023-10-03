import React from 'react';

const DriverOneFunctions = () => {
  const divStyle = {
    backgroundImage: `url('images/guardian/g2.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh', // Asegura que el div tenga la altura de la ventana
    width: '100vw', // Asegura que el div tenga la ancho de la ventana

    position: 'relative',
  };

  return (
    <div style={divStyle} id='driverone-functions'>
     Guardian
    </div>
  );
};

export default DriverOneFunctions;
