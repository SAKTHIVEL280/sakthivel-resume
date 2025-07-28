
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ThemeToggle from '@/components/ThemeToggle';
import LeftNavDock from '@/components/LeftNavDock';
import PageLoader from '@/components/PageLoader';
import MobileNav from '@/components/MobileNav';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <>
      {isLoading && <PageLoader />}
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}
          >
            <ThemeToggle 
              isDark={isDark} 
              setIsDark={setIsDark} 
              onDownloadResume={handleDownloadResume} 
            />
            <LeftNavDock />
            <MobileNav isDark={isDark} />
            
            <HeroSection isDark={isDark} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
