import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Work from "../pages/Work";
import Skill from "../pages/Skill";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return(<>
  <Router>
  <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/project" element={<Work />} />
         <Route path="/skill" element={<Skill />} />
         <Route path="*" element={<Home />} />
       </Routes>
     <Footer/>
     </Router>
  </>)
};

export default AppRouter;
