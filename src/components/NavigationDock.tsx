
import { Home, User, Code, Wrench, Heart, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import Dock from './Dock';

const NavigationDock = () => {
  const navigationItems = [
    {
      icon: <Home size={20} />,
      label: 'Home',
      onClick: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <User size={20} />,
      label: 'About',
      onClick: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Code size={20} />,
      label: 'Skills',
      onClick: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Wrench size={20} />,
      label: 'Tools',
      onClick: () => {
        document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Heart size={20} />,
      label: 'Interests',
      onClick: () => {
        document.getElementById('interests')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <FolderOpen size={20} />,
      label: 'Projects',
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <GraduationCap size={20} />,
      label: 'Education',
      onClick: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Mail size={20} />,
      label: 'Contact',
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return <Dock items={navigationItems} />;
};

export default NavigationDock;
