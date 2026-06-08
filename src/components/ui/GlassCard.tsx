import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'hero' | 'brand';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  style?: React.CSSProperties;
}

const variantClasses = {
  light:
    'bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]',
  dark:
    'bg-slate-900/60 backdrop-blur-xl border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.24)]',
  hero:
    'bg-slate-900/70 backdrop-blur-2xl border border-emerald-500/20 shadow-[0_16px_48px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.05)]',
  brand:
    'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 backdrop-blur-xl border border-emerald-400/20 shadow-[0_4px_24px_rgba(16,185,129,0.08)]',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlassCard({
  children,
  className,
  variant = 'light',
  hover = false,
  padding = 'md',
  onClick,
  style,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl transition-shadow duration-300',
        variantClasses[variant],
        paddingClasses[padding],
        hover &&
          'cursor-pointer hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)] hover:-translate-y-1',
        className,
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' as const }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
