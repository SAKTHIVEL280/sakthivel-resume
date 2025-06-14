
import { useState, useEffect } from 'react';
import { Home, User, Code, Heart, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RightNavDockProps {
  isDark: boolean;
}

const RightNavDock = ({ isDark }: RightNavDockProps) => {
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#hero', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#interests', label: 'Interests', icon: Heart },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
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

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <nav className="flex flex-col items-center gap-2 bg-background/20 backdrop-blur-md border border-border/30 rounded-2xl p-3 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <Button
              key={item.href}
              variant="ghost"
              size="icon"
              asChild
              className={`relative group h-12 w-12 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:scale-110 ${
                isActive 
                  ? 'bg-primary/20 text-primary shadow-md' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <a href={item.href}>
                <Icon className="h-5 w-5" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/50 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {item.label}
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-full" />
                )}
              </a>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default RightNavDock;
