
export const Home = () => {
  return (
    <div className="m-3 sm:m-10">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-900 text-center">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-10 py-3">

        <div className="card bg-green-800 w-72 md:w-96 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-300">
          <div className="card-body">
            <h2 className="card-title text-white">Annual Sports Day</h2>
            <p className="text-white"> Celebrating Excellence in Sports</p>
          </div>
          <figure>
            <img src="/annual-sports-day.jpg" alt="annual sports day" className="w-full h-48 object-cover" />
          </figure>
        </div>

        <div className="card bg-yellow-800 w-72 md:w-96 shadow-xl  hover:shadow-2xl transform hover:-translate-y-3 transition duration-300">
          <div className="card-body">
            <h2 className="card-title text-white">Cultural Fest</h2>
            <p className="text-white">Embracing Diversity and Creativity</p>
          </div>
          <figure>
            <img src="/cultural_fest.jpeg" alt="cultural fest" className="w-full h-48 object-cover" />
          </figure>
        </div>

        <div className="card bg-red-800 w-72 md:w-96 shadow-xl  hover:shadow-2xl transform hover:-translate-y-3 transition duration-300">
          <div className="card-body">
            <h2 className="card-title text-white">Science Exhibition</h2>
            <p className="text-white">Showcasing Student Innovations</p>
          </div>
          <figure>
            <img src="/science_exhibition.jpg" alt="science exhibition" className="w-full h-48 object-cover object-top" />
          </figure>
        </div>

      </div>
    </div>
  )
}
