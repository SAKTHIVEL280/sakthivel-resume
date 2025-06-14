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
  const hyperspeedRef = useRef<any>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
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
      title: 'Personal Markdown Note Taker (PMLNT)',
      description: 'Created a structured note-taking app with Markdown and AI-based formatting/export features.',
      tech: 'Python',
      year: '2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'T2I – Text to Image Generator',
      description: 'Created a fully free image generator using local ComfyUI and open-source models. Helps users turn text into AI-generated images without expensive APIs.',
      tech: 'React + AI',
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const educationData = [
    {
      year: '2021',
      title: 'Secondary Education',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '10th Grade',
      score: '75%',
      color: 'from-cyan-500 to-blue-500',
      position: 'left'
    },
    {
      year: '2023',
      title: 'Higher Secondary',
      institution: 'Maharishi Vidya Mandir (CBSE)',
      grade: '12th Grade',
      score: '77%',
      color: 'from-orange-500 to-red-500',
      position: 'right'
    },
    {
      year: '2023-2025',
      title: 'Current Journey',
      institution: 'K.S. Rangasamy College of Technology',
      grade: 'AIML Department',
      score: 'CGPA: 9.0',
      color: 'from-green-500 to-emerald-500',
      position: 'left',
      current: true
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

  // Timeline animation setup
  useEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const cards = timeline.querySelectorAll('.timeline-card');
    const pathElement = pathRef.current;

    // Initial setup - hide cards
    gsap.set(cards, {
      y: 100,
      opacity: 0,
      scale: 0.8
    });

    // Path animation
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
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(pathElement, {
            strokeDashoffset: pathLength * (1 - progress),
            duration: 0.3,
            ease: 'none'
          });
        }
      });
    }

    // Cards animation
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)'
          });
        },
        onLeave: () => {
          gsap.to(card, {
            y: -50,
            opacity: 0.3,
            scale: 0.95,
            duration: 0.5,
            ease: 'power2.out'
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            y: 100,
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'power2.in'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

      {/* Education Section - Timeline */}
      <section id="education" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Educational Journey</h2>
            <p className="text-lg text-muted-foreground">My pathway from 2021 to 2025</p>
          </div>
          
          <div ref={timelineRef} className="relative">
            {/* Timeline Path SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg 
                className="w-full h-full max-w-4xl" 
                viewBox="0 0 800 600" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="33%" stopColor="#3b82f6" />
                    <stop offset="66%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  ref={pathRef}
                  d="M 100 150 Q 250 100 400 200 Q 550 300 700 250"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="4"
                  filter="url(#glow)"
                  className="drop-shadow-lg"
                />
                {/* Year markers */}
                <circle cx="100" cy="150" r="8" fill="#06b6d4" className="drop-shadow-md">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="200" r="8" fill="#8b5cf6" className="drop-shadow-md">
                  <animate attributeName="r" values="8;12;8" dur="2s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="250" r="8" fill="#10b981" className="drop-shadow-md">
                  <animate attributeName="r" values="8;12;8" dur="2s" begin="1.4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Timeline Cards */}
            <div className="relative z-10 space-y-24 pt-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-card flex items-center ${
                    item.position === 'right' 
                      ? 'md:flex-row-reverse md:text-right' 
                      : 'md:flex-row md:text-left'
                  } flex-col text-center gap-8`}
                >
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className={`
                      relative p-6 rounded-2xl bg-gradient-to-br ${item.color} 
                      shadow-xl border border-white/20 backdrop-blur-sm
                      ${item.current ? 'animate-pulse' : ''}
                    `}>
                      <div className="text-2xl font-bold text-white mb-1">
                        {item.year}
                      </div>
                      {item.current && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                          <div className="absolute top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <Card className="flex-1 max-w-md hover:shadow-2xl transition-all duration-500 group hover:scale-105 border-2 hover:border-primary/30">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold text-muted-foreground mb-1">
                            {item.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.grade}
                          </p>
                        </div>
                        
                        <div className="flex justify-center md:justify-start">
                          <Badge 
                            className={`bg-gradient-to-r ${item.color} text-white border-none text-lg px-4 py-2 font-bold shadow-lg`}
                          >
                            {item.score}
                          </Badge>
                        </div>

                        {item.current && (
                          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600 font-medium">Currently Studying</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
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
