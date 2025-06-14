
import { useState, useEffect } from 'react';
import { Home, User, Wrench, Heart, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationDock = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Desktop Dock */}
      <nav 
        className={cn(
          "fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out hidden lg:block",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        )}
      >
        <div className="bg-background/80 backdrop-blur-lg border border-border/50 rounded-2xl p-3 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center",
                      "hover:scale-110 active:scale-95",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                    
                    {/* Active indicator */}
                    <div className={cn(
                      "absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full transition-all duration-300",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    )} />
                  </button>
                  
                  {/* Tooltip */}
                  <div className={cn(
                    "absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2",
                    "bg-popover text-popover-foreground text-sm font-medium rounded-lg shadow-lg border",
                    "opacity-0 scale-95 translate-x-2 pointer-events-none",
                    "transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0",
                    "whitespace-nowrap"
                  )}>
                    {item.label}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-popover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav 
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out lg:hidden",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="bg-background/90 backdrop-blur-lg border border-border/50 rounded-2xl p-2 shadow-xl">
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300",
                    "hover:scale-105 active:scale-95 min-w-0",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className={cn(
                    "text-xs font-medium transition-all duration-300 overflow-hidden",
                    isActive ? "opacity-100 max-h-4" : "opacity-70 max-h-4"
                  )}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  <div className={cn(
                    "absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  )} />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationDock;
