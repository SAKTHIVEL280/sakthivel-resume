
import { Code, Brain, Palette, Wrench, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DotGrid from '@/components/DotGrid';
import FadeContent from '@/components/FadeContent';

interface SkillsSectionProps {
  isDark: boolean;
}

const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const skills = [
    { 
      name: 'Python', 
      icon: Code, 
      category: 'Programming', 
      color: 'from-yellow-400 to-yellow-600'
    },
    { 
      name: 'C', 
      icon: Code, 
      category: 'Programming', 
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'HTML & CSS', 
      icon: Code, 
      category: 'Web', 
      color: 'from-orange-400 to-red-500'
    },
    { 
      name: 'SQL', 
      icon: Database, 
      category: 'Database', 
      color: 'from-cyan-400 to-blue-600'
    },
    { 
      name: 'Applied AI Skills', 
      icon: Brain, 
      category: 'AI', 
      color: 'from-purple-400 to-purple-600'
    },
    { 
      name: 'Prompt Engineering', 
      icon: Brain, 
      category: 'AI', 
      color: 'from-pink-400 to-pink-600'
    },
    { 
      name: 'UI/UX Designing', 
      icon: Palette, 
      category: 'Design', 
      color: 'from-green-400 to-green-600'
    },
    { 
      name: 'ComfyUI', 
      icon: Wrench, 
      category: 'Tools', 
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={8}
          gap={10}
          baseColor={isDark ? "#374151" : "#9ca3af"}
          activeColor={isDark ? "#60a5fa" : "#2563eb"}
          proximity={60}
          shockRadius={200}
          shockStrength={3}
          resistance={300}
          returnDuration={1.0}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 drop-shadow-sm ${
            isDark ? 'text-foreground' : 'text-gray-900'
          }`}>
            Technology Stack
          </h2>
          <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 ${
            isDark ? 'text-muted-foreground' : 'text-gray-700'
          }`}>
            Technologies and skills I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
          {skills.map((skill, index) => {
            return (
              <FadeContent
                key={skill.name}
                blur={true}
                duration={1000}
                easing="ease-out"
                delay={index * 100}
                initialOpacity={0}
              >
                <div className={`group rounded-xl p-3 sm:p-4 md:p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center ${
                  isDark 
                    ? 'bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30' 
                    : 'bg-white/90 backdrop-blur-sm border-gray-300 hover:border-primary/50 shadow-sm hover:shadow-md'
                }`}>
                  <div className={`w-full h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${skill.color} mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 ${
                      isDark 
                        ? 'text-foreground group-hover:text-primary' 
                        : 'text-gray-900 group-hover:text-primary'
                    }`}>
                      {skill.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
