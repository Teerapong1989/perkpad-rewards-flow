// ABOUTME: A custom hook for scroll-triggered animations using Intersection Observer
// ABOUTME: with configurable thresholds, delays, and animation states for smooth section reveals

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
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
    };
  }, [threshold, delay, rootMargin, triggerOnce]);

  return {
    elementRef,
    isVisible,
    className: isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
  };
};