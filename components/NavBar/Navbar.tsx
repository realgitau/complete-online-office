"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 relative"> {/* Added relative positioning */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">Porfolio </div>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden absolute top-2 right-0 mt-4 mr-4"> {/* Positioned at top right */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-8 w-8"
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
        </div>

        {/* Navigation links */}
        <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
          <a href="/" className="text-white  px-4 py-2 hover:text-orange-600 ">Home</a>
          <a href="#about" className="text-white  px-4 py-2  hover:text-orange-600">About</a>
          <a href="#books" className="text-white  px-4 py-2  hover:text-orange-600">Books</a>
          <a href="#contact" className="text-white  px-4 py-2  hover:text-orange-600">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
