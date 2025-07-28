
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ToolsSection from '@/components/ToolsSection';
import InterestsSection from '@/components/InterestsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';
import LeftNavDock from '@/components/LeftNavDock';
import PageLoader from '@/components/PageLoader';

const Index = () => {
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
    // Website starts loading immediately when component mounts
    // Loader will hide after 3 seconds, giving enough time for initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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
      {/* Show loader overlay */}
      {isLoading && <PageLoader />}
      
      {/* Main content with smooth transition */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}
          >
            <SmoothScroll />
            <ThemeToggle 
              isDark={isDark} 
              setIsDark={setIsDark} 
              onDownloadResume={handleDownloadResume} 
            />
            <LeftNavDock />
            
            <div id="hero">
              <HeroSection isDark={isDark} />
            </div>
            
            <ScrollRevealAnimation direction="up" delay={0.1}>
              <div id="about">
                <AboutSection isDark={isDark} />
              </div>
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="up" delay={0.2}>
              <div id="skills">
                <SkillsSection isDark={isDark} />
              </div>
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="left" delay={0.1}>
              <ToolsSection isDark={isDark} />
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="scale" delay={0.2}>
              <InterestsSection />
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="up" delay={0.1}>
              <div id="projects">
                <ProjectsSection isDark={isDark} />
              </div>
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="right" delay={0.2}>
              <div id="education">
                <EducationSection />
              </div>
            </ScrollRevealAnimation>
            
            <ScrollRevealAnimation direction="fade" delay={0.1}>
              <div id="contact">
                <ContactSection />
              </div>
            </ScrollRevealAnimation>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
