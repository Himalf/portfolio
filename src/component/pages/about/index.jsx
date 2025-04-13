import React from "react";
import SEO from "../../SEO/SEO";
import AboutUs from "./Aboutus";
const About = ({ isDarkMode }) => {
  return (
    <div>
      <SEO
        title="About Himal Fullel | Web Developer in Butwal"
        description="Learn more about Himal Fullel (Heemal Fullel), a MERN stack developer and software engineer from Butwal, Nepal with expertise in web development."
        path="/about"
      />
      <AboutUs isDarkMode={isDarkMode} />

      {/* Hidden SEO content - visible but styled for users */}
      <div
        className={`max-w-6xl mx-auto px-8 py-16 hidden ${
          isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-700"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          About Himal Fullel
        </h2>
        <p className="mb-4">
          Known also as Heemal Fullel, Heemal Phullel, or Fullel Himal, I am a
          professional web developer and software engineer based in Butwal,
          Nepal. With expertise in the MERN stack (MongoDB, Express.js,
          React.js, and Node.js), I specialize in creating responsive,
          user-friendly web applications and websites.
        </p>
        <p className="mb-4">
          As one of the leading web developers in Butwal, I take pride in
          delivering high-quality digital solutions that help businesses
          establish a strong online presence. My technical skills combined with
          a keen eye for design allow me to create websites that not only look
          great but also function flawlessly.
        </p>
        <p>
          Looking for a software engineer in Butwal? Contact Himal Fullel today
          to discuss your project requirements and how we can collaborate to
          bring your digital vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
