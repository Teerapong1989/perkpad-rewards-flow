
import { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

// Helper function to generate WebP source URLs
const getWebPSrc = (src: string): string => {
  if (src.includes('/lovable-uploads/')) {
    return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }
  return src;
};

// Helper function to check if browser supports WebP
const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjE0Ij5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [webpSupported, setWebpSupported] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setWebpSupported(supportsWebP());
  }, []);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    
    // Track LCP for critical images
    if (priority && typeof window !== 'undefined' && window.gtag) {
      const loadTime = performance.now();
      window.gtag('event', 'image_loaded', {
        event_category: 'Performance',
        value: Math.round(loadTime),
        custom_parameter_1: 'critical_image'
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  // Generate optimized source URLs
  const webpSrc = getWebPSrc(src);
  const shouldUseWebP = webpSupported && webpSrc !== src;

  // For priority images, set explicit dimensions to prevent layout shift
  const imageStyle = priority ? { 
    width: width ? `${width}px` : 'auto', 
    height: height ? `${height}px` : 'auto',
    aspectRatio: width && height ? `${width}/${height}` : 'auto'
  } : {};

  return (
    <div className={`relative overflow-hidden ${className}`} style={priority ? imageStyle : {}}>
      {isInView && !hasError && shouldUseWebP ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            width={width}
            height={height}
            sizes={sizes}
            style={imageStyle}
          />
        </picture>
      ) : (
        <img
          ref={imgRef}
          src={isInView && !hasError ? src : placeholder}
          alt={alt}
          className={`transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          width={width}
          height={height}
          sizes={sizes}
          style={imageStyle}
        />
      )}
      
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse" />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <span className="text-slate-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
