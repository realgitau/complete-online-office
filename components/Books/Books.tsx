import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightSquare } from 'react-icons/bs'

const Books = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>My Books
        <hr className='w-6 h-1 mx-auto bg-black border-0 rounded' />
      </h1>
      <div>
        <div className='flex flex-col md:flex-row md:space-x-12'>
          <div className='md:1/2'>
            <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='md:1/2'>
            <h1 className='text-4xl font-bold mb-6'>Project Thoughts</h1>
            <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
          </div>
          <div className='md:1/2'>
            <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='md:1/2'>
            <h1 className='text-4xl font-bold mb-6'>Project Thoughts</h1>
            <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
          </div>
          <div className='md:1/2'>
            <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='md:1/2'>
            <h1 className='text-4xl font-bold mb-6'>Project Thoughts</h1>
            <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
          </div>
          <div className='md:1/2'>
            <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='md:1/2'>
            <h1 className='text-4xl font-bold mb-6'>Project Thoughts</h1>
            <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
          </div>
          <div className='md:1/2'>
            <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='md:1/2'>
            <h1 className='text-4xl font-bold mb-6'>Project Thoughts</h1>
            <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Books