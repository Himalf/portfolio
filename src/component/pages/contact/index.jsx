import React from "react";
import Contactme from "./Contactme";
import { Helmet } from "react-helmet-async";
import SEO from "../../SEO";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <Helmet>
        <SEO
          title="Contact Himal Fullel"
          description="Get in touch with Himal Fullel for collaborations or project inquiries."
          keywords="Contact Himal Fullel, Hire Full-Stack Developer, React.js Projects"
        />
        <title>Contact me || Himal Fullel</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <Contactme isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
