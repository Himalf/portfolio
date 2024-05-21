import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "" : "darks";
  return (
    <footer className={`bg-mainColor text-white py-10 ${darkModeClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-wrap lg:flex-nowrap justify-between items-center space-y-8 md:space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8">
          <div className="w-full md:w-1/2 lg:w-auto text-center lg:text-left">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p>Developed by Himal Fullel &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto text-center">
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto text-center lg:text-left">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.himalfullel.com.np"
                  className="hover:underline"
                >
                  www.himalfullel.com.np
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:himal.fullel15@gmail.com"
                  className="hover:underline"
                >
                  himal.fullel15@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+9779867527352" className="hover:underline">
                  +9779867527352
                </a>
              </li>
              <li>Nepal</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto text-center">
            <h2 className="text-xl font-bold mb-4">Subscribe</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none p-2 rounded-md text-buttonColor w-full md:w-auto"
                required
              />
              <button
                className="bg-buttonColor px-4 py-2 rounded-md cursor-pointer w-full md:w-fit font-bold text-white"
                onClick={() => {
                  alert("Subscribed!");
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto text-center lg:text-left">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div
              className={`flex justify-center lg:justify-start space-x-4 text-white ${darkModeClass}`}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-white hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-white hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-white hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
