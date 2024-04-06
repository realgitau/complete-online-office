import React from 'react';

const Awards = () => {
  return (
    <section id="features" className="container bg-black mx-auto px-4 space-y-6 bg-black-50 py-8 md:py-12 lg:py-20 rounded-xl">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-white leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
        <p className="max-w-[85%] leading-normal text-white text-muted-foreground sm:text-lg sm:leading-7">
          Here is a list of some of the additional services I offer.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

        <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Awards;
