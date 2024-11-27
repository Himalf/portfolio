import React from "react";
import Aboutus from "./Aboutus";
import { Helmet } from 'react-helmet-async';
const index = ({ isDarkMode }) => {
  return (
    <div>
       <Helmet>
        <title>About me || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Aboutus isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
