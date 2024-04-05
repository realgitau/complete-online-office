import React from 'react';

const Awards = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* First div */}
      <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden mb-8">
        {/* Left side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8 relative">
        <h1 className='text-center font-bold text-4xl'>Awards</h1>
        <hr className='w-6 h-1 mx-auto bg-black border-0 rounded' />
          <div className='md:absolute bottom-0 ml-6 mb-6 md:static'>
            <span className="text-6xl md:text-6xl">01.</span>
            <hr className="w-10 h-1 rounded bg-black dark:border-white mt-4" />
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My work has been published on</h2>
          <ul className="list-disc pl-4">
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
          </ul>
        </div>
      </div>

      {/* Second div */}
      <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden mb-8">
        {/* Left side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My work has been published on</h2>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8 relative">
          <div className='md:absolute bottom-0 ml-6 mb-6 md:static'>
            <span className="text-6xl md:text-6xl">02.</span>
            <hr className="w-10 h-1 rounded bg-black dark:border-white mt-4" />
          </div>
        </div>
      </div>

      {/* Third div */}
      <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
        {/* Left side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8 relative">
          <div className='md:absolute bottom-0 ml-6 mb-6 md:static'>
            <span className="text-6xl md:text-6xl">03.</span>
            <hr className="w-10 h-1 rounded bg-black dark:border-white mt-4" />
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My work has been published on</h2>
          <ul className="list-disc pl-4">
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
            <li>Brittle</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Awards;


