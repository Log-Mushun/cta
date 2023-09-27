// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../Socials';
import LogoDarkComp from '../LogoDarkComp';
import { FaBars } from 'react-icons/fa';

const HeaderExperience= () => {
  return (
    <header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
       <div className="flex flex-row">
        <LogoDarkComp/>
        <div className="fixed right-10 pt-10 cursor-pointer">
            <FaBars className='h-8 w-10'/>
        </div>
      </div>
 
    </header>
  );
};

export default HeaderExperience;
