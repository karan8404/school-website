import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className="p-4 md:ml-5">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Contact Us</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-blue-900">Address</h2>
        <p className="text-emerald-700">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-blue-900">Phone</h2>
        <p className="text-emerald-700">+1 (123) 456-7890</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-blue-900">Email</h2>
        <p className="text-emerald-700">info@springdale.edu</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-blue-900">Contact Form</h2>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-emerald-700">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-slate-800 w-full text-white"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-emerald-700">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full bg-slate-800 text-white"
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-emerald-700">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered bg-slate-800 w-full text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <div className="mb-4">
        <h2 className="text-xl md:text-3xl md:text-center md:mb-5 font-semibold text-blue-900">Location</h2>
        <div className="w-80 h-60 md:w-[800px] md:h-[600px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846818!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}