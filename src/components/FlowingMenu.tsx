
import React from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

interface MenuItem {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items: MenuItem[];
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }: MenuItem) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  // Function to get relevant image based on text content
  const getRelevantImage = (text: string, fallbackImage: string) => {
    const lowerText = text.toLowerCase();
    
    // Map common menu text to relevant Unsplash images
    if (lowerText.includes('home') || lowerText.includes('main')) {
      return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('about') || lowerText.includes('team')) {
      return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('service') || lowerText.includes('work')) {
      return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('portfolio') || lowerText.includes('project')) {
      return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('contact') || lowerText.includes('reach')) {
      return 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('blog') || lowerText.includes('news')) {
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop';
    }
    if (lowerText.includes('shop') || lowerText.includes('store')) {
      return 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=200&fit=crop';
    }
    
    // Return fallback image if no match found
    return fallbackImage || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop';
  };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const relevantImage = getRelevantImage(text, image);

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${relevantImage})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
