import React from "react";
import Projects from "./Projects";
import { Helmet } from "react-helmet-async";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <Helmet>
        <title>My Projects || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Projects isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
