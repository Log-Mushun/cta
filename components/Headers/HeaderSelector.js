// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../Socials';

const HeaderSelector = () => {
  return (
    <header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
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
    </header>
  );
};

export default HeaderSelector;
