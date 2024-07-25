import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownStyles = isOpen
    ? "opacity-100 visibility-visible max-h-60"
    : "opacity-0 visibility-hidden max-h-0";

  return (
    <div className="navbar bg-blue-900">
      <div className="flex-1">
        <div className="flex items-center ml-5" onClick={() => { navigate('/') }}>
          <img src="/logo.png" className="h-10 w-10 cursor-pointer min-w-10" />
          <a className="btn btn-ghost text-xl text-white hidden md:inline p-2">Springdale Public School</a>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <div className="flex flex-row items-center">
            <li><a className="text-white" onClick={() => { navigate('/about') }}>{window.innerWidth > 640 ? "About Us" : <img src="/icons/about.png" className="w-6"/>}</a></li>
            <li><a className="text-white" onClick={() => { navigate('/academics') }}>{window.innerWidth > 640 ? "Academics" : <img src="/icons/academics.png" className="w-6"/>}</a></li>
            <li><a className="text-white" onClick={() => { navigate('/admissions') }}>{window.innerWidth > 640 ? "Admissions" : <img src="/icons/admission.png" className="w-6"/>}</a></li>
          </div>
          <li className="relative flex justify-center">
            <div>
              <button
                className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                onClick={() => setIsOpen(!isOpen)}>
                More
                <span className={`inline-block ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>&#9660;</span>
              </button>
              <ul
                className={`absolute bg-base-100 rounded-md p-2 w-32 ${dropdownStyles} transition-all duration-500 ease-in-out overflow-hidden z-20`}
                style={{ top: '100%', right : 12 }}>
                <li><a className="block px-4 py-2 text-sm text-white hover:bg-teal-500" onClick={() => { setIsOpen(false); navigate('/faculty') }}>Faculty</a></li>
                <li><a className="block px-4 py-2 text-sm text-white hover:bg-teal-500" onClick={() => { setIsOpen(false); navigate('/students') }}>Students</a></li>
                <li><a className="block px-4 py-2 text-sm text-white hover:bg-teal-500" onClick={() => { setIsOpen(false); navigate('/gallery') }}>Gallery</a></li>
                <li><a className="block px-4 py-2 text-sm text-white hover:bg-teal-500" onClick={() => { setIsOpen(false); navigate('/contact') }}>Contact Us</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
