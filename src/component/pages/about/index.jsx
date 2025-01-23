import React from "react";
import Aboutus from "./Aboutus";
import { Helmet } from "react-helmet-async";
import SEO from "../../SEO";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <Helmet>
        <SEO
          title="About Himal Fullel"
          description="Learn more about Himal Fullel, a passionate full-stack developer from Nepal with expertise in React.js and Nest.js."
          keywords="About Himal Fullel, Full-Stack Developer, React.js, Nepal Developer"
        />
        <title>About me || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Aboutus isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
