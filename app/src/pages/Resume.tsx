// src/pages/Resume.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Telegram, Mail } from '@mui/icons-material';

// Данные experiences с ключами для переводов
const experiences = [
  {
    periodKey: 'experience.careerCompass.period',
    durationKey: 'experience.careerCompass.duration',
    companyKey: 'experience.careerCompass.company',
    locationKey: 'experience.careerCompass.location',
    positionKey: 'experience.careerCompass.position',
    stack: [
      '.NET 9', 'Entity Framework Core 9', 'Redis', 'FluentValidation', 'MediatR', 'Apache Pulsar',
      'Automapper', 'Polly', 'Swagger', 'KubernetesClient', 'Quartz', 'React', 'Typescript', 'Vite',
      'PrimeReact', 'Redux', 'MUI', 'Tailwind', 'axios', 'i18n', 'vitest', 'Yandex Cloud', 'Docker',
      'Kubernetes', 'GitLab', 'Sonarube', 'Grafana', 'Prometheus', 'AlertManager'
    ],
    responsibilitiesKeys: [
      'experience.careerCompass.responsibilities.1',
      'experience.careerCompass.responsibilities.2',
      'experience.careerCompass.responsibilities.3',
      'experience.careerCompass.responsibilities.4',
      'experience.careerCompass.responsibilities.5',
      'experience.careerCompass.responsibilities.6',
      'experience.careerCompass.responsibilities.7',
      'experience.careerCompass.responsibilities.8',
      'experience.careerCompass.responsibilities.9',
    ],
  },
  {
    periodKey: 'experience.qvant.period',
    durationKey: 'experience.qvant.duration',
    companyKey: 'experience.qvant.company',
    locationKey: 'experience.qvant.location',
    positionKey: 'experience.qvant.position',
    stack: [
      '.NET 8', '.NET 5', '.NET Framework', 'MS SQL Server', 'PostgreSQL', 'Vue.js', 'Quasar', 'PrimeVue',
      'Axios', 'Pinia', 'Typescript', 'Javascript', 'jQuery', 'MediatR', 'Dapper', 'Team City', 'Octopus',
      'ELK', 'Agile', 'Scrum'
    ],
    highlightsKeys: [
      'experience.qvant.highlights.1',
      'experience.qvant.highlights.2',
      'experience.qvant.highlights.3',
      'experience.qvant.highlights.4',
      'experience.qvant.highlights.5',
    ],
    responsibilitiesKeys: [
      'experience.qvant.responsibilities.1',
      'experience.qvant.responsibilities.2',
      'experience.qvant.responsibilities.3',
      'experience.qvant.responsibilities.4',
      'experience.qvant.responsibilities.5',
      'experience.qvant.responsibilities.6',
      'experience.qvant.responsibilities.7',
      'experience.qvant.responsibilities.8',
      'experience.qvant.responsibilities.9',
    ],
  },
  {
    periodKey: 'experience.outsource.period',
    durationKey: 'experience.outsource.duration',
    companyKey: 'experience.outsource.company',
    locationKey: 'experience.outsource.location',
    positionKey: 'experience.outsource.position',
    stack: ['React', 'Semantic UI', 'RabbitMQ', 'Javascript', '.NET', 'Dynamics 365', 'Terrasoft SDK'],
    responsibilitiesKeys: [
      'experience.outsource.responsibilities.1',
      'experience.outsource.responsibilities.2',
      'experience.outsource.responsibilities.3',
      'experience.outsource.responsibilities.4',
      'experience.outsource.responsibilities.5',
      'experience.outsource.responsibilities.6',
      'experience.outsource.responsibilities.7',
    ],
  },
  {
    periodKey: 'experience.navicon.period',
    durationKey: 'experience.navicon.duration',
    companyKey: 'experience.navicon.company',
    locationKey: 'experience.navicon.location',
    positionKey: 'experience.navicon.position',
    stack: ['C#', 'ASP.NET', 'Entity Framework', 'MVC/WebAPI', 'Javascript', 'jsTree', 'jsBridge (Resco)', 'SQL', 'SSRS'],
    responsibilitiesKeys: [
      'experience.navicon.responsibilities.1',
      'experience.navicon.responsibilities.2',
      'experience.navicon.responsibilities.3',
      'experience.navicon.responsibilities.4',
      'experience.navicon.responsibilities.5',
      'experience.navicon.responsibilities.6',
      'experience.navicon.responsibilities.7',
      'experience.navicon.responsibilities.8',
      'experience.navicon.responsibilities.9',
      'experience.navicon.responsibilities.10',
      'experience.navicon.responsibilities.11',
    ],
  },
];

const skills = [
  '.NET', 'React', 'Vue.js', 'Typescript', 'Javascript', 'SQL', 'Microservices', 'Redux', 'CQRS',
  'Docker', 'Kubernetes', 'CI/CD', 'Agile', 'Scrum', 'Mentoring', 'Code Review',
];

export default function Resume() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-8 bg-[#F3F4F6] dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        {/* About */}
        <section id="about" className="text-center mb-8">
          <Avatar
            src="/avatar.jpeg"
            alt={t('name')}
            sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, border: '4px solid' }}
            className="shadow-md border-primary dark:border-secondary"
          />
          <h1 className="text-3xl font-bold text-primary dark:text-primary-dark mb-2">
            {t('name')}
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            {t('description')}
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://t.me/yalkaev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors text-base"
            >
              <Telegram className="mr-2" />
              Telegram
            </a>
            <a
              href="mailto:yalkaevnikolai@gmail.com"
              className="flex items-center text-primary dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors text-base"
            >
              <Mail className="mr-2" />
              yalkaevnikolai@gmail.com
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-3">
            {t('skills')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                className="bg-[#F3F4F6] dark:bg-gray-800 text-primary dark:text-primary-dark border-primary dark:border-primary-dark text-sm"
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-3">
            {t('experience')}
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-[#F3F4F6] dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-primary dark:border-primary-dark cursor-pointer overflow-hidden"
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Заголовок карточки */}
                <div className="p-4 flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t(exp.positionKey)}</h3>
                    <p className="text-secondary dark:text-secondary-dark text-sm">{t(exp.companyKey)} — {t(exp.locationKey)}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">{t(exp.periodKey)} ({t(exp.durationKey)})</span>
                </div>

                {/* Раскрываемая часть */}
                <AnimatePresence>
                  {openCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-accent-light dark:bg-gray-700"
                    >
                      <div className="mt-2">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('stack')}:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {exp.stack.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              className="bg-primary dark:bg-primary-dark text-white"
                            />
                          ))}
                        </div>
                      </div>
                      {exp.highlightsKeys && (
                        <div className="mt-4">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('highlights')}:</h4>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-1">
                            {exp.highlightsKeys.map((key) => (
                              <li key={key}>{t(key)}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('responsibilities')}:</h4>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-1">
                          {exp.responsibilitiesKeys.map((key) => (
                            <li key={key}>{t(key)}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}