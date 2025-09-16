// ABOUTME: Utility for lazy loading Lucide icons to reduce initial bundle size
// ABOUTME: This prevents loading the entire icon library upfront

import { lazy, Suspense, ComponentType } from 'react';
import { LucideProps } from 'lucide-react';

// Icon placeholder while loading
const IconPlaceholder = ({ size = 24, className, ...divProps }: { size?: number | string; className?: string; [key: string]: any }) => (
  <div 
    className={`inline-block bg-gray-200 rounded animate-pulse ${className || ''}`}
    style={{ width: size, height: size }}
    {...(divProps as React.HTMLAttributes<HTMLDivElement>)}
  />
);

// Lazy icon loader factory
export const createLazyIcon = (iconName: string): ComponentType<LucideProps> => {
  const LazyIcon = lazy(() => 
    import('lucide-react').then(module => ({ 
      default: module[iconName as keyof typeof module] as ComponentType<LucideProps>
    }))
  );
  
  return ({ ref, ...props }: LucideProps) => (
    <Suspense fallback={<IconPlaceholder size={props.size} className={props.className} />}>
      <LazyIcon {...props} />
    </Suspense>
  );
};

// Pre-defined commonly used icons for critical sections
export const ArrowRight = createLazyIcon('ArrowRight');
export const Check = createLazyIcon('Check');
export const Gift = createLazyIcon('Gift');
export const Users = createLazyIcon('Users');
export const BarChart3 = createLazyIcon('BarChart3');
export const Shield = createLazyIcon('Shield');
export const Zap = createLazyIcon('Zap');