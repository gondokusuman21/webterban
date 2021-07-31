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

const STRAPI_URL = "https://strapi-gk.herokuapp.com";
const HERO_IMAGE_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1627708348/heroimage_a6uohw.png";

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
               <div><img alt="Test" src={HERO_IMAGE_URL}></img></div>
               <div className="absolute flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-14 xl:gap-20 top-0 left-0 w-full h-full items-center justify-center">
                  <h1 className="text-noto font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">ꦱꦸꦒꦼꦁꦫꦮꦸꦃꦲꦶꦁꦏꦩ꧀ꦥꦸꦁꦗꦮ</h1>
                  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Selamat Datang di Kampung Jawa</h1>
               </div>
            </section>

            <YoutubeSection />

         </body>
         {/* <body>
            <nav>
               <NavBar></NavBar>
            </nav>
            <main>
               <HeroSection onClick={handleTelusuriButton} />

               <section id="main-section" className="w-full max- mx-auto mt-10">
                  <div className="flex w-11/12 mx-auto gap-1 items-center text-sm font-bold tracking-tight mt-10 sm:w-8/12 lg:w-10/12">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                     </svg>
                     <h5>KAMPUNG JAWA: DESTINASI WISATA DI YOGYAKARTA</h5>
                  </div>
                  <div className="mt-5 w-11/12 sm:w-8/12 lg:w-10/12 mx-auto">
                     <Fade big duration={1500}>
                        <div id="yt-video" className="aspect-w-16 aspect-h-9">
                           <iframe src="https://www.youtube.com/embed/tv0ogOmjrCA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                     </Fade>
                  </div>
               </section>
               <hr className="my-10"></hr>

               <section>
                  <div className="flex w-11/12 mx-auto gap-1 items-center text-sm font-bold tracking-tight mt-10 sm:w-8/12 lg:w-10/12">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                     </svg>
                     <h5>KEBERAGAMAN BUDAYA</h5>
                  </div>
                  <ActivityCard data={activitiesData} />
               </section>
               <hr className="mb-10 -mt-10"></hr>

               <section className="lg:container lg:w-10/12 lg:flex lg:justify-between lg:mx-auto">
                  <div className="w-11/12 sm:w-8/12 xl:w-11/12 mx-auto lg:w-3/5 lg:mx-0">
                     <div className="flex items-center text-sm font-bold tracking-tight gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <h5>ARTIKEL TERBARU</h5>
                     </div>
                     <PostsCard data={postsData} />
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

               <hr className="my-10"></hr>

               <section className="w-11/12 sm:w-8/12 lg:w-10/12 xl:w-10/12 mx-auto">
                  <div className="flex items-center text-sm font-bold tracking-tight gap-1 mb-5">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     <h5>LOKASI</h5>
                  </div>
                  <div className="w-full md:w-3/4 lg:w-1/2">
                     <div className="aspect-w-3 aspect-h-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.179497571133!2d110.37409916198733!3d-7.780308429933205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58348ad2bbc1%3A0xf958601c9807f8b0!2sTerban%2C%20Kec.%20Gondokusuman%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1627390727816!5m2!1sid!2sid"
                           width="600"
                           height="450"
                           style={{ border: 0 }}
                           allowFullScreen=""
                           loading="lazy">
                        </iframe>
                     </div>
                  </div>
               </section>
            </main >
         </body> */}

         <footer>
            <Footer />
         </footer>


      </>
   );
}
