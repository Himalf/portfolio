import React from "react";
import Intropage from "./Intropage";
import Skills from "./Skills";
import Aboutus from "../about/Aboutus";
import Projects from "../portfolio/Projects";
import Ourservices from "../services/Ourservices";
import Contactme from "../contact/Contactme";

const index = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <Intropage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />{" "}
      <hr />
      <Skills isDarkMode={isDarkMode} /> <hr />
      <Aboutus isDarkMode={isDarkMode} /> <hr />
      <Projects isDarkMode={isDarkMode} /> <hr />
      <Ourservices isDarkMode={isDarkMode} /> <hr />
      <Contactme isDarkMode={isDarkMode} /> <hr />
    </div>
  );
};

export default index;
