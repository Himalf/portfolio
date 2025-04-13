import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, ogImage, path }) => {
  const siteName = "Himal Fullel | Web Developer & Software Engineer";
  const siteUrl = "https://himalfullel.com.np";
  const fullUrl = `${siteUrl}${path || ""}`;
  const defaultImage = "../../assets/images/profilepng.png";

  // Combine all your targeted keywords
  const defaultKeywords =
    "Himal Fullel, Fullel, Fullel Himal, Himal, Heemal Fullel, Heemal, Heemal Phullel, Phullel, Web Developer in Butwal, Software Engineer in Butwal, MERN Stack Developer, Nepali Web Developer, Frontend Developer Butwal, React Developer Nepal";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Himal Fullel" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Alternative names meta tags */}
      <meta
        name="name:alternate"
        content="Himal Fullel, Heemal Fullel, Heemal Phullel, Fullel Himal"
      />
    </Helmet>
  );
};

export default SEO;
