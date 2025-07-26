
import { motion } from 'framer-motion';
import EducationSection from '@/components/EducationSection';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <EducationSection />
    </motion.div>
  );
};

export default Education;
