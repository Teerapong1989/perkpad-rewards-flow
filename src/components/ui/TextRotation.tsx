// ABOUTME: Text rotation component that cycles through different text variations with fade animations
// ABOUTME: Used in hero sections to create dynamic, engaging headlines

import { useState, useEffect } from 'react';

interface TextRotationProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const TextRotation = ({ texts, className = '', interval = 3000 }: TextRotationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 600); // Slower fade transition
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={`
        block text-gradient font-extrabold transition-all duration-600 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotation;