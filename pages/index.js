import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";
const COVER_IMAGE_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1626695575/hero-image_j0bxmo.jpg";

export const getStaticProps = async () => {
  const response = await fetch(`${STRAPI_URL}/activities`);
  const data = await response.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {

  const handleTelusuriButton = (e) => {
    e.preventDefault();
    document.getElementById('main-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Head>
        <title>Melikan Blog</title>
      </Head>

      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <section>
          <div className="relative">
            <Image
              alt="Cover Image"
              src={COVER_IMAGE_URL}
              width="3961"
              height="2150"
              layout="responsive"
            />
            <div className="absolute top-0 h-full w-full flex items-center justify-center flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-14 xl:gap-20">
              <h2 className="text-noto font-bold z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">ꦱꦸꦒꦼꦁꦫꦮꦸꦃꦲꦶꦁꦏꦩ꧀ꦥꦸꦁꦗꦮ</h2>
              <h1 className="text-yellow font-bold z-20 font-serif text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Selamat Datang<br></br> di Kampung Jawa</h1>
              <button onClick={handleTelusuriButton} className="flex justify-around items-center bg-yellow p-2 w-40 md:w-52 lg:w-60">
                <h4 className="text-black text-xs md:text-sm lg:text-base">Telusuri sekarang</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <main id="main-section" className="w-full p-5 mx-auto">
          <h2 className="text-xl text-center font-bold text-black">Jelajahi Keberagaman Budaya Jawa</h2>
          <section>
            {data.map((item) => (
              <div className="w-4/6 mx-auto mt-5 flex flex-col justify-center" key={item.id}>
                <div className="w-full">
                  <Image
                    alt="Thumbnail"
                    src={item.coverpicture.formats.thumbnail.url}
                    width={item.coverpicture.formats.thumbnail.width}
                    height={item.coverpicture.formats.thumbnail.height}
                    layout="responsive"
                  />
                </div>
                <div>
                  <h3 className="font-bold mt-3">{item.title}</h3>
                  <h4 className="">{item.description}</h4>
                  <Link passHref href={`/activities/${item.slug}`}>
                    <div className="text-blue-500 hover:text-blue-700 cursor-pointer mt-1 flex w-7/12 justify-between items-center">
                      <h4>Baca selengkapnya</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </main>

        <footer>
          <Footer />
        </footer>



        {/* <section className='md:h-full flex items-center text-gray-600'>
          <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-12'>
              <h1 className='text-xl md:text-2xl text-gray-700 font-semibold'>
                Desa Melikan dan Cerita di Dalamnya
              </h1>
            </div>
            <div className='flex flex-wrap -m-4'>
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
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
