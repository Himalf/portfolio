import React from "react";
import SEO from "../../SEO/SEO";
import Ourservices from "./Ourservices";

const index = ({ isDarkMode }) => {
  return (
    <div>
      <SEO
        title="Services | Himal Fullel - Web Developer in Butwal"
        description="Web development services by Himal Fullel (Heemal Fullel) - UI/UX design, MERN stack development, e-commerce solutions, and SEO services in Butwal, Nepal."
        path="/services"
      />

      {/* Additional service descriptions for SEO */}
      <div
        className={` mx-auto px-8 py-16 hidden ${
          isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-700"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          Web Development Services in Butwal
        </h2>
        <p className="mb-4">
          As Himal Fullel (also known as Heemal Fullel or Heemal Phullel), I
          offer comprehensive web development services in Butwal, Nepal. My
          services are designed to help businesses and individuals establish a
          strong online presence through professionally designed and developed
          websites and web applications.
        </p>
        <p>
          Looking for a reliable software engineer in Butwal? Contact Himal
          Fullel today for professional web development services that will help
          your business stand out online.
        </p>
      </div>
      <Ourservices isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
