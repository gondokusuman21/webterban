import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=' bg-white border-b border-solid border-gray-600 border-opacity-20 sticky top-0 z-10'>
      <div className='container mx-auto px-8 py-3 text-center md:flex items-center justify-between md:py-6 '>
        <h1 className='text-2xl font-semibold uppercase pb-2 md:pb-0'>
          Melikan Blog
        </h1>

        <div className='text-lg'>
          <Link href='/'>
            <a className='hover:underline pr-10'>Home</a>
          </Link>
          {/* <Link href='/posts'>
            <a className='hover:underline pr-10'>Sejarah Melikan</a>
          </Link> */}
          <Link href='/about'>
            <a className='hover:underline'>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
