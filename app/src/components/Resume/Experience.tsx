import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experiences';
import ExperienceCard from './ExperienceCard';
import { sectionVariants, itemVariants } from '../../animations/variants';
import { Tooltip } from '@mui/material';
import { Download } from '@mui/icons-material';
import i18n from '../../i18n';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number): void => {
    setOpenCard(openCard === index ? null : index);
  };

  const baseUrl = import.meta.env.BASE_URL || '/';
  const currentLang = i18n.language || 'en'; 
  const resumePath = `${baseUrl.replace(/\/$/, '')}/resume/resume-${currentLang}.pdf`;

  return (
    <motion.section
      id="experience"
      className="mb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          className="text-2xl font-semibold text-secondary dark:text-secondary-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {t('experience')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Tooltip
            title={t('downloadResume')}
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: '#546fb3',
                  color: '#FFFFFF',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.875rem',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bgcolor: '#4B6A88',
                  },
                },
              },
              arrow: {
                sx: {
                  color: '#546fb3',
                },
              },
            }}
          >
            <motion.a
              href={resumePath}
              download="Nikolai_Yalkaev_Resume.pdf"
              className="flex items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Download className="mr-2" />
            </motion.a>
          </Tooltip>
        </motion.div>
      </div>
      <div className="relative">
        <motion.div
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary dark:bg-primary-dark"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        />
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
            openCard={openCard}
            toggleCard={toggleCard}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
