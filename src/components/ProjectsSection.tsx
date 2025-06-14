
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LetterGlitch from '@/components/LetterGlitch';
import { gsap } from 'gsap';

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
      description: 'Converts text ↔ audio ↔ video using AI. Supports translations and works on low-GPU setups.',
      tech: 'Python + AI',
      year: '2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Virtual Try-On System',
      description: 'Built a virtual try-on system for fashion e-commerce using diffusion models and image processing. Used in client project (Thooni.com).',
      tech: 'ComfyUI + Python',
      year: '2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'T2I – Text to Image Generator',
      description: 'Created a fully free image generator using local ComfyUI and open-source models. Helps users turn text into AI-generated images without expensive APIs.',
      tech: 'React + AI',
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Personal Markdown Note Taker (PMLNT)',
      description: 'Created a structured note-taking app with Markdown and AI-based formatting/export features.',
      tech: 'Python',
      year: '2024',
      color: 'from-orange-500 to-red-500'
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
      duration: 0.45,
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
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleProjectsLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: 0.6,
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
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={isDark ? ['#00ff41', '#008f11', '#00ff41', '#41ff00', '#0080ff', '#00ff80'] : ['#008f11', '#006400', '#228b22', '#32cd32', '#1e90ff', '#00fa9a']}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">Featured Projects</h2>
        
        <div 
          ref={projectsGridRef}
          className="relative"
          style={{
            "--x": "50%",
            "--y": "50%",
            "--r": "300px",
          } as any}
          onPointerMove={handleProjectsMove}
          onPointerLeave={handleProjectsLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-background/90 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{
                  "--mouse-x": "50%",
                  "--mouse-y": "50%",
                  "--spotlight-color": "rgba(255, 255, 255, 0.1)",
                } as any}
                onMouseMove={handleCardMove}
              >
                <div 
                  className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)`,
                  }}
                ></div>
                
                <CardContent className="p-8 relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-none`}>
                      {project.year}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.tech}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="ghost" 
                      className="hover:bg-primary/10 hover:text-primary transition-all duration-300 group-hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div 
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.78)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
              background: 'rgba(0, 0, 0, 0.001)',
              maskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                transparent 0%,
                transparent 15%,
                rgba(0, 0, 0, 0.10) 30%,
                rgba(0, 0, 0, 0.22) 45%,
                rgba(0, 0, 0, 0.35) 60%,
                rgba(0, 0, 0, 0.50) 75%,
                rgba(0, 0, 0, 0.68) 88%,
                white 100%)`,
              WebkitMaskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                transparent 0%,
                transparent 15%,
                rgba(0, 0, 0, 0.10) 30%,
                rgba(0, 0, 0, 0.22) 45%,
                rgba(0, 0, 0, 0.35) 60%,
                rgba(0, 0, 0, 0.50) 75%,
                rgba(0, 0, 0, 0.68) 88%,
                white 100%)`,
            }}
          />
          
          <div 
            ref={fadeRef}
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.78)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
              background: 'rgba(0, 0, 0, 0.001)',
              maskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                white 0%,
                white 15%,
                rgba(255, 255, 255, 0.90) 30%,
                rgba(255, 255, 255, 0.78) 45%,
                rgba(255, 255, 255, 0.65) 60%,
                rgba(255, 255, 255, 0.50) 75%,
                rgba(255, 255, 255, 0.32) 88%,
                transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle var(--r) at var(--x) var(--y),
                white 0%,
                white 15%,
                rgba(255, 255, 255, 0.90) 30%,
                rgba(255, 255, 255, 0.78) 45%,
                rgba(255, 255, 255, 0.65) 60%,
                rgba(255, 255, 255, 0.50) 75%,
                rgba(255, 255, 255, 0.32) 88%,
                transparent 100%)`,
              opacity: 1,
              transition: 'opacity 0.25s ease',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
