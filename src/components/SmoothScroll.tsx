
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Check if it's an anchor link
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          // Use GSAP for ultra-smooth scrolling with responsive offset
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? 60 : 80;
          
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: targetElement,
              offsetY: offset
            },
            ease: "power2.inOut"
          });
        }
      }
    };

    // Add click listener to the document
    document.addEventListener('click', handleClick);
    
    // Enhanced smooth scrolling for all scroll behavior
    gsap.set(document.documentElement, {
      scrollBehavior: "auto"
    });
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
