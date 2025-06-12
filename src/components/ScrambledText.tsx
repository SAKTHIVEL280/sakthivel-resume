
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ScrambledText.css";

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!rootRef.current) return;

    // Simple text splitting without GSAP SplitText
    const textElement = rootRef.current.querySelector("p");
    if (!textElement) return;

    const text = textElement.textContent || "";
    textElement.innerHTML = "";
    
    charsRef.current = [];
    
    // Split text into individual character spans
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space
      span.className = "char";
      span.style.display = "inline-block";
      span.dataset.content = char;
      textElement.appendChild(span);
      charsRef.current.push(span);
    });

    const handleMove = (e: PointerEvent) => {
      charsRef.current.forEach((c) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          const originalText = c.dataset.content || "";
          const scrambleDuration = duration * (1 - dist / radius);
          
          // Simple scramble animation without GSAP ScrambleText plugin
          const scrambleInterval = setInterval(() => {
            const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            c.textContent = Math.random() > 0.7 ? randomChar : originalText;
          }, 50);
          
          setTimeout(() => {
            clearInterval(scrambleInterval);
            c.textContent = originalText === " " ? "\u00A0" : originalText;
          }, scrambleDuration * 1000);
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
