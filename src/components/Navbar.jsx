import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import colors from "../utils/theam";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome size={18} /> },
  { name: "About", path: "/about", icon: <FaInfoCircle size={18} /> },
  { name: "Services", path: "/services", icon: <FaServicestack size={18} /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt size={18} /> },
];

const Navbar = () => {
  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const getActiveClassName = (isActive) => {
    return isActive ? ` ${colors.accent} font-semibold` : "";
  };

  return (
    <motion.nav
      className={`bg-transparent backdrop-blur-md p-3 flex justify-between items-center fixed w-full top-0 left-0 z-50`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
    >
      <motion.div
        className={`logo text-xl font-bold ${colors.accent} hover:underline`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        whileHover={{
          scale: 1.1,
          textShadow: `0px 0px 15px ${colors.accent}`,
          transition: { type: "spring", stiffness: 100, damping: 20 },
        }}
      >
        <NavLink to={"/"}>Suhaib</NavLink>
      </motion.div>

      <motion.ul
        className={`flex space-x-6`}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={navLinkVariants}
            className="relative"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-sm space-x-2 ${
                  colors.textHover
                } ${getActiveClassName(isActive)} hover:underline`
              }
              aria-label={item.name}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 rounded-md"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </NavLink>

            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
