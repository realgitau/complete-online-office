import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone Number:</label>
          <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 h-40 resize-none"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 w-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
