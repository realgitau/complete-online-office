import React from 'react';

const Awards = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16 p-10 rounded-xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">AWARDS!</h2>
          <p className="mb-4">Here are some of the Awards that I&apos;ve received over the years</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publications</h3>
              <div className="mt-6 text-base text-gray-600">
                <ul>
                  {/* List items */}
                </ul>
                <a href="" className="block mt-2 underline">Visit: https://linktr.ee/verahomwocha to read samples</a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publications</h3>
              <div className="mt-6 text-base text-gray-600">
                <ul>
                  {/* List items */}
                </ul>
                <a href="" className="block mt-2 underline">Visit: https://linktr.ee/verahomwocha to read samples</a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publications</h3>
              <div className="mt-6 text-base text-gray-600">
                <ul>
                  {/* List items */}
                </ul>
                <a href="" className="block mt-2 underline">Visit: https://linktr.ee/verahomwocha to read samples</a>
              </div>
            </div>
          </div>
          {/* Repeat the above div structure for other awards */}
        </div>
      </div>
    </section>
  );
}

export default Awards;
