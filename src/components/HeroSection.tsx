import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';
import ScrollReveal from '@/components/ScrollReveal';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/sections#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleProjectsClick = () => {
    navigate('/sections#projects');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="hero" className="pt-20 pb-20 px-4 sm:px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <Waves
        lineColor={isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.6)'}
        backgroundColor={isDark ? 'rgba(17, 24, 39, 0.05)' : 'rgba(239, 246, 255, 0.1)'}
        waveSpeedX={0.015}
        waveSpeedY={0.008}
        waveAmpX={35}
        waveAmpY={18}
        friction={0.92}
        tension={0.008}
        maxCursorMove={100}
        xGap={14}
        yGap={32}
        className="absolute inset-0 z-0"
      />
      
      <div className={`absolute inset-0 z-[1] ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-blue-900/60' 
          : 'bg-gradient-to-br from-white/85 via-blue-50/70 to-indigo-100/80'
      }`} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <div className="space-y-6 sm:space-y-8">
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="mb-4">
              <TextPressure 
                text="SAKTHIVEL E"
                textColor={isDark ? '#ffffff' : '#1e293b'}
                strokeColor={isDark ? '#3b82f6' : '#1e40af'}
                stroke={true}
                minFontSize={48}
                className="leading-none drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mb-6 sm:mb-8">
              <TextPressure 
                text="AI ENTHUSIAST"
                textColor={isDark ? '#f1f5f9' : '#475569'}
                strokeColor={isDark ? '#64748b' : '#64748b'}
                stroke={false}
                minFontSize={14}
                className="leading-none text-lg sm:text-xl md:text-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
              <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-medium px-4 ${
                isDark 
                  ? 'text-slate-200 drop-shadow-md' 
                  : 'text-slate-700'
              }`}>
                Passionate about building innovative{' '}
                <span className={`font-semibold ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent'
                }`}>
                  AI-powered tools
                </span>{' '}
                and platforms that blend artificial intelligence, automation, and user-focused design to create meaningful digital experiences.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className={`hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg w-full sm:w-auto ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/30'
                }`}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                onClick={handleProjectsClick}
                variant="outline" 
                size="lg" 
                className={`hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto ${
                  isDark 
                    ? 'border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 backdrop-blur-sm' 
                    : 'border-slate-400 text-slate-700 hover:bg-slate-100 hover:border-slate-500 backdrop-blur-sm'
                } shadow-lg backdrop-blur-sm`}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
