import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { healthStats } from '@/data/stats';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

// Disease progression timeline
const progressionSteps = [
  { year: 'Year 0', label: 'Silent Biomarker Changes', severity: 0.1, color: '#10b981' },
  { year: 'Year 2', label: 'Pre-diabetes Risk', severity: 0.35, color: '#f59e0b' },
  { year: 'Year 5', label: 'Metabolic Dysfunction', severity: 0.6, color: '#f97316' },
  { year: 'Year 8', label: 'Disease Onset', severity: 0.85, color: '#ef4444' },
  { year: 'Year 10+', label: 'Chronic Condition', severity: 1, color: '#dc2626' },
];

function ProgressionTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative" aria-label="Disease progression timeline">
      {/* Timeline track */}
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" aria-hidden="true">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 via-amber-500 to-red-600"
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.8, ease: 'easeOut' as const, delay: 0.3 }}
        />
      </div>

      <div className="grid grid-cols-5 gap-2 relative">
        {progressionSteps.map((step, i) => (
          <motion.div
            key={step.year}
            className="flex flex-col items-center gap-3 pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
          >
            {/* Node */}
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-xs text-white relative z-10 shadow-md"
              style={{
                background: step.color,
                borderColor: step.color,
                boxShadow: `0 0 16px ${step.color}40`,
              }}
            >
              {Math.round(step.severity * 100)}%
            </div>

            {/* Label */}
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wide leading-tight">
                {step.year}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight hidden sm:block">
                {step.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ORRA+ intervention point */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 1.5 }}
        className="mt-6 flex items-center gap-3 p-3.5 rounded-2xl bg-brand-50 border border-brand-200"
      >
        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
          <TrendingDown size={14} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-700">ORRA+ detects risk at Year 0–2</p>
          <p className="text-xs text-brand-600">Before symptoms appear — when intervention is most effective.</p>
        </div>
      </motion.div>
    </div>
  );
}

const statIcons = [Users, AlertTriangle, TrendingDown];

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="section-padding bg-slate-950 text-white relative overflow-hidden"
      aria-label="The problem with healthcare in India"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(239,68,68,0.08), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
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
              The Reality
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6"
          >
            Most Indians Don't Know{' '}
            <GradientText from="from-amber-400" via="via-red-400" to="to-red-500" animated={false}>
              They're Getting Sick
            </GradientText>
            {' '}Until It's Too Late.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
            Lifestyle diseases develop silently over years. By the time symptoms appear,
            the window for easy prevention has often closed.
          </motion.p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {healthStats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative rounded-3xl p-7 overflow-hidden group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.04), transparent)' }}
                  />
                </div>

                <Icon size={22} className="text-red-400 mb-4" aria-hidden="true" />

                <div className="text-5xl font-black mb-2 leading-none">
                  <AnimatedNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={2000}
                    className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent"
                  />
                </div>

                <p className="font-bold text-white text-lg mb-3">{stat.label}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{stat.description}</p>
                <p className="text-[11px] text-slate-600 font-medium uppercase tracking-widest">
                  Source: {stat.source}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)' }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Conditions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {[
            { condition: 'Pre-Diabetes', icon: '🩸', stat: '136M', desc: 'Indians at risk, most undiagnosed' },
            { condition: 'Metabolic Dysfunction', icon: '⚡', stat: '1 in 3', desc: 'Indians show early metabolic signs' },
            { condition: 'Nutrient Deficiencies', icon: '🌿', stat: '75%', desc: 'Vitamin D deficient across India' },
            { condition: 'Chronic Inflammation', icon: '🔥', stat: 'Silent', desc: 'Root cause of most chronic diseases' },
          ].map((item) => (
            <motion.div
              key={item.condition}
              variants={itemVariants}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <p className="text-white font-bold text-base mb-1">{item.condition}</p>
              <p className="text-brand-400 font-black text-2xl mb-1">{item.stat}</p>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="rounded-3xl p-8"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                Disease Progression
              </p>
              <h3 className="text-2xl font-bold text-white">The Silent Decade</h3>
            </div>
            <Badge variant="danger">Without Early Detection</Badge>
          </div>

          <ProgressionTimeline />
        </motion.div>
      </div>
    </section>
  );
}
