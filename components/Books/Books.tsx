"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface BookProps {
  title: string;
  imageSrc: string;
  price: string;
  description?: string; // Making description optional
}

const Book: React.FC<BookProps> = ({ title, imageSrc, price, description = '' }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = description.slice(0, 50);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="relative overflow-hidden w-full bg-white shadow-md mt-6 mb-6 rounded-xl">
      <div className="h-80 md:h-96 w-full relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-600">
          {showFullDescription ? description : `${truncatedDescription}...`}
          <button className="text-blue-500 ml-2" onClick={toggleDescription}>
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        </p>
        <p className="mt-2 text-base text-gray-600">Price: {price}</p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black">Buy</button>
      </div>
    </div>
  );
};

const Books: React.FC = () => {
  const books: BookProps[] = [
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband&apos;s. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It&apos;s about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband&apos;s. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It&apos;s about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    {
      title: "Diary of the Miaha Memoir",
      imageSrc: "/verahprofile.jpeg",
      price: "Ksh. 950, AVAILABLE AT Nuria store.",
      description: "This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband&apos;s. It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It&apos;s about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks."
    },
    // Add more books if needed
  ];

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default Books;

