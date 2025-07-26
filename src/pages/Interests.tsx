
import { motion } from 'framer-motion';
import InterestsSection from '@/components/InterestsSection';

const Interests = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <InterestsSection />
    </motion.div>
  );
};

export default Interests;
