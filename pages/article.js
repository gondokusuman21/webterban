import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/Navbar';

export const getStaticProps = async () => {
  const response = await fetch(`https://strapi-gk.herokuapp.com/posts`);
  const data = await response.json();

  return {
    props: { data },
  };
};

export default function Articles({ data }) {
  return (
    <div>
      <Head>
        <title>Melikan Blog</title>
      </Head>

      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <section className='md:h-full flex items-center text-gray-600'>
          <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-12'>
              <h1 className='text-xl md:text-2xl text-gray-700 font-semibold'>
                Desa Melikan dan Cerita di Dalamnya
              </h1>
            </div>
            <div className='flex flex-wrap -m-4'>
              {/* card */}
              {data.map((item) => (
                <div className='p-4 sm:w-1/2 lg:w-1/3' key={item.id}>
                  <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-between'>
                    <div>
                      <Image
                        alt='Ini gambar'
                        width={item.picture[0].formats.thumbnail.width}
                        height={item.picture[0].formats.thumbnail.height}
                        layout='responsive'
                        src={item.picture[0].formats.thumbnail.url}
                      />
                    </div>
                    <Link passHref href={`/posts/${item.slug}`}>
                      <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                        <h2 className='text-base font-medium text-indigo-300 mb-1'>
                          {item.date}
                        </h2>
                        <h1 className='text-2xl font-semibold mb-3'>
                          {item.title}
                        </h1>
                        <p className='leading-relaxed mb-3'>
                          {item.description}
                        </p>
                        <div className='flex items-center flex-wrap '>
                          <a className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
                            Read More
                            <svg
                              className='w-4 h-4 ml-2'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path d='M5 12h14'></path>
                              <path d='M12 5l7 7-7 7'></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              {/* end of card */}
            </div>
          </div>
        </section>
      </main>

      {/* <div>
        {blogPosts.map((item) => (
          <Link href={`/posts/${item.slug}`}>
            <div
              key={item.id}
              className='border my-3 p-3 cursor-pointer hover:border-black'
            >
              <div className='pt-2 font-bold'>{item.title}</div>

              <div>{item.date.toString}</div>
              <div>{item.content}</div>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
