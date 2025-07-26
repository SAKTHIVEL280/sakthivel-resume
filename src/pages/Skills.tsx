
import { motion } from 'framer-motion';
import SkillsSection from '@/components/SkillsSection';
import { useTheme } from 'next-themes';

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <SkillsSection isDark={isDark} />
    </motion.div>
  );
};

export default Skills;
