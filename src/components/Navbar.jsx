import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Navigation model (array of objects)
const navItems = [
  { name: 'Home', path: '/', icon: <FaHome className="text-2xl" /> },
  { name: 'About', path: '/about', icon: <FaInfoCircle className="text-2xl" /> },
  { name: 'Services', path: '/services', icon: <FaServicestack className="text-2xl" /> },
  { name: 'Contact', path: '/contact', icon: <FaPhoneAlt className="text-2xl" /> }
];

const Navbar = () => {
  // Animation variants for the nav links
  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 }, // Hidden state for links (invisible and slightly above)
    visible: { opacity: 1, y: 0 },  // Visible state (fully opaque and at original position)
  };

  return (
    <motion.nav
      className="bg-gray-800 text-white p-6 flex justify-between items-center shadow-lg fixed w-full top-0 left-0 z-50"
      initial={{ x: '-100%', opacity: 0 }} // Navbar initial hidden state (slides in from left)
      animate={{ x: '0', opacity: 1 }}    // Navbar visible state (fully visible)
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }} // Transition settings
    >
      {/* Logo animation */}
      <motion.div
        className="logo text-3xl font-extrabold text-yellow-400"
        initial={{ scale: 0 }}           // Logo starts small (scale 0)
        animate={{ scale: 1 }}           // Logo grows to normal size (scale 1)
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }} // Logo animation delay
      >
        Suhaib
      </motion.div>

      {/* Navigation links */}
      <motion.ul
        className="flex space-x-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Stagger the children for smooth sequence
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={navLinkVariants}  // Apply the variants to each link
            whileHover={{ scale: 1.1, color: '#FFD700' }} // Hover animation with scaling and color change
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link to={item.path} className="flex items-center space-x-2">
              {item.icon} {/* Dynamic icon */}
              <span className="hidden md:inline">{item.name}</span> {/* Text for larger screens */}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
