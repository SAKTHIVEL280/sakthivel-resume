
import { useEffect } from 'react';

interface SmoothScrollProps {
  offset?: number;
  duration?: number;
}

const SmoothScroll = ({ offset = 80, duration = 800 }: SmoothScrollProps) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Check if it's an anchor link
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - offset;
          
          // Smooth scroll animation
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          let startTime: number | null = null;
          
          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function (ease-out cubic)
            const ease = 1 - Math.pow(1 - progress, 3);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };
          
          requestAnimationFrame(animation);
        }
      }
    };

    // Add click listener to the document
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [offset, duration]);

  return null;
};

export default SmoothScroll;
