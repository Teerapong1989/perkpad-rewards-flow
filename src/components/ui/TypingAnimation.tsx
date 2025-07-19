// ABOUTME: A typing animation component that displays text character by character
// ABOUTME: with customizable speed and cursor effects for engaging text reveals

import { useState, useEffect, memo } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
  delay?: number;
}

const TypingAnimation = memo(({ 
  text, 
  speed = 100, 
  className = "", 
  showCursor = true,
  cursorClassName = "",
  delay = 0
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypingCursor, setShowTypingCursor] = useState(false);

  useEffect(() => {
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      setShowTypingCursor(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!showTypingCursor) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, showTypingCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span 
          className={`inline-block animate-pulse ${cursorClassName}`}
          style={{
            animation: currentIndex >= text.length 
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