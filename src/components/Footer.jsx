import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  // Animation variants for the footer
  const footerVariants = {
    hidden: { opacity: 0, y: 20 }, // Hidden state (invisible and slightly below)
    visible: { opacity: 1, y: 0 },  // Visible state (fully opaque and at original position)
  };

  return (
    <motion.footer 
      className="bg-gray-800 text-white p-6 mt-12 fixed w-full bottom-0 left-0 z-50"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }} // Footer animation
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* Facebook */}
          <motion.a 
            href="https://www.facebook.com" 
            className="text-white hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <FaFacebookF className="text-3xl" />
          </motion.a>

          {/* Twitter */}
          <motion.a 
            href="https://www.twitter.com" 
            className="text-white hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <FaTwitter className="text-3xl" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com" 
            className="text-white hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <FaLinkedinIn className="text-3xl" />
          </motion.a>

          {/* Github */}
          <motion.a 
            href="https://www.github.com" 
            className="text-white hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <FaGithub className="text-3xl" />
          </motion.a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; 2023 Suhaib. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
