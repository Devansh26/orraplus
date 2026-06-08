import { useEffect, useRef, useState } from 'react';

/**
 * Tracks scroll progress (0–1) of the entire page.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

/**
 * Tracks scroll progress within a specific element.
 */
export function useElementScrollProgress<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  number,
] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const rect = el.getBoundingClientRect();
          const scrollProgress = Math.min(
            1,
            Math.max(0, -rect.top / (rect.height - window.innerHeight)),
          );
          setProgress(scrollProgress);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, progress];
}
