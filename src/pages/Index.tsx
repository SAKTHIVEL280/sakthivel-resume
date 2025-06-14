
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
      <ThemeToggle 
        isDark={isDark} 
        setIsDark={setIsDark} 
        onDownloadResume={handleDownloadResume} 
      />
      
      <HeroSection isDark={isDark} />
      <AboutSection isDark={isDark} />
      <SkillsSection isDark={isDark} />
      <ToolsSection isDark={isDark} />
      <InterestsSection />
      <ProjectsSection isDark={isDark} />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
