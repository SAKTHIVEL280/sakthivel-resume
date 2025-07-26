
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import PageLoader from '@/components/PageLoader';
import { useTheme } from 'next-themes';

const Index = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Show loader overlay */}
      {isLoading && <PageLoader />}
      
      {/* Main content with smooth transition */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen overflow-x-hidden"
          >
            <HeroSection isDark={isDark} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
