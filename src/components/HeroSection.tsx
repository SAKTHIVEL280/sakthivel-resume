
import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-20 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <Waves 
        lineColor={isDark ? 'rgba(156, 163, 175, 0.4)' : 'rgba(107, 114, 128, 0.3)'} 
        backgroundColor="transparent"
        className="absolute inset-0 z-0"
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in space-y-8">
          <div className="mb-4">
            <TextPressure 
              text="SAKTHIVEL E"
              textColor={isDark ? '#ffffff' : '#1f2937'}
              strokeColor={isDark ? '#4b5563' : '#6b7280'}
              stroke={true}
              minFontSize={72}
              className="leading-none"
            />
          </div>
          
          <div className="mb-8">
            <TextPressure 
              text="AI ENTHUSIAST"
              textColor={isDark ? '#9ca3af' : '#374151'}
              strokeColor={isDark ? '#6b7280' : '#4b5563'}
              stroke={false}
              minFontSize={16}
              className="leading-none"
            />
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Passionate about building innovative AI-powered tools and platforms that blend artificial intelligence, automation, and user-focused design to create meaningful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
