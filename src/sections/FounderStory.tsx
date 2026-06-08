import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';

const storyBeats = [
  {
    id: 'observation',
    eyebrow: 'The Observation',
    text: 'Many Indians watch family members struggle with diabetes, obesity, hypertension, and fatigue — diseases that quietly develop over years before anyone notices.',
  },
  {
    id: 'insight',
    eyebrow: 'The Insight',
    text: 'The challenge is not healthcare access. The challenge is understanding health early enough to actually do something about it.',
  },
  {
    id: 'mission',
    eyebrow: 'The Mission',
    text: 'ORRA+ exists to move healthcare from reactive treatment to preventive intelligence. To give every Indian the tools to understand their own body — years before disease appears.',
  },
];

const pullQuote =
  "We believe the greatest healthcare revolution in India won't happen in hospitals. It will happen the moment people understand their own biology.";

export function FounderStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
      aria-label="Founder story — why we started ORRA+"
    >
      {/* Gradient decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <Badge variant="brand" className="mb-6">Our Story</Badge>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight max-w-3xl">
              Why We{' '}
              <GradientText>Started</GradientText>
              {' '}ORRA+
            </h2>
          </motion.div>

          {/* Story beats */}
          <div className="space-y-0">
            {storyBeats.map((beat, i) => (
              <motion.div
                key={beat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.7, ease: 'easeOut' as const }}
                className="flex gap-8 md:gap-16 pb-16 border-b border-slate-100 last:border-0 last:pb-0 mb-16 last:mb-0"
              >
                {/* Left — number */}
                <div className="flex-shrink-0">
                  <span
                    className="text-[80px] md:text-[120px] font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Right — content */}
                <div className="flex-1 pt-4 md:pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
                    {beat.eyebrow}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                    {beat.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' as const }}
            className="mt-20 relative"
          >
            <div
              className="rounded-4xl p-10 md:p-14 relative overflow-hidden"
              style={{
                background: 'linear-gradient(165deg, #0a1628 0%, #0d2318 100%)',
              }}
            >
              {/* Decorative quote mark */}
              <Quote
                size={80}
                className="absolute top-8 left-8 text-brand-500/10"
                aria-hidden="true"
              />
              <Quote
                size={80}
                className="absolute bottom-8 right-8 text-brand-500/10 rotate-180"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <blockquote>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
                    {pullQuote}
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-500/40" />
                  <div className="w-2 h-2 rounded-full bg-brand-500/60" aria-hidden="true" />
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-500/40" />
                </div>

                {/* Founder */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
                    aria-hidden="true"
                  >
                    F
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">The ORRA+ Team</p>
                    <p className="text-slate-500 text-xs">Preventive Healthcare for India</p>
                  </div>
                </div>
              </div>

              {/* Gradient orbs */}
              <div
                className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #10b981, transparent)' }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-8 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
