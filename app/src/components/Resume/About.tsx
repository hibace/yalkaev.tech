import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { sectionVariants } from '../../animations/variants';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="text-center mb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Avatar
          src="/avatar.jpeg"
          alt={t('name')}
          sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, border: '2px solid' }}
          className="bg-[#F3F4F6] dark:bg-gray-800 text-primary dark:text-secondary-dark border-primary dark:border-primary-dark"
        />
      </motion.div>
      <motion.h1
        className="text-3xl font-bold text-primary dark:text-primary-dark mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {t('name')}
      </motion.h1>
      <motion.p
        className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {t('description')}
      </motion.p>
    </motion.section>
  );
};

export default About;
