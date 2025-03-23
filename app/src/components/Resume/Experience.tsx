import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experiences';
import ExperienceCard from './ExperienceCard';
import { sectionVariants } from '../../animations/variants';

export default function Experience() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      className="mb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    >
      <motion.h2
        className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {t('experience')}
      </motion.h2>
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
}
