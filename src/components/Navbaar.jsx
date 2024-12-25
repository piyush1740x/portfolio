import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" gradientBackground bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            MyPortfolio
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto ${
            isOpen ? "bg-gradient-to-br from-purple-700 via-indigo-600 to-pink-600" : "bg-transparent"
          } md:bg-transparent text-center md:text-left transition-all duration-500 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:mx-4 my-4 md:my-0 group">
            <Link
              to="/"
              className="block text-lg font-medium hover:text-yellow-300 transition-colors relative md:after:content-[''] md:after:block md:after:w-0 md:after:h-[2px] md:after:bg-yellow-300 md:after:transition-all md:after:duration-300 group-hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="md:mx-4 my-4 md:my-0 group">
            <Link
              to="/about"
              className="block text-lg font-medium hover:text-yellow-300 transition-colors relative md:after:content-[''] md:after:block md:after:w-0 md:after:h-[2px] md:after:bg-yellow-300 md:after:transition-all md:after:duration-300 group-hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li className="md:mx-4 my-4 md:my-0 group">
            <Link
              to="/projects"
              className="block text-lg font-medium hover:text-yellow-300 transition-colors relative md:after:content-[''] md:after:block md:after:w-0 md:after:h-[2px] md:after:bg-yellow-300 md:after:transition-all md:after:duration-300 group-hover:after:w-full"
            >
              Projects
            </Link>
          </li>
          <li className="md:mx-4 my-4 md:my-0 group">
            <Link
              to="/contact"
              className="block text-lg font-medium hover:text-yellow-300 transition-colors relative md:after:content-[''] md:after:block md:after:w-0 md:after:h-[2px] md:after:bg-yellow-300 md:after:transition-all md:after:duration-300 group-hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
