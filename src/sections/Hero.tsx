import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Shield, Zap, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';

// ─── Dashboard Components ──────────────────────────────────────────────────

function HealthScoreRing({ score = 82 }: { score?: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      {/* Glow background */}
      <div className="absolute inset-0 rounded-full bg-brand-500/10 blur-xl" />

      <svg width="144" height="144" viewBox="0 0 144 144" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="72" cy="72" r={radius}
          fill="none"
          stroke="rgba(16,185,129,0.12)"
          strokeWidth="8"
        />
        {/* Progress */}
        <motion.circle
          cx="72" cy="72" r={radius}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 2, ease: 'easeOut' as const, delay: 0.5 }}
          transform="rotate(-90 72 72)"
        />
        {/* Pulse dot at tip */}
        <motion.circle
          cx={72 + radius * Math.cos(((-90 + (score / 100) * 360) * Math.PI) / 180)}
          cy={72 + radius * Math.sin(((-90 + (score / 100) * 360) * Math.PI) / 180)}
          r="5"
          fill="#10b981"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.3 }}
        />
      </svg>

      {/* Score display */}
      <div className="relative text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          className="text-4xl font-black text-white leading-none"
        >
          {score}
        </motion.div>
        <div className="text-[10px] font-semibold text-brand-400 uppercase tracking-widest mt-1">
          Health Score
        </div>
      </div>
    </div>
  );
}

function BiomarkerBar({ label, value, max, color, delay }: {
  label: string;
  value: number;
  max: number;
  color: string;
  delay: number;
}) {
  const pct = (value / max) * 100;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-medium">{label}</span>
        <span className="text-[11px] text-white font-semibold">{value}</span>
      </div>
      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' as const }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

function FloatingChip({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
      className={`absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold whitespace-nowrap shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ─── Dashboard Visual ──────────────────────────────────────────────────────

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none" aria-hidden="true">
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}
        className="glass-hero rounded-3xl p-6 space-y-5"
        style={{
          background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(15,40,32,0.7) 100%)',
          border: '1px solid rgba(16,185,129,0.2)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 60px rgba(16,185,129,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-brand-400 uppercase tracking-widest mb-0.5">
              Your Health Profile
            </p>
            <p className="text-white text-sm font-medium">Arjun Mehta · 34 yrs</p>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-500/15 rounded-full border border-brand-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-400 text-[11px] font-semibold">Live</span>
          </div>
        </div>

        {/* Score + Metrics row */}
        <div className="flex items-start gap-5">
          <HealthScoreRing score={82} />

          {/* Metric cards */}
          <div className="flex-1 grid grid-cols-2 gap-2 pt-1">
            {[
              { label: 'Glucose', value: '94', unit: 'mg/dL', status: 'Optimal', color: 'text-brand-400' },
              { label: 'HbA1c', value: '5.2', unit: '%', status: 'Excellent', color: 'text-cyan-400' },
              { label: 'Vitamin D', value: '28', unit: 'ng/mL', status: 'Low', color: 'text-amber-400' },
              { label: 'Thyroid', value: '2.1', unit: 'mIU/L', status: 'Normal', color: 'text-brand-400' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-2.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] text-slate-500 font-medium mb-0.5">{m.label}</p>
                <p className="text-white text-base font-bold leading-none">
                  {m.value}
                  <span className="text-[10px] font-normal text-slate-500 ml-0.5">{m.unit}</span>
                </p>
                <p className={`text-[10px] font-semibold mt-0.5 ${m.color}`}>{m.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Biomarker Trend */}
        <div
          className="rounded-2xl p-4 space-y-2.5"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Biomarker Trends</p>
            <TrendingUp size={12} className="text-brand-400" />
          </div>
          <BiomarkerBar label="Metabolic Health" value={78} max={100} color="linear-gradient(90deg,#10b981,#34d399)" delay={1} />
          <BiomarkerBar label="Inflammation" value={32} max={100} color="linear-gradient(90deg,#22d3ee,#06b6d4)" delay={1.1} />
          <BiomarkerBar label="Nutrient Status" value={55} max={100} color="linear-gradient(90deg,#f59e0b,#fbbf24)" delay={1.2} />
        </div>

        {/* Recommendation pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex items-start gap-3 p-3.5 rounded-2xl"
          style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-7 h-7 rounded-lg bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Zap size={14} className="text-brand-400" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-brand-400 mb-0.5">Top Recommendation</p>
            <p className="text-[12px] text-slate-300 leading-relaxed">
              Vitamin D supplement (2000 IU/day) + 20 min morning sunlight to address deficiency.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating chips */}
      <FloatingChip className="-top-5 -left-6" delay={1.4}>
        <Heart size={11} className="text-red-400" />
        <span>Heart Age: 28</span>
      </FloatingChip>

      <FloatingChip className="-top-3 right-2" delay={1.6}>
        <Activity size={11} className="text-brand-400" />
        <span>Metabolic Age: 30</span>
      </FloatingChip>

      <FloatingChip className="-bottom-5 -left-8" delay={1.8}>
        <Shield size={11} className="text-cyan-400" />
        <span>Risk: Low</span>
      </FloatingChip>

      <FloatingChip className="-bottom-3 right-0" delay={2.0}>
        <span className="text-brand-400">↑</span>
        <span>12% this month</span>
      </FloatingChip>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export function Hero() {
  const scrollToWaitlist = () => {
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAssessment = () => {
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #0a1628 0%, #0d2318 40%, #0a1628 100%)' }}
      aria-label="Hero section"
    >
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      {/* Scientific grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="dark" dot>
                Now in Early Access · India
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
            >
              The Future of{' '}
              <GradientText>Everyday</GradientText>
              {' '}Health
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              ORRA+ combines biomarker insights, nutrition science, and personalized health
              recommendations to help you stay healthier for longer.
            </motion.p>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2" aria-label="Waitlist members">
                {['bg-brand-500', 'bg-teal-500', 'bg-cyan-600', 'bg-emerald-600'].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-slate-900 flex items-center justify-center text-white text-[10px] font-bold`}
                    aria-hidden="true"
                  >
                    {['A', 'S', 'R', 'P'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">2,400+</span> Indians already on waitlist
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToWaitlist}
                icon={<ArrowRight size={18} />}
                className="text-base"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                onClick={scrollToAssessment}
                className="text-base"
              >
                Take Health Assessment
              </Button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-xs text-slate-500"
            >
              <span className="flex items-center gap-1.5">
                <Shield size={12} className="text-brand-500" />
                DPDP Act Compliant
              </span>
              <span className="w-px h-3 bg-slate-700" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Heart size={12} className="text-brand-500" />
                Evidence-Based Science
              </span>
              <span className="w-px h-3 bg-slate-700" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Activity size={12} className="text-brand-500" />
                60+ Biomarkers
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' as const }}
            className="hidden lg:block"
          >
            <HeroDashboard />
          </motion.div>
        </div>

        {/* Mobile dashboard — shown below copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="lg:hidden mt-12 px-4"
          aria-hidden="true"
        >
          <HeroDashboard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
