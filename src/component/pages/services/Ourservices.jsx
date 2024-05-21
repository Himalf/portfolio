import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import {
  FaPaintBrush,
  FaCode,
  FaShoppingCart,
  FaGlobe,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";

const Ourservices = () => {
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
    <div className="bg-secondColor text-white py-10">
      <h1 className="text-4xl text-center font-bold mb-10">Our Services</h1>
      <hr className="border-gray-400 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {ServiceData.map((val, i) => (
          <div
            key={i}
            className="w-full bg-mainColor p-5 rounded-md shadow-lg shadow-black transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl text-center text-buttonColor">
                {val.icon}
              </div>
              <div className="text-xl font-bold">{val.name}</div>
            </div>
            <hr className="border-gray-400 mb-4" />
            <div className="line-clamp-5">{val.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
