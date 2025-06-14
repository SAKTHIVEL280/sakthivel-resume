import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Code, Brain, Palette, Wrench, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import SplitText from '@/components/SplitText';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';
import Threads from '@/components/Threads';
import GradientText from '@/components/GradientText';
import Hyperspeed from '@/components/Hyperspeed';
import DotGrid from '@/components/DotGrid';
import FadeContent from '@/components/FadeContent';
import Silk from '@/components/Silk';
import FlowingMenu from '@/components/FlowingMenu';
import LetterGlitch from '@/components/LetterGlitch';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isHyperspeedActive, setIsHyperspeedActive] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeEducationCard, setActiveEducationCard] = useState<number | null>(null);
  const hyperspeedRef = useRef<any>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const setX = useRef<any>(null);
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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

  const tools = [
    { 
      name: 'ComfyUI', 
      category: 'AI Workflow',
      description: 'Advanced stable diffusion interface',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      tech: 'AI'
    },
    { 
      name: 'Hugging Face', 
      category: 'ML Platform',
      description: 'Open-source AI model hub',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      tech: 'ML'
    }, 
    { 
      name: 'DaVinci Resolve', 
      category: 'Video Production',
      description: 'Professional video editing suite',
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      tech: 'Media'
    },
    { 
      name: 'Cursor AI', 
      category: 'Development',
      description: 'AI-powered code editor',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      tech: 'Dev'
    },
    { 
      name: 'Lovable', 
      category: 'Web Development',
      description: 'AI web application builder',
      gradient: 'from-rose-500 via-pink-500 to-red-500',
      tech: 'Web'
    },
    { 
      name: 'ChatGPT', 
      category: 'AI Assistant',
      description: 'Advanced language model',
      gradient: 'from-indigo-600 via-purple-500 to-violet-600',
      tech: 'AI'
    },
    { 
      name: 'Claude', 
      category: 'AI Assistant',
      description: 'Constitutional AI assistant',
      gradient: 'from-cyan-600 via-blue-500 to-indigo-600',
      tech: 'AI'
    }
  ];

  const interests = [
    {
      link: '#',
      text: 'Building AI-Powered Tools & Assistants',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      link: '#',
      text: 'Exploring Open-Source AI Projects',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      link: '#',
      text: 'Editing with DaVinci Resolve',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      link: '#',
      text: 'Designing Minimal UI Experiences',
      image: 'https://picsum.photos/600/400?random=4'
    }
  ];

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

  const educationData = [
    {
      year: '2021',
      title: 'Secondary Education',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '10th Grade',
      score: '75%',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎓',
      completion: 100,
      achievements: ['Science Excellence', 'Perfect Attendance']
    },
    {
      year: '2023',
      title: 'Higher Secondary',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '12th Grade',
      score: '77%',
      color: 'from-orange-500 to-red-500',
      icon: '📚',
      completion: 100,
      achievements: ['Mathematics Excellence', 'Computer Science Top Score']
    },
    {
      year: '2023-2027',
      title: 'Bachelor\'s Degree',
      institution: 'K.S. Rangasamy College of Technology',
      grade: 'AIML Department',
      score: 'CGPA: 9.0',
      color: 'from-green-500 to-emerald-500',
      icon: '🎯',
      current: true,
      completion: 50,
      achievements: ['AI Project Leader', 'Dean\'s List', 'Research Publication']
    }
  ];

  // ChromaGrid effect initialization
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume download will be available soon!",
    });
  };

  const handleCardClick = () => {
    setIsHyperspeedActive(true);
    setTimeout(() => setIsHyperspeedActive(false), 2000);
  };

  // Enhanced Timeline animation setup with particles and magnetic effects
  useEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const cards = timeline.querySelectorAll('.timeline-card');
    const pathElement = pathRef.current;
    const dots = timeline.querySelectorAll('.timeline-dot');
    const particles = particlesRef.current;

    // Create floating particles
    const createParticles = () => {
      if (!particles) return;
      
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-primary/30 rounded-full particle';
        particle.style.left = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particles.appendChild(particle);
        
        // Animate particles floating along the path
        gsap.to(particle, {
          x: `${(Math.random() - 0.5) * 100}px`,
          y: `${(Math.random() - 0.5) * 50}px`,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2
        });
      }
    };

    createParticles();

    // Initial setup - hide cards and dots
    gsap.set(cards, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotationX: 15
    });

    gsap.set(dots, {
      scale: 0,
      opacity: 0
    });

    // Enhanced Path animation with progress tracking
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
          setTimelineProgress(progress * 100);
          
          gsap.to(pathElement, {
            strokeDashoffset: pathLength * (1 - progress),
            duration: 0.3,
            ease: 'power2.out'
          });

          // Update background gradient based on scroll progress
          timeline.style.background = `linear-gradient(135deg, 
            hsl(${220 + progress * 60}, 70%, ${isDark ? '10%' : '95%'}) 0%, 
            hsl(${280 + progress * 40}, 60%, ${isDark ? '15%' : '90%'}) 100%)`;
        }
      });
    }

    // Enhanced Cards and dots animation with magnetic effects
    cards.forEach((card, index) => {
      const dot = dots[index];
      
      // Magnetic hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (e.clientX - centerX) * 0.1;
        const distanceY = (e.clientY - centerY) * 0.1;
        
        gsap.to(card, {
          x: distanceX,
          y: distanceY,
          rotationX: distanceY * 0.1,
          rotationY: distanceX * 0.1,
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        onEnter: () => {
          setActiveEducationCard(index);
          
          // Animate dot with elastic effect and ripple
          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            onComplete: () => {
              // Create ripple effect
              const ripple = document.createElement('div');
              ripple.className = 'absolute inset-0 rounded-full border-2 border-primary/50 animate-ping';
              dot.appendChild(ripple);
              setTimeout(() => ripple.remove(), 1000);
            }
          });
          
          // Then animate card with enhanced 3D effect
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'back.out(1.7)'
          });
        }
      });

      // Cleanup
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Fixed Theme Toggle and Resume Button */}
      
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          className="hover:scale-110 transition-transform duration-200 backdrop-blur-md bg-background/80"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
        <Button onClick={handleDownloadResume} className="hover:scale-105 transition-transform duration-200 backdrop-blur-md">
          <Download className="w-4 h-4 mr-2" />
          Resume
        </Button>
      </div>

      {/* Hero Section */}
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

      {/* About Section */}
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
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          <div className="text-center">
            <GradientText
              className="text-lg leading-relaxed max-w-4xl mx-auto"
              colors={isDark ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"] : ["#2d7a4a", "#2d5a7a", "#2d7a4a", "#2d5a7a", "#2d7a4a"]}
            >
              Strong interest in open-source, multimedia processing, and creating solutions using free, accessible resources. I build smart tools that help people, focusing on innovation through artificial intelligence and automation. My approach combines technical expertise with user-centered design to create meaningful digital experiences.
            </GradientText>
          </div>
        </div>
      </section>

      {/* Skills Section - No Icons, Better Alignment */}
      <section id="skills" className="py-20 px-6 bg-muted/20 relative overflow-hidden">
        {/* DotGrid Background */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={10}
            gap={12}
            baseColor={isDark ? "#374151" : "#d1d5db"}
            activeColor={isDark ? "#60a5fa" : "#3b82f6"}
            proximity={80}
            shockRadius={250}
            shockStrength={4}
            resistance={400}
            returnDuration={1.0}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and skills I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <div className="group bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
                    {/* Gradient Bar */}
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${skill.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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

      {/* Tools Section - Enhanced with Silk Background */}
      <section id="tools" className="py-20 px-6 relative overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={4}
            scale={1.5}
            color={isDark ? "#1e293b" : "#f1f5f9"}
            noiseIntensity={1.5}
            rotation={0.2}
          />
        </div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/15 z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground drop-shadow-lg">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto drop-shadow-md">
              Cutting-edge tools and platforms I leverage to create innovative AI-powered solutions
            </p>
          </div>
          
          {/* Professional Rolling Gallery Container */}
          <div className="relative h-32 overflow-hidden mask-gradient">
            <div className="absolute inset-0 flex items-center">
              {/* First Set - Continuous Movement */}
              <div className="flex animate-scroll-smooth space-x-8 min-w-max">
                {tools.map((tool, index) => (
                  <div
                    key={`first-${index}`}
                    className={`group flex-shrink-0 relative bg-gradient-to-br ${tool.gradient} rounded-2xl p-6 min-w-[320px] shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 transition-transform duration-500 group-hover:scale-110"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 tracking-tight transition-all duration-300 group-hover:text-yellow-200">
                            {tool.name}
                          </h3>
                          <p className="text-white/80 text-sm font-medium">
                            {tool.category}
                          </p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-white/20 text-white border-white/30 text-xs font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30"
                        >
                          {tool.tech}
                        </Badge>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-opacity duration-300 group-hover:from-black/10"></div>
                  </div>
                ))}
              </div>
              
              {/* Second Set for Seamless Loop */}
              <div className="flex animate-scroll-smooth space-x-8 min-w-max ml-8">
                {tools.map((tool, index) => (
                  <div
                    key={`second-${index}`}
                    className={`group flex-shrink-0 relative bg-gradient-to-br ${tool.gradient} rounded-2xl p-6 min-w-[320px] shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 transition-transform duration-500 group-hover:scale-110"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 tracking-tight transition-all duration-300 group-hover:text-yellow-200">
                            {tool.name}
                          </h3>
                          <p className="text-white/80 text-sm font-medium">
                            {tool.category}
                          </p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-white/20 text-white border-white/30 text-xs font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30"
                        >
                          {tool.tech}
                        </Badge>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-opacity duration-300 group-hover:from-black/10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Rolling Animation CSS */}
        <style>{`
          .mask-gradient {
            mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
            -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          }
          
          @keyframes scroll-smooth {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll-smooth {
            animation: scroll-smooth 20s linear infinite;
          }
          
          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </section>

      {/* Interests Section - Updated with FlowingMenu */}
      <section id="interests" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">My Interests</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of AI, creativity, and innovation through hands-on projects and continuous learning
            </p>
          </div>
          <div className="w-full relative rounded-xl overflow-hidden shadow-2xl">
            <FlowingMenu items={interests} />
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced with LetterGlitch Background and ChromaGrid Effects */}
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        {/* LetterGlitch Background */}
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={isDark ? ['#00ff41', '#008f11', '#00ff41', '#41ff00', '#0080ff', '#00ff80'] : ['#008f11', '#006400', '#228b22', '#32cd32', '#1e90ff', '#00fa9a']}
          />
        </div>
        
        {/* Dark overlay for better contrast */}
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
                  {/* Spotlight effect */}
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

            {/* ChromaGrid overlay effects */}
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
                opacity: 1,
                transition: 'opacity 0.25s ease',
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

      {/* Revolutionary Education Timeline Section with Advanced Animations */}
      <section id="education" className="py-20 px-6 relative overflow-hidden transition-all duration-1000 ease-out">
        {/* Dynamic Morphing Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_70%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(16,185,129,0.15),transparent_70%)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Floating Particles Container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-20">
          {/* Enhanced Header with Progress Indicator */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Educational Journey
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300 shadow-lg"
                  style={{ width: `${timelineProgress}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mt-8 mb-4">My Academic Evolution • 2021 - 2027</p>
            
            {/* Progress Statistics */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-border/50">
                <div className="text-2xl font-bold text-primary">{Math.round(timelineProgress)}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-border/50">
                <div className="text-2xl font-bold text-green-600">9.0</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-border/50">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-muted-foreground">Years Journey</div>
              </div>
            </div>
          </div>
          
          <div ref={timelineRef} className="relative perspective-1000">
            {/* Enhanced Central Timeline Path with Advanced SVG */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none z-30">
              <svg 
                className="w-12 h-full" 
                viewBox="0 0 48 1000" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#8b5cf6" stopOpacity="1" />
                    <stop offset="70%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="pathGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Enhanced curved path with shadow */}
                <path
                  d="M 24 30 
                     Q 30 150 24 270
                     Q 18 390 24 510
                     Q 30 630 24 750
                     Q 20 870 24 950"
                  stroke="url(#shadowGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                  transform="translate(2, 2)"
                />
                
                {/* Main enhanced path */}
                <path
                  ref={pathRef}
                  d="M 24 30 
                     Q 30 150 24 270
                     Q 18 390 24 510
                     Q 30 630 24 750
                     Q 20 870 24 950"
                  stroke="url(#pathGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#pathGlow)"
                  className="drop-shadow-2xl"
                />
                
                {/* Animated dots along the path */}
                <circle r="2" fill="#3b82f6" opacity="0.8">
                  <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pathRef"/>
                  </animateMotion>
                </circle>
                <circle r="1.5" fill="#8b5cf6" opacity="0.6">
                  <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="2s">
                    <mpath href="#pathRef"/>
                  </animateMotion>
                </circle>
              </svg>
            </div>

            {/* Responsive Timeline Cards with Enhanced 3D Effects */}
            <div className="space-y-24 md:space-y-32">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="timeline-card relative group"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Enhanced Timeline Dot with Advanced Effects */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 z-30">
                    <div className={`
                      relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} 
                      shadow-2xl border-4 border-background group-hover:scale-110 transition-all duration-500
                      ${item.current ? 'animate-pulse shadow-green-500/50' : ''}
                      ${activeEducationCard === index ? 'scale-125 shadow-2xl' : ''}
                    `}>
                      {/* Animated outer rings */}
                      <div className={`absolute -inset-3 rounded-full bg-gradient-to-br ${item.color} opacity-20 animate-ping`}></div>
                      <div className={`absolute -inset-6 rounded-full bg-gradient-to-br ${item.color} opacity-10 animate-ping`} style={{ animationDelay: '1s' }}></div>
                      
                      {/* Current indicator with enhanced animation */}
                      {item.current && (
                        <div className="absolute -top-3 -right-3">
                          <div className="relative">
                            <div className="w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                            <div className="absolute top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Icon with 3D effect */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-lg transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Responsive Card Container with Adaptive Layout */}
                  <div className={`
                    flex flex-col lg:flex-row items-center gap-8 lg:gap-12
                    ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  `}>
                    {/* Spacer for desktop center alignment */}
                    <div className="hidden lg:block lg:flex-1"></div>
                    
                    {/* Enhanced Year Badge with 3D Morphing */}
                    <div className="flex-shrink-0 z-20 order-1 lg:order-none">
                      <div className={`
                        relative p-8 rounded-3xl bg-gradient-to-br ${item.color} 
                        shadow-2xl border border-white/20 backdrop-blur-sm
                        transform-gpu hover:scale-110 transition-all duration-700
                        min-w-[140px] text-center group-hover:rotate-3
                        hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                        cursor-pointer
                      `}>
                        {/* Advanced background patterns */}
                        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6 group-hover:scale-110 transition-transform duration-500"></div>
                        
                        {/* Content with enhanced typography */}
                        <div className="relative z-10">
                          <div className="text-2xl font-bold text-white mb-2 tracking-wide">
                            {item.year}
                          </div>
                          <div className="text-lg text-white/90 mb-3">
                            {item.icon}
                          </div>
                          <div className={`w-full h-2 rounded-full bg-white/20 overflow-hidden`}>
                            <div 
                              className="h-full bg-white/80 rounded-full transition-all duration-1000"
                              style={{ width: `${item.completion}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-white/80 mt-1">
                            {item.completion}% Complete
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Card Content with Advanced Interactions */}
                    <div className="flex-1 max-w-lg order-2 lg:order-none">
                      <Card className={`
                        transform-gpu hover:shadow-2xl transition-all duration-700 
                        group-hover:scale-105 border-2 hover:border-primary/40 
                        bg-background/95 backdrop-blur-sm relative overflow-hidden
                        hover:-translate-y-2 hover:rotate-1
                        ${item.current ? 'ring-2 ring-green-500/30 shadow-green-500/20' : ''}
                        ${activeEducationCard === index ? 'shadow-xl scale-105' : ''}
                      `}>
                        {/* Enhanced card background patterns */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-1000"></div>
                        
                        <CardContent className="p-8 relative z-10">
                          <div className="space-y-6">
                            {/* Header with enhanced styling */}
                            <div>
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground font-semibold text-lg mb-2">
                                {item.institution}
                              </p>
                              <p className="text-muted-foreground/80 text-base">
                                {item.grade}
                              </p>
                            </div>
                            
                            {/* Score and achievements */}
                            <div className="space-y-4">
                              <Badge 
                                className={`
                                  bg-gradient-to-r ${item.color} text-white border-none 
                                  px-6 py-3 text-base font-semibold hover:scale-105 transition-transform duration-300
                                  shadow-lg cursor-pointer
                                `}
                              >
                                {item.score}
                              </Badge>

                              {/* Achievements with enhanced styling */}
                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                  Key Achievements
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.achievements.map((achievement, achIndex) => (
                                    <Badge 
                                      key={achIndex}
                                      variant="outline" 
                                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                                    >
                                      {achievement}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Current status indicator */}
                            {item.current && (
                              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm">
                                <div className="relative">
                                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                                </div>
                                <div className="flex-1">
                                  <span className="text-green-600 font-semibold">Currently Studying</span>
                                  <div className="text-sm text-green-600/80 mt-1">Expected completion: 2027</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Journey Status with Dynamic Elements */}
            <div className="text-center mt-20">
              <div className="inline-flex items-center gap-6 px-10 py-6 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
                {/* Animated status indicator */}
                <div className="relative">
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse group-hover:animate-ping"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-1 w-4 h-4 bg-white rounded-full opacity-80"></div>
                </div>
                
                {/* Status text with enhanced typography */}
                <div className="text-center">
                  <span className="text-green-600 font-bold text-xl tracking-wide">Journey in Progress</span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="h-px w-8 bg-green-500/50"></div>
                    <span className="text-sm text-muted-foreground font-medium">
                      Completion: 2027 • {Math.round((2025 - 2021) / (2027 - 2021) * 100)}% Done
                    </span>
                    <div className="h-px w-8 bg-green-500/50"></div>
                  </div>
                </div>
                
                {/* Progress ring */}
                <div className="w-12 h-12 relative">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="67, 100"
                      className="text-green-500 animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-600">
                    67%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CSS for enhanced 3D effects */}
        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .timeline-card:hover {
            transform-style: preserve-3d;
          }
          
          .particle {
            will-change: transform, opacity;
          }
          
          @media (max-width: 768px) {
            .timeline-card {
              transform: none !important;
            }
            
            .timeline-card:hover {
              transform: none !important;
            }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Let's Connect</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <a href="mailto:sakthivel.hsr06@gmail.com" className="text-lg hover:text-primary transition-colors">
                    sakthivel.hsr06@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <a href="tel:+919487292520" className="text-lg hover:text-primary transition-colors">
                    +91 9487292520
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full p-3 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full hover:scale-105 transition-transform duration-200">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2025 Sakthivel E. Built with passion and AI.</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
