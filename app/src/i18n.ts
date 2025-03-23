// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Загрузка переводов из public/locales
  .use(LanguageDetector) // Автоопределение языка пользователя
  .use(initReactI18next) // Интеграция с React
  .init({
    supportedLngs: ['en', 'ru'], // Поддерживаемые языки
    fallbackLng: 'ru', // Язык по умолчанию
    debug: true, // Включите для отладки в консоли
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам переводов
    },
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
  });

export default i18n;