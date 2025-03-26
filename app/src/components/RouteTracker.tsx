import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    ym?: (counterId: number, action: 'init' | 'hit', url?: string, options?: any) => void;
  }
}

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sendHit = () => {
      if (window.ym && typeof window.ym === 'function') {
        window.ym(100579836, 'hit', window.location.href, {
          title: document.title,
          referrer: document.referrer,
        });
        console.log('Отправлен hit для:', window.location.href);
      } else {
        console.warn('window.ym еще не готов');
      }
    };

    if (window.ym) {
      sendHit();
    } else {
      const interval = setInterval(() => {
        if (window.ym) {
          sendHit();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [location]);

  return null;
};

export default RouteTracker;
