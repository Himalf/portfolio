import React from "react";

const Contactme = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-900";
  const inputClass = isDarkMode
    ? "bg-gray-800 text-white border-gray-700 focus:ring-indigo-400"
    : "bg-white text-gray-800 border-gray-300 focus:ring-indigo-600";

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center p-10 ${darkModeClass}`}
    >
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-10 mb-8 lg:mb-0">
        <h2 className="text-4xl font-extrabold text-center lg:text-left mb-8 text-indigo-600">
          Contact Me
        </h2>
        <form className={` shadow-lg rounded-lg p-8 dark:bg-gray-800 ${darkModeClass}`}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 ${inputClass}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 ${inputClass}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 ${inputClass}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 ${inputClass}`}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => alert("Thank you for contacting us. We'll get back to you soon!")}
            className="w-full py-3 text-lg font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-10">
        <div className={` shadow-lg rounded-lg p-8 ${darkModeClass}`}>
          <h3 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">
            Contact Information
          </h3>
          <p className="text-lg mb-4">
            <strong className="font-semibold">📍 Address:</strong> Butwal, Nepal
          </p>
          <p className="text-lg mb-4">
            <strong className="font-semibold">✉️ Email:</strong>{" "}
            <a href="mailto:himal.fullel15@gmail.com" className="underline text-indigo-600">
              himal.fullel15@gmail.com
            </a>
          </p>
          <p className="text-lg mb-4">
            <strong className="font-semibold">📞 Phone:</strong> +977 9765310103, 9867527352
          </p>
          <p className="text-lg mb-4">
            <strong className="font-semibold">⏰ Working Hours:</strong> Mon - Sat, 9 AM - 5 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
