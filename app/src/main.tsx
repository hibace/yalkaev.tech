import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Импорт экземпляра i18n
import App from './App.tsx';
import './index.css';

// Функция установки шрифта
const setFontClass = (lng: string) => {
  const fontClass = lng === 'ru' ? 'font-montserrat' : 'font-sans';
  document.documentElement.classList.remove('font-sans', 'font-montserrat');
  document.documentElement.classList.add(fontClass);
};

// Устанавливаем начальный шрифт после инициализации i18n
i18n.on('initialized', () => {
  setFontClass(i18n.language);
});

// Обновляем шрифт при смене языка
i18n.on('languageChanged', (lng) => {
  setFontClass(lng);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
