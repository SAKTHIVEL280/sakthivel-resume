
import { motion } from 'framer-motion';
import ProjectsSection from '@/components/ProjectsSection';
import { useTheme } from 'next-themes';

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <ProjectsSection isDark={isDark} />
    </motion.div>
  );
};

export default Projects;
