// ABOUTME: A typing animation component that displays text character by character
// ABOUTME: with customizable speed and cursor effects for engaging text reveals

import { useState, useEffect, memo } from "react";

interface TypingAnimationProps {
  text: string | string[];
  speed?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
  delay?: number;
  pauseBetween?: number;
  loop?: boolean;
}

const TypingAnimation = memo(({ 
  text, 
  speed = 100, 
  className = "", 
  showCursor = true,
  cursorClassName = "",
  delay = 0,
  pauseBetween = 2000,
  loop = true
}: TypingAnimationProps) => {
  const texts = Array.isArray(text) ? text : [text];
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showTypingCursor, setShowTypingCursor] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      setShowTypingCursor(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!showTypingCursor) return;

    let timeout: NodeJS.Timeout;

    if (isTransitioning) {
      // Wait during transition
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setDisplayedText("");
        setIsDeleting(false);
      }, 300);
    } else if (!isDeleting && currentIndex < currentText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
    } else if (!isDeleting && currentIndex >= currentText.length) {
      // Pause before deleting (only if there are multiple texts and loop is enabled)
      if (texts.length > 1 && loop) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetween);
      }
    } else if (isDeleting && currentIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, speed / 2);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text
      setIsTransitioning(true);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, speed, showTypingCursor, isDeleting, isTransitioning, texts.length, loop, pauseBetween]);

  return (
    <span className={className}>
      <span className={isTransitioning ? "opacity-0 transform translate-y-2 transition-all duration-300" : "opacity-100 transform translate-y-0 transition-all duration-300"}>
        {displayedText}
      </span>
      {showCursor && (
        <span 
          className={`inline-block animate-pulse ${cursorClassName}`}
          style={{
            animation: currentIndex >= currentText.length && !isDeleting && texts.length === 1
              ? 'blink 1s infinite' 
              : 'none'
          }}
        >
          |
        </span>
      )}
    </span>
  );
});

TypingAnimation.displayName = "TypingAnimation";

export default TypingAnimation;