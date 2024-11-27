import React from "react";
import Aboutimage from "../../../assets/images/aboutimage.png";
const Aboutus = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "" : "dark";
  return (
    <>
    
      <h1
        className={`bg-secondColor text-white font-bold text-3xl text-center p-5 ${darkModeClass}`}
      >
        About Me
      </h1>
      <hr />
      <div
        className={`flex flex-col justify-center md:flex md:flex-row lg:flex lg:flex-row lg:items-center lg:justify-center gap-20 bg-secondColor items-center text-white font-bold text-lg p-5 ${darkModeClass}`}
      >
        <div className="">
          <img src={Aboutimage} alt="profile" />
        </div>
        <div className="w-[80%] text-justify lg:w-[30%]">
          <div className="text-buttonColor text-4xl font-bold">
            I'm a MERN stack Developer..
          </div>
          <div>
            <p>
              Hello! I'm Himal Fullel, a MERN stack developer skilled in both
              frontend and backend development.
            </p>
          </div>
          <div>
            <p>
              I specialize in building responsive and dynamic web applications
              using MongoDB, Express.js, React, and Node.js.
            </p>
          </div>

          <div>
            <p>
              I'm passionate about turning ideas into reality and always eager
              to tackle new challenges. Let's connect and create something
              amazing!
            </p>
          </div>
          <div
            className="w-fit px-8 p-1 bg-buttonColor text-white font-bold  hover:bg-white hover:text-buttonColor rounded-md m-1 cursor-pointer transition-all duration-200 delay-200 ease-in-out hover:translate-x-2"
            onClick={() => {
              alert("Thank you for hiring me!");
            }}
          >
            Hire me
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
