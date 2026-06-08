import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Dna,
  Salad,
  Heart,
  Target,
  Fingerprint,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { sciencePillars } from '@/data/biomarkers';

const iconMap: Record<string, React.ElementType> = {
  Dna,
  Salad,
  Heart,
  Target,
  Fingerprint,
};

function PillarCard({ pillar, index, inView }: {
  pillar: typeof sciencePillars[0];
  index: number;
  inView: boolean;
}) {
  const Icon = iconMap[pillar.icon] || Dna;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.65, ease: 'easeOut' as const }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-3xl p-7 relative overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.03))' }}
        aria-hidden="true"
      />

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.6), transparent)' }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))',
          border: '1px solid rgba(16,185,129,0.2)',
          boxShadow: '0 4px 16px rgba(16,185,129,0.1)',
        }}
      >
        <Icon size={24} className="text-brand-400" aria-hidden="true" />
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{pillar.description}</p>

      {/* Detail chip */}
      <div
        className="px-3 py-2 rounded-xl text-[11px] text-slate-500 leading-relaxed"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        {pillar.detail}
      </div>
    </motion.div>
  );
}

function BiomarkerOrb({ size, x, y, delay, color }: {
  size: number;
  x: string;
  y: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 5 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  );
}

export function Science() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="science"
      ref={sectionRef}
      className="section-padding bg-slate-950 text-white relative overflow-hidden"
      aria-label="Scientific foundation of ORRA+"
    >
      {/* Animated background orbs */}
      <BiomarkerOrb size={400} x="-100px" y="0px" delay={0} color="rgba(16,185,129,0.15)" />
      <BiomarkerOrb size={300} x="70%" y="50%" delay={1.5} color="rgba(6,182,212,0.1)" />
      <BiomarkerOrb size={250} x="30%" y="70%" delay={3} color="rgba(139,92,246,0.08)" />

      {/* Scientific grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="dark" dot className="mb-5">Science & Trust</Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Built On Data.{' '}
            <GradientText>Guided By Science.</GradientText>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every recommendation ORRA+ makes is grounded in biomarker science, clinical research,
            and India-specific health data. No pseudoscience. No guesswork.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {sciencePillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} inView={inView} />
          ))}
        </div>

        {/* Trust indicators row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '60+', label: 'Biomarkers Analyzed', suffix: '' },
            { value: '12', label: 'Health Domains', suffix: '' },
            { value: '100%', label: 'Data Stays in India', suffix: '' },
            { value: '1.4B', label: "Indians We're Building For", suffix: '' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-3xl font-black gradient-text-static mb-1">{stat.value}</div>
              <p className="text-slate-500 text-xs font-medium leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
