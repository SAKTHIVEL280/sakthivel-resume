
import Threads from '@/components/Threads';
import GradientText from '@/components/GradientText';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection = ({ isDark }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <Threads 
          color={isDark ? [0.5, 0.6, 0.8] : [0.3, 0.4, 0.6]}
          amplitude={1.2}
          distance={0.4}
          enableMouseInteraction={true}
          className="absolute inset-0"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollRevealAnimation direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
        </ScrollRevealAnimation>
        
        <ScrollRevealAnimation direction="up" delay={0.4} duration={1}>
          <div className="text-center">
            <GradientText
              className="text-lg leading-relaxed max-w-4xl mx-auto"
              colors={isDark ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"] : ["#1a365d", "#2d5a7a", "#1a365d", "#2d5a7a", "#1a365d"]}
            >
              Strong interest in open-source, multimedia processing, and creating solutions using free, accessible resources. I build smart tools that help people, focusing on innovation through artificial intelligence and automation. My approach combines technical expertise with user-centered design to create meaningful digital experiences.
            </GradientText>
          </div>
        </ScrollRevealAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
