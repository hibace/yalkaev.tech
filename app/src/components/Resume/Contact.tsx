import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Telegram, Mail, GitHub, Message } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { sectionVariants, itemVariants } from '../../animations/variants';
import { FeedbackForm } from '../FeedbackForm';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFormOpen]);

  const contacts = [
    {
      id: 'telegram',
      icon: <Telegram />,
      href: 'https://t.me/yalkaev',
      tooltip: 'Telegram',
      label: 'Telegram',
      delay: 0,
      external: true
    },
    {
      id: 'email',
      icon: <Mail />,
      href: 'mailto:yalkaevnikolai@gmail.com',
      tooltip: 'Email',
      label: 'Email',
      delay: 0.1,
      external: false
    },
    {
      id: 'github',
      icon: <GitHub />,
      href: 'https://github.com/hibace',
      tooltip: 'GitHub',
      label: 'GitHub',
      delay: 0.2,
      external: true
    },
    {
      id: 'feedback',
      icon: <Message />,
      tooltip: t('feedback.showForm'),
      label: t('feedback.showForm'),
      delay: 0.3,
      action: () => setIsFormOpen(true)
    }
  ];

  return (
    <>
      <motion.section
        id="contact"
        className="text-center mb-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col xs:flex-row justify-center items-center gap-6">
          {contacts.map((contact) => (
            <motion.div
              key={contact.id}
              className="relative flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: contact.delay }}
            >
              {contact.action ? (
                <motion.button
                  onClick={contact.action}
                  className="flex flex-col items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
                  onMouseEnter={() => setActiveTooltip(contact.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="p-2">
                    {contact.icon}
                  </div>
                  <span className="text-xs mt-1">{contact.label}</span>
                </motion.button>
              ) : (
                <motion.a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-primary dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-dark transition-colors text-base"
                  onMouseEnter={() => setActiveTooltip(contact.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="p-2">
                    {contact.icon}
                  </div>
                  <span className="text-xs mt-1">{contact.label}</span>
                </motion.a>
              )}

              {activeTooltip === contact.id && (
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-700 text-white rounded whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                >
                  {contact.tooltip}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <FeedbackForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default Contact;