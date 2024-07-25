export const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-between space-x-4 p-4 m-10">
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <video
            controls
            poster="/gallery/school_tour.jpg"
            className="rounded-lg w-full h-full object-cover object-center"
          >
            <source src="/gallery/school_tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">School Tour</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <video
            controls
            poster="/gallery/annual_function.jpg"
            className="rounded-lg w-full h-full object-cover object-center"
          >
            <source src="/gallery/annual_function.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">Annual Function</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <img
            src="/gallery/sports_day.jpg"
            alt="Students participating in various sports events."
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">Students participating in various sports events.</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <img
            src="/gallery/science_exhibition.jpg"
            alt="Students presenting their science projects."
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">Students presenting their science projects.</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <img
            src="/gallery/cultural_fest.jpg"
            alt="Students performing in the cultural fest."
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">Students performing in the cultural fest.</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <img
            src="/gallery/classroom.jpg"
            alt="A glimpse of our interactive classrooms."
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">A glimpse of our interactive classrooms.</figcaption>
      </div>
      <div className="card w-2/5 shadow-xl mb-4">
        <figure className="w-full aspect-w-16 aspect-h-9">
          <img
            src="/gallery/library.jpg"
            alt="Students reading and studying in the school library."
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </figure>
        <figcaption className="text-center text-xl text-blue-900 mt-2">Students reading and studying in the school library.</figcaption>
      </div>
    </div>
  )
}