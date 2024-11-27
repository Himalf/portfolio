import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-900";
  const linkHoverClass = isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700";

  return (
    <footer className={`py-10 ${darkModeClass}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About</h2>
            <p className="text-sm">
              Developed by Himal Fullel &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`text-sm ${linkHoverClass}`}>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm ${linkHoverClass}`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.himalfullel.com.np"
                  className={linkHoverClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.himalfullel.com.np
                </a>
              </li>
              <li>
                <a
                  href="mailto:himal.fullel15@gmail.com"
                  className={linkHoverClass}
                >
                  himal.fullel15@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9779867527352" className={linkHoverClass}>
                  +9779867527352
                </a>
              </li>
              <li>Nepal</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Subscribe</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                className="bg-indigo-500 px-4 py-2 rounded-md font-bold text-white hover:bg-indigo-600 transition-all"
                onClick={() => alert("Subscribed!")}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div
              className={`flex justify-center lg:justify-start gap-4 text-white ${darkModeClass}`}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
