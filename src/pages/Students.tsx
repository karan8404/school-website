import { useState } from "react"

export const Students = () => {
  const activities = ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"];
  const clubs = ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"];
  const achievements = [{ name: "John Smith", achievement: "National Level Math Olympiad Winner" }, { name: "Sarah Lee", achievement: "Gold Medalist in State Swimming Championship" }, { name: "Tech Innovators Club", achievement: "Winners of Inter-School Robotics Competition" }];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const visibleActivities = activities.slice(index, index + 4).concat(
    activities.slice(0, Math.max(0, index + 4 - activities.length))
  );

  return (
    <div className="p-4 space-y-16">
      <h1 className="text-6xl font-bold mb-4 text-blue-900 text-center">Life at Springdale</h1>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-5 text-blue-900 text-center">Extracurricular Activities</h2>
        <div className="relative">
          <button onClick={handlePrev} className="absolute left-32 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
            &lt;
          </button>
          <div className="overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out justify-center" >
              {visibleActivities.map((activity) => (
                <div key={activity} className="card w-64 bg-base-100 shadow-xl mx-2">
                  <figure><img src={`/extracurricular/${activity}.jpg`} alt={activity} className="h-48 object-cover" /></figure>
                  <div className="card-body">
                    <h3 className="card-title">{activity}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="absolute right-32 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
            &gt;
          </button>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-5 text-blue-900 text-center">Clubs and Societies</h2>
        <div className="overflow-hidden w-full">
          <div className="flex transition-transform duration-500 ease-in-out justify-center" >
            {clubs.map((club) => (
              <div key={club} className="card w-64 bg-base-100 shadow-xl mx-2">
                <figure><img src={`/Clubs/${club}.jpg`} alt={club} className="h-48 object-cover" /></figure>
                <div className="card-body">
                  <h3 className="card-title">{club}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-5 text-blue-900 text-center">Achievements</h2>
        <div className="overflow-hidden w-full">
          <div className="flex transition-transform duration-500 ease-in-out justify-center" >
            {achievements.map((object) => (
              <div key={object.name} className="card w-64 bg-base-100 shadow-xl mx-2">
                <figure><img src={`/achievements/${object.name}.jpg`} alt={object.name} className="h-48 object-cover" /></figure>
                <div className="card-body">
                  <h3 className="card-title">{object.name}</h3>
                  <p>{object.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-5 text-blue-900 text-center">Student Council</h2>
        <div className="m-10 flex">
          <img src="/Student Council.jpg" alt="" className="h-96 mr-10" />
          <div className="space-y-4">
            <p className="text-emerald-600 text-xl">President: Amy Parker, Grade 12</p>
            <p className="text-emerald-600 text-xl">Vice President: Rajiv Mehta, Grade 11</p>
            <p className="text-emerald-600 text-xl">Secretary: Lisa Wong, Grade 10</p>
          </div>
        </div>
      </section>
    </div>
  )
}