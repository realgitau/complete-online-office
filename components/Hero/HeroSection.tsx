import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowCircleDown } from 'react-icons/hi'
import { HiArrowDownOnSquare } from 'react-icons/hi2'

const HeroSection = () => {
  return (
    <section id='home'>
        <div>
            <div>
                <h1 className='text-[70px] text-end p-4 '>Verah Omwocha</h1>
                <h2 className='text-[30px] text-end p-4'>AUTHOR CATALOGUE, 2024</h2>
            </div>
            <div className='relative'>
                <Image src='/verahprofile.jpeg' alt='hero' width={200} height={10} className='ml-[100px] mt-[70px] w-2/4  rounded-xl md:hidden'/>
                <div className='absolute inset-y-0 right-[70px] w-1 bg-black'></div>
            </div>
            
        </div>
        <div className='flex flex-row justify-center mt-10'>
            <Link href={'#about'}>
                <HiArrowDownOnSquare size={50} className='text-black dark:text-white animate-bounce' />
            </Link>
        </div>
    </section>
  )
}

export default HeroSection
