import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Menu, X } from 'lucide-react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-primary-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <Home className="h-6 w-6" />
            <span className="font-heading font-bold text-xl">PropEase</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="font-medium text-secondary-600 hover:text-primary-600 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </motion.a>
            ))}
           <motion.button
              className="bg-gray-600 hover:bg-gray-700 text-gray-100 font-medium py-2 px-4 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => history.push('/pm/v1/login')}
            >
              Login
            </motion.button>

            <motion.button
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => history.push('/pm/v1/signup')}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-secondary-600 hover:text-primary-600 py-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md w-full transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
