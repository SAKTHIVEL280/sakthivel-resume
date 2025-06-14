
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isDark: boolean;
}

const Navigation = ({ isDark }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#interests', label: 'Interests' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-2 md:bg-background/80 md:backdrop-blur-md md:border md:border-border/50 md:rounded-full md:px-6 md:py-3 md:z-50 md:shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
              activeSection === item.href.substring(1)
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-md border-border/50"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
