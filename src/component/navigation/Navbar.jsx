import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import MyPDF from "../../assets/images/Heemal_Fullel_Fullstack.pdf";

const Navbar = ({ isDarkMode }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const NavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const darkModeClass = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  return (
    <div
      className={`sticky top-0 left-0 z-50 p-4 shadow-md transition-all duration-300 ${darkModeClass}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="w-12 h-12 rounded-full mr-2" />
          <h1 className="text-xl font-extrabold">
            <span className="text-indigo-500">Him</span>
            <span className="text-orange-500">AL</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {NavItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setActiveButton(index);
              }}
              className={`text-sm font-semibold hover:text-indigo-500 transition-all ${
                activeButton === index
                  ? "text-indigo-500 underline underline-offset-4"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href={MyPDF}
            download="Himal_Fullel_CV.pdf"
            className="px-4 py-2 text-sm font-medium border-2 border-indigo-500 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`mt-4 flex flex-col items-center md:hidden gap-4 ${isDarkMode} py-4 rounded-lg shadow-lg`}
        >
          {NavItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setActiveButton(index);
                toggleMenu();
              }}
              className={`text-sm font-semibold hover:text-indigo-500 transition-all ${
                activeButton === index ? "text-indigo-500 underline" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href={MyPDF}
            download="Himal_Fullel_CV.pdf"
            className="px-4 py-2 text-sm font-medium border-2 border-indigo-500 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
