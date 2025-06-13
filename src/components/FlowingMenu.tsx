
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

  const animationDefaults = { duration: 0.8, ease: 'power3.out' };

  const handleMouseEnter = () => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { x: '-100%' }, 0)
      .set(marqueeInnerRef.current, { x: '0%' }, 0)
      .to(marqueeRef.current, { x: '0%' }, 0)
      .to(marqueeInnerRef.current, { x: '0%' }, 0);
  };

  const handleMouseLeave = () => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { x: '100%' }, 0)
      .to(marqueeInnerRef.current, { x: '100%' }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 6 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div 
      className="menu__item" 
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="menu__item-link"
        href={link}
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
