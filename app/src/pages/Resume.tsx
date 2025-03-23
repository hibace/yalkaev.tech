import { motion } from 'framer-motion';
import { Chip, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Telegram, Mail } from '@mui/icons-material'; // Импорт иконок

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
                whileHover={{ scale: 1.02 }}
                className="bg-[#F3F4F6] dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-primary dark:border-primary-dark transition-transform duration-200"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.position}</h3>
                    <p className="text-secondary dark:text-secondary-dark text-sm">{exp.company} — {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">{exp.period} ({exp.duration})</span>
                </div>
                <div className="mt-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('stack')}:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.stack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="bg-accent-light dark:bg-accent-dark text-primary dark:text-primary-dark"
                      />
                    ))}
                  </div>
                </div>
                {exp.highlights && (
                  <div className="mt-2">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('highlights')}:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{t('responsibilities')}:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}