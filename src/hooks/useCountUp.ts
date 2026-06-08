import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

/**
 * Animates a number from start to end when the element enters the viewport.
 */
export function useCountUp(options: UseCountUpOptions): {
  ref: React.RefObject<HTMLSpanElement | null>;
  value: string;
} {
  const {
    end,
    start = 0,
    duration = 2000,
    decimals = 0,
    prefix = '',
    suffix = '',
    separator = ',',
  } = options;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(formatNumber(start, decimals, prefix, suffix, separator));
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animateCount();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animateCount() {
    const startTime = performance.now();
    const range = end - start;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + range * easedProgress;
      setValue(formatNumber(current, decimals, prefix, suffix, separator));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  return { ref, value };
}

function formatNumber(
  num: number,
  decimals: number,
  prefix: string,
  suffix: string,
  separator: string,
): string {
  const fixed = num.toFixed(decimals);
  const parts = fixed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return `${prefix}${parts.join('.')}${suffix}`;
}
