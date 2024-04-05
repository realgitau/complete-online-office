import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowDownOnSquare } from 'react-icons/hi2';
import { SocialIcon } from 'react-social-icons';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='pt-6 max-w-[1170px] w-full grid gap-4 p-6'>
        <div className='flex justify-center items-center text-center'>
          <div className='flex items-center'>
            <div className="mr-4 flex flex-col">
              <SocialIcon url="https://twitter.com" bgColor="#000000" className="mb-2" style={{ width: '40px', height: '40px' }} />
              <SocialIcon url="https://twitter.com" bgColor="#000000" className="mb-2" style={{ width: '40px', height: '40px' }} />
              <SocialIcon url="https://twitter.com" bgColor="#000000" className="mb-2" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className='relative'>
              <div className="absolute top-0 right-0 w-5 h-5 bg-black rotate-[30deg] "></div>
              <Image src="/verahprofile.jpeg" alt="verah" width={250} height={250} className='w-[250px] shadow-md' />
              <div className="absolute bottom-2 left-4 w-[250px] h-[320px] border-black border-2  -z-10"></div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center">
          <p className="text-center mb-4">
            Versatile Fullstack Developer proficient in crafting dynamic solutions across web, mobile, and desktop platforms. As a dedicated developer, I thrive on embracing novel opportunities and continually expanding my skill set.
          </p>

          <Link href='#about' className='text-center' >
            <HiArrowDownOnSquare className='text-4xl mx-auto' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
