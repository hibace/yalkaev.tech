import { motion } from 'framer-motion';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { skills } from '../../data/skills';
import { sectionVariants, itemVariants } from '../../animations/variants';
import {
  SiDotnet,
  SiPostgresql,
  SiJavascript,
  SiVuedotjs,
  SiQuasar,
  SiTypescript,
  SiReact,
  SiRedux,
  SiRabbitmq,
  SiApachepulsar,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiJirasoftware,
  SiScrumalliance,
  SiSharp,
} from 'react-icons/si';
import { FaCode, FaTasks, FaUsers, FaCodeBranch } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

const skillIcons: { [key: string]: JSX.Element } = {
  '.NET': <SiDotnet />,
  'C#': <SiSharp />,
  PostgreSQL: <SiPostgresql />,
  'T-SQL': <TbSql />,
  JavaScript: <SiJavascript />,
  'Vue.js': <SiVuedotjs />,
  Quasar: <SiQuasar />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  PrimeReact: <SiReact />,
  Redux: <SiRedux />,
  RabbitMQ: <SiRabbitmq />,
  'Apache Pulsar': <SiApachepulsar />,
  'Entity Framework': <SiDotnet />,
  Hangfire: <FaTasks />,
  Quartz: <FaTasks />,
  'CQRS (MediatR)': <FaCode />,
  Docker: <SiDocker />,
  Kubernetes: <SiKubernetes />,
  'CI/CD': <SiGitlab />,
  Agile: <SiJirasoftware />,
  Scrum: <SiScrumalliance />,
  Mentoring: <FaUsers />,
  'Code Review': <FaCodeBranch />,
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      className="mb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    >
      <motion.h2
        className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {t('skills')}
      </motion.h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.05 }}
          >
            <Chip
              label={skill}
              variant="outlined"
              icon={skillIcons[skill]}
              className="bg-[#F3F4F6] dark:bg-gray-800 text-primary dark:text-secondary-dark border-primary dark:border-primary-dark text-sm"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
