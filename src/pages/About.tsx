
import { motion } from 'framer-motion';
import Threads from '@/components/Threads';
import GradientText from '@/components/GradientText';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';
import { useTheme } from 'next-themes';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <section className="py-20 px-6 relative overflow-hidden">
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
            <h1 className="text-5xl font-bold text-center mb-16 text-foreground">About Me</h1>
          </ScrollRevealAnimation>
          
          <ScrollRevealAnimation direction="up" delay={0.4} duration={1}>
            <div className="text-center mb-16">
              <GradientText
                className="text-xl leading-relaxed max-w-4xl mx-auto"
                colors={isDark ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"] : ["#1a365d", "#2d5a7a", "#1a365d", "#2d5a7a", "#1a365d"]}
              >
                Strong interest in open-source, multimedia processing, and creating solutions using free, accessible resources. I build smart tools that help people, focusing on innovation through artificial intelligence and automation. My approach combines technical expertise with user-centered design to create meaningful digital experiences.
              </GradientText>
            </div>
          </ScrollRevealAnimation>

          <ScrollRevealAnimation direction="up" delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Focus</h3>
                <p className="text-muted-foreground">Passionate about creating AI-powered solutions that make technology accessible to everyone.</p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">Open Source</h3>
                <p className="text-muted-foreground">Committed to building with open-source technologies and contributing back to the community.</p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">User-Centered</h3>
                <p className="text-muted-foreground">Designing experiences that prioritize usability and accessibility for all users.</p>
              </div>
            </div>
          </ScrollRevealAnimation>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
