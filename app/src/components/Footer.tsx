// src/components/Footer.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Telegram, Mail } from '@mui/icons-material';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="bg-primary dark:bg-primary-dark text-white py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="https://t.me/yalkaev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Telegram className="mr-2" />
            Telegram
          </a>
          <a
            href="mailto:yalkaevnikolai@gmail.com"
            className="flex items-center hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <Mail className="mr-2" />
            yalkaevnikolai@gmail.com
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} {t('name')}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
