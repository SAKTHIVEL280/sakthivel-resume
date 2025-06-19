
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
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={10}
          gap={12}
          baseColor={isDark ? "#374151" : "#6b7280"}
          activeColor={isDark ? "#60a5fa" : "#2563eb"}
          proximity={80}
          shockRadius={250}
          shockStrength={4}
          resistance={400}
          returnDuration={1.0}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 drop-shadow-sm ${
            isDark ? 'text-foreground' : 'text-gray-900'
          }`}>
            Technology Stack
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto px-4 ${
            isDark ? 'text-muted-foreground' : 'text-gray-600'
          }`}>
            Technologies and skills I work with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
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
                <div className={`group rounded-xl p-4 sm:p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center ${
                  isDark 
                    ? 'bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30' 
                    : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-md'
                }`}>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${skill.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <div className="space-y-2">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
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
