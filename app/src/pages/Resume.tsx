// src/pages/Resume.tsx
import { motion } from 'framer-motion';
import { Chip, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    period: 'Январь 2025 — по настоящее время',
    duration: '3 месяца',
    company: 'ООО «Карьерный компас»',
    location: 'Набережные Челны, tams-cc.ru',
    position: 'Ведущий разработчик',
    stack: [
      '.NET 9', 'Entity Framework Core 9', 'Redis', 'FluentValidation', 'MediatR', 'Apache Pulsar',
      'Automapper', 'Polly', 'Swagger', 'KubernetesClient', 'Quartz', 'React', 'Typescript', 'Vite',
      'PrimeReact', 'Redux', 'MUI', 'Tailwind', 'axios', 'i18n', 'vitest', 'Yandex Cloud', 'Docker',
      'Kubernetes', 'GitLab', 'Sonarube', 'Grafana', 'Prometheus', 'AlertManager'
    ],
    responsibilities: [
      'Участие в проектировании и разработке backend-части приложений на .NET',
      'Разработка front-end компонентов на базе React с использованием современных подходов управления состоянием (Redux)',
      'Обеспечение взаимодействия компонентов и сервисов с использованием очередей сообщений для масштабируемых архитектур',
      'Проектирование и оптимизация баз данных, написание и оптимизация сложных SQL-запросов',
      'Настройка и поддержка CI/CD для автоматизации выпуска обновлений и высоких стандартов кода',
      'Взаимодействие с командой разработчиков, аналитиками и менеджерами для реализации требований и оптимизации бизнес-логики',
      'Поддержка тестирования кода, создание Unit и Integration тестов для обеспечения стабильности решения',
      'Менторство и поддержка других разработчиков в команде, помощь в решении технических задач и обучение стандартам и лучшим практикам разработки',
      'Участие в планировании и оценке задач, анализ существующих процессов разработки и предложение улучшений',
    ],
  },
  {
    period: 'Октябрь 2020 — Июль 2024',
    duration: '3 года 10 месяцев',
    company: 'Qvant (Avant)',
    location: 'qvant.com',
    position: 'Senior Full Stack Developer',
    stack: [
      '.NET 8', '.NET 5', '.NET Framework', 'MS SQL Server', 'PostgreSQL', 'Vue.js', 'Quasar', 'PrimeVue',
      'Axios', 'Pinia', 'Typescript', 'Javascript', 'jQuery', 'MediatR', 'Dapper', 'Team City', 'Octopus',
      'ELK', 'Agile', 'Scrum'
    ],
    highlights: [
      'Лидил команду разработчиков для 5 сложных продуктов с итерационной успешной поставкой продукта в прод',
      'Проектировал и разрабатывал модуль «База оборудования» на технологическом стеке .NET 8, Vue 3, PrimeVue, Pinia, minIO',
      'Разработал модуль «Общий и ролевой доступ», интегрированный в продукт',
      'Формировал и поддерживал архитектурный стиль для модулей продукта',
      'Организовал работу команды разработчиков посредством встреч, обсуждений и написания внутренних статей',
    ],
    responsibilities: [
      'Разрабатывал модули Dynamics CRM (XRM SDK плагины, БП, скриптовая логика js, ts)',
      'Формировал и проектировал микросервисную архитектуру для WebAPI (Ocelot API Gateway), CQRS паттерн (MediatR), micro ORM Dapper',
      'Реализовывал бизнес-логику, используя Hangfire background process, писал Quartz задачи',
      'Писал и оптимизировал SQL-запросы (MS SQL Server, PostgreSQL)',
      'Разрабатывал UI компоненты SPA приложения (Vue 2/3, TS, JS, Quasar Framework)',
      'Реализовывал интеграции с продуктами периметра компании через RabbitMQ, REST + SOAP',
      'Техническое управление проектами, работа с техническим долгом',
      'Наставничество и обучение команды разработчиков',
      'Ответственность за качество кода, code review, рефакторинг',
    ],
  },
  {
    period: 'Сентябрь 2020 — Сентябрь 2021',
    duration: '1 год 1 месяц',
    company: 'Outsource projects (Navicon, VTB Leasing, Yolva)',
    location: 'Санкт-Петербург',
    position: 'Fullstack Developer',
    stack: ['React', 'Semantic UI', 'RabbitMQ', 'Javascript', '.NET', 'Dynamics 365', 'Terrasoft SDK'],
    responsibilities: [
      'Разработан модуль «Разделение возможностей» для ВТБ Лизинг на React, Semantic UI stack',
      'Разработан модуль «Передача возможностей» с использованием RabbitMQ',
      'Разработаны клиентские страницы модуля Dynamics 365 Portal (Javascript, .NET)',
      'Оптимизировано время выполнения плагина (x10) для Yolva',
      'Создан модуль «График встреч» для Dynamics CRM (Javascript, HTML, CSS)',
      'Разработан модуль дедупликации учетных записей для Creatio (Javascript, .NET)',
      'Созданы UI и Unit тесты для разработанной функциональности',
    ],
  },
  {
    period: 'Июль 2018 — Октябрь 2020',
    duration: '2 года 4 месяца',
    company: 'Navicon',
    location: 'Республика Татарстан, navicons.com',
    position: 'Fullstack Developer',
    stack: ['C#', 'ASP.NET', 'Entity Framework', 'MVC/WebAPI', 'Javascript', 'jsTree', 'jsBridge (Resco)', 'SQL', 'SSRS'],
    responsibilities: [
      'Реализовали иерархическую страницу подрядчиков с использованием jsTree',
      'Разработали страницу записи пациентов с Angular Scheduler',
      'Разработали быструю синхронизацию (x10) для Resco CRM',
      'Разработка для MS Dynamics CRM',
      'Разработка клиент-серверных приложений',
      'Разработка отчетов SSRS',
      'Поддержка устаревшего кода',
      'Создание скриптов форм CRM для проектов (Stihl, Sanofi, Alfacapital, OMC, Petrovax)',
      'Разработка плагинов и рабочих процессов для CRM (Promomed, OMC, Valeant, HSE, VTB Leasing)',
      'Разработка интеграции OMC-MDM',
      'Разработка скриптов для Mobile RESCO CRM (RPHARM, Petrovax, Novamedica, Promomed, Tooltech)',
    ],
  },
];

const skills = [
  '.NET', 'React', 'Vue.js', 'Typescript', 'Javascript', 'SQL', 'Microservices', 'Redux', 'CQRS',
  'Docker', 'Kubernetes', 'CI/CD', 'Agile', 'Scrum', 'Mentoring', 'Code Review',
];

export default function Resume() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <section id="about" className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar
              src="/avatar.jpeg"
              alt={t('name')}
              sx={{ width: 150, height: 150, margin: '0 auto', mb: 3, border: '4px solid', borderColor: 'primary.main' }}
              className="shadow-lg"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl font-bold text-primary dark:text-primary-dark mb-4"
          >
            {t('name')}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 text-secondary dark:text-secondary-dark"
          >
            {t('contact')}{' '}
            <a
              href="https://t.me/yalkaev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light dark:text-accent-dark hover:underline transition-colors duration-300"
            >
              {t('telegram')}
            </a>
          </motion.p>
        </section>

        <section id="skills" className="mb-12">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-6"
          >
            {t('skills')}
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="cursor-pointer"
              >
                <Chip
                  label={skill}
                  color="secondary"
                  variant="outlined"
                  className="shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-12">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-6"
          >
            {t('experience')}
          </motion.h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold dark:text-gray-100">{exp.position}</h3>
                  <p className="text-secondary dark:text-secondary-dark">{exp.company} — {exp.location}</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period} ({exp.duration})</span>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2 dark:text-gray-200">{t('stack')}:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="primary"
                      size="small"
                      className="shadow-sm hover:shadow-md transition-shadow duration-300"
                    />
                  ))}
                </div>
              </div>

              {exp.highlights && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2 dark:text-gray-200">{t('highlights')}:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4">
                <h4 className="font-medium mb-2 dark:text-gray-200">{t('responsibilities')}:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
    </section>
  );
}