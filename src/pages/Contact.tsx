
import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
