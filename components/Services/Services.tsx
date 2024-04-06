"use client";

import React, { useState } from 'react';

function Services() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <section id="features" className="container bg-black mx-auto px-4 space-y-6 bg-black-50 py-8 md:py-12 lg:py-20 rounded-xl">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-white leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
        <p className="max-w-[85%] leading-normal text-white text-muted-foreground sm:text-lg sm:leading-7">
          Here is a list of some of the additional services I offer.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

        <div
          className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2"
          onClick={toggleAppointmentForm}
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2"
          onClick={toggleAppointmentForm}
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-lg border bg-white dark:bg-black select-none hover:shadow hover:shadow-teal-200 p-2"
          onClick={toggleAppointmentForm}
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 dark:text-white">
              <h3 className="font-bold dark:text-white">Consultation</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        {/* Repeat the above divs for other services */}

      </div>

      {showAppointmentForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Appointment Form</h2>
            <form className="space-y-4" action="" method="POST">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name" type="text" placeholder="Enter your name" />
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="johndoe@gmail.com" />
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone" type="text" placeholder="0712345678" />
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Message</label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message" placeholder="Enter your message">
                  </textarea>

              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  type="submit">
                  Book Appointment
                </button>
                <button onClick={toggleAppointmentForm} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}

export default Services;

