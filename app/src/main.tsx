import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App.tsx';
import './index.css';

type Language = 'ru' | 'en';

const setFontClass = (lng: Language): void => {
  const fontClass: string = lng === 'ru' ? 'font-montserrat' : 'font-sans';
  document.documentElement.classList.remove('font-sans', 'font-montserrat');
  document.documentElement.classList.add(fontClass);
};

i18n.on('initialized', () => {
  setFontClass(i18n.language as Language);
});

i18n.on('languageChanged', (lng: string) => {
  setFontClass(lng as Language);
});

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>,
  );
}
