// src/components/ProjectsSection.jsx
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Staff Management System",
      description: "An efficient system to manage staff and mentor appointments.",
      link: "https://your-project-link.com",
    },
    {
      title: "E-commerce Website",
      description: "A comprehensive e-commerce platform for pet food.",
      link: "https://your-project-link.com",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-10 bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="max-w-3xl mx-auto mt-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
