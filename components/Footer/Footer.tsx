import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  // Function to get current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 bg-gray-300 my-8' />
      <div className='mx-auto p-4 flex flex-col items-center justify-center text-neutral-900 md:flex-row md:justify-between'>
        <div className="mb-4 md:mb-0">&copy; {getCurrentYear()} Verah</div>
        <div className="flex items-center space-x-4">
          <SocialLink href="https://twitter.com" icon={<AiOutlineTwitter />} />
          <SocialLink href="https://linkedin.com" icon={<AiFillLinkedin />} />
        </div>
      </div>
    </footer>
  );
};

// SocialLink component
const SocialLink = ({ href, icon }) => {
  return (
    <a href={href} className="text-gray-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default Footer;