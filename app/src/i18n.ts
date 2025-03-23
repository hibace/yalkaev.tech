// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      name: 'Николай Ялкаев',
      description: 'Ведущий Fullstack разработчик с более чем 6 годами коммерческого опыта в разработке программного обеспечения, охватывающего весь жизненный цикл реализации продукта — от проектирования архитектуры до продакшн-развертывания. Специализируюсь на создании масштабируемых веб-приложений с использованием современных стеков технологий. В поиске компании с релевантным стеком (.NET, React, Vue, микросервисы) и интересными задачами, где смогу применять свой опыт для решения сложных бизнес-задач и менторства команд.',
      contact: 'Связь:',
      telegram: '@yalkaev (Telegram)',
      about: 'Обо мне', 
      experience: 'Опыт работы',
      stack: 'Стек технологий',
      highlights: 'Основные достижения',
      responsibilities: 'Обязанности',
      skills: 'Навыки',
    },
  },
  en: {
    translation: {
      name: 'Nick Ialkaev',
      description: 'Lead Fullstack Developer with over 6 years of commercial software development experience, covering the full product lifecycle—from architecture design to production deployment. I specialize in building scalable web applications using modern technology stacks. Looking for a company with a relevant tech stack (.NET, React, Vue, microservices) and challenging tasks where I can leverage my expertise to solve complex business problems and mentor teams.',
      contact: 'Contact:',
      telegram: '@yalkaev (Telegram)',
      about: 'About Me', 
      experience: 'Work Experience',
      stack: 'Tech Stack',
      highlights: 'Key Achievements',
      responsibilities: 'Responsibilities',
      skills: 'Skills',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;