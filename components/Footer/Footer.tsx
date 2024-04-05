import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  // Function to get current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='mx-auto max-x-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 bg-gray-300 my-8' />
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div>&copy; {getCurrentYear()} Verah </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500 mr-4" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter className="text-2xl" />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;