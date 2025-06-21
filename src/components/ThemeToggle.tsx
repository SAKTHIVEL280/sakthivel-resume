
import { Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onDownloadResume: () => void;
}

const ThemeToggle = ({ isDark, setIsDark, onDownloadResume }: ThemeToggleProps) => {
  return (
    <div className="fixed top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-50 flex items-center gap-2 sm:gap-3 md:gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className={`hover:scale-110 transition-transform duration-200 backdrop-blur-md h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 ${
          isDark 
            ? 'bg-background/80 hover:bg-background/90' 
            : 'bg-white/80 hover:bg-white/90 border border-gray-200'
        }`}
      >
        {isDark ? <Sun className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Moon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
      </Button>
      <Button 
        onClick={onDownloadResume} 
        className={`hover:scale-105 transition-transform duration-200 backdrop-blur-md text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 h-8 sm:h-10 md:h-11 ${
          isDark 
            ? 'bg-primary/90 hover:bg-primary text-primary-foreground' 
            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
        }`}
      >
        <Download className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-2" />
        <span className="hidden xs:inline">Resume</span>
        <span className="xs:hidden">CV</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;
