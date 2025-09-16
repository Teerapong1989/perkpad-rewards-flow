// ABOUTME: An animated counter component that counts up to target values when visible
// ABOUTME: with optimized animation to prevent forced reflows

import { useState, useEffect, useRef, memo, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

const AnimatedCounter = memo(({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  decimals = 0
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Optimized formatting function
  const formatNumber = useCallback((num: number) => {
    if (decimals === 0) {
      return Math.floor(num).toString();
    }
    return num.toFixed(decimals);
  }, [decimals]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px' // Optimize trigger timing
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Reset refs
    startTimeRef.current = undefined;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      // Batch state update to prevent excessive re-renders
      const newCount = end * easeOutQuart;
      setCount(prevCount => {
        // Only update if change is significant to reduce re-renders
        const difference = Math.abs(newCount - prevCount);
        const threshold = end * 0.01; // 1% threshold
        return difference > threshold || progress === 1 ? newCount : prevCount;
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div 
      ref={countRef} 
      className={className}
      style={{ contain: 'layout style' }} // Prevent layout thrashing
    >
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
});

AnimatedCounter.displayName = "AnimatedCounter";

export default AnimatedCounter;