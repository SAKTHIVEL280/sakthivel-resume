
import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';
import ScrollReveal from '@/components/ScrollReveal';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-20 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <Waves
        lineColor={isDark ? 'rgba(96, 165, 250, 0.6)' : 'rgba(59, 130, 246, 0.4)'}
        backgroundColor={isDark ? 'rgba(17, 24, 39, 0.1)' : 'rgba(249, 250, 251, 0.1)'}
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="absolute inset-0 z-0"
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="mb-4">
              <TextPressure 
                text="SAKTHIVEL E"
                textColor={isDark ? '#60a5fa' : '#3b82f6'}
                strokeColor={isDark ? '#1e40af' : '#1d4ed8'}
                stroke={true}
                minFontSize={72}
                className="leading-none"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mb-8">
              <TextPressure 
                text="AI ENTHUSIAST"
                textColor={isDark ? '#93c5fd' : '#2563eb'}
                strokeColor={isDark ? '#3b82f6' : '#1e40af'}
                stroke={false}
                minFontSize={16}
                className="leading-none"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="mb-12 max-w-4xl mx-auto">
              <p className={`text-xl md:text-2xl leading-relaxed ${
                isDark ? 'text-blue-200' : 'text-blue-700'
              }`}>
                Passionate about building innovative AI-powered tools and platforms that blend artificial intelligence, automation, and user-focused design to create meaningful digital experiences.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6">
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6">
                <a href="#projects">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
