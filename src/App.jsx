import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './routes/App.Router';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router> <>
    <><AppRouter/></>
  );
}

export default App;
