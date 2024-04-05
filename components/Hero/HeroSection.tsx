import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowDownOnSquare } from 'react-icons/hi2';
import { AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='pt-6 max-w-[1170px] w-full grid gap-4 p-6'>
        <div className='flex justify-center items-center flex-col md:flex-row text-center'>
          <div className='flex items-center'>
            <div className="mr-4 flex flex-col">
              <div className="icon-wrapper mb-2"><AiOutlineTwitter size={30} /></div>
              <div className="icon-wrapper mb-2"><AiFillLinkedin size={30} /></div>
              <div className="icon-wrapper mb-2"><AiFillInstagram size={30} /></div>
              <div className="icon-wrapper mb-2"><AiOutlineWhatsApp size={30} /></div>
            </div>
            <div className='relative'>
              <Image src="/verahprofile.jpeg" alt="verah" width={250} height={250} className='w-full md:w-[250px] shadow-md' />
              <div className="absolute bottom-2 left-4 w-full md:w-[250px] md:h-[320px] border-black bg-slate-200 border-2 -z-10"></div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center ">
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



