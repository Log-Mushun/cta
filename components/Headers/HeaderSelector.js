// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

import {motion} from 'framer-motion'
import { fadeIn } from '@/variants';

// components
import Socials from '../Socials';

const HeaderSelector = () => {
  return (
    <motion.header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'
    animate={{
      opacity: [0, 1],
  }}
  transition={{
    delay: 1, 
    duration: 1 }}
    >
      <div className='container mx-auto flex justify-center'>
        {/* logo */}
        <Link href={'/'}>
          <Image
          className='w-96 pt-20'
            src={'/logo_start.svg'}
            width={220}
            height={48}
            alt=''
            priority={true}
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default HeaderSelector;
