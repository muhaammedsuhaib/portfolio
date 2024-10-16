// src/components/ContactSection.jsx
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-10 bg-gray-800 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <p className="text-center mt-4">Feel free to reach out via email: <a href="mailto:muhammedsuhaibpottayil@gmail.com" className="text-blue-400 hover:underline">muhammedsuhaibpottayil@gmail.com</a></p>
    </motion.section>
  );
};

export default ContactSection;
