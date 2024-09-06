import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-8">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 shadow-lg rounded-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0 lg:w-1/3">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Feel free to reach out to us with any questions or concerns.
              </p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700">Phone</h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700">Email</h4>
                <p className="text-gray-600">contact@dentalsite.com</p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700">Address</h4>
                <p className="text-gray-600">
                  123 Smile Street, Dental City, ST 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
