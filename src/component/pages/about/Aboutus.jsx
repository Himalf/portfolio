import React, { useEffect, useState } from "react";
import Aboutimage from "../../../assets/images/aboutimage.png";

const Aboutus = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
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
        className={`text-center mb-12 transform transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
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
          Learn more about my journey and passion for building exceptional web applications.
        </p>
      </div>

      {/* About Content */}
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto transform transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={Aboutimage}
            alt="profile"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className={`text-4xl font-extrabold mb-4 ${
              isDarkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            I'm a MERN Stack Developer
          </h2>
          <p
            className={`text-lg leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Hello! I'm Himal Fullel, a passionate MERN stack developer skilled
            in both frontend and backend development.
          </p>
          <p
            className={`text-lg leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I specialize in building responsive and dynamic web applications
            using MongoDB, Express.js, React, and Node.js.
          </p>
          <p
            className={`text-lg leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Turning ideas into reality is what excites me the most. With a
            dedication to quality and an eagerness to tackle new challenges,
            I'm here to bring your vision to life.
          </p>
          {/* Hire Me Button */}
          <button
            className={`px-8 py-3 font-bold rounded-md shadow-md transition duration-300 ${
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
