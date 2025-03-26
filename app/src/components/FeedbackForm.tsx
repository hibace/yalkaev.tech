import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Close } from "@mui/icons-material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-auto p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label={t('feedback.close')}
            >
              <Close/>
            </button>

            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-primary-dark">
              {t('feedback.title')}
            </h3>

            {isSubmitted ? (
              <motion.div
                className="mb-4 p-4 bg-green-500 dark:bg-green-600 text-white rounded-md text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('feedback.success')}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium text-gray-900 dark:text-gray-300">
                    {t('feedback.name')}
                  </label>
                  <input
                    {...register('name', { required: t('feedback.required') })}
                    placeholder={t('feedback.namePlaceholder')}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-gray-100"
                  />
                  {errors.name && (
                    <motion.span 
                      className="text-red-500 dark:text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.name.message}
                    </motion.span>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-900 dark:text-gray-300">
                    {t('feedback.email')}
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: t('feedback.required'),
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: t('feedback.invalidEmail'),
                      },
                    })}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-gray-100"
                  />
                  {errors.email && (
                    <motion.span 
                      className="text-red-500 dark:text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.email.message}
                    </motion.span>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-900 dark:text-gray-300">
                    {t('feedback.message')}
                  </label>
                  <textarea
                    {...register('message', {
                      required: t('feedback.required'),
                      minLength: {
                        value: 10,
                        message: t('feedback.minLength', { count: 10 }),
                      },
                    })}
                    placeholder={t('feedback.messagePlaceholder')}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-gray-100 min-h-[100px]"
                  />
                  {errors.message && (
                    <motion.span 
                      className="text-red-500 dark:text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.message.message}
                    </motion.span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary dark:bg-primary-dark hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('feedback.submit')}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};