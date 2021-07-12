import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-white mx-auto px-5 text-center mt-3 mb-5'>
      &copy; {year} &middot;{' '}
      <span className='uppercase hover:underline'>
        <Link href='/'>Melikan Blog</Link>
      </span>{' '}
      &middot; All Rights Reserved.
    </footer>
  );
};

export default Footer;
