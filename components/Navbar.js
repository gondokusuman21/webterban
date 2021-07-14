import Link from 'next/link';
import LogoTerban from '../public/logo-terban.svg';
import LogoUnit from '../public/logo-unit.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className=' bg-white border-b border-solid border-gray-600 border-opacity-20 sticky top-0 z-10'>
      <div className='cursor-pointer container md:w-11/12 mx-auto py-1 text-center sm:flex items-center justify-between'>
        <Link passHref href='/'>
          <div className="flex justify-between items-center gap-5">
            <Image
              alt='Logo Kelurahan Terban'
              src={LogoTerban}
            />
            <Image
              alt='Logo Unit Gondokusuman'
              src={LogoUnit}
            />
            <span className="text-lg tracking-widest font-extrabold">
              KELURAHAN TERBAN
            </span>
          </div>
        </Link>

        <div className='text-sm font-medium tracking-widest'>
          <Link href='/'>
            <a className='hover:underline pr-10'>BERANDA</a>
          </Link>
          <Link href='/article'>
            <a className='hover:underline'>ARTIKEL</a>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
