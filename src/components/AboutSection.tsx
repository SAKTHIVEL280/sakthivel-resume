
import { Code, Lightbulb, Rocket, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection = ({ isDark }: AboutSectionProps) => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Building cutting-edge AI solutions with modern technology stacks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Transforming complex challenges into elegant, user-friendly solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Delivering fast, scalable applications with exceptional user experiences",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Goal-Oriented Development",
      description: "Focused on creating impactful solutions that drive real business value",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${isDark ? '#3b82f6' : '#1e40af'} 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollRevealAnimation direction="fade" delay={0.1}>
          <div className="text-center mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className={`mb-6 px-4 py-2 text-sm font-medium ${
                isDark ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-blue-600/30 text-blue-600 bg-blue-50'
              }`}>
                About Me
              </Badge>
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Crafting Digital Excellence
              </h2>
              <p className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                A passionate developer dedicated to creating innovative AI-powered solutions that bridge the gap between complex technology and intuitive user experiences.
              </p>
            </motion.div>
          </div>
        </ScrollRevealAnimation>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <ScrollRevealAnimation direction="left" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`text-lg sm:text-xl leading-relaxed space-y-6 ${
                isDark ? 'text-slate-200' : 'text-gray-700'
              }`}>
                <p>
                  I'm a passionate AI enthusiast with a strong foundation in programming and design. 
                  My journey began with curiosity about how technology can solve real-world problems, 
                  leading me to specialize in artificial intelligence and automation.
                </p>
                <p>
                  I believe in the power of well-crafted code and thoughtful design to create 
                  applications that not only function flawlessly but also provide exceptional 
                  user experiences. Every project I work on is an opportunity to learn, innovate, 
                  and push the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI trends, 
                  experimenting with new technologies, or contributing to open-source projects 
                  that make a difference in the developer community.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'AI Enthusiast', 'Creative Thinker', 'Team Player'].map((trait, index) => (
                  <Badge 
                    key={trait} 
                    variant="secondary" 
                    className={`px-4 py-2 text-sm font-medium ${
                      isDark 
                        ? 'bg-slate-800 text-slate-300 border-slate-700' 
                        : 'bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </ScrollRevealAnimation>

          {/* Right Content - Profile Card */}
          <ScrollRevealAnimation direction="right" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' 
                  : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
              }`}>
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center space-y-6">
                    <div className={`w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 ${
                      isDark ? 'shadow-blue-500/20' : 'shadow-blue-500/30'
                    } shadow-2xl`}>
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl lg:text-7xl font-bold ${
                        isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                      }`}>
                        S
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Sakthivel E
                      </h3>
                      <p className={`text-lg ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        AI Developer & Technology Enthusiast
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className={`text-2xl lg:text-3xl font-bold ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          5+
                        </div>
                        <div className={`text-sm ${
                          isDark ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          Projects
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl lg:text-3xl font-bold ${
                          isDark ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          2+
                        </div>
                        <div className={`text-sm ${
                          isDark ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          Years
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollRevealAnimation>
        </div>

        {/* Highlights Grid */}
        <ScrollRevealAnimation direction="up" delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className={`h-full p-6 lg:p-8 text-center hover:shadow-2xl transition-all duration-500 group ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:shadow-xl'
                    } backdrop-blur-sm`}>
                      <CardContent className="p-0 space-y-4">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-gradient-to-br ${highlight.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <h3 className={`text-lg lg:text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {highlight.title}
                        </h3>
                        <p className={`text-sm lg:text-base ${
                          isDark ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </ScrollRevealAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
