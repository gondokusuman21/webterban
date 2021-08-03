const LocationSection = () => {
  return (
    <section className="bg-light-gray py-10">
      <div className="w-11/12 sm:w-8/12 lg:w-10/12 xl:w-10/12 mx-auto">
        <div className="flex mb-5 justify-center font-serif w-11/12 mx-auto text-lg lg:text-3xl font-bold tracking-tight">
          <h5>Lokasi</h5>
        </div>
        <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
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
      </div>
    </section>
  )
};

export default LocationSection;