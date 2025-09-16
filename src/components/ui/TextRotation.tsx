// ABOUTME: Text rotation component with optimized animations to prevent forced reflows
// ABOUTME: Uses CSS transforms and batched state updates for smooth performance

import { useState, useEffect, useCallback, useRef } from 'react';

interface TextRotationProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const TextRotation = ({ texts, className = '', interval = 3000 }: TextRotationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();
  const transitionRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();

  const updateIndex = useCallback(() => {
    // Use RAF to batch DOM updates
    rafRef.current = requestAnimationFrame(() => {
      setIsVisible(false);
    });
    
    transitionRef.current = setTimeout(() => {
      rafRef.current = requestAnimationFrame(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      });
    }, 300); // Faster transition for better UX
  }, [texts.length]);

  useEffect(() => {
    timerRef.current = setInterval(updateIndex, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [interval, updateIndex]);

  return (
    <span 
      className={`
        block text-gradient font-extrabold transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        ${className}
      `}
      style={{ 
        contain: 'layout style', // Prevent layout thrashing
        willChange: 'transform, opacity' // Optimize for animations
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotation;