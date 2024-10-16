// src/components/ExperienceSection.jsx
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-10 bg-gray-800 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
      <div className="max-w-3xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold">BRIDGEON SOLUTION LLP</h3>
        <p>MERN Stack Developer Intern</p>
        <p className="text-gray-400">11/2023 – Present | Kozhikode, Kerala</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Leading the development of a sophisticated eCommerce platform and a live staff management system using the MERN stack.</li>
          <li>Implementing best practices for secure authentication, responsive design, and scalable architecture.</li>
          <li>Collaborating effectively with cross-functional teams to deliver high-quality, strategic solutions.</li>
          <li>Continuously advancing skills in modern web technologies to drive innovation and project success.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
