import { useEffect } from 'react';

interface WindowWithYM extends Window {
  ym?: ((id: number, type: string, config: object) => void) & { a?: any[]; l?: number };
}

const YandexMetrika = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const win = window as WindowWithYM;
    
    win.ym = win.ym || function (...args: any[]) {
      (win.ym!.a = win.ym!.a || []).push(args);
    };
    
    win.ym!.l = new Date().getTime();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    win.ym!(100579836, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, []);

  return null;
};

export default YandexMetrika;