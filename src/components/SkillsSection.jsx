// src/components/SkillsSection.jsx
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "MongoDB",
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-10 bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <ul className="max-w-3xl mx-auto mt-6 list-disc ml-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SkillsSection;
