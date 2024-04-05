import React from 'react';

const Awards = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First award */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-center">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">01. Awards</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">My work has been recognized on the following platforms:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
            </ul>
          </div>
        </div>

        {/* Second award */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-center">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">02. Achievements</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">My work has been acknowledged on the following platforms:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
            </ul>
          </div>
        </div>

        {/* Third award */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-center">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">03. Recognitions</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">My work has been commended on the following platforms:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
              <li>Brittle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;

