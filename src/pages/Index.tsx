
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
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
import NavigationDock from '@/components/NavigationDock';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';

const Index = () => {
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
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <SmoothScroll />
      <ThemeToggle 
        isDark={isDark} 
        setIsDark={setIsDark} 
        onDownloadResume={handleDownloadResume} 
      />
      <NavigationDock />
      
      <HeroSection isDark={isDark} />
      
      <ScrollRevealAnimation direction="up" delay={0.1}>
        <AboutSection isDark={isDark} />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="up" delay={0.2}>
        <SkillsSection isDark={isDark} />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="left" delay={0.1}>
        <ToolsSection isDark={isDark} />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="scale" delay={0.2}>
        <InterestsSection />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="up" delay={0.1}>
        <ProjectsSection isDark={isDark} />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="right" delay={0.2}>
        <EducationSection />
      </ScrollRevealAnimation>
      
      <ScrollRevealAnimation direction="fade" delay={0.1}>
        <ContactSection />
      </ScrollRevealAnimation>
      
      <Footer />
    </div>
  );
};

export default Index;
