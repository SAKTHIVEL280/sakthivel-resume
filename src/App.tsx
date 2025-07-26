
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import About from './pages/About';
import Skills from './pages/Skills';
import Tools from './pages/Tools';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ThemeToggle from '@/components/ThemeToggle';
import LeftNavDock from '@/components/LeftNavDock';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useToast } from '@/hooks/use-toast';
import './App.css';

const queryClient = new QueryClient();

const AppContent = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <SmoothScroll />
      <ThemeToggle onDownloadResume={handleDownloadResume} />
      <LeftNavDock />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <AppContent />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
