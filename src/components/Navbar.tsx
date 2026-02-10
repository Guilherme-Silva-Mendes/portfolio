import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const BrazilFlag = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="18" fill="#009739"/>
    <path d="M12 2L22 9L12 16L2 9L12 2Z" fill="#FEDD00"/>
    <circle cx="12" cy="9" r="4" fill="#002776"/>
  </svg>
);

const USAFlag = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="18" fill="#B22234"/>
    <rect y="1.38" width="24" height="1.38" fill="white"/>
    <rect y="4.15" width="24" height="1.38" fill="white"/>
    <rect y="6.92" width="24" height="1.38" fill="white"/>
    <rect y="9.69" width="24" height="1.38" fill="white"/>
    <rect y="12.46" width="24" height="1.38" fill="white"/>
    <rect y="15.23" width="24" height="1.38" fill="white"/>
    <rect width="10" height="9.69" fill="#3C3B6E"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, to: 'hero' },
    { name: t.nav.about, to: 'about' },
    { name: t.nav.skills, to: 'skills' },
    { name: t.nav.projects, to: 'projects' },
    { name: t.nav.experience, to: 'experience' },
    { name: t.nav.contact, to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center rounded-lg border border-accent-cyan/30 overflow-hidden">
            <motion.button
              onClick={() => language !== 'en' && toggleLanguage()}
              whileTap={{ scale: 0.95 }}
              className={`p-2 transition-all duration-300 ${language === 'en' ? 'bg-accent-cyan/20' : 'hover:bg-accent-cyan/10 opacity-50'}`}
              title="English"
            >
              <USAFlag />
            </motion.button>
            <div className="w-px h-6 bg-accent-cyan/30" />
            <motion.button
              onClick={() => language !== 'pt' && toggleLanguage()}
              whileTap={{ scale: 0.95 }}
              className={`p-2 transition-all duration-300 ${language === 'pt' ? 'bg-accent-cyan/20' : 'hover:bg-accent-cyan/10 opacity-50'}`}
              title="Português"
            >
              <BrazilFlag />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button - Centered */}
        <div className="md:hidden flex items-center justify-center gap-3">
          <div className="flex items-center rounded-lg border border-accent-cyan/30 overflow-hidden">
            <button
              onClick={() => language !== 'en' && toggleLanguage()}
              className={`p-1.5 transition-all duration-300 ${language === 'en' ? 'bg-accent-cyan/20' : 'opacity-50'}`}
            >
              <USAFlag />
            </button>
            <div className="w-px h-5 bg-accent-cyan/30" />
            <button
              onClick={() => language !== 'pt' && toggleLanguage()}
              className={`p-1.5 transition-all duration-300 ${language === 'pt' ? 'bg-accent-cyan/20' : 'opacity-50'}`}
            >
              <BrazilFlag />
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={200}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
