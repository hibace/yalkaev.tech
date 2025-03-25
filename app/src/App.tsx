import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Resume from './pages/Resume';
import Footer from './components/Footer';

declare global {
  interface Window {
    ym?: (counterId: number, action: 'init' | 'hit', options?: any) => void;
  }
}

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.ym && typeof window.ym === 'function') {
      window.ym(100579836, 'hit', window.location.href);
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    if (!window.ym) {
      const script = document.createElement('script');
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      script.async = true;
      script.onload = () => {
        if (window.ym) {
          window.ym(100579836, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
        } else {
          console.error('Яндекс.Метрика не инициализирована');
        }
      };
      script.onerror = () => {
        console.error('Ошибка загрузки Яндекс.Метрики');
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <RouteTracker />
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<Resume />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;