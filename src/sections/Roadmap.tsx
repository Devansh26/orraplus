import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Microscope,
  Brain,
  ShieldAlert,
  Sparkles,
  Activity,
  Infinity,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { roadmapSteps } from '@/data/roadmap';

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Brain,
  ShieldAlert,
  Sparkles,
  Activity,
  Infinity,
};

function RoadmapCard({
  step,
  index,
  isActive,
  inView,
  onClick,
}: {
  step: typeof roadmapSteps[0];
  index: number;
  isActive: boolean;
  inView: boolean;
  onClick: () => void;
}) {
  const Icon = iconMap[step.icon] || Activity;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.6, ease: 'easeOut' as const }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-3xl"
      aria-label={`${step.label}: ${step.title}`}
      aria-pressed={isActive}
    >
      <div
        className="rounded-3xl p-5 h-full flex flex-col transition-all duration-400"
        style={{
          background: isActive
            ? `linear-gradient(145deg, ${step.color}18, ${step.color}08)`
            : 'rgba(255,255,255,0.03)',
          border: `1px solid ${isActive ? step.color + '35' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: isActive ? `0 12px 40px ${step.color}15` : 'none',
        }}
      >
        {/* Step label */}
        <p
          className="text-[10px] font-bold uppercase tracking-widest mb-3 transition-colors duration-300"
          style={{ color: isActive ? step.color : 'rgba(255,255,255,0.3)' }}
        >
          {step.label}
        </p>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            background: `${step.color}${isActive ? '25' : '12'}`,
            border: `1px solid ${step.color}${isActive ? '35' : '20'}`,
            boxShadow: isActive ? `0 4px 16px ${step.color}25` : 'none',
          }}
        >
          <Icon size={20} style={{ color: step.color }} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3
          className="font-bold text-base leading-snug mb-2 transition-colors duration-300"
          style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
        >
          {step.title}
        </h3>

        {/* Description — show on active */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 text-xs leading-relaxed mt-auto"
          aria-hidden={!isActive}
        >
          {step.description}
        </motion.p>

        {/* Active indicator */}
        <motion.div
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 h-0.5 rounded-full origin-left"
          style={{ background: step.color }}
          aria-hidden="true"
        />
      </div>
    </motion.button>
  );
}

// Mobile vertical roadmap
function MobileRoadmap({ inView }: { inView: boolean }) {
  return (
    <div className="space-y-0 relative" aria-label="Health intelligence roadmap">
      {/* Vertical line */}
      <div
        className="absolute left-6 top-6 bottom-6 w-px"
        style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(16,185,129,0.05))' }}
        aria-hidden="true"
      />

      {roadmapSteps.map((step, i) => {
        const Icon = iconMap[step.icon] || Activity;
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.55 }}
            className="relative flex gap-5 pb-8 last:pb-0"
          >
            {/* Dot */}
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
              style={{
                background: `${step.color}20`,
                border: `1px solid ${step.color}30`,
              }}
            >
              <Icon size={20} style={{ color: step.color }} aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="pt-2 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: step.color }}>
                {step.label}
              </p>
              <h3 className="text-white font-bold text-base mb-1.5">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Roadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="section-padding bg-slate-950 relative overflow-hidden"
      aria-label="Health intelligence roadmap"
    >
      {/* Gradient decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.3), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <Badge variant="dark" dot>
              The ORRA+ Journey
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Your{' '}
            <GradientText>Health Intelligence</GradientText>
            {' '}Roadmap
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
            From your first blood test to lifelong longevity optimization — a complete system
            built around your unique biology.
          </motion.p>
        </motion.div>

        {/* Progress indicator — desktop */}
        <div className="hidden lg:block mb-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto mb-2">
            {roadmapSteps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center gap-1.5 group focus-visible:outline-none"
                aria-label={`Go to ${step.title}`}
                aria-pressed={activeStep === i}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: i <= activeStep ? step.color : 'rgba(255,255,255,0.15)',
                    boxShadow: i === activeStep ? `0 0 12px ${step.color}80` : 'none',
                    transform: i === activeStep ? 'scale(1.5)' : 'scale(1)',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Progress track */}
          <div className="max-w-4xl mx-auto h-px bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #10b981, #34d399, #06b6d4)' }}
              animate={{ width: `${((activeStep + 1) / roadmapSteps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            />
          </div>
        </div>

        {/* Desktop card grid */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {roadmapSteps.map((step, i) => (
            <RoadmapCard
              key={step.id}
              step={step}
              index={i}
              isActive={activeStep === i}
              inView={inView}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>

        {/* Active step detail — desktop */}
        {activeStep !== null && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden lg:flex items-start gap-6 p-8 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${roadmapSteps[activeStep].color}12, rgba(255,255,255,0.02))`,
              border: `1px solid ${roadmapSteps[activeStep].color}25`,
            }}
            aria-live="polite"
            aria-label={`Detail for ${roadmapSteps[activeStep].title}`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: roadmapSteps[activeStep].color }}
                >
                  {roadmapSteps[activeStep].label}
                </span>
                <ArrowRight size={12} className="text-slate-600" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">{roadmapSteps[activeStep].title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {roadmapSteps[activeStep].description}
              </p>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded-xl bg-white/5 text-white text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label="Previous step"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep(Math.min(roadmapSteps.length - 1, activeStep + 1))}
                disabled={activeStep === roadmapSteps.length - 1}
                className="px-4 py-2 rounded-xl bg-brand-500/20 text-brand-400 text-sm font-medium disabled:opacity-30 hover:bg-brand-500/30 transition-colors border border-brand-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label="Next step"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {/* Mobile vertical roadmap */}
        <div className="lg:hidden">
          <MobileRoadmap inView={inView} />
        </div>
      </div>
    </section>
  );
}
