import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import colors from '../utils/theam';

const Home = () => {
  const socialLinks = [
    {
      href: "https://github.com/muhaammedsuhaib",
      icon: <FaGithub />,
      delay: 0.6,
    },
    {
      href: "https://www.linkedin.com/in/muhammedsuhaib/",
      icon: <FaLinkedin />,
      delay: 0.7,
    },
    {
      href: "https://www.instagram.com/suhaii.bb/",
      icon: <FaInstagram />,
      delay: 0.8,
    },
    {
      href: "https://x.com/MuhaammedSuhaib",
      icon: <FaTwitter />,
      delay: 0.9,
    },
  ];

  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center ${colors.background} text-center p-6`}>
      <motion.h1
        className={`text-5xl md:text-6xl font-bold mb-6 ${colors.textPrimary}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Hello, I'm Suhaib
      </motion.h1>

      <motion.p
        className={`text-lg md:text-xl mb-4 ${colors.textSecondary}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A Software Developer Specializing in Web Development
      </motion.p>

      <motion.button
        className={`px-8 py-3 rounded-full font-medium transition-colors duration-300 ${colors.button}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        Get in Touch
      </motion.button>

      <div className="flex space-x-6 mt-8">
        {socialLinks.map(({ href, icon, delay }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${colors.textSecondary} hover:${colors.accent}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Home;
