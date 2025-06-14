
import { Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onDownloadResume: () => void;
}

const ThemeToggle = ({ isDark, setIsDark, onDownloadResume }: ThemeToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="hover:scale-110 transition-transform duration-200 backdrop-blur-md bg-background/80"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
      <Button onClick={onDownloadResume} className="hover:scale-105 transition-transform duration-200 backdrop-blur-md">
        <Download className="w-4 h-4 mr-2" />
        Resume
      </Button>
    </div>
  );
};

export default ThemeToggle;
