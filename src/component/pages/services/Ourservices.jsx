import React, { useState, useEffect, useRef } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import {
  FaPaintBrush,
  FaCode,
  FaShoppingCart,
  FaGlobe,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";

const Ourservices = ({ isDarkMode }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const ServiceData = [
    {
      name: "Customization",
      icon: <MdDashboardCustomize />,
      description:
        "Web development services offer tailor-made solutions. They can craft websites and applications that align perfectly with your unique objectives, branding, and user requirements.",
    },
    {
      name: "UI/UX Design",
      icon: <FaPaintBrush />,
      description:
        "Our design services ensure your website provides a seamless and engaging user experience, with visually appealing interfaces tailored to your brand.",
    },
    {
      name: "Frontend and Backend Development",
      icon: <FaCode />,
      description:
        "Our comprehensive development services cover both frontend and backend, ensuring your web applications are robust, scalable, and high-performing.",
    },
    {
      name: "E-Commerce Development",
      icon: <FaShoppingCart />,
      description:
        "We build e-commerce platforms that are secure, user-friendly, and optimized for conversions, providing your customers with a smooth shopping experience.",
    },
    {
      name: "Domain and Hosting",
      icon: <FaGlobe />,
      description:
        "We offer reliable domain registration and hosting services to ensure your website is always available, secure, and performing at its best.",
    },
    {
      name: "SEO",
      icon: <FaSearch />,
      description:
        "Our SEO services help improve your website’s visibility on search engines, driving more organic traffic and boosting your online presence.",
    },
    {
      name: "Content Management System (CMS)",
      icon: <FaFileAlt />,
      description:
        "We provide CMS solutions that enable easy content management and updates, giving you full control over your website’s content without needing technical expertise.",
    },
  ];

  return (
    <div
      className={`min-h-screen py-16 px-6 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1
          className={`text-5xl font-bold ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          Our Services
        </h1>
        <p
          className={`text-lg mt-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Explore the services we offer to bring your ideas to life.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {ServiceData.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`flex items-start gap-6 p-6 rounded-lg shadow-lg transform transition-transform duration-1000 ease-out ${
              visibleCards.includes(i)
                ? i % 2 === 0
                  ? "translate-x-0 opacity-100"
                  : "translate-x-0 opacity-100"
                : i % 2 === 0
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            } ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-900"
                : "bg-gradient-to-r from-white to-gray-100"
            }`}
          >
            <div
              className={`text-5xl p-4 rounded-full shadow-md ${
                isDarkMode
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              {service.icon}
            </div>
            <div>
              <h2
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {service.name}
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
