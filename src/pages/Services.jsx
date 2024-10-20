import React from 'react';
import { motion } from 'framer-motion';
import colors from '../utils/theam';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable web applications.',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating intuitive mobile apps for iOS and Android.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and experiences.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility and search engine ranking.',
  },
];

const Services = () => {
  // Animation variants
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
        My Services
      </motion.h1>
      <motion.p
        className={`text-lg text-center ${colors.textPrimary} mb-8`}
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Here are the services I offer:
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 border rounded-lg shadow-md ${colors.background} hover:shadow-lg transition-shadow duration-300`}
            variants={containerVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className={`text-xl font-semibold ${colors.accent}`}>{service.title}</h2>
            <p className={`mt-2 text-sm ${colors.textSecondary}`}>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
