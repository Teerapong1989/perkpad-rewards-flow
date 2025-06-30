
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = 'fade-up'
}) => {
  const { ref, isInView } = useInView({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000';
    
    switch (animation) {
      case 'fade-up':
        return cn(
          baseClasses,
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        );
      case 'fade-in':
        return cn(
          baseClasses,
          isInView ? 'opacity-100' : 'opacity-0'
        );
      case 'scale-in':
        return cn(
          baseClasses,
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};
