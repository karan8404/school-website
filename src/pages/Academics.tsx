

export const Academics = () => {
  return (
    <div className="p-8">

      <h2 className="text-3xl font-bold text-blue-900 mb-5">Curriculum</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="card bg-green-900 shadow-xl h-fit w-72">
          <div className="card-body">
            <h2 className="card-title text-white underline ">Primary (Grades 1-5)</h2>
            <p className="text-white">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
        </div>

        <div className="card bg-yellow-900 shadow-xl h-fit w-72">
          <div className="card-body">
            <h2 className="card-title text-white underline">Secondary (Grades 6-10)</h2>
            <p className="text-white">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </div>
        </div>

        <div className="card bg-red-900 shadow-xl h-fit w-72">
          <div className="card-body">
            <h2 className="card-title text-white underline">Senior Secondary (Grades 11-12)</h2>
            <div className="space-y-2">
              <p className="text-white"><strong className="text-emerald-300">Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
              <p className="text-white"><strong className="text-emerald-300">Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-blue-900 mb-5 mt-8">Teaching Methodologies</h2>
      <p className="mb-5 text-black">
        We use a blend of traditional and modern teaching techniques to cater to different learning styles.
      </p>

      <h2 className="text-3xl font-bold text-blue-900 mb-5">Educational Resources</h2>
      <p className="text-black">
        Digital classrooms, interactive learning modules, and access to online educational platforms.
      </p>

    </div>
  );
}
