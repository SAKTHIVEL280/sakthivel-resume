
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LetterGlitch from '@/components/LetterGlitch';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  isDark: boolean;
}

const ProjectsSection = ({ isDark }: ProjectsSectionProps) => {
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<any>(null);
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });

  const projects = [
    {
      title: 'MediaWeave – AI Multimedia Conversion Platform',
      description: 'Revolutionary platform that converts text ↔ audio ↔ video using cutting-edge AI. Features multi-language support and optimized performance for low-GPU setups.',
      tech: ['Python', 'AI/ML', 'FastAPI'],
      year: '2025',
      color: 'from-green-500 to-emerald-500',
      status: 'Live',
      stars: 24,
      features: ['Real-time conversion', 'Multi-language support', 'GPU optimization']
    },
    {
      title: 'Virtual Try-On System',
      description: 'Advanced virtual try-on system for fashion e-commerce using state-of-the-art diffusion models and image processing. Successfully implemented for Thooni.com.',
      tech: ['ComfyUI', 'Python', 'Computer Vision'],
      year: '2025',
      color: 'from-blue-500 to-cyan-500',
      status: 'Production',
      stars: 31,
      features: ['Diffusion models', 'Real-time processing', 'E-commerce integration']
    },
    {
      title: 'T2I – Text to Image Generator',
      description: 'Completely free image generator using local ComfyUI and open-source models. Democratizes AI image generation without expensive API costs.',
      tech: ['React', 'ComfyUI', 'AI Models'],
      year: '2024',
      color: 'from-purple-500 to-pink-500',
      status: 'Open Source',
      stars: 47,
      features: ['Local processing', 'Open source', 'No API costs']
    },
    {
      title: 'Personal Markdown Note Taker (PMLNT)',
      description: 'Intelligent note-taking application with Markdown support and AI-powered formatting and export capabilities for enhanced productivity.',
      tech: ['Python', 'Markdown', 'AI'],
      year: '2024',
      color: 'from-orange-500 to-red-500',
      status: 'Beta',
      stars: 18,
      features: ['AI formatting', 'Export options', 'Structured notes']
    }
  ];

  useEffect(() => {
    const el = projectsGridRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleProjectsMove = (e: React.PointerEvent) => {
    if (!projectsGridRef.current) return;
    const r = projectsGridRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.3, overwrite: true });
    }
  };

  const handleProjectsLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: 0.8,
        overwrite: true,
      });
    }
  };

  const handleCardMove = (e: React.MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={60}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={isDark ? ['#00ff41', '#008f11', '#00ff41', '#41ff00', '#0080ff', '#00ff80'] : ['#008f11', '#006400', '#228b22', '#32cd32', '#1e90ff', '#00fa9a']}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-green-500/30 text-green-400 bg-green-500/10">
            <Star className="w-4 h-4 mr-2" />
            Featured Work
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-slate-300">
            Innovative solutions that showcase the intersection of AI, technology, and user experience
          </p>
        </motion.div>
        
        <div 
          ref={projectsGridRef}
          className="relative"
          style={{
            "--x": "50%",
            "--y": "50%",
            "--r": "400px",
          } as any}
          onPointerMove={handleProjectsMove}
          onPointerLeave={handleProjectsLeave}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  className="group bg-white/95 backdrop-blur-md border-2 border-white/20 hover:border-primary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden h-full"
                  style={{
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as any}
                  onMouseMove={handleCardMove}
                >
                  {/* Enhanced Spotlight Effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                    style={{
                      background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.3), transparent 70%)`,
                    }}
                  ></div>
                  
                  <CardContent className="p-6 lg:p-8 relative z-20 h-full flex flex-col">
                    {/* Project Header */}
                    <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className={`bg-gradient-to-r ${project.color} text-white border-none shadow-lg group-hover:scale-110 transition-transform duration-300 text-sm font-medium`}>
                          {project.year}
                        </Badge>
                        <Badge variant="outline" className={`border-primary/40 text-primary bg-primary/5 group-hover:bg-primary/15 transition-colors duration-300 ${
                          project.status === 'Live' ? 'border-green-500/40 text-green-600 bg-green-500/5' :
                          project.status === 'Production' ? 'border-blue-500/40 text-blue-600 bg-blue-500/5' :
                          project.status === 'Open Source' ? 'border-purple-500/40 text-purple-600 bg-purple-500/5' :
                          'border-orange-500/40 text-orange-600 bg-orange-500/5'
                        }`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{project.stars}</span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary" 
                            className="bg-slate-100 text-slate-700 border-slate-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-800">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-6 mt-auto">
                      <div className="flex gap-3">
                        <Button 
                          size="sm"
                          variant="ghost" 
                          className="hover:bg-primary/15 hover:text-primary transition-all duration-300 group-hover:scale-105 text-xs"
                        >
                          <Play className="w-3 h-3 mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm"
                          variant="ghost" 
                          className="hover:bg-primary/15 hover:text-primary transition-all duration-300 group-hover:scale-105 text-xs"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </Button>
                      </div>
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.color} group-hover:scale-125 transition-transform duration-300 shadow-lg`}></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Spotlight Effects */}
          <div 
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.75)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.75)',
              background: 'rgba(0, 0, 0, 0.001)',
              maskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                transparent 0%,
                transparent 20%,
                rgba(0, 0, 0, 0.15) 35%,
                rgba(0, 0, 0, 0.30) 50%,
                rgba(0, 0, 0, 0.45) 65%,
                rgba(0, 0, 0, 0.60) 80%,
                white 100%)`,
              WebkitMaskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                transparent 0%,
                transparent 20%,
                rgba(0, 0, 0, 0.15) 35%,
                rgba(0, 0, 0, 0.30) 50%,
                rgba(0, 0, 0, 0.45) 65%,
                rgba(0, 0, 0, 0.60) 80%,
                white 100%)`,
            }}
          />
          
          <div 
            ref={fadeRef}
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.75)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.75)',
              background: 'rgba(0, 0, 0, 0.001)',
              maskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                white 0%,
                white 20%,
                rgba(255, 255, 255, 0.85) 35%,
                rgba(255, 255, 255, 0.70) 50%,
                rgba(255, 255, 255, 0.55) 65%,
                rgba(255, 255, 255, 0.40) 80%,
                transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                white 0%,
                white 20%,
                rgba(255, 255, 255, 0.85) 35%,
                rgba(255, 255, 255, 0.70) 50%,
                rgba(255, 255, 255, 0.55) 65%,
                rgba(255, 255, 255, 0.40) 80%,
                transparent 100%)`,
              opacity: 1,
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
