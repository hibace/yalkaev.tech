import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { itemVariants } from '../../animations/variants';

interface ExperienceData {
  positionKey: string;
  companyKey: string;
  locationKey: string;
  periodKey: string;
  durationKey: string;
  stack: string[];
  highlightsKeys?: string[];
  responsibilitiesKeys: string[];
}

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
  openCard: number | null;
  toggleCard: (index: number) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  openCard,
  toggleCard,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="mb-8 flex items-start"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 bg-primary dark:bg-primary-dark rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.9, duration: 0.3 }}
        />
      </div>
      <div className="ml-4 flex-grow">
        <motion.div
          className="bg-[#F3F4F6] dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer"
          onClick={() => toggleCard(index)}
          whileHover={{ scale: 1.03, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {t(experience.positionKey)}
          </h3>
          <p className="text-secondary dark:text-secondary-dark text-sm">
            {t(experience.companyKey)} — {t(experience.locationKey)}
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {t(experience.periodKey)} ({t(experience.durationKey)})
          </span>
          <AnimatePresence>
            {openCard === index && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="mt-4 p-4 rounded bg-accent-light dark:bg-gray-700"
              >
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {t('stack')}:
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {experience.stack.map((tech: string, idx: number) => (
                      <motion.div
                        key={tech}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: idx * 0.02 }}
                      >
                        <Chip
                          label={tech}
                          size="small"
                          className="bg-primary dark:bg-primary-dark text-primary dark:text-secondary-dark"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                {experience.highlightsKeys && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                      {t('highlights')}:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-1">
                      {experience.highlightsKeys.map((key: string) => (
                        <motion.li
                          key={key}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {t(key)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {t('responsibilities')}:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-1">
                    {experience.responsibilitiesKeys.map((key: string) => (
                      <motion.li
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t(key)}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
