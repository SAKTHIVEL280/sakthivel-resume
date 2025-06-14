
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const educationData = [
    {
      year: '2021',
      title: 'Secondary Education',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '10th Grade',
      score: '75%',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎓'
    },
    {
      year: '2023',
      title: 'Higher Secondary',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '12th Grade',
      score: '77%',
      color: 'from-orange-500 to-red-500',
      icon: '📚'
    },
    {
      year: '2023-2027',
      title: 'Bachelor\'s Degree',
      institution: 'K.S. Rangasamy College of Technology',
      grade: 'AIML Department',
      score: 'CGPA: 9.0',
      color: 'from-green-500 to-emerald-500',
      icon: '🎯',
      current: true
    }
  ];

  useEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const cards = timeline.querySelectorAll('.timeline-card');
    const pathElement = pathRef.current;
    const dots = timeline.querySelectorAll('.timeline-dot');

    gsap.set(cards, {
      y: 100,
      opacity: 0,
      scale: 0.8
    });

    gsap.set(dots, {
      scale: 0,
      opacity: 0
    });

    if (pathElement) {
      const pathLength = pathElement.getTotalLength();
      gsap.set(pathElement, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      ScrollTrigger.create({
        trigger: timeline,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(pathElement, {
            strokeDashoffset: pathLength * (1 - progress),
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    }

    cards.forEach((card, index) => {
      const dot = dots[index];
      
      ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });
          
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.2,
            ease: 'back.out(1.7)'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="education" className="py-16 px-6 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Educational Pathway
          </h2>
          <p className="text-base text-muted-foreground">My Journey • 2021 - 2027</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3"></div>
        </div>
        
        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none">
            <svg 
              className="w-12 h-full" 
              viewBox="0 0 48 800" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              <path
                ref={pathRef}
                d="M 24 20 
                   C 26 40, 28 80, 22 140
                   S 20 200, 24 260
                   C 26 320, 28 380, 22 440
                   S 20 500, 24 560"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
              />
            </svg>
          </div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="timeline-card relative"
              >
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`
                    relative w-8 h-8 rounded-full bg-gradient-to-br ${item.color} 
                    shadow-lg border-2 border-background
                    ${item.current ? 'animate-pulse' : ''}
                  `}>
                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-sm`}></div>
                    
                    {item.current && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute top-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div className={`
                  flex flex-col md:flex-row items-center gap-6
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}>
                  <div className="hidden md:block md:flex-1"></div>
                  
                  <div className="flex-shrink-0 z-10 order-1 md:order-none">
                    <div className={`
                      relative p-4 rounded-2xl bg-gradient-to-br ${item.color} 
                      shadow-lg border border-white/20 backdrop-blur-sm
                      transform-gpu hover:scale-105 transition-all duration-500
                      min-w-[100px] text-center group
                    `}>
                      <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="text-lg font-bold text-white mb-1">
                          {item.year}
                        </div>
                        <div className="text-sm text-white/90">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 max-w-2xl order-2 md:order-none">
                    <Card className={`
                      transform-gpu hover:shadow-lg transition-all duration-500 
                      group hover:scale-102 border hover:border-primary/30 
                      bg-background/95 backdrop-blur-sm relative overflow-hidden
                      ${item.current ? 'ring-1 ring-green-500/20' : ''}
                    `}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground font-medium text-base mb-1">
                              {item.institution}
                            </p>
                            <p className="text-sm text-muted-foreground/80">
                              {item.grade}
                            </p>
                          </div>
                          
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <Badge 
                              className={`
                                bg-gradient-to-r ${item.color} text-white border-none 
                                px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300
                              `}
                            >
                              {item.score}
                            </Badge>

                            {item.current && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-green-600 font-medium text-xs">Currently Studying</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl border border-green-500/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium text-base">Journey in Progress</span>
              <div className="h-4 w-px bg-green-500/30"></div>
              <span className="text-sm text-muted-foreground">Expected: 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
