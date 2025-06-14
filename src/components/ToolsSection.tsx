
import { Badge } from '@/components/ui/badge';
import Silk from '@/components/Silk';

interface ToolsSectionProps {
  isDark: boolean;
}

const ToolsSection = ({ isDark }: ToolsSectionProps) => {
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

  return (
    <section id="tools" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={4}
          scale={1.5}
          color={isDark ? "#1e293b" : "#f1f5f9"}
          noiseIntensity={1.5}
          rotation={0.2}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/15 z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground drop-shadow-lg">Technology Tools</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto drop-shadow-md">
            Cutting-edge tools and platforms I leverage to create innovative AI-powered solutions
          </p>
        </div>
        
        <div className="relative h-32 overflow-hidden mask-gradient">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-scroll-smooth space-x-8 min-w-max">
              {tools.map((tool, index) => (
                <div
                  key={`first-${index}`}
                  className={`group flex-shrink-0 relative bg-gradient-to-br ${tool.gradient} rounded-2xl p-6 min-w-[320px] shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                >
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 transition-transform duration-500 group-hover:scale-110"></div>
                  
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-opacity duration-300 group-hover:from-black/10"></div>
                </div>
              ))}
            </div>
            
            <div className="flex animate-scroll-smooth space-x-8 min-w-max ml-8">
              {tools.map((tool, index) => (
                <div
                  key={`second-${index}`}
                  className={`group flex-shrink-0 relative bg-gradient-to-br ${tool.gradient} rounded-2xl p-6 min-w-[320px] shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                >
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 transition-transform duration-500 group-hover:scale-110"></div>
                  
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-opacity duration-300 group-hover:from-black/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default ToolsSection;
