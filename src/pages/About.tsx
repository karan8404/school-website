

export const About = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold text-blue-900">About Springdale Public School</h1>

      <div>
        <h2 className="text-xl font-semibold text-blue-900 underline">History</h2>
        <p className="text-teal-800">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-900 underline">Vision</h2>
        <p className="text-teal-800">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-900 underline">Mission</h2>
        <p className="text-teal-800">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-900 underline">Principal's Message</h2>
        <p className="text-teal-800">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-900 underline">Infrastructure and Facilities</h2>
        <ul className="list-disc pl-5 mt-2">
          <li className="text-teal-800">State-of-the-art science and computer labs</li>
          <li className="text-teal-800">Spacious and well-equipped classrooms</li>
          <li className="text-teal-800">Library with a vast collection of books and digital resources</li>
          <li className="text-teal-800">Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>

    </div>
  );
}