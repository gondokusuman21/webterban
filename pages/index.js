import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../public/heroimage.png';
import ActivityCard from '../components/ActivityCard';
import EventCard from '../components/EventCard';
import PostsCard from '../components/PostsCard';
import { data } from 'autoprefixer';
import { Fade } from 'react-reveal';
import HeroSection from '../components/HeroSection';
import YoutubeSection from '../components/YoutubeSection';
import ActivitySection from '../components/ActivitySection';
import ArticleSection from '../components/ArticleSection';
import LocationSection from '../components/LocationSection';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";
const HERO_IMAGE_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1627722258/heroimage_a6uohw_mwno4f.webp";

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
    document.getElementById('yt-video').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <head>
        <Head>
          <title>Terban Kampung Wisata</title>
          <meta property="og:title" content="TITLE OF YOUR WEBSITE" />
          <meta property="og:image" content={HERO_IMAGE_URL} />
          <meta property="og:description" content="DESC" />
          <meta property="og:url" content="https://webterban.vercel.app/" />
          <meta property="og:image:width" content='1200' />
          <meta property="og:image:height" content='627' />
          <meta property="og:type" content='website' />
        </Head>
      </head>
      <body>

        <section className="relative">
          <NavBar />
          <div className="relative h-96 md:h-128 lg:h-9/10-screen w-full">
            <Image alt="Test" src={HERO_IMAGE_URL} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-14 xl:gap-20 top-0 left-0 w-full h-full items-center justify-center">
            <h1 className="text-noto font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">ꦱꦸꦒꦼꦁꦫꦮꦸꦃꦲꦶꦁꦏꦩ꧀ꦥꦸꦁꦗꦮ</h1>
            <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Selamat Datang<br></br>di Kampung Jawa</h1>
          </div>
        </section>

        <YoutubeSection />

        <ActivitySection activitiesData={activitiesData} />

        <ArticleSection postsData={postsData} eventsData={eventsData} />

        <LocationSection />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
