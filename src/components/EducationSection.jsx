// src/components/EducationSection.jsx
import { motion } from 'framer-motion';

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-10 bg-gray-800 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Education</h2>
      <div className="max-w-3xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold">Higher Secondary Education</h3>
        <p>GHSS Kadanchery</p>
        <p className="text-gray-400">2021 – 2023 | Malappuram, Kerala</p>
      </div>
    </motion.section>
  );
};

export default EducationSection;
