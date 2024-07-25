export const Gallery = () => {

  const galleryItems = [
    {
      src: '/gallery/sports_day.jpg',
      caption: 'Students participating in various sports events.',
    },
    {
      src: '/gallery/science_exhibition.jpg',
      caption: 'Students presenting their science projects.',
    },
    {
      src: '/gallery/cultural_fest.jpg',
      caption: 'Students performing in the cultural fest.',
    },
    {
      src: '/gallery/classroom.jpg',
      caption: 'A glimpse of our interactive classrooms.',
    },
    {
      src: '/gallery/library.jpg',
      caption: 'Students reading and studying in the school library.',
    },
  ];

  const videoItems = [
    {
      src: '/gallery/school_tour.mp4',
      poster: '/gallery/school_tour.jpg',
      caption: 'School Tour',
    },
    {
      src: '/gallery/annual_function.mp4',
      poster: '/gallery/annual_function.jpg',
      caption: 'Annual Function',
    },
  ];

  return (
    <div className="mt-5">

      <div className="flex flex-row flex-wrap justify-center items-center">

        {videoItems.map((item, index) => (
          <div key={index} className="card w-80 md:w-2/5 m-auto md:my-10 shadow-xl mb-4">
            <figure className="w-full aspect-w-16 aspect-h-9">
              <video
                controls
                poster={item.poster}
                className="rounded-lg w-full h-full object-cover object-center"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </figure>
            <figcaption className="text-center text-xl text-blue-900 mt-2">{item.caption}</figcaption>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center">
        {galleryItems.map((item, index) => (
          <div key={index} className="card w-80 md:w-2/5 m-auto md:my-10 shadow-xl mb-4">
            <figure className="w-full aspect-w-16 aspect-h-9">
              <img
                src={item.src}
                alt={item.caption}
                className="rounded-lg w-full h-full object-cover object-center"
              />
            </figure>
            <figcaption className="text-center text-xl text-blue-900 mt-2">{item.caption}</figcaption>
          </div>
        ))}
      </div>
    </div>
  )
}