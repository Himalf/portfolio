import React, { useState } from "react";
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

const Intropage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // CSS class for dark mode
  const darkModeClass = isDarkMode ? "" : "dark";

  return (
    <div
      className={`p-3 bg-gradient-to-b from-mainColor to bg-gray-600 h-full flex flex-col justify-center gap-10 lg:flex lg:flex-row lg:justify-evenly items-center ${darkModeClass}`}
    >
      <div className="max-w-md">
        <div className="text-buttonColor font-bold text-4xl">Hello, I'm</div>
        <div className="text-white text-6xl font-extrabold flex items-center gap-10">
          <h1> Himal Fullel</h1>
          <div className=" text-5xl w-fit hover:text-buttonColor hover:bg-white hover:rounded-full transition-all duration-200 delay-200 ease-in-out cursor-pointer">
            <a href="https://github.com/Himalf" target="_blank">
              {" "}
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="font-extrabold text-white">
          A{" "}
          <span className="text-buttonColor font-bold text-2xl">
            {" "}
            Creative Designer and Developer
          </span>{" "}
          From Nepal
        </div>
        <div className="text-white font-semibold text-md  text-justify">
          I'm creative Developer and Designer based in Nepal , and I'm very
          passionate and dedicated to my work
        </div>
        <div className="flex gap-10 mt-[5%] items-center">
          <div
            className="px-9 py-2 bg-buttonColor text-white font-bold w-fit rounded-full hover:bg-white hover:text-buttonColor cursor-pointer transition-all duration-200 delay-200 ease-in-out"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Me
          </div>
          <div className="flex gap-3 items-center cursor-pointer text-white">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
        <div
          className="p-2 text-3xl px-5 w-fit bg-buttonColor text white rounded-full m-2 cursor-pointer text-white"
          onClick={toggleDarkMode}
        >
          {" "}
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </div>
      </div>
      <div className="flex">
        <img src={Profile} alt="Profile" className="w-fit" />
      </div>
    </div>
  );
};

export default Intropage;
