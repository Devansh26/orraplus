import { cn } from '@/utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  animated = true,
  from = 'from-emerald-400',
  via = 'via-teal-400',
  to = 'to-cyan-400',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        via,
        to,
        animated && 'bg-[length:200%_auto] animate-gradient-shift',
        className,
      )}
      style={
        animated
          ? {
              backgroundSize: '200% auto',
              animation: 'gradientShift 4s ease infinite',
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
