
import { motion } from 'framer-motion';
import ToolsSection from '@/components/ToolsSection';
import { useTheme } from 'next-themes';

const Tools = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <ToolsSection isDark={isDark} />
    </motion.div>
  );
};

export default Tools;
