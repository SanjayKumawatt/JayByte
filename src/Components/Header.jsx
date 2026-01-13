import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Logo Component for Jaybyte
const JaybyteLogo = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="group-hover:rotate-0 transition-transform duration-500"
  >
    {/* Outer Chip Shape */}
    <rect 
      x="4" 
      y="4" 
      width="32" 
      height="32" 
      rx="8" 
      className="stroke-blue-600 dark:stroke-blue-400 stroke-[2.5] fill-blue-50 dark:fill-blue-900/20" 
    />
    
    {/* 'J' Circuit Path */}
    <motion.path 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M24 12V22C24 25.3137 21.3137 28 18 28H15" 
      className="stroke-blue-600 dark:stroke-blue-400 stroke-[3] stroke-linecap-round" 
    />
    
    {/* Tech Dots */}
    <circle cx="24" cy="12" r="2.5" className="fill-indigo-600 dark:fill-indigo-400" />
    <circle cx="15" cy="28" r="2" className="fill-orange-500" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme State logic
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on click (mobile)
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: 'Features', id: 'features' },
    { name: 'Services', id: 'use-cases' }, // Changed Use Cases to Services for IT company
    { name: 'Plans', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between"> {/* Increased height slightly for bigger logo */}

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <JaybyteLogo />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Jaybyte Tech
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase -mt-1">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="group relative"
              >
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.8, rotate: 180 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none ring-1 ring-gray-200 dark:ring-gray-700"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Get Started Button */}
            <button 
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold"
              >
                <Sparkles size={16} />
                Get Started
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ rotate: 90 }}
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none p-1"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="flex flex-col space-y-1 px-4 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-4 mx-4" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4"
              >
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
                >
                  <Sparkles size={18} />
                  Start Project
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;