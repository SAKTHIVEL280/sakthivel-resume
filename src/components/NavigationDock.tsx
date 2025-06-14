
import { useState, useEffect, useRef } from 'react';
import { Home, User, Wrench, Heart, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const NavigationDock = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const dockRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tooltipRefs = useRef<(HTMLSpanElement | null)[]>([]);

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
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Initial dock animation
  useEffect(() => {
    if (dockRef.current) {
      gsap.fromTo(dockRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 1 }
      );
    }
  }, []);

  // Active state animation
  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      if (button) {
        const isActive = activeSection === navItems[index].href.substring(1);
        
        if (isActive) {
          gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
          gsap.to(button.querySelector('.icon'), {
            rotate: 360,
            duration: 0.6,
            ease: "back.out(1.7)"
          });
        } else {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(button.querySelector('.icon'), {
            rotate: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });
  }, [activeSection]);

  const handleMouseEnter = (index: number) => {
    const button = buttonRefs.current[index];
    const tooltip = tooltipRefs.current[index];
    
    if (button && tooltip) {
      gsap.to(button, {
        scale: 1.15,
        duration: 0.2,
        ease: "power2.out"
      });
      
      gsap.to(tooltip, {
        opacity: 1,
        x: -8,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const button = buttonRefs.current[index];
    const tooltip = tooltipRefs.current[index];
    const isActive = activeSection === navItems[index].href.substring(1);
    
    if (button && tooltip) {
      gsap.to(button, {
        scale: isActive ? 1.1 : 1,
        duration: 0.2,
        ease: "power2.out"
      });
      
      gsap.to(tooltip, {
        opacity: 0,
        x: 0,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleClick = (index: number) => {
    const button = buttonRefs.current[index];
    
    if (button) {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });
    }
  };

  return (
    <div 
      ref={dockRef}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-3 bg-background/20 backdrop-blur-md border border-border/20 rounded-2xl p-4 shadow-lg">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <Button
              key={item.href}
              ref={(el) => { buttonRefs.current[index] = el; }}
              variant="ghost"
              size="icon"
              asChild
              className={`w-12 h-12 rounded-xl transition-all duration-300 group relative ${
                isActive 
                  ? 'bg-primary/20 text-primary shadow-lg' 
                  : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
            >
              <a href={item.href}>
                <Icon className="w-5 h-5 icon" />
                <span 
                  ref={(el) => { tooltipRefs.current[index] = el; }}
                  className="absolute right-full mr-3 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 whitespace-nowrap border border-border/50 shadow-md pointer-events-none"
                >
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
