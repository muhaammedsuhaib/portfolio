import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Home = () => {
  return (
    <motion.div 
      className="w-full h-screen bg-gray-800 flex flex-col justify-center items-center text-center text-white p-4"
      initial={{ opacity: 0, y: 20 }} // Initial animation: starting below and invisible
      animate={{ opacity: 1, y: 0 }}  // Final animation: fully visible and in place
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      {/* Welcome Section */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }} // Initial scale and opacity
        animate={{ opacity: 1, scale: 1 }} // Animate to normal scale and full opacity
        transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, color: "#FFD700" }} // Hover animation: scale up and change color
      >
        Hello, I'm Suhaib
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-4"
        initial={{ opacity: 0, x: -50 }} // Initial state: slightly to the left
        animate={{ opacity: 1, x: 0 }} // Final state: back to original position
        transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, color: "#FFD700" }} // Hover effect: scale slightly and change color
      >
        I'm a Software Developer
      </motion.p>

      <motion.p
        className="text-lg md:text-xl mb-6"
        initial={{ opacity: 0, x: 50 }} // Initial state: slightly to the right
        animate={{ opacity: 1, x: 0 }} // Final state: back to original position
        transition={{ duration: 0.6, delay: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, color: "#FFD700" }} // Hover effect: scale and color change
      >
        Specializing in Website Development
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      >
        {/* Github Icon */}
        <motion.a
          href="https://github.com/your-username"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-yellow-500"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          whileHover={{ scale: 1.2 }} // Hover effect: scale up on hover
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-yellow-500"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          whileHover={{ scale: 1.2 }} // Hover effect: scale up on hover
        >
          <FaLinkedin />
        </motion.a>

        {/* Twitter Icon */}
        <motion.a
          href="https://twitter.com/your-username"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-yellow-500"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          whileHover={{ scale: 1.2 }} // Hover effect: scale up on hover
        >
          <FaTwitter />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
