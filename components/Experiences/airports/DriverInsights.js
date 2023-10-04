'use client'

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import VideoComponent from '@/components/VideoComponent';

//  about data
export const driverData = [
    {
        title: 'Tu Ángel Guardián en la Industria Aeroportuaria',
        info: [
            {
                description: 'MATEC, tu socio confiable en sistemas de manejo de equipaje para aeropuertos, abraza su papel como tu "Ángel Guardián" en cada paso del proceso aeroportuario. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, estamos comprometidos en brindar soluciones que optimizan la eficiencia, la seguridad y la comodidad, al tiempo que impulsan la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a procesos como Check-In, Inspección de Seguridad, Clasificación de equipaje (Make Up) Reclamo de equipaje y más.'
            },
        ],
    },
    {
        title: 'Resolución en Pantalla (OSR) en Tiempo Real',
        info: [
            {
                description: 'En la sala de control del BHS, nuestro personal actúa como verdaderos ángeles guardianes, utilizando el On-Screen Resolution (OSR) para abordar cualquier problema en tiempo real, garantizando un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante desafíos imprevistos. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.',
            }
        ],
    },
    {
        title: 'CBRA: Eficiencia y seguridad.Comodidad para Pasajeros',
        info: [
            {
                description: 'El proceso de CBRA (Claim-Based Reconciliation Area) se vuelve transparente con nuestras soluciones. Agregamos eficiencia y comodidad, permitiendo a los pasajeros reunirse con su equipaje rápidamente. La ingeniería humana se refleja en la eficacia de nuestros sistemas. Nuestro equipo se esfuerza por lograr un proceso sin fisuras, garantizando que cada pasajero tenga una experiencia positiva al llegar a su destino.',
            },
        ],
    }
];

const DriverInsights = () => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (itemIndex) => {
    setIndex(itemIndex);
  };

  return (
    <div className="h-[100vh] text-right pr-40 relative" id="driver-insights">
      <div className='driver-insightsclass opacity-0 z-[100] absolute w-[35%] pt-40 pl-10'>
        <div className='flex h-[1vh] mb-4'>
          {driverData.map((item, itemIndex) => (
            <div key={itemIndex} className='w-[20rem]'>
              <div
                key={itemIndex}
                className={`cursor-pointer top-0 left-0 w-[15vh] h-[1vh] ${itemIndex === index ? 'bg-white' : 'bg-[#b2cde0]'} hover:bg-white transition-colors duration-200`}
                onClick={() => handleIndexChange(itemIndex)}
              ></div>
            </div>
          ))}
        </div>
        <div>
          {driverData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white'>
              <div className='font-light mb-2 md:mb-0 text-start'>
                <h1 className='text-[200%]'>
                  {driverData[index].title}
                </h1>
              </div>
              <div className='mb-2 md:mb-0 text-start'>
                <p className='text-[80%] text-white'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoComponent videoIndex={index} /> {/* Pasar el índice al componente de video */}
    </div>
  );
}

export default DriverInsights;
