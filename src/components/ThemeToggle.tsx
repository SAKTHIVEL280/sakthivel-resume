
import { Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onDownloadResume: () => void;
}

const ThemeToggle = ({ isDark, setIsDark, onDownloadResume }: ThemeToggleProps) => {
  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="hover:scale-110 transition-transform duration-200 backdrop-blur-md bg-background/80 h-10 w-10 sm:h-11 sm:w-11"
      >
        {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
      </Button>
      <Button 
        onClick={onDownloadResume} 
        className="hover:scale-105 transition-transform duration-200 backdrop-blur-md text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2 h-10 sm:h-11"
      >
        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden xs:inline">Resume</span>
        <span className="xs:hidden">CV</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;
