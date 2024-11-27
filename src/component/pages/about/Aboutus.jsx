import React from "react";
import Aboutimage from "../../../assets/images/aboutimage.png";

const Aboutus = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "bg-mainColor text-white" : "bg-secondColor text-black";

  return (
    <div className={`py-16 px-6 ${darkModeClass}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-buttonColor">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Learn more about my journey and passion for building exceptional web applications.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={Aboutimage}
            alt="profile"
            className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-buttonColor mb-4">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Hello! I'm Himal Fullel, a passionate MERN stack developer skilled
            in both frontend and backend development.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I specialize in building responsive and dynamic web applications
            using MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Turning ideas into reality is what excites me the most. With a
            dedication to quality and an eagerness to tackle new challenges,
            I'm here to bring your vision to life.
          </p>
          {/* Hire Me Button */}
          <button
            className="px-8 py-3 bg-buttonColor text-white font-bold rounded-md shadow-md hover:bg-white hover:text-buttonColor transition duration-300"
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
