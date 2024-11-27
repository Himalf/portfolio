import React from "react";
import Ourservices from "./Ourservices";
import { Helmet } from "react-helmet-async";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <Helmet>
        <title>My Services || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Ourservices isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
