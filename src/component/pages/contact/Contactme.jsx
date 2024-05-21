import React from "react";

const Contactme = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "" : "dark";
  const darkModeClass1 = isDarkMode ? "" : "darks";
  return (
    <div
      className={`bg-secondColor p-10 min-h-screen flex flex-col items-center ${darkModeClass}`}
    >
      <h2 className={`text-4xl font-bold text-white mb-8 ${darkModeClass}`}>
        Contact Me
      </h2>
      <div className="w-full max-w-lg">
        <form
          className={`bg-mainColor text-white shadow-md rounded-lg p-8 ${darkModeClass1}`}
        >
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="phone"
              placeholder="Your phone number"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              cols="40"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-buttonColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                alert("thank you for sending us message we will response soon");
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={`mt-10 w-full max-w-lg text-white ${darkModeClass}`}>
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <p className="mb-2">
          <strong>Address:</strong> 1234 Street Name, City, State, 12345
        </p>
        <p className="mb-2">
          <strong>Email:</strong> contact@example.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="mb-2">
          <strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM
        </p>
      </div>
    </div>
  );
};

export default Contactme;
