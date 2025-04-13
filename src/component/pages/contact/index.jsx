import React from "react";
import Contactme from "./Contactme";
import { Helmet } from "react-helmet-async";
import SEO from "../../SEO/SEO";
const index = ({ isDarkMode }) => {
  return (
    <div>
      <SEO
        title="Contact Himal Fullel | Web Developer in Butwal"
        description="Get in touch with Himal Fullel (Heemal Fullel), a professional web developer and software engineer based in Butwal, Nepal for your web development needs."
        path="/contact"
      />
      <Contactme isDarkMode={isDarkMode} />
    </div>
  );
};

export default index;
