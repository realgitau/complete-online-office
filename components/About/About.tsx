import React from 'react';

const About = () => {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
    <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left ">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About me
                    </h2>

                    <p>
                    Verah Omwocha is a seasoned publishing professional with over a decade of experience in managing and maintaining high publication standards. Skilled in communications, book editing, and proofreading across various content types, she excels in providing strategic leadership to publication teams. Her expertise includes elevating the quality of institutional documents, website content, and stylistic editing initiatives.
                    Verah is also proficient in conducting editorial training sessions and judging writing competitions. With a commitment to excellence, she contributes to enhancing readability, engagement, and brand visibility through her meticulous editing and leadership skills.
                    She holds a Master's Degree in Literature from Kenyatta University and a Bachelor of Arts degree in Education
                    (Language and Literature) from the University of Nairobi.
                    She is married and has two daughters.

                    </p>
                </div>
            </main>
        </div>
    </div>
</div>
  );
}

export default About;

