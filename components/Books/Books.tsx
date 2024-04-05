import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const Books = () => {
  return (
    <section id='projects' className="py-12">
      <h1 className='text-center font-bold text-4xl mb-8'>My Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
    </section>
  );
};

const BookItem = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-center mb-6">
        <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg' />
      </div>
      <h1 className='text-2xl font-bold mb-4'>Project Thoughts</h1>
      <p className='text-lg leading-7 text-gray-600 dark:text-gray-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?</p>
      <div className="flex justify-end">
        <Link href="#"className="text-blue-500 hover:underline flex items-center">
            Read More <BsArrowUpRightSquare className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Books;