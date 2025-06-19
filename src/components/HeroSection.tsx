
import { Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Waves */}
      <Waves
        lineColor={isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.8)'}
        backgroundColor={isDark ? 'rgba(17, 24, 39, 0.1)' : 'rgba(239, 246, 255, 0.2)'}
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={25}
        friction={0.94}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={28}
        className="absolute inset-0 z-0"
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className={`absolute inset-0 z-[1] ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-blue-900/70' 
          : 'bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-100/85'
      }`} />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-[2]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-blue-400/30' : 'bg-indigo-500/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          {/* Enhanced Name Animation */}
          <ScrollReveal direction="fade" delay={0.2}>
            <motion.div 
              className="mb-6 lg:mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <TextPressure 
                text="SAKTHIVEL E"
                textColor={isDark ? '#ffffff' : '#1e293b'}
                strokeColor={isDark ? '#3b82f6' : '#1e40af'}
                stroke={true}
                minFontSize={32}
                className="leading-none drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
              />
            </motion.div>
          </ScrollReveal>
          
          {/* Enhanced Subtitle */}
          <ScrollReveal direction="up" delay={0.4}>
            <motion.div 
              className="mb-8 lg:mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <TextPressure 
                text="AI ENTHUSIAST"
                textColor={isDark ? '#f1f5f9' : '#475569'}
                strokeColor={isDark ? '#64748b' : '#64748b'}
                stroke={false}
                minFontSize={12}
                className="leading-none text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.2em] font-medium"
              />
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Description */}
          <ScrollReveal direction="up" delay={0.6}>
            <motion.div 
              className="mb-12 lg:mb-16 max-w-5xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium px-4 ${
                isDark 
                  ? 'text-slate-200 drop-shadow-lg' 
                  : 'text-slate-700'
              }`}>
                Passionate about building innovative{' '}
                <span className={`font-bold ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent'
                }`}>
                  AI-powered tools
                </span>{' '}
                and platforms that blend artificial intelligence, automation, and user-focused design to create meaningful digital experiences.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Enhanced CTA Buttons */}
          <ScrollReveal direction="up" delay={0.8}>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Button 
                asChild 
                size="lg" 
                className={`group hover:scale-105 transition-all duration-500 text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-6 sm:py-8 shadow-2xl w-full sm:w-auto font-semibold ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 shadow-blue-500/30' 
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-blue-500/40'
                }`}
              >
                <a href="#contact" className="flex items-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className={`group hover:scale-105 transition-all duration-500 text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-6 sm:py-8 w-full sm:w-auto font-semibold ${
                  isDark 
                    ? 'border-2 border-slate-500 text-slate-200 hover:bg-slate-800/50 hover:border-slate-400 backdrop-blur-lg bg-slate-900/20' 
                    : 'border-2 border-slate-400 text-slate-700 hover:bg-slate-100/50 hover:border-slate-500 backdrop-blur-lg bg-white/20'
                } shadow-2xl backdrop-blur-lg`}
              >
                <a href="#projects" className="flex items-center">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Scroll Indicator */}
          <ScrollReveal direction="fade" delay={1.0}>
            <motion.button
              onClick={scrollToNext}
              className={`group flex flex-col items-center gap-2 transition-all duration-500 hover:scale-110 ${
                isDark ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
              </motion.div>
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
