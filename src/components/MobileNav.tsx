
import { useState } from 'react';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail, Heart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileNavProps {
  isDark: boolean;
}

const MobileNav = ({ isDark }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'about', icon: User, label: 'About', path: '/sections#about' },
    { id: 'skills', icon: Code, label: 'Skills', path: '/sections#skills' },
    { id: 'interests', icon: Heart, label: 'Interests', path: '/sections#interests' },
    { id: 'projects', icon: Briefcase, label: 'Projects', path: '/sections#projects' },
    { id: 'education', icon: GraduationCap, label: 'Education', path: '/sections#education' },
    { id: 'contact', icon: Mail, label: 'Contact', path: '/sections#contact' },
  ];

  const handleNavigation = (path: string) => {
    if (path.includes('#')) {
      const [route, section] = path.split('#');
      navigate(route);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Nav Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        isDark 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${
              isDark ? 'from-blue-500 to-purple-600' : 'from-blue-600 to-indigo-600'
            } flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Sakthivel
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isDark 
                ? 'text-white hover:bg-gray-800' 
                : 'text-gray-900 hover:bg-gray-100'
            }`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`fixed inset-0 z-40 ${
          isDark 
            ? 'bg-gray-900/98 backdrop-blur-md' 
            : 'bg-white/98 backdrop-blur-md'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                (item.path.includes('#') && location.pathname === item.path.split('#')[0]);
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-4 px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? isDark 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-600'
                      : isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-xl font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
