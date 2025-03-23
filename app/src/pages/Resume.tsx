// src/pages/Resume.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Telegram, Mail } from '@mui/icons-material';
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
    <div className="bg-[#F3F4F6] dark:bg-gray-900 min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* About */}
          <section id="about" className="text-center mb-8">
            <Avatar
              src="/avatar.jpeg"
              alt={t('name')}
              sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, border: '4px solid' }}
              className="shadow-md border-primary dark:border-secondary"
            />
            <h1 className="text-3xl font-bold text-primary dark:text-primary-dark mb-2">{t('name')}</h1>
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto">{t('description')}</p>
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
                {t('telegram')}
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
            <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-3">{t('skills')}</h2>
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

          {/* Experience (Timeline) */}
          <section id="experience" className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-6">{t('experience')}</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary dark:bg-primary-dark" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-8 flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary dark:bg-primary-dark rounded-full" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <motion.div
                      className="bg-[#F3F4F6] dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer"
                      onClick={() => toggleCard(index)}
                      whileHover={{ scale: 1.03, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t(exp.positionKey)}</h3>
                      <p className="text-secondary dark:text-secondary-dark text-sm">{t(exp.companyKey)} — {t(exp.locationKey)}</p>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{t(exp.periodKey)} ({t(exp.durationKey)})</span>
                      <AnimatePresence>
                        {openCard === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, y: -20 }}
                            animate={{ height: 'auto', opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="mt-4  p-4 rounded"
                          >
                            <div className="mb-4">
                              <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('stack')}:</h4>
                              <div className="flex flex-wrap gap-2 mt-1">
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
                              <div className="mb-4">
                                <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('highlights')}:</h4>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-1">
                                  {exp.highlightsKeys.map((key) => (
                                    <li key={key}>{t(key)}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div>
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
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}