import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ActivityCard from '../components/ActivityCard';
import EventCard from '../components/EventCard';
import PostsCard from '../components/PostsCard';
import { data } from 'autoprefixer';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";
const COVER_IMAGE_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1626695575/hero-image_j0bxmo.jpg";

export const getStaticProps = async () => {
  const activitiesResponse = await fetch(`${STRAPI_URL}/activities`);
  const activitiesData = await activitiesResponse.json();

  const eventsResponse = await fetch(`${STRAPI_URL}/events`);
  const eventsData = await eventsResponse.json();

  const postsResponse = await fetch(`${STRAPI_URL}/posts`);
  const postsData = await postsResponse.json();

  return {
    props: { activitiesData, eventsData, postsData },
    revalidate: 3600
  };
};

export default function Home({ activitiesData, eventsData, postsData }) {

  const handleTelusuriButton = (e) => {
    e.preventDefault();
    document.getElementById('main-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Head>
        <title>Terban Kampung Wisata</title>
        <meta property="og:title" content="TITLE OF YOUR WEBSITE" />
        <meta property="og:image" content={COVER_IMAGE_URL} />
        <meta property="og:description" content="DESC" />
        <meta property="og:url" content="https://webterban.vercel.app/" />
        <meta property="og:image:width" content='1200' />
        <meta property="og:image:height" content='627' />
        <meta property="og:type" content='website' />
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
              <h1 className="text-red-300 font-bold z-20 font-serif text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Selamat Datang<br></br> di Kampung Jawa</h1>
              <button onClick={handleTelusuriButton} className="flex justify-around items-center bg-yellow p-2 w-40 md:w-52 lg:w-60">
                <h4 className="text-black text-xs md:text-sm lg:text-base">Telusuri sekarang</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section id="main-section" className="w-full mx-auto mt-10">
          <div className="flex w-11/12 mx-auto gap-1 items-center text-sm font-bold tracking-tight mt-10
            sm:w-8/12
            lg:w-10/12   
          ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <h5>KAMPUNG JAWA: DESTINASI WISATA DI YOGYAKARTA</h5>
          </div>
          <div className="mt-5 w-11/12 sm:w-8/12 lg:w-10/12 mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/tv0ogOmjrCA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </section>
        <hr className="my-10"></hr>

        <section>
          <div className="flex w-11/12 mx-auto gap-1 items-center text-sm font-bold tracking-tight mt-10
            sm:w-8/12
            lg:w-10/12   
          ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h5>KEBERAGAMAN BUDAYA</h5>
          </div>
          <ActivityCard data={activitiesData} />
        </section>
        <hr className="my-10"></hr>

        <section className="lg:container lg:w-10/12 lg:flex lg:justify-between lg:mx-auto">
          <div className="w-11/12 sm:w-8/12 xl:w-11/12 mx-auto lg:w-3/5 lg:mx-0">
            <div className="flex items-center text-sm font-bold tracking-tight gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h5>ARTIKEL TERBARU</h5>
            </div>
            <PostsCard data={postsData} />
            <Link passHref href={`/article`}>
              <button className="mt-5 lg:mt-10 xl:w-5/6 p-1 text-xs lg:text-base border border-gray-400 w-full z-20 hover:font-bold">Lihat Lebih Banyak</button>
            </Link>
          </div>
          <hr className="my-10 lg:hidden"></hr>
          <div className="w-11/12 sm:w-8/12 lg:w-2/6 mx-auto lg:mx-0">
            <div className="flex items-center text-sm font-bold tracking-tight gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h5>EVENT TERBARU</h5>
            </div>
            <div>
              <EventCard data={eventsData} />
            </div>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>

      </main>
    </div>
  );
}
