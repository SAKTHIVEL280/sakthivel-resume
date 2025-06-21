
import { Code, Brain, Palette, Wrench, Database, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import DotGrid from '@/components/DotGrid';
import FadeContent from '@/components/FadeContent';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  isDark: boolean;
}

const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const skills = [
    { 
      name: 'Python', 
      icon: Code, 
      category: 'Programming', 
      color: 'from-yellow-400 to-yellow-600',
      level: 90
    },
    { 
      name: 'C', 
      icon: Code, 
      category: 'Programming', 
      color: 'from-blue-400 to-blue-600',
      level: 85
    },
    { 
      name: 'HTML & CSS', 
      icon: Code, 
      category: 'Web', 
      color: 'from-orange-400 to-red-500',
      level: 95
    },
    { 
      name: 'SQL', 
      icon: Database, 
      category: 'Database', 
      color: 'from-cyan-400 to-blue-600',
      level: 80
    },
    { 
      name: 'Applied AI Skills', 
      icon: Brain, 
      category: 'AI', 
      color: 'from-purple-400 to-purple-600',
      level: 88
    },
    { 
      name: 'Prompt Engineering', 
      icon: Brain, 
      category: 'AI', 
      color: 'from-pink-400 to-pink-600',
      level: 92
    },
    { 
      name: 'UI/UX Designing', 
      icon: Palette, 
      category: 'Design', 
      color: 'from-green-400 to-green-600',
      level: 85
    },
    { 
      name: 'ComfyUI', 
      icon: Wrench, 
      category: 'Tools', 
      color: 'from-indigo-400 to-indigo-600',
      level: 87
    }
  ];

  return (
    <section id="skills" className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={8}
          gap={16}
          baseColor={isDark ? "#374151" : "#6b7280"}
          activeColor={isDark ? "#60a5fa" : "#2563eb"}
          proximity={100}
          shockRadius={300}
          shockStrength={6}
          resistance={300}
          returnDuration={1.2}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-blue-400/20' : 'bg-indigo-500/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -80],
              opacity: [0, 0.7, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className={`mb-6 px-4 py-2 text-sm font-medium ${
              isDark ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' : 'border-purple-600/30 text-purple-600 bg-purple-50'
            }`}>
              <Zap className="w-4 h-4 mr-2" />
              Skills & Expertise
            </Badge>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Technology Stack
            </h2>
            <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              A comprehensive toolkit of modern technologies and frameworks that power my development journey
            </p>
          </motion.div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeContent
                key={skill.name}
                blur={true}
                duration={1000}
                easing="ease-out"
                delay={index * 150}
                initialOpacity={0}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`group h-full transition-all duration-500 hover:shadow-2xl ${
                    isDark 
                      ? 'bg-slate-800/60 backdrop-blur-lg border-slate-700/50 hover:border-primary/40 hover:bg-slate-800/80' 
                      : 'bg-white/80 backdrop-blur-lg border-slate-200/50 hover:border-primary/50 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}>
                    <CardContent className="p-6 lg:p-8 text-center space-y-6">
                      {/* Skill Icon with Enhanced Animation */}
                      <div className="relative">
                        <div className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} p-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <motion.div
                          className={`absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      </div>

                      {/* Skill Info */}
                      <div className="space-y-3">
                        <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-primary' 
                            : 'text-gray-900 group-hover:text-primary'
                        }`}>
                          {skill.name}
                        </h3>
                        
                        <Badge 
                          variant="secondary" 
                          className={`text-xs font-medium ${
                            isDark 
                              ? 'bg-slate-700 text-slate-300 border-slate-600' 
                              : 'bg-slate-100 text-slate-600 border-slate-300'
                          }`}
                        >
                          {skill.category}
                        </Badge>

                        {/* Skill Level Progress Bar */}
                        <div className="space-y-2">
                          <div className={`w-full h-2 rounded-full overflow-hidden ${
                            isDark ? 'bg-slate-700' : 'bg-slate-200'
                          }`}>
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className={`text-xs font-medium ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {skill.level}% Proficiency
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeContent>
            );
          })}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Technologies" },
              { number: "5+", label: "Projects" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Dedication" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm lg:text-base ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
