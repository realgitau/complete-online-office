import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-gray-100 dark:bg-gray-800 py-12 h-screen flex flex-col justify-center">
      <h1 className='text-center font-bold text-4xl'>About</h1>
      <hr className='w-6 h-1 mx-auto bg-black border-0 rounded' />
      <div className="container mx-auto px-4 mt-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
            Verah Omwocha is a seasoned publishing professional with over a decade of experience in managing and maintaining high publication standards. Skilled in communications, book editing, and proofreading across various content types, she excels in providing strategic leadership to publication teams. Her expertise includes elevating the quality of institutional documents, website content, and stylistic editing initiatives. Verah is also proficient in conducting editorial training sessions and judging writing competitions. With a commitment to excellence, she contributes to enhancing readability, engagement, and brand visibility through her meticulous editing and leadership skills. She holds a Master's Degree in Literature from Kenyatta University and a Bachelor of Arts degree in Education (Language and Literature) from the University of Nairobi. She is married and has two daughters.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

