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
import Plexus from '@/components/Plexus';
import { useEffect } from 'react';
import gsap from 'gsap';

import SplitType from 'split-type';
import ParticlesContainerBackground from '@/components/ParticlesContainerBackground';



// ... (código anterior)

const Home = () => {

  useEffect(() => {
    const ourText = new SplitType('#titulo_selector', { types: 'chars' })
const chars = ourText.chars
    // Animación de aparición para titulo_selector
    gsap.fromTo(
      chars,
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    )
  }, []);

  
  return (
    <AnimatePresence>
      <motion.div className='h-full'>
        <Transition/>
        <div>
          <Header />
          {/* text */}
          <div className='h-screen w-screen bg-gradient-radial-c'>
            <div className='text-center flex flex-row justify-around items-end pb-10 h-full w-[60%] container mx-auto'>
              {/* suitcase */}
              <h1
    id='titulo_selector'
    className='text-3xl  font-bold text-[#003d71] text-center mb-6 hover:opacity-20 transition-opacity duration-300 z-10'
  >
    Selecciona tu experiencia
  </h1>
              <div className='z-10 flex items-center flex-col mb-8'>
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
                    <FaSuitcaseRolling size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20  z-10' />
                    <h1 className='text-[#003d71] text-center pt-5 z-10 text-2xl'>Aeropuertos</h1>
                  </div>
                </Link>
              </div>
              {/* papers */}
              <div style={{ userDrag: 'none' }} className='z-10 flex items-center flex-col mb-8'>
                <Link style={{ userDrag: 'none' }}  href='/airports'>
                  <div   className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
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
            {/* <ParticlesContainer /> */}
            <Plexus/>
          </div>
        {/*   <div className='w-full h-full absolute right-0 bottom-0 '>
             <ParticlesContainerBackground  />
    </div> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;

