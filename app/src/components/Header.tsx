// src/components/Header.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  useState(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });

  return (
    <header className="bg-primary dark:bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#about"
              className="px-4 py-2 rounded-full hover:bg-accent-light dark:hover:bg-accent-dark hover:text-primary dark:hover:text-gray-800 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('about')}
            </motion.a>
            <motion.a
              href="#skills"
              className="px-4 py-2 rounded-full hover:bg-accent-light dark:hover:bg-accent-dark hover:text-primary dark:hover:text-gray-800 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('skills')}
            </motion.a>
            <IconButton
              onClick={toggleLanguage}
              className="p-2"
              sx={{ color: 'white' }}
            >
              {i18n.language === 'ru' ? (
                <svg className="w-6 h-6" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="8" fill="#FFFFFF" />
                  <rect y="8" width="36" height="8" fill="#0052B4" />
                  <rect y="16" width="36" height="8" fill="#D80027" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="24" fill="#FFFFFF" />
                  <rect width="36" height="1.85" fill="#B22234" />
                  <rect y="3.69" width="36" height="1.85" fill="#B22234" />
                  <rect y="7.38" width="36" height="1.85" fill="#B22234" />
                  <rect y="11.07" width="36" height="1.85" fill="#B22234" />
                  <rect y="14.76" width="36" height="1.85" fill="#B22234" />
                  <rect y="18.45" width="36" height="1.85" fill="#B22234" />
                  <rect y="22.14" width="36" height="1.85" fill="#B22234" />
                  <rect width="14.4" height="12" fill="#3C3B6E" />
                  <g fill="#FFFFFF">
                    <circle cx="1.8" cy="1.2" r="0.3" />
                    <circle cx="3.6" cy="1.2" r="0.3" />
                    <circle cx="5.4" cy="1.2" r="0.3" />
                    <circle cx="7.2" cy="1.2" r="0.3" />
                    <circle cx="9" cy="1.2" r="0.3" />
                    <circle cx="10.8" cy="1.2" r="0.3" />
                    <circle cx="12.6" cy="1.2" r="0.3" />
                    <circle cx="2.7" cy="3.6" r="0.3" />
                    <circle cx="4.5" cy="3.6" r="0.3" />
                    <circle cx="6.3" cy="3.6" r="0.3" />
                    <circle cx="8.1" cy="3.6" r="0.3" />
                    <circle cx="9.9" cy="3.6" r="0.3" />
                    <circle cx="11.7" cy="3.6" r="0.3" />
                    <circle cx="1.8" cy="6" r="0.3" />
                    <circle cx="3.6" cy="6" r="0.3" />
                    <circle cx="5.4" cy="6" r="0.3" />
                    <circle cx="7.2" cy="6" r="0.3" />
                    <circle cx="9" cy="6" r="0.3" />
                    <circle cx="10.8" cy="6" r="0.3" />
                    <circle cx="12.6" cy="6" r="0.3" />
                    <circle cx="2.7" cy="8.4" r="0.3" />
                    <circle cx="4.5" cy="8.4" r="0.3" />
                    <circle cx="6.3" cy="8.4" r="0.3" />
                    <circle cx="8.1" cy="8.4" r="0.3" />
                    <circle cx="9.9" cy="8.4" r="0.3" />
                    <circle cx="11.7" cy="8.4" r="0.3" />
                    <circle cx="1.8" cy="10.8" r="0.3" />
                    <circle cx="3.6" cy="10.8" r="0.3" />
                    <circle cx="5.4" cy="10.8" r="0.3" />
                    <circle cx="7.2" cy="10.8" r="0.3" />
                    <circle cx="9" cy="10.8" r="0.3" />
                    <circle cx="10.8" cy="10.8" r="0.3" />
                    <circle cx="12.6" cy="10.8" r="0.3" />
                  </g>
                </svg>
              )}
            </IconButton>
            <IconButton
              onClick={toggleTheme}
              className="p-2 relative"
              sx={{ color: 'white' }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: document.documentElement.classList.contains('dark') ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {document.documentElement.classList.contains('dark') ? <Brightness7 /> : <Brightness4 />}
              </motion.div>
            </IconButton>
          </div>

          <button
            className="md:hidden absolute right-6 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          Kauf>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </motion.svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 text-center"
          >
            <motion.a
              href="#about"
              className="block px-4 py-2 rounded-full hover:bg-accent-light dark:hover:bg-accent-dark hover:text-primary dark:hover:text-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('about')}
            </motion.a>
            <motion.a
              href="#skills"
              className="block px-4 py-2 rounded-full hover:bg-accent-light dark:hover:bg-accent-dark hover:text-primary dark:hover:text-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('skills')}
            </motion.a>
            <IconButton
              onClick={toggleLanguage}
              className="w-full"
              sx={{ color: 'white', justifyContent: 'center' }}
            >
              {i18n.language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
              <span className="ml-2">
                {i18n.language === 'ru' ? (
                  <svg className="w-6 h-6" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="8" fill="#FFFFFF" />
                    <rect y="8" width="36" height="8" fill="#0052B4" />
                    <rect y="16" width="36" height="8" fill="#D80027" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="24" fill="#FFFFFF" />
                    <rect width="36" height="1.85" fill="#B22234" />
                    <rect y="3.69" width="36" height="1.85" fill="#B22234" />
                    <rect y="7.38" width="36" height="1.85" fill="#B22234" />
                    <rect y="11.07" width="36" height="1.85" fill="#B22234" />
                    <rect y="14.76" width="36" height="1.85" fill="#B22234" />
                    <rect y="18.45" width="36" height="1.85" fill="#B22234" />
                    <rect y="22.14" width="36" height="1.85" fill="#B22234" />
                    <rect width="14.4" height="12" fill="#3C3B6E" />
                    <g fill="#FFFFFF">
                      <circle cx="1.8" cy="1.2" r="0.3" />
                      <circle cx="3.6" cy="1.2" r="0.3" />
                      <circle cx="5.4" cy="1.2" r="0.3" />
                      <circle cx="7.2" cy="1.2" r="0.3" />
                      <circle cx="9" cy="1.2" r="0.3" />
                      <circle cx="10.8" cy="1.2" r="0.3" />
                      <circle cx="12.6" cy="1.2" r="0.3" />
                      <circle cx="2.7" cy="3.6" r="0.3" />
                      <circle cx="4.5" cy="3.6" r="0.3" />
                      <circle cx="6.3" cy="3.6" r="0.3" />
                      <circle cx="8.1" cy="3.6" r="0.3" />
                      <circle cx="9.9" cy="3.6" r="0.3" />
                      <circle cx="11.7" cy="3.6" r="0.3" />
                      <circle cx="1.8" cy="6" r="0.3" />
                      <circle cx="3.6" cy="6" r="0.3" />
                      <circle cx="5.4" cy="6" r="0.3" />
                      <circle cx="7.2" cy="6" r="0.3" />
                      <circle cx="9" cy="6" r="0.3" />
                      <circle cx="10.8" cy="6" r="0.3" />
                      <circle cx="12.6" cy="6" r="0.3" />
                      <circle cx="2.7" cy="8.4" r="0.3" />
                      <circle cx="4.5" cy="8.4" r="0.3" />
                      <circle cx="6.3" cy="8.4" r="0.3" />
                      <circle cx="8.1" cy="8.4" r="0.3" />
                      <circle cx="9.9" cy="8.4" r="0.3" />
                      <circle cx="11.7" cy="8.4" r="0.3" />
                      <circle cx="1.8" cy="10.8" r="0.3" />
                      <circle cx="3.6" cy="10.8" r="0.3" />
                      <circle cx="5.4" cy="10.8" r="0.3" />
                      <circle cx="7.2" cy="10.8" r="0.3" />
                      <circle cx="9" cy="10.8" r="0.3" />
                      <circle cx="10.8" cy="10.8" r="0.3" />
                      <circle cx="12.6" cy="10.8" r="0.3" />
                    </g>
                  </svg>
                )}
              </span>
            </IconButton>
            <IconButton
              onClick={toggleTheme}
              className="w-full"
              sx={{ color: 'white', justifyContent: 'center' }}
            >
              {document.documentElement.classList.contains('dark') ? 'Light Theme' : 'Dark Theme'}
              <motion.span
                className="ml-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: document.documentElement.classList.contains('dark') ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {document.documentElement.classList.contains('dark') ? <Brightness7 /> : <Brightness4 />}
              </motion.span>
            </IconButton>
          </motion.div>
        )}
      </nav>
    </header>
  );
}