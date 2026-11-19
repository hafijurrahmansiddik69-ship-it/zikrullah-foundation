import React, { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'up' | 'left' | 'right' | 'fade';
export type RevealDelay = 0 | 80 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 500 | 600;

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: RevealDelay;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DIRECTION_CLASS: Record<RevealDirection, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
};

const DELAY_CLASS: Record<RevealDelay, string> = {
  0: 'reveal-delay-0',
  80: 'reveal-delay-80',
  100: 'reveal-delay-100',
  150: 'reveal-delay-150',
  200: 'reveal-delay-200',
  250: 'reveal-delay-250',
  300: 'reveal-delay-300',
  350: 'reveal-delay-350',
  400: 'reveal-delay-400',
  500: 'reveal-delay-500',
  600: 'reveal-delay-600',
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -24px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const revealClasses = [
    'reveal-base',
    DIRECTION_CLASS[direction],
    DELAY_CLASS[delay],
    isVisible ? 'reveal-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={revealClasses} onClick={onClick}>
      {children}
    </div>
  );
};
