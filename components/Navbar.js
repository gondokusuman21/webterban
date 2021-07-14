import Link from 'next/link';
import LogoTerban from '../public/logo-terban.svg';
import LogoUnit from '../public/logo-unit.svg';
import Image from 'next/image';

const Navbar = () => {

  const handleMenuButtonClick = () => {
    const menuItems = document.querySelector('.mobile-menu-items');
    menuItems.classList.toggle('hidden');
  }

  return (
    <nav className=' bg-white border-b border-solid border-gray-600 border-opacity-20 sticky top-0 z-10'>
      <div className='flex w-11/12 md:w-11/12 mx-auto py-1 text-center sm:flex items-center justify-between'>
        <Link passHref href='/'>
          <div className="cursor-pointer flex justify-center sm:justify-between items-center gap-5">
            <Image
              alt='Logo Kelurahan Terban'
              src={LogoTerban}
            />
            <Image
              alt='Logo Unit Gondokusuman'
              src={LogoUnit}
            />
            <span className="hidden sm:block text-lg tracking-widest font-extrabold">
              KELURAHAN TERBAN
            </span>
          </div>
        </Link>

        <div className='hidden sm:block text-sm font-medium tracking-widest'>
          <Link href='/'>
            <a className='hover:underline pr-10'>BERANDA</a>
          </Link>
          <Link href='/article'>
            <a className='hover:underline'>ARTIKEL</a>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger-button sm:hidden" onClick={handleMenuButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      <div className="animate mobile-menu-items hidden sm:hidden">
        <Link href='/'>
          <a className='block p-4 hover:bg-gray-300'>BERANDA</a>
        </Link>
        <Link href='/article'>
          <a className='block p-4 hover:bg-gray-300'>ARTIKEL</a>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
