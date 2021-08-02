import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-reveal';

const NavbarFixed = () => {

	const [isMenuOpened, setMenuOpened] = useState(false);
	const [isSearchOpened, setSearchOpened] = useState(false);
	const LOGO_UNIT_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1627709077/logounit_h1xdfo.png";

	const handleMenuButtonClick = () => {
		const menuItems = document.querySelector('.mobile-menu-items');
		menuItems.classList.toggle('hidden');
		setMenuOpened(isMenuOpened => !isMenuOpened);
	}

	return (
		<>
			<nav id="desktop-nav" className="bg-blue-500 z-10 hidden md:block w-full">
				<div className="h-32 flex items-center justify-between">
					<div className="flex gap-x-10 items-center">
						<img className="transform scale-35" alt="Logo KKN" src={LOGO_UNIT_URL}></img>
						<Link href="/" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">BERANDA</div></Link>
						<Link href="/" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">KAMPUNG JAWA</div></Link>
						<Link href="/" passHref><div className="font-medium text-white tracking-widest cursor-pointer transition duration-300 hover:text-black">ARTIKEL</div></Link>
					</div>
					<div className="mr-16">
						<button type="submit" onClick={() => setSearchOpened(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</button>
					</div>
				</div>
			</nav >

			<nav className="z-10 absolute flex items-center w-full mt-2 justify-between md:hidden">
				<img className="transform h-16 scale-75 ml-3" alt="Logo KKN" src={LOGO_UNIT_URL}></img>
				<div onClick={handleMenuButtonClick} className="mr-3 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</div>
			</nav>
			{
				isSearchOpened &&
				<div id="search-bar" className="z-30 flex justify-center items-center h-screen w-screen bg-gray-50 fixed">
					<div className="flex pt-2 relative w-56 text-gray-600">
						<input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-9  text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue focus:border-transparent" type="search" name="search" placeholder="Search"></input>
						<button type="submit" className="absolute top-18px right-1">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
					<div className="absolute top-10 right-10">
						<button onClick={() => { setSearchOpened(false) }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			}

			<Fade>
				<div className="z-20 mobile-menu-items hidden h-screen w-screen bg-light-blue fixed mobile-menu-items lg:hidden">
					<div className="flex flex-col gap-y-5 ml-5 text-lg mt-16">
						<Link href="/" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">BERANDA</div></Link>
						<Link href="/" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">KAMPUNG JAWA</div></Link>
						<Link href="/" passHref><div className="hover:text-orange font-medium text-black tracking-widest cursor-pointer transition duration-300">ARTIKEL</div></Link>
						<div onClick={() => setSearchOpened(true)} className="mr-16 flex gap-x-3 font-medium hover:text-orange text-black tracking-widest cursor-pointer">
							<button type="submit">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
							<div>CARI ARTIKEL</div>
						</div>
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
