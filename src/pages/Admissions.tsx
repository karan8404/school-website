import { useState } from 'react';

export const Admissions = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold text-blue-900">Admissions</h1>
      <p className="text-black">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <p className="text-black">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <div>
        <button
          className="flex items-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          Important Dates
          <svg
            className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div
          className={`mt-2 p-4 border rounded shadow transition-all duration-500 ease-out transform ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ overflow: 'hidden' }}
        >
          <ul className="list-disc pl-5 space-y-2 text-black">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </div>

      <div className="my-4">
        <a
          href="/Admission-Form-School.pdf"
          download
          className="inline-flex items-center py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Download Admission Form
          <svg
            className="ml-2 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 12a1 1 0 102 0V4a1 1 0 10-2 0v8zM4 8a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
          </svg>
        </a>
      </div>
    </div>
  );
}