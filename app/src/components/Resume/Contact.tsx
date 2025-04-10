import React from 'react';
import { motion } from 'framer-motion';
import { Telegram, Mail, GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { sectionVariants, itemVariants } from '../../animations/variants';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      className="text-center mb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <motion.a
          href="https://t.me/yalkaev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Telegram className="mr-2" />
          {t('telegram')}
        </motion.a>
        <motion.a
          href="mailto:yalkaevnikolai@gmail.com"
          className="flex items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ delay: 0.1 }}
        >
          <Mail className="mr-2" />
          yalkaevnikolai@gmail.com
        </motion.a>
        <motion.a
          href="https://github.com/hibace"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ delay: 0.2 }}
        >
          <GitHub className="mr-2" />
          GitHub
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
