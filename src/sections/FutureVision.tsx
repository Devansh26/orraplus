import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Lightbulb,
  ShieldAlert,
  ClipboardList,
  Bot,
  Activity,
  TrendingUp,
  Infinity as InfinityIcon,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { futureFeatures } from '@/data/biomarkers';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  ShieldAlert,
  ClipboardList,
  Bot,
  Activity,
  TrendingUp,
  Infinity: InfinityIcon,
};


function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: typeof futureFeatures[0];
  index: number;
  inView: boolean;
}) {
  const Icon = iconMap[feature.icon] || Activity;
  const isToday = feature.available === 'today';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ delay: 0.05 + index * 0.1, duration: 0.55, ease: 'easeOut' as const }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group rounded-2xl p-5 relative overflow-hidden transition-all duration-300"
      style={{
        background: isToday
          ? 'rgba(16,185,129,0.06)'
          : 'rgba(139,92,246,0.06)',
        border: isToday
          ? '1px solid rgba(16,185,129,0.2)'
          : '1px solid rgba(139,92,246,0.2)',
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
        style={{
          background: isToday
            ? 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent)'
            : 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: isToday ? 'rgba(16,185,129,0.15)' : 'rgba(139,92,246,0.15)',
            border: isToday ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(139,92,246,0.25)',
          }}
        >
          <Icon
            size={18}
            style={{ color: isToday ? '#10b981' : '#a78bfa' }}
            aria-hidden="true"
          />
        </div>

        <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export function FutureVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const todayFeatures = futureFeatures.filter((f) => f.available === 'today');
  const tomorrowFeatures = futureFeatures.filter((f) => f.available === 'tomorrow');

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #0a1628 0%, #0d1a2e 100%)' }}
      aria-label="The future vision of ORRA+"
    >
      {/* Futuristic background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Large orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge variant="dark" dot className="mb-5">Future Vision</Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Building The Future Of{' '}
            <GradientText>Preventive Healthcare</GradientText>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Today we detect. Tomorrow we predict and prevent. Our roadmap goes beyond health
            insights to full longevity intelligence.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* TODAY column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div
              className="rounded-3xl p-7 h-full"
              style={{
                background: 'rgba(16,185,129,0.04)',
                border: '1px solid rgba(16,185,129,0.15)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                  Available Now
                </span>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">
                Today
              </h3>

              {/* Timeline line */}
              <div className="w-full h-px bg-gradient-to-r from-brand-500/40 to-transparent mb-6" aria-hidden="true" />

              {/* Features */}
              <div className="space-y-3">
                {todayFeatures.map((feature, i) => (
                  <FeatureCard key={feature.title} feature={feature} index={i} inView={inView} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* TOMORROW column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div
              className="rounded-3xl p-7 h-full relative overflow-hidden"
              style={{
                background: 'rgba(139,92,246,0.04)',
                border: '1px solid rgba(139,92,246,0.15)',
              }}
            >
              {/* Coming soon badge */}
              <div
                className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: 'rgba(139,92,246,0.2)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#a78bfa',
                }}
              >
                Coming Soon
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: '#a78bfa' }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#a78bfa' }}
                >
                  On The Horizon
                </span>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">
                Tomorrow
              </h3>

              {/* Timeline line */}
              <div
                className="w-full h-px mb-6"
                style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.4), transparent)' }}
                aria-hidden="true"
              />

              {/* Features */}
              <div className="space-y-3">
                {tomorrowFeatures.map((feature, i) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                    index={i + todayFeatures.length}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Be part of the health revolution from day one.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<ArrowRight size={18} />}
            className="text-base mx-auto"
          >
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
