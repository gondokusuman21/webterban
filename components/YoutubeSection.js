import Fade from 'react-reveal';

const YoutubeSection = () => {
  return (
    <section className="py-20 bg-light-blue">
      <div className="flex w-11/12 mx-auto items-center text-lg font-bold tracking-tight">
        <h5>Kampung Jawa : Destinasi Wisata di Yogyakarta</h5>
      </div>
      <div className="mt-5 w-11/12 mx-auto">
        <Fade big duration={1500}>
          <div id="yt-video" className="aspect-w-16 aspect-h-9 border">
            <iframe src="https://www.youtube.com/embed/tv0ogOmjrCA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Fade>
      </div>
    </section>
  )
};

export default YoutubeSection;