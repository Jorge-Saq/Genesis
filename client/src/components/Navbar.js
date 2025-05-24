// Import necessary hooks and framer-motion for animations
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    // Controls navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    // Detect scroll direction and update navbar visibility
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
        // User is scrolling down -> hide the navbar
      setShowNavbar(false);
    } else {
        // User is scrolling up -> show the navbar
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    // Motion-enabled navbar that fades in/out based on scroll direction
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-[#450b00] text-white shadow-md"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">Genesis (Logo)</div>
        <ul className="flex space-x-6">
          <li className="hover:text-[#fb8239] cursor-pointer">About Us</li>
          <li className="hover:text-[#fb8239] cursor-pointer">Submit</li>
          <li className="hover:text-[#fb8239] cursor-pointer">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
