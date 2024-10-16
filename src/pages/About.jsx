import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const About = () => {
  return (
    <motion.div 
      className="w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 md:p-8"
      initial={{ opacity: 0, y: 20 }} // Initial hidden state
      animate={{ opacity: 1, y: 0 }}  // Animate to visible
      transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }} // Initial animation: small and invisible
        animate={{ opacity: 1, scale: 1 }} // Visible and normal size
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        About Me
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-base md:text-lg lg:text-xl mb-4 text-center max-w-3xl"
        initial={{ opacity: 0, x: -50 }} // Initial state: start from the left
        animate={{ opacity: 1, x: 0 }} // Move to original position
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
      >
        Hi! I'm Suhaib, a passionate software developer specializing in **Website Development**. I love creating clean, functional, and interactive websites with a focus on user experience. With experience in the **MERN** stack, I'm proficient in building full-stack applications that are both responsive and dynamic.
      </motion.p>

      {/* Skills */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>Frontend Development (React.js, HTML, CSS, JavaScript)</li>
          <li>Backend Development (Node.js, Express.js)</li>
          <li>Database Management (MongoDB)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Responsive Design (Tailwind CSS, Bootstrap)</li>
        </ul>
      </motion.div>

      {/* Projects */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Notable Projects</h2>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>E-Commerce Website (MERN Stack)</li>
          <li>Staff Management System (React & Node.js)</li>
          <li>Portfolio Website (React, Tailwind CSS)</li>
        </ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-sm md:text-base">
          If you'd like to collaborate or just want to say hello, feel free to <a href="mailto:muhammedsuhaibpottayil@gmail.com" className="text-yellow-400 hover:text-yellow-300">email me</a>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
