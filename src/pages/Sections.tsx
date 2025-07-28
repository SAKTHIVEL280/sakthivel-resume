
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import MobileNav from '@/components/MobileNav';
import { useToast } from '@/hooks/use-toast';

const Sections = () => {
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleDownloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume download will be available soon!",
    });
  };

  return (
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
      <MobileNav isDark={isDark} />
      
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
        <div id="interests">
          <InterestsSection />
        </div>
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
  );
};

export default Sections;
