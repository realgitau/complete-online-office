"use client"

import React from 'react';
import Image from 'next/image';

interface BookProps {
  title: string;
  imageSrc: string;
  price: string;
  description: string;
}

// A component for displaying individual book information
const Book: React.FC<BookProps> = ({ title, imageSrc, price, description }) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md rounded-xl max-w-md">
      <div className="h-70 w-full relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-600">{description}</p>
        <p className="mt-2 text-base text-gray-600">Price: {price}</p>
      </div>
    </div>
  );
};

const Books = () => {
  const books: BookProps[] = [
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband's. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It's about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband's. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It's about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband's. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It's about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    // Add more book entries here
  ];

  return (
    <section className="py-12 bg-white text-black sm:py-12 lg:py-16 p-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl mb-6">BOOKS </h2>
          <p className="mb-4">Here are some of the Awards that I&apos;ve received over the years</p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:text-left">
          {books.map((book, index) => (
            <Book key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
