import React from 'react';

const GuardianConceptUnido2 = () => {
  const divStyle = {
    backgroundImage: `url('images/guardian/grupo2.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '200vh', // Asegura que el div tenga la altura de la ventana
    width: '100vw', // Asegura que el div tenga la ancho de la ventana

    position: 'relative',
  };

  return (
    <div style={divStyle} id='driverone-functions'>
     Guardian
    </div>
  );
};

export default GuardianConceptUnido2;
