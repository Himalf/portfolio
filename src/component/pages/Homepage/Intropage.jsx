import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Profile from "../../../assets/images/profile.png";

const Intropage = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  // CSS class for dark mode
  const darkModeClass = isDarkMode ? "dark" : "";

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-8 py-16 transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Hello, I'm <span className="text-indigo-500">Himal Fullel</span>
        </h1>
        <p className="text-lg font-medium mb-6">
          A{" "}
          <span className="text-indigo-500 font-semibold">
            Creative Designer and Developer
          </span>{" "}
          from Nepal.
        </p>
        <p className="text-sm lg:text-base font-light leading-relaxed mb-6">
          I'm a passionate and dedicated developer and designer, creating
          visually stunning and functional websites that leave a lasting
          impression.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          <button
            className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all"
            onClick={() => navigate("/about")}
          >
            About Me
          </button>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/Himalf"
              target="_blank"
              className="hover:text-indigo-500 transition-all"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/himal.fullel/"
              className="hover:text-indigo-500 transition-all"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/HimalFullel"
              className="hover:text-indigo-500 transition-all"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/himal-fullel-7823a7231"
              className="hover:text-indigo-500 transition-all"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/himalfullel/"
              className="hover:text-indigo-500 transition-all"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative">
        <img
          src={Profile}
          alt="Profile"
          className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
        />
        <button
          className={`absolute top-4 right-4 p-3 rounded-full text-2xl ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Intropage;
