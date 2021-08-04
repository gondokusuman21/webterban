import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router';

const NavbarFixed = () => {

  const router = useRouter();
  const [isSearchOpened, setSearchOpened] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [searchArticleInput, setSearchArticleInput] = useState("");
  const LOGO_UNIT_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1627709077/logounit_h1xdfo.png";

  const handleMenuButtonClick = () => {
    const menuItems = document.querySelector('.mobile-menu-items');
    menuItems.classList.toggle('hidden');
  }

  return (
    <>
      <nav id="desktop-nav" className="py-2 bg-blue-500 z-10 hidden md:block w-full">
        <div className="h-20 flex items-center justify-between">
          <div className="flex gap-x-10 items-center">
            <img className="transform scale-35" alt="Logo KKN" src={LOGO_UNIT_URL}></img>
            <Link href="/" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">BERANDA</div></Link>
            <Link href="/#activity-section" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">KAMPUNG JAWA</div></Link>
            <Link href="/posts" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">ARTIKEL</div></Link>
          </div>
        </div>
      </nav >

      <nav className="bg-blue-500 z-10 relative flex items-center w-full justify-between md:hidden">
        <img className="transform h-16 scale-75 ml-3" alt="Logo KKN" src={LOGO_UNIT_URL}></img>
        <div onClick={handleMenuButtonClick} className="mr-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </nav>

      <Fade>
        <div className="z-20 mobile-menu-items hidden h-screen w-screen bg-light-blue fixed mobile-menu-items lg:hidden">
          <div className="flex flex-col gap-y-5 ml-5 text-lg mt-16">
            <Link href="/" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">BERANDA</div></Link>
            <Link href="/#activity-section" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">KAMPUNG JAWA</div></Link>
            <Link href="/posts" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">ARTIKEL</div></Link>
          </div>
          <svg onClick={handleMenuButtonClick} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer absolute top-10 right-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </Fade>
    </>
  );
};

export default NavbarFixed;
