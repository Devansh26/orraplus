import type { StatItem, ComparisonItem, TrustPillar } from '@/types';

export const healthStats: StatItem[] = [
  {
    value: 77,
    suffix: 'M',
    label: 'Indians with Diabetes',
    description:
      'India is the diabetes capital of the world. Most cases were preventable with early detection.',
    source: 'IDF Diabetes Atlas 2023',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Pre-Diabetic & Unaware',
    description:
      "Nearly 40% of Indians are pre-diabetic and don't know it. Biomarker testing can catch this years in advance.",
    source: 'ICMR-INDIAB Study',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Have Vitamin D Deficiency',
    description:
      'Nutrient deficiencies silently impair immunity, energy, and cognition — easily addressable with the right data.',
    source: 'National Nutrition Survey',
  },
];

export const comparisonItems: ComparisonItem[] = [
  { feature: 'Approach', traditional: 'Reactive (treat illness)', orra: 'Preventive (detect early)' },
  { feature: 'Recommendations', traditional: 'Generic, one-size-fits-all', orra: 'Personalized to your biology' },
  { feature: 'Reporting', traditional: 'Complex lab reports', orra: 'Clear, actionable insights' },
  { feature: 'Focus', traditional: 'Disease treatment', orra: 'Wellness optimization' },
  { feature: 'Biomarker Depth', traditional: 'Basic panels (10-15 markers)', orra: 'Comprehensive (60+ markers)' },
  { feature: 'Follow-up', traditional: 'Rarely provided', orra: 'Continuous monitoring' },
  { feature: 'Indian Context', traditional: 'Western norms applied', orra: 'India-specific baselines' },
  { feature: 'Nutrition Science', traditional: 'General guidelines', orra: 'Personalized nutrition protocols' },
];

export const trustPillars: TrustPillar[] = [
  {
    id: 'evidence',
    icon: 'FlaskConical',
    title: 'Evidence-Based',
    description:
      'Every recommendation is grounded in peer-reviewed research and clinical evidence. No pseudoscience. No guesswork.',
  },
  {
    id: 'privacy',
    icon: 'Lock',
    title: 'Privacy First',
    description:
      'Your health data is yours. We never sell data. End-to-end encryption. DPDP Act compliant design.',
  },
  {
    id: 'secure',
    icon: 'ShieldCheck',
    title: 'Secure by Design',
    description:
      'Enterprise-grade security. Data stored in India on ISO 27001 certified infrastructure.',
  },
  {
    id: 'expert',
    icon: 'Stethoscope',
    title: 'Expert Guided',
    description:
      "Methodology developed with doctors, nutritionists, and researchers across India's leading institutions.",
  },
];
