import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { Button } from '@/components/ui/Button';
import { submitWaitlistEntry } from '@/utils/waitlist';
import type { WaitlistFormData, FormStatus } from '@/types';

// ─── Zod Schema ────────────────────────────────────────────────────────────

const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Please enter a valid name'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(13, 'Mobile number is too long')
    .regex(/^[+]?[0-9\s-]{10,13}$/, 'Please enter a valid Indian mobile number'),
});

// ─── Field Component ───────────────────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  icon: React.ElementType;
  error?: string;
  registration: ReturnType<ReturnType<typeof useForm<WaitlistFormData>>['register']>;
}

function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  error,
  registration,
}: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" aria-hidden="true">
          <Icon size={16} className={error ? 'text-red-400' : 'text-slate-400'} />
        </div>
        <input
          {...registration}
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'name'}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-slate-900 placeholder:text-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white ${
            error
              ? 'border-red-300 focus:ring-red-400 focus:border-transparent'
              : 'border-slate-200 focus:ring-brand-400 focus:border-transparent'
          }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-500 flex items-center gap-1.5"
          >
            <AlertCircle size={12} aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Success State ─────────────────────────────────────────────────────────

function SuccessState({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      className="text-center py-8"
      role="status"
      aria-live="polite"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        className="w-20 h-20 rounded-full bg-brand-500/15 border-2 border-brand-500/30 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle size={36} className="text-brand-500" aria-hidden="true" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-black text-white mb-2">
          You're on the list, {name.split(' ')[0]}! 🎉
        </h3>
        <p className="text-slate-400 leading-relaxed max-w-sm mx-auto mb-6">
          We'll be in touch with early access details. You're among the first to experience
          ORRA+ in India.
        </p>

        {/* What happens next */}
        <div
          className="rounded-2xl p-5 text-left"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">What happens next</p>
          <ul className="space-y-2.5">
            {[
              'Confirmation email sent to your inbox',
              'Early access invitation before public launch',
              'Exclusive health insights newsletter',
            ].map((step) => (
              <li key={step} className="flex items-center gap-2.5 text-sm text-slate-400">
                <CheckCircle size={14} className="text-brand-500 flex-shrink-0" aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Waitlist Section ──────────────────────────────────────────────────────

export function Waitlist() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitWaitlistEntry(data);
      setSubmittedName(data.fullName);
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="section-padding bg-slate-950 text-white relative overflow-hidden"
      aria-label="Join the ORRA+ waitlist"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <Badge variant="dark" dot className="mb-5">Early Access</Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Be Among The First To{' '}
              <GradientText>Experience ORRA+</GradientText>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Join thousands of Indians taking control of their health before disease develops.
              Early access. Zero cost to join.
            </p>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Users size={14} className="text-brand-500" aria-hidden="true" />
              <span>
                <span className="text-white font-semibold">2,400+</span> people already on the waitlist
              </span>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' as const }}
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <SuccessState key="success" name={submittedName} />
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Waitlist registration form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {status === 'error' && errorMessage && (
                      <motion.div
                        role="alert"
                        aria-live="assertive"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400"
                      >
                        <AlertCircle size={16} className="flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm">{errorMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <InputField
                    id="fullName"
                    label="Full Name"
                    placeholder="Arjun Mehta"
                    icon={User}
                    error={errors.fullName?.message}
                    registration={register('fullName')}
                  />

                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="arjun@example.com"
                    icon={Mail}
                    error={errors.email?.message}
                    registration={register('email')}
                  />

                  <InputField
                    id="mobile"
                    label="Mobile Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    icon={Phone}
                    error={errors.mobile?.message}
                    registration={register('mobile')}
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === 'loading'}
                    icon={status !== 'loading' ? <ArrowRight size={18} /> : undefined}
                    className="w-full text-base mt-2"
                  >
                    {status === 'loading' ? 'Joining Waitlist...' : 'Join the Waitlist'}
                  </Button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-slate-600 leading-relaxed">
                    By joining, you agree to our{' '}
                    <a href="#" className="text-slate-500 underline hover:text-brand-400 transition-colors">
                      Privacy Policy
                    </a>
                    . We'll never sell your data or spam you.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8 text-xs text-slate-600"
          >
            {[
              '🔒 Data encrypted & secure',
              '🇮🇳 Stored in India',
              '✉️ No spam, ever',
              '🚫 Cancel anytime',
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-1">{badge}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
