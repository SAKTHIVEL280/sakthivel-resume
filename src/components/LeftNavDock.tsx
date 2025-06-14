
import { useState } from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

const LeftNavDock = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-2 p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  p-3 rounded-xl transition-all duration-300 ease-out
                  hover:scale-110 hover:bg-white/20 dark:hover:bg-white/10
                  ${isActive 
                    ? 'bg-blue-500/20 text-blue-400 scale-105' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }
                `}
                aria-label={item.label}
              >
                <Icon size={20} />
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-sm whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavDock;
