
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-4">© 2025 Sakthivel E. Built with passion and AI.</p>
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
