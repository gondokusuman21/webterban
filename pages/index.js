import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:1337/posts`);
  const data = await response.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Melikan Blog</title>
      </Head>

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
                        width={item.picture[0].formats.thumbnail.width}
                        height={item.picture[0].formats.thumbnail.height}
                        layout='responsive'
                        src={`http://localhost:1337${item.picture[0].formats.thumbnail.url}`}
                      />
                    </div>

                    <Link href={`/posts/${item.slug}`}>
                      <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                        <h2 className='text-base font-medium text-indigo-300 mb-1'>
                          {item.date}
                        </h2>
                        <h1 className='text-2xl font-semibold mb-3'>
                          {item.title}
                        </h1>
                        <p className='leading-relaxed mb-3'>
                          {item.content.length > 150
                            ? item.content.substring(0, 150) + '...'
                            : item.content}
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
                          <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                            <svg
                              className='w-4 h-4 mr-1'
                              stroke='currentColor'
                              strokeWidth='2'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              viewBox='0 0 24 24'
                            >
                              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                              <circle cx='12' cy='12' r='3'></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                            <svg
                              className='w-4 h-4 mr-1'
                              stroke='currentColor'
                              strokeWidth='2'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              viewBox='0 0 24 24'
                            >
                              <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                            </svg>
                            6
                          </span>
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
