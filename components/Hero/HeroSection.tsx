import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowDownOnSquare } from 'react-icons/hi2';

const HeroSection = () => {
  return (
    <section id='home' className='py-20 md:py-32'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='text-center md:text-right md:pr-16 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6'>Verah Omwocha</h1>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-8'>AUTHOR CATALOGUE, 2024</h2>
        </div>
        <div className='relative'>
          <figure className='max-w-[800px]'>
            <Image
              width={200}
              height={200}
              className='rounded-lg'
              src='/verahprofile.jpeg'
              alt='hero'
            />
          </figure>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-10'>
        <Link href={'#about'}>
          <HiArrowDownOnSquare size={50} className='text-black dark:text-white animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
