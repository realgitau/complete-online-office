import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const Books = () => {
  return (
    <section id='projects' className="py-8">
      <h1 className='text-center font-bold text-4xl mb-12'>My Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BookItem title="Project Thoughts" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
        <BookItem title="Another Book" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
        <BookItem title="Third Book" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
        <BookItem title="Fourth Book" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
        <BookItem title="Fifth Book" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
        <BookItem title="Sixth Book" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe dignissimos laboriosam quod fugit. Ducimus?" />
      </div>
    </section>
  );
};

const BookItem = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 gap-1 m-10">
      <div className="flex justify-center mb-2">
        <Image src='/verahprofile.jpeg' alt='Vera' width={200} height={200} className='rounded-lg' />
      </div>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <p className='text-lg leading-7 text-gray-700 dark:text-gray-400 mb-6'>{description}</p>
      <div className="flex justify-end">
        <Link href="#" className="text-blue-500 hover:underline flex items-center">
          Read More <BsArrowUpRightSquare className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Books;

