

import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Code, Brain, Palette, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import SplitText from '@/components/SplitText';
import TextPressure from '@/components/TextPressure';
import Waves from '@/components/Waves';
import Threads from '@/components/Threads';
import GradientText from '@/components/GradientText';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skills = [
    { name: 'Python', icon: Code, category: 'Programming' },
    { name: 'C', icon: Code, category: 'Programming' },
    { name: 'HTML & CSS', icon: Code, category: 'Web' },
    { name: 'Applied AI Skills', icon: Brain, category: 'AI' },
    { name: 'Prompt Engineering', icon: Brain, category: 'AI' },
    { name: 'UI/UX Designing', icon: Palette, category: 'Design' },
    { name: 'ComfyUI', icon: Wrench, category: 'Tools' }
  ];

  const tools = [
    'ComfyUI', 'Hugging Face', 'DaVinci Resolve', 
    'Cursor AI', 'Lovable.dev', 'ChatGPT', 'Claude'
  ];

  const interests = [
    'Building AI-Powered Tools & Assistants',
    'Exploring Open-Source AI Projects',
    'Editing with DaVinci Resolve',
    'Designing Minimal UI Experiences'
  ];

  const projects = [
    {
      title: 'T2I – Text to Image Generator',
      description: 'Created a fully free image generator using local ComfyUI and open-source models. Helps users turn text into AI-generated images without expensive APIs.',
      tech: 'React + AI',
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Virtual Try-On System',
      description: 'Built a virtual try-on system for fashion e-commerce using diffusion models and image processing. Used in client project (Thooni.com).',
      tech: 'ComfyUI + Python',
      year: '2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MediaWeave – AI Multimedia Conversion Platform',
      description: 'Converts text ↔ audio ↔ video using AI. Supports translations and works on low-GPU setups.',
      tech: 'Python + AI',
      year: '2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Personal Markdown Note Taker (PMLNT)',
      description: 'Created a structured note-taking app with Markdown and AI-based formatting/export features.',
      tech: 'Python',
      year: '2024',
      color: 'from-orange-500 to-red-500'
    }
  ];

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

      {/* Hero Section with Waves Background */}
      <section className="pt-20 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Waves Effect - Only for Hero */}
        <Waves 
          lineColor={isDark ? 'rgba(156, 163, 175, 0.3)' : 'rgba(107, 114, 128, 0.2)'} 
          backgroundColor="transparent"
          className="absolute inset-0 z-0"
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in space-y-8">
            {/* Main Title */}
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
            
            {/* AI Enthusiast Subtitle */}
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

            {/* Description */}
            <div className="mb-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Passionate about building innovative AI-powered tools and platforms that blend artificial intelligence, automation, and user-focused design to create meaningful digital experiences.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6 bg-gray-800 hover:bg-gray-700 text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200 text-lg px-8 py-6 border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Threads Background */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Threads Background */}
        <div className="absolute inset-0">
          <Threads 
            color={isDark ? [0.4, 0.5, 0.7] : [0.3, 0.4, 0.6]}
            amplitude={0.8}
            distance={0.3}
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

      {/* Skills Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="secondary">{skill.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge 
                key={tool} 
                variant="outline" 
                className="text-lg py-3 px-6 hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-blue-600 mr-4"></div>
                    <p className="text-lg font-medium">{interest}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white`}>
                      {project.tech}
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education</h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">K.S. Rangasamy College of Technology</h3>
                    <p className="text-lg text-muted-foreground mb-2">AIML Department</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500 text-white mb-2">1st Year CGPA: 8.78</Badge>
                    <br />
                    <Badge className="bg-blue-500 text-white mb-2">3rd Sem CGPA: 9.0</Badge>
                    <br />
                    <Badge className="bg-purple-500 text-white">4th Sem: Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Maharishi Vidya Mandir (CBSE)</h3>
                    <p className="text-lg text-muted-foreground">12th Grade - 2023</p>
                  </div>
                  <Badge className="bg-orange-500 text-white">77%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Maharishi Vidya Mandir (CBSE)</h3>
                    <p className="text-lg text-muted-foreground">10th Grade - 2021</p>
                  </div>
                  <Badge className="bg-cyan-500 text-white">75%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
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

