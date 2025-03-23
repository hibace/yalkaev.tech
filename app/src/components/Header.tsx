import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7, Person, Work } from '@mui/icons-material';
import { RussianFlag, USFlag } from './Flags';

interface I18n {
  language: string;
  changeLanguage: (lang: string) => void;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    document.title = `${t('name')} - ${t('title')}`;
  }, [i18n.language, t]);

  const updateFavicon = (): void => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = `/favicon.svg?${new Date().getTime()}`;
    }
  };

  const toggleTheme = (): void => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      updateFavicon();
      return newTheme;
    });
  };

  const toggleLanguage = (): void => {
    const newLang = (i18n as I18n).language === 'ru' ? 'en' : 'ru';
    (i18n as I18n).changeLanguage(newLang);
  };

  return (
    <motion.header
      className={`bg-primary dark:bg-primary-dark text-white sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="/"
          className="text-lg font-medium flex items-center hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          {t('name')}
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#about"
            className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Person className="mr-1" fontSize="small" />
            {t('about')}
          </a>
          <a
            href="#experience"
            className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Work className="mr-1" fontSize="small" />
            {t('experience')}
          </a>
          <IconButton onClick={toggleLanguage} sx={{ color: 'white' }}>
            {(i18n as I18n).language === 'ru' ? (
              <RussianFlag className="w-5 h-5" />
            ) : (
              <USFlag className="w-5 h-5" />
            )}
          </IconButton>
          <IconButton onClick={toggleTheme} sx={{ color: 'white' }}>
            {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-primary dark:bg-primary-dark px-4 py-4 flex flex-col items-center space-y-3">
          <a
            href="#about"
            className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Person className="mr-1" fontSize="small" />
            {t('about')}
          </a>
          <a
            href="#experience"
            className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Work className="mr-1" fontSize="small" />
            {t('experience')}
          </a>
          <button
            onClick={toggleLanguage}
            className="flex items-center text-sm uppercase hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            {(i18n as I18n).language === 'ru' ? (
              <RussianFlag className="w-5 h-5 mr-1" />
            ) : (
              <USFlag className="w-5 h-5 mr-1" />
            )}
            {(i18n as I18n).language === 'ru' ? 'RU' : 'EN'}
          </button>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
