import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Socials';
import LogoDarkComp from '../LogoDarkComp';
import { FaBars } from 'react-icons/fa';
import styles from './HeaderGeneral/style.module.scss';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '@/MyContextProvider';

const HeaderExperience = () => {
  const { menuOpen, setMenuOpen } = useContext(MyContext);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      // Limpia el event listener cuando el componente se desmonta.
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <header className='fixed w-full backdrop-blur' style={{zIndex:200}} id="header-experience">
      <div className='container mx-auto pt-4 xl:pt-4 pr-4'>
        <div className='flex items-center justify-between'>
          <LogoDarkComp />
          <FaBars className='h-8 w-8' onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
    </header>
  );
};

export default HeaderExperience;
