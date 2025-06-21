
import { useState, useEffect } from 'react';
import { Home, User, Code, Wrench, Heart, Briefcase, GraduationCap, Mail } from 'lucide-react';

const LeftNavDock = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'tools', icon: Wrench, label: 'Tools' },
    { id: 'interests', icon: Heart, label: 'Interests' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-full p-2 sm:p-3 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavDock;
