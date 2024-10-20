import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../pages/Services";

const AppRouter = () => {
  return(<>
  <Router>
  <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
         <Route path="*" element={<Home />} />
       </Routes>
     <Footer/>
     </Router>
  </>)
};

export default AppRouter;
