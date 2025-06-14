
import { useState, useEffect } from 'react';
import { Home, User, Wrench, Heart, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavigationDock = () => {
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#hero', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#interests', label: 'Interests', icon: Heart },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3 bg-background/20 backdrop-blur-md border border-border/20 rounded-2xl p-4 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <Button
              key={item.href}
              variant="ghost"
              size="icon"
              asChild
              className={`w-12 h-12 rounded-xl transition-all duration-300 group relative ${
                isActive 
                  ? 'bg-primary/20 text-primary shadow-lg' 
                  : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <a href={item.href}>
                <Icon className="w-5 h-5" />
                <span className="absolute right-full mr-3 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-border/50 shadow-md">
                  {item.label}
                </span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationDock;
