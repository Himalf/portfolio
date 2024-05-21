import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
import Navbar from "./component/navigation/Navbar";
import Footer from "./component/footer/Footer";
import Homepage from "./component/pages/Homepage";
import About from "./component/pages/about";
import Portfolio from "./component/pages/portfolio";
import Services from "./component/pages/services";
import Contact from "./component/pages/contact";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className=" mx-1">
      <Router>
        <Navbar isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route
            index
            element={
              <Homepage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route
            path="/portfolio"
            element={<Portfolio isDarkMode={isDarkMode} />}
          />
          <Route
            path="/services"
            element={<Services isDarkMode={isDarkMode} />}
          />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </div>
  );
}

export default App;
