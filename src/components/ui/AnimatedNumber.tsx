import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/utils/cn';

interface AnimatedNumberProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: AnimatedNumberProps) {
  const { ref, value } = useCountUp({
    end,
    start,
    duration,
    decimals,
    prefix,
    suffix,
  });

  return (
    <span ref={ref} className={cn(className)} aria-label={`${prefix}${end}${suffix}`}>
      {value}
    </span>
  );
}
