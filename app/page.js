'use client'
import Image from 'next/image';
import Link from 'next/link';

import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaBoxesPacking } from 'react-icons/fa6'

// components
import ParticlesContainer from '../components/ParticlesContainer';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import HeaderSelector from '@/components/Headers/HeaderSelector';

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
    );
    // Animación de aparición para la línea
    gsap.fromTo(
      '#titulo_selector_span',
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
        duration: 10,
        ease: 'power4.out',
      }
    );
  }, []);


  return (
    <AnimatePresence>
      <motion.div className='h-full'>
        <Transition />
        <div className='container'>
          <HeaderSelector />
          <div className='h-screen w-screen bg-gradient-radial-c flex flex-col justify-center items-center'>
            {/* text */}
            <div className='relative top-[15%] pb-5 md:pb-10 lg:pb-0 z-10'>
              <h4
                id='titulo_selector'
                className='text-l md:text-2xl lg:text-2xl text-[#003b71] opacity-80 text-center hover:opacity-20 transition-opacity duration-300 z-10'
              >
                Selecciona tu experiencia
              </h4>
              <p id='titulo_selector_span' className='block w-[100%] h-[0.2rem] bg-[#ffffff] mt-0'></p>
            </div>
            <div className='text-center md:flex-row lg:flex-row flex items-center justify-center sm:gap-0 lg:gap-20 lg:pt-20  container mx-auto flex-col relative top-[10%]'>
              {/*suitcase*/}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                <Link href='/experience'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <FaSuitcaseRolling size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 w-14 z-10 hidden md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 z-10 text-2xl'>Aeropuertos</h1>
                  </div>
                </Link>
              </motion.div>
              {/* papers */}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <GiCardboardBoxClosed size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 hidden lg:block md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Papel y carton</h1>
                  </div>
                </Link>
              </motion.div>
              {/* logistics */}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <FaBoxesPacking size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 hidden lg:block md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Logística</h1>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className='w-full h-full absolute right-0 bottom-0 z-0'>
            <Plexus isStart={true} />
            {/* particles */}
            {/* <ParticlesContainer /> */}
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

