import React from 'react';
import { motion } from 'framer-motion';
import colors from '../utils/theam';

const Contact = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        className={`text-lg text-center ${colors.textPrimary} mb-4`}
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Feel free to reach out using the form below!
      </motion.p>

      <motion.form
        className="w-full max-w-md space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        <motion.div className="flex flex-col" variants={containerVariants}>
          <label className={`text-sm font-medium ${colors.textPrimary}`}>Name</label>
          <input
            type="text"
            required
            className={`mt-1 p-2 border border-gray-300 rounded-md ${colors.background} focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </motion.div>
        <motion.div className="flex flex-col" variants={containerVariants}>
          <label className={`text-sm font-medium ${colors.textPrimary}`}>Email</label>
          <input
            type="email"
            required
            className={`mt-1 p-2 border border-gray-300 rounded-md ${colors.background} focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </motion.div>
        <motion.div className="flex flex-col" variants={containerVariants}>
          <label className={`text-sm font-medium ${colors.textPrimary}`}>Message</label>
          <textarea
            required
            rows="4"
            className={`mt-1 p-2 border border-gray-300 rounded-md ${colors.background} focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </motion.div>
        <motion.button
          type="submit"
          className={`w-full p-2 font-bold ${colors.button} rounded-md transition duration-300`}
          variants={containerVariants}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
