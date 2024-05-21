import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
import Navbar from "./component/navigation/Navbar";
import Footer from "./component/footer/Footer";
import Homepage from "./component/pages/Homepage";
import About from "./component/pages/about";
import Portfolio from "./component/pages/portfolio";
import Services from "./component/pages/services";
function App() {
  return (
    <div className=" mx-1">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
