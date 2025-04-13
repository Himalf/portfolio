import React from "react";
import Intropage from "./Intropage";
import Projects from "../portfolio/Projects";
import Ourservices from "../services/Ourservices";
import Contactme from "../contact/Contactme";
import { Helmet } from "react-helmet-async";
import SEO from "../../SEO/SEO";
const index = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <SEO
        title="Himal Fullel | Web Developer & Software Engineer in Butwal, Nepal"
        description="I'm Himal Fullel (also known as Heemal Fullel), a full-stack web developer and software engineer from Butwal, Nepal. Specializing in MERN stack and responsive web design."
        path="/"
      />
      <Intropage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />{" "}
      <hr />
      {/* <Skills isDarkMode={isDarkMode} /> <hr /> */}
      {/* <Aboutus isDarkMode={isDarkMode} /> <hr /> */}
      <Projects isDarkMode={isDarkMode} /> <hr />
      <Ourservices isDarkMode={isDarkMode} /> <hr />
      <Contactme isDarkMode={isDarkMode} /> <hr />
    </div>
  );
};

export default index;
