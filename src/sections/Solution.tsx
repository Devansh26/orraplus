import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Microscope, BrainCircuit, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';

const steps = [
  {
    id: 1,
    label: 'Step 01',
    title: 'Analyze Key Health Biomarkers',
    description:
      'A comprehensive blood panel covering 60+ markers — metabolic, hormonal, inflammatory, and nutritional — goes far beyond your standard annual checkup.',
    bullets: [
      'Blood glucose & HbA1c',
      'Thyroid & hormone panel',
      'Vitamin D, B12, Iron',
      'Inflammatory markers (CRP, Homocysteine)',
    ],
    icon: Microscope,
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    id: 2,
    label: 'Step 02',
    title: 'Decode Your Health',
    description:
      'Our AI cross-references your biomarkers with population-level Indian health data and clinical research to surface patterns invisible to the naked eye.',
    bullets: [
      'India-specific reference ranges',
      'Risk scoring across 12 health domains',
      'Trend analysis over time',
      'Comparative population insights',
    ],
    icon: BrainCircuit,
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-400',
  },
  {
    id: 3,
    label: 'Step 03',
    title: 'Take Personalized Action',
    description:
      'Receive a clear, actionable health plan — nutrition protocols, lifestyle changes, supplement recommendations, and clinical referrals — all matched precisely to your biology.',
    bullets: [
      'Personalized nutrition plan',
      'Targeted supplement protocol',
      'Lifestyle modification roadmap',
      'Clinical referral if needed',
    ],
    icon: Sparkles,
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
  },
];

function StepCard({ step, isActive, onClick }: {
  step: typeof steps[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left rounded-3xl p-6 border transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
        isActive
          ? `bg-gradient-to-br ${step.gradient} ${step.border} shadow-lg`
          : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-md'
      }`}
      whileHover={{ y: isActive ? 0 : -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25 }}
      aria-expanded={isActive}
      aria-label={`Step ${step.id}: ${step.title}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${step.iconBg}`}
        >
          <Icon size={22} className={step.iconColor} aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Step number */}
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-1.5"
            style={{ color: step.color }}
          >
            {step.label}
          </p>

          {/* Title */}
          <h3 className={`text-lg font-bold leading-snug mb-2 transition-colors duration-300 ${
            isActive ? 'text-slate-900' : 'text-slate-800'
          }`}>
            {step.title}
          </h3>

          {/* Expand arrow */}
          <motion.div
            animate={{ rotate: isActive ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
            aria-hidden="true"
          >
            <ChevronRight size={16} className="text-slate-400" />
          </motion.div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' as const }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-slate-100/80 mt-4">
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
              <ul className="space-y-2" role="list">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ConnectingPath({ activeStep }: { activeStep: number }) {
  return (
    <div className="relative py-8" aria-hidden="true">
      {/* Vertical connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100">
        <motion.div
          className="w-full bg-gradient-to-b from-brand-400 to-brand-300"
          initial={{ height: 0 }}
          animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        />
      </div>

      {/* Step dots */}
      <div className="flex flex-col gap-12 relative z-10">
        {steps.map((step, i) => (
          <div key={step.id} className="flex justify-center">
            <motion.div
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{
                backgroundColor: i <= activeStep ? step.color : '#e2e8f0',
                boxShadow: i <= activeStep ? `0 0 12px ${step.color}60` : undefined,
              }}
              animate={{
                scale: i === activeStep ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 1, repeat: i === activeStep ? Infinity : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Visual preview panel for active step
function StepVisual({ step }: { step: typeof steps[0] }) {
  const Icon = step.icon;

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.45, ease: 'easeOut' as const }}
      className="rounded-3xl p-8 h-full flex flex-col justify-between"
      style={{
        background: `linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,40,32,0.9))`,
        border: `1px solid ${step.color}30`,
        boxShadow: `0 24px 64px rgba(0,0,0,0.3), 0 0 40px ${step.color}10`,
        minHeight: '420px',
      }}
    >
      {/* Large icon */}
      <div>
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
          style={{
            background: `${step.color}20`,
            border: `1px solid ${step.color}30`,
          }}
        >
          <Icon size={40} style={{ color: step.color }} aria-hidden="true" />
        </div>

        <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: step.color }}>
          {step.label}
        </p>
        <h3 className="text-3xl font-black text-white leading-tight mb-4">{step.title}</h3>
        <p className="text-slate-400 leading-relaxed">{step.description}</p>
      </div>

      {/* Bullets */}
      <div className="space-y-3 mt-6">
        {step.bullets.map((bullet, i) => (
          <motion.div
            key={bullet}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${step.color}20` }}
            >
              <ArrowRight size={10} style={{ color: step.color }} aria-hidden="true" />
            </div>
            <span className="text-slate-300 text-sm">{bullet}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Solution() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="section-padding bg-slate-50 relative overflow-hidden"
      aria-label="How ORRA+ works"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent)' }}
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
            <Badge variant="brand" dot>
              The Solution
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6"
          >
            Health, Personalized To{' '}
            <GradientText>Your Biology.</GradientText>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 text-lg leading-relaxed">
            A clear three-step path from raw biomarker data to life-changing, personalized health action.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — Step cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-4"
          >
            {/* Connecting path on desktop */}
            <div className="hidden lg:block mt-6">
              <ConnectingPath activeStep={activeStep} />
            </div>

            {/* Cards */}
            <div className="flex-1 space-y-4">
              {steps.map((step, i) => (
                <StepCard
                  key={step.id}
                  step={step}
                  isActive={activeStep === i}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — Visual preview */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block sticky top-24"
          >
            <AnimatePresence mode="wait">
              <StepVisual key={activeStep} step={steps[activeStep]} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
