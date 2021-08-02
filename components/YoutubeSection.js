import Fade from 'react-reveal';

const YoutubeSection = () => {
  return (
    <section className="py-5 lg:py-10 bg-light-blue">
      <div className="flex relative justify-center mb-5 font-serif w-11/12 mx-auto items-center text-xl lg:text-3xl font-bold tracking-tight">
        <h5>Kampung Jawa - Kelurahan Terban</h5>
      </div>
      <div className="mt-2 w-11/12 mx-auto">
        <Fade big duration={1500}>
          <div className="lg:w-7/12 mx-auto">
            <div id="yt-video" className="aspect-w-16 aspect-h-9 border">
              <iframe src="https://www.youtube.com/embed/tv0ogOmjrCA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
};

export default YoutubeSection;