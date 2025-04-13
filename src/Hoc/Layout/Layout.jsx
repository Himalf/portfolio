import React from "react";
import Navbar from "../../component/navigation/Navbar";
import Footer from "../../component/footer/Footer";
import { Outlet } from "react-router-dom";
import SchemaMarkup from "../../component/SchemaMarkup";

const Layout = () => {
  return (
    <div>
      <SchemaMarkup />
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
