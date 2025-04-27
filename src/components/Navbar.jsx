import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const linkHoverVariants = {
    hover: {
      scale: 1.1,
      color: '#000000',
      textShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      backgroundColor: '#123458',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-10 top-0 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{
          background: '#F1EFEC',
          padding: isScrolled ? '10px 20px' : '20px 40px',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="mx-auto flex justify-between items-center w-5/6">
          {/* Left Links */}
          <div className="hidden sm:flex space-x-6 items-center">
            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link to="/" className="text-gray-800 text-lg font-medium">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link to="/about" className="text-gray-800 text-lg font-medium">
                About
              </Link>
            </motion.div>
          </div>

          {/* Logo */}
          <div className="text-3xl sm:text-2xl font-extrabold text-gray-800">
            <a href="/">Aayush Kumar</a>
          </div>

          {/* Right Links */}
          <div className="hidden sm:flex space-x-6 items-center">
            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link to="/projects" className="text-gray-800 text-lg font-medium">
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link to="/experience" className="text-gray-800 text-lg font-medium">
                Experience
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link to="/contact" className="text-gray-800 text-lg font-medium">
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-800 text-2xl focus:outline-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="sm:hidden fixed top-0 left-0 w-full h-full bg-gray-100 text-center flex flex-col items-center justify-center"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeMobileMenu}
                className="text-gray-800 text-2xl absolute top-4 right-4 focus:outline-none"
              >
                ✕
              </button>
              <ul className="font-medium text-2xl text-gray-800 space-y-6">
                <li>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={closeMobileMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/experience" onClick={closeMobileMenu}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Footer with Animation */}
      <motion.footer
        className="w-full text-center py-4 text-white"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        © 2025 Aayush Kumar. All rights reserved.
      </motion.footer>
    </>
  );
};

export default Navbar;