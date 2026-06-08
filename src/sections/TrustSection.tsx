import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FlaskConical, Lock, ShieldCheck, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { trustPillars } from '@/data/stats';

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Lock,
  ShieldCheck,
  Stethoscope,
};

const cardColors = [
  { from: '#10b981', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  { from: '#06b6d4', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.2)' },
  { from: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.2)' },
  { from: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
];

function TrustCard({
  pillar,
  index,
  inView,
}: {
  pillar: typeof trustPillars[0];
  index: number;
  inView: boolean;
}) {
  const Icon = iconMap[pillar.icon] || ShieldCheck;
  const colors = cardColors[index % cardColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.65, ease: 'easeOut' as const }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-3xl p-7 relative overflow-hidden cursor-default transition-all duration-300 h-full"
      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-60 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${colors.from}, transparent)` }}
        aria-hidden="true"
      />

      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: `linear-gradient(145deg, ${colors.from}08, transparent)` }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${colors.from}18`,
            border: `1px solid ${colors.from}28`,
            boxShadow: `0 4px 16px ${colors.from}12`,
          }}
        >
          <Icon size={24} style={{ color: colors.from }} aria-hidden="true" />
        </div>

        {/* Content */}
        <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="section-padding bg-slate-950 text-white relative overflow-hidden"
      aria-label="Trust and privacy commitment"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)',
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
          <Badge variant="dark" dot className="mb-5">Trust & Privacy</Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Built With Privacy, Security,{' '}
            <GradientText>And Science</GradientText>{' '}
            At Its Core
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Your health data is profoundly personal. We treat it that way.
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustPillars.map((pillar, i) => (
            <TrustCard key={pillar.id} pillar={pillar} index={i} inView={inView} />
          ))}
        </div>

        {/* Certification badges row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'DPDP Act 2023', sub: 'Compliant', icon: '🛡️' },
            { label: 'ISO 27001', sub: 'Certified Infrastructure', icon: '🔐' },
            { label: 'Data Stored in', sub: 'India Only', icon: '🇮🇳' },
            { label: 'End-to-End', sub: 'Encryption', icon: '🔒' },
            { label: 'No Data', sub: 'Sold Ever', icon: '🚫' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-xl" aria-hidden="true">{badge.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-none mb-0.5">{badge.label}</p>
                <p className="text-slate-500 text-[11px]">{badge.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
