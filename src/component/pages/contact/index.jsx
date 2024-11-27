import React from "react";
import Contactme from "./Contactme";
import { Helmet } from "react-helmet-async";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <Helmet>
        <title>Contact me || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Contactme isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
