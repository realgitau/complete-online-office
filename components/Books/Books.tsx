import React from 'react';
import Image from 'next/image';

const Books = () => {
  return (
    <section id='projects' className="py-8">
      <h1 className='text-center font-bold text-4xl mb-12'>My Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BookItem title="Diary of the Media Memoir" description="This is a story of a young girl lost in a world too big for her petite body and unwelcome ideas. A girl trying to understand the love of God. And her husband's.It is about a girl, who is trying to fix puzzles to understand why she is here. And to do what she was sent to do. It's about a girl on a journey to finding herself. To healing the child in her. To finding peace. And digging deep into her soul, to find forgiveness and hand it to the world. Is marriage welcoming of a young girl, broken in so many ways? She asks." />
        <BookItem title="The Crescent Moon Award winning short story" description="Ksh. 300. Available at Nuria
        'The Crescent Moon' is a short story that won the 2017 Tito Livio Award for Historical Fiction organized by the ItalianInstitute of Culture in Nairobi and Sugarpulp, Italy.It recounts the tumultuous events of Kenya's 1992 election violence." />
        <BookItem title="The Craft of Creative Writing with Mugeni Ojiambo Ksh. 1000." description="Have you been fantasising about writing a great book? Or you've written, and all you get are rejections? The Craft of Creative Writing is the writing companion you need.No matter what your writing goals are, this book ensures nothing stands between you and good writing. It is a handbook. A guide. A reference point. A promise of hope for your writing. Exactly what you need. Writing is work, so let's get to work, shall" />
        <BookItem title="Wendo Tours Nairobi County (Tourism series 1)" description="This is a compelling story about ten children who win an essay writing competition, earning them the opportunity to travel across various counties in Kenya. Through this adventure, they not only explore the breathtaking tourist sites and vibrant cultures that each county has to offer but also forge deep bonds of friendship and understanding. Their transformative experience broadens their horizons, fostering appreciation for their country's rich diversity, and instilling valuable life lessons about teamwork, resilience, and cultural exchange." />
        <BookItem title="Naisula Tours Marsabit County (Tourism series 2)" description="This story is similar to the one above, only that it focuses on Marsabit county. The experiences as as different as the places they visit." />
        <BookItem title="Osman Tours Mombasa County (Tourism Series 3)" description="This story will be similar to the one above, only that it focuses on Mombasa County." />
      </div>
    </section>
  );
};

const BookItem = ({ title, description }) => {
  return (
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image width={200} height={200} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='/verahprofile.jpeg' alt="book" />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default Books;


