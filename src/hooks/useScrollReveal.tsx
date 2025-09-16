// ABOUTME: A custom hook for scroll-triggered animations using optimized Intersection Observer
// ABOUTME: with RAF-based state updates to prevent forced reflows

import { useState, useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true
}: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use RAF to batch state updates and prevent forced reflows
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              rafRef.current = requestAnimationFrame(() => {
                setIsVisible(true);
              });
            }, delay);
          } else {
            rafRef.current = requestAnimationFrame(() => {
              setIsVisible(true);
            });
          }
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          // Clear any pending animations
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          rafRef.current = requestAnimationFrame(() => {
            setIsVisible(false);
          });
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, delay, rootMargin, triggerOnce]);

  return {
    elementRef,
    isVisible,
    className: isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
  };
};