

export const Faculty = () => {
  const facultyMembers = [
    { name: "John Doe", role: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration", image: "/faculty/john-doe.jpg" },
    { name: "Jane Smith", role: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years of teaching experience", image: "/faculty/jane-smith.png" },
    { name: "Emily Johnson", role: "English Teacher", qualification: "M.A. in English", experience: "10 years of teaching experience", image: "/faculty/emily-johnson.jpg" },
    { name: "Michael Brown", role: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years of teaching experience", image: "/faculty/michael-brown.jpg" },
    { name: "Sophia Davis", role: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience", image: "/faculty/sophia-davis.jpg" },
    { name: "David Wilson", role: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience", image: "/faculty/david-wilson.jpeg" },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {facultyMembers.map((member, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl flex flex-col">
            <figure className="h-48 w-full">
              <img src={member.image} alt="Faculty" className="h-full w-full object-cover object-top" />
            </figure>
            <div className="card-body flex-1">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.qualification}</p>
              <p>{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}