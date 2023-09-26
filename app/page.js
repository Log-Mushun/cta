'use client'
import Image from 'next/image';
import Link from 'next/link';

import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaBoxesPacking } from 'react-icons/fa6'

// components
import ParticlesContainer from '../components/ParticlesContainer';

// framer motion
import { AnimatePresence,motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import Header from '@/components/Header';

import Transition from '@/components/Transition';

// ... (código anterior)

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div className='h-full'>
        <Transition/>
        <div>
          <Header />
          {/* text */}
          <div className='h-screen w-screen bg-gradient-radial-c flex flex-col justify-center items-center'>
            {/* Título principal */}
            <h1 className='text-4xl font-bold text-[#003d71] text-center mb-6'>Selecciona tu experiencia</h1>
            <div className='text-center flex flex-col items-center pb-10 container mx-auto lg:flex-row'>
              {/* suitcase */}
              <div className='z-10 flex items-center flex-col mb-8'>
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
                    <FaSuitcaseRolling size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20  z-10' />
                    <h1 className='text-[#003d71] text-center pt-5 z-10 text-2xl'>Aeropuertos</h1>
                  </div>
                </Link>
              </div>
              {/* papers */}
              <div className='z-10 flex items-center flex-col mb-8'>
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
                    <GiCardboardBoxClosed size={128}  className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 ' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Papel y carton</h1>
                  </div>
                </Link>
              </div>
              {/* logistics */}
              <div className='z-10 flex items-center flex-col'>
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
                    <FaBoxesPacking size={128}  className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 ' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Logística</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full h-full absolute right-0 bottom-0'>
            {/* particles */}
            <ParticlesContainer />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;

