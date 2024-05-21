import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import MyPDF from "../../assets/images/cv.png";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const NavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-mainColor p-3 rounded-t-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center rounded-full">
          <img
            src={Logo}
            alt="logo"
            className="w-16 h-16 rounded-full mr-2 cursor-pointer"
          />
          <span className={`font-extrabold animate-bounce text-white`}>
            Him
          </span>
          <span className="text-buttonColor font-extrabold animate-bounce">
            AL
          </span>
        </div>
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="hidden md:flex justify-evenly gap-10 text-white items-center text-sm font-semibold">
          {NavItems.map((val, i) => (
            <div
              key={i}
              onClick={() => {
                navigate(val.path);
                setActiveButton(i);
              }}
              className={`cursor-pointer hover:text-buttonColor ${
                activeButton === i ? "text-buttonColor" : "text-white"
              }`}
            >
              {val.name}
            </div>
          ))}
          <div className="text-white border-2 border-buttonColor rounded-xl cursor-pointer px-5 py-1">
            <a href={MyPDF} download="cv.png">
              Download CV
            </a>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-5 text-white text-center text-sm font-semibold">
          {NavItems.map((val, i) => (
            <div
              key={i}
              onClick={() => {
                navigate(val.path);
                setActiveButton(i);
                toggleMenu();
              }}
              className={`cursor-pointer hover:text-buttonColor ${
                activeButton === i ? "text-buttonColor" : "text-white"
              }`}
            >
              {val.name}
            </div>
          ))}
          <div className="text-white border-2 w-fit text-center mx-auto border-buttonColor rounded-xl cursor-pointer px-5 py-1 mt-2">
            <a href={MyPDF} download="cv.png">
              Download CV
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
