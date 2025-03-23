import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru'], // Поддерживаемые языки
    fallbackLng: 'ru', // Язык по умолчанию, если определение не удалось
    debug: true, // Оставляем для отладки
    detection: {
      // Настройки LanguageDetector
      order: ['localStorage', 'navigator'], // Сначала проверяем localStorage, затем браузер
      caches: ['localStorage'], // Сохраняем язык в localStorage
      lookupLocalStorage: 'i18nextLng', // Ключ для localStorage
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам переводов
    },
    interpolation: {
      escapeValue: false, // React сам экранирует значения
    },
  });

// Сохраняем язык в localStorage при его смене (дополнительная страховка)
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
