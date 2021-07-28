import Image from 'next/image';

const HeroSection = ({ onClick }) => {

  const COVER_IMAGE_URL = "https://res.cloudinary.com/gondokusuman-21/image/upload/v1626695575/hero-image_j0bxmo.jpg";

  return (
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
          <h1 className="text-white font-bold z-20 font-serif text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Selamat Datang<br></br> di Kampung Jawa</h1>
          <button onClick={onClick} className="flex justify-around items-center bg-yellow p-2 w-40 md:w-52 lg:w-60">
            <h4 className="text-black text-xs md:text-sm lg:text-base">Telusuri sekarang</h4>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;