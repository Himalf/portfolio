import React, { useEffect, useState } from "react";
import Aboutimage from "../../../assets/images/profilepng.png";

const Aboutus = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-16 px-6 transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Header */}
      <div
        className={`text-center mb-12 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-5xl font-extrabold mb-4 ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          About Me
        </h1>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Discover my journey and passion for crafting exceptional web
          applications.
        </p>
      </div>

      {/* About Content */}
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-80 h-80 rounded-full shadow-xl">
            {/* Animated Gradient Border */}
            <div
              className={`absolute inset-0 p-1 rounded-full bg-gradient-to-tr ${
                isDarkMode
                  ? "from-indigo-500 via-purple-500 to-pink-500"
                  : "from-indigo-400 via-blue-400 to-teal-400"
              } animate-gradient`}
            >
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <img
                  src={Aboutimage}
                  alt="profile"
                  className="w-64 h-64 p-2 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2
            className={`text-4xl font-extrabold ${
              isDarkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            I'm a MERN Stack Developer
          </h2>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Hi! I'm Himal Fullel, a passionate MERN stack developer skilled in
            crafting both frontend and backend solutions.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I specialize in responsive, dynamic web applications powered by
            MongoDB, Express.js, React, and Node.js.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Bringing ideas to life and embracing challenges is what drives me.
          </p>
          {/* Hire Me Button */}
          <button
            className={`px-8 py-3 font-bold rounded-full shadow-md transition-transform duration-300 hover:scale-110 ${
              isDarkMode
                ? "bg-indigo-500 text-white hover:bg-white hover:text-indigo-500"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
            onClick={() => alert("Thank you for hiring me!")}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
