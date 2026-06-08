import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'brand' | 'dark' | 'light' | 'warning' | 'danger';
  dot?: boolean;
  size?: 'sm' | 'md';
}

const variantClasses = {
  brand: 'bg-brand-50 border border-brand-100 text-brand-700',
  dark: 'bg-brand-900/30 border border-brand-500/20 text-brand-400',
  light: 'bg-white/10 border border-white/20 text-white',
  warning: 'bg-amber-50 border border-amber-200 text-amber-700',
  danger: 'bg-red-50 border border-red-200 text-red-700',
};

const dotColors = {
  brand: 'bg-brand-500',
  dark: 'bg-brand-400',
  light: 'bg-white',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
};

const sizeClasses = {
  sm: 'px-2.5 py-1 text-[10px] tracking-widest',
  md: 'px-3 py-1.5 text-xs tracking-widest',
};

export function Badge({
  children,
  className,
  variant = 'brand',
  dot = false,
  size = 'md',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full animate-pulse',
            dotColors[variant],
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
