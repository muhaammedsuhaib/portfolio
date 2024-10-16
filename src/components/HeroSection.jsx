// src/components/HeroSection.jsx
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="hero"
      className="bg-background h-screen flex flex-col justify-center items-center text-center text-white"
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">MERN Stack Developer</p>
      <a href="mailto:muhammedsuhaibpottayil@gmail.com" className="mt-6 px-6 py-2 bg-primary text-black rounded-md">Contact Me</a>
    </motion.div>
  );
};

export default HeroSection;
