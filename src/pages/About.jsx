import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaGlobe } from 'react-icons/fa';
import colors from '../utils/theam';

const About = () => {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${colors.background}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={`text-3xl font-bold text-center ${colors.accent} mb-6`}
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className={`text-lg text-center ${colors.textPrimary} mb-4`}
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I am a passionate MERN stack developer with a focus on building modern web applications.
      </motion.p>
      <motion.p
        className={`text-lg text-center ${colors.textPrimary} mb-4`}
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        I love exploring new technologies and constantly improving my skills to deliver high-quality software solutions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <FaUserGraduate className={`text-4xl ${colors.accent} mb-2`} />
          <h3 className={`text-xl font-semibold ${colors.accent}`}>Education</h3>
          <p className={`text-center ${colors.textSecondary}`}>Bachelor's in Computer Science</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <FaCode className={`text-4xl ${colors.accent} mb-2`} />
          <h3 className={`text-xl font-semibold ${colors.accent}`}>Skills</h3>
          <p className={`text-center ${colors.textSecondary}`}>JavaScript, React, Node.js, MongoDB</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <FaGlobe className={`text-4xl ${colors.accent} mb-2`} />
          <h3 className={`text-xl font-semibold ${colors.accent}`}>Vision</h3>
          <p className={`text-center ${colors.textSecondary}`}>Creating user-centric solutions that make a difference.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
