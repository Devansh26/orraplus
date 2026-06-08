import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { comparisonItems } from '@/data/stats';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function ComparisonCell({
  value,
  highlight,
}: {
  value: boolean | string;
  highlight?: boolean;
}) {
  if (typeof value === 'boolean') {
    return (
      <div className="flex justify-center">
        {value ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className={`w-7 h-7 rounded-full flex items-center justify-center ${
              highlight
                ? 'bg-brand-500 shadow-glow-sm'
                : 'bg-slate-100'
            }`}
          >
            <Check size={14} className={highlight ? 'text-white' : 'text-slate-500'} aria-hidden="true" />
          </motion.div>
        ) : (
          <div className="w-7 h-7 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
            <X size={14} className="text-red-400" aria-hidden="true" />
          </div>
        )}
      </div>
    );
  }

  return (
    <span
      className={`text-sm font-medium leading-snug ${
        highlight ? 'text-brand-600 font-semibold' : 'text-slate-500'
      }`}
    >
      {value}
    </span>
  );
}

export function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="section-padding bg-slate-50 relative overflow-hidden"
      aria-label="ORRA+ vs traditional healthcare comparison"
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge variant="brand" className="mb-5">The Difference</Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            Beyond{' '}
            <GradientText>Generic</GradientText>
            {' '}Health Advice
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Traditional healthcare waits for you to get sick. ORRA+ intervenes before you ever do.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-slate-100">
            <div className="p-5 bg-slate-50">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Feature</p>
            </div>
            <div className="p-5 border-l border-slate-100 bg-slate-50">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Traditional</p>
            </div>
            <div className="p-5 border-l border-slate-100 bg-gradient-to-b from-brand-50 to-white">
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 rounded-md bg-brand-500 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 18 18" fill="white" aria-hidden="true">
                    <path d="M9 2L12.5 8H14.5L9 16L3.5 8H5.5L9 2Z" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-600">ORRA+</p>
              </div>
            </div>
          </div>

          {/* Table rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            role="table"
            aria-label="Feature comparison"
          >
            {comparisonItems.map((item) => (
              <motion.div
                key={item.feature}
                variants={rowVariants}
                role="row"
                className="grid grid-cols-3 border-b border-slate-50 last:border-0 group transition-colors duration-150 hover:bg-brand-50/30"
              >
                {/* Feature name */}
                <div className="p-4 md:p-5 flex items-center" role="rowheader">
                  <p className="text-sm font-semibold text-slate-700">{item.feature}</p>
                </div>

                {/* Traditional */}
                <div
                  role="cell"
                  className="p-4 md:p-5 border-l border-slate-50 flex items-center justify-center"
                >
                  <ComparisonCell value={item.traditional} />
                </div>

                {/* ORRA+ */}
                <div
                  role="cell"
                  className="p-4 md:p-5 border-l border-brand-100/50 flex items-center justify-center bg-brand-50/30 group-hover:bg-brand-50/60 transition-colors duration-150"
                >
                  <ComparisonCell value={item.orra} highlight />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Ready to experience the difference?{' '}
            <button
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-600 font-semibold hover:text-brand-500 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
            >
              Join the waitlist →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
