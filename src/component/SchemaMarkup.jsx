import React from "react";
import { Helmet } from "react-helmet-async";

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Himal Fullel",
    alternateName: ["Heemal Fullel", "Heemal Phullel", "Fullel Himal"],
    jobTitle: "Web Developer & Software Engineer",
    url: "https://himalfullel.com.np",
    sameAs: [
      "https://github.com/Himalf",
      "https://www.facebook.com/himal.fullel/",
      "https://x.com/HimalFullel",
      "https://www.linkedin.com/in/himal-fullel-7823a7231",
      "https://www.instagram.com/himalfullel/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butwal",
      addressRegion: "Nepal",
    },
    telephone: "+977 9765310103",
    email: "himal.fullel15@gmail.com",
    knowsAbout: [
      "Web Development",
      "MERN Stack",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
