
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-9 h-9 hover:bg-muted/50 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-9 h-9 hover:bg-muted/50 transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-9 h-9 hover:bg-muted/50 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground/80">
            © 2025 Sakthivel E. Built with passion and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
