import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import colors from '../utils/theam';

const Footer = () => {
  const socialIcons = [
    { href: "https://github.com/muhaammedsuhaib", icon: <FaGithub />, delay: 0.6 },
    { href: "https://www.linkedin.com/in/muhammedsuhaib/", icon: <FaLinkedin />, delay: 0.7 },
    { href: "https://www.instagram.com/suhaii.bb/", icon: <FaInstagram />, delay: 0.8 },
    { href: "https://x.com/MuhaammedSuhaib", icon: <FaTwitter />, delay: 0.9 },
    { href: "mailto:muhammedsuhaibpottayil@gmail.com", icon: <MdEmail />, delay: 0.9 }
  ];

  return (
    <motion.footer 
      className={`bg-transparent backdrop-blur-md p-4 fixed w-full bottom-0 left-0 right-0 z-50`}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <motion.div className="flex space-x-6 mt-0">
          {socialIcons.map(({ href, icon, delay }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              className={`text-lg ${colors.textSecondary} ${colors.textHover}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay }}
              whileHover={{ scale: 1.1 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div className="mt-1 text-center" whileHover={{ scale: 1.05 }}>
        <p className="text-xs">&copy; 2023 Suhaib. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
