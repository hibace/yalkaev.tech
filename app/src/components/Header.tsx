// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7, Person, Build, Work } from '@mui/icons-material';
import { RussianFlag, USFlag } from './Flags';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateFavicon = () => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = `/favicon.svg?${new Date().getTime()}`;
    }
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateFavicon();
  };

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <motion.header
      className={`bg-primary dark:bg-primary-dark text-white sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold flex items-center">
          {t('name')}
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#about" className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            <Person className="mr-1" fontSize="small" />
            {t('about')}
          </a>
          <a href="#experience" className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            <Work className="mr-1" fontSize="small" />
            {t('experience')}
          </a>
          <IconButton onClick={toggleLanguage} sx={{ color: 'white' }}>
            {i18n.language === 'ru' ? <RussianFlag className="w-5 h-5" /> : <USFlag className="w-5 h-5" />}
          </IconButton>
          <IconButton onClick={toggleTheme} sx={{ color: 'white' }}>
            {document.documentElement.classList.contains('dark') ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-primary dark:bg-primary-dark px-4 py-4 flex flex-col items-center space-y-3">
          <a href="#about" className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            <Person className="mr-1" fontSize="small" />
            {t('about')}
          </a>
          <a href="#experience" className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            <Work className="mr-1" fontSize="small" />
            {t('experience')}
          </a>
          <button onClick={toggleLanguage} className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            {i18n.language === 'ru' ?  <RussianFlag className="w-5 h-5 mr-1" /> : <USFlag className="w-5 h-5 mr-1" />}
            {i18n.language === 'ru' ? 'RU' : 'EN'}
          </button>
        </div>
      )}
    </motion.header>
  );
}