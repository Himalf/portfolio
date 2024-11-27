import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdHighQuality } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Skills = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "" : "darks";

  return (
    <div
      className={`bg-secondColor py-16 px-4 flex flex-col items-center ${darkModeClass}`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Our <span className="text-buttonColor">Skills</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our expertise. We combine creativity, quality, and reliability
          to deliver top-notch services that cater to your needs.
        </p>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* High Quality */}
        <div
          className={`group p-8 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-mainColor ${darkModeClass}`}
        >
          <div className="flex flex-col items-center">
            <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <MdHighQuality className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">High Quality</h3>
            <p className="text-gray-300 text-center">
              We deliver services designed to provide a seamless and
              high-quality user experience.
            </p>
          </div>
        </div>

        {/* Awesome Ideas */}
        <div
          className={`group p-8 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-mainColor ${darkModeClass}`}
        >
          <div className="flex flex-col items-center">
            <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <HiLightBulb className="text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Awesome Ideas</h3>
            <p className="text-gray-300 text-center">
              Our innovative ideas help turn your vision into reality with
              style and precision.
            </p>
          </div>
        </div>

        {/* Reliability */}
        <div
          className={`group p-8 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-mainColor ${darkModeClass}`}
        >
          <div className="flex flex-col items-center">
            <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <VscWorkspaceTrusted className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Reliability</h3>
            <p className="text-gray-300 text-center">
              We are trusted by our clients for delivering consistent, reliable,
              and efficient services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
