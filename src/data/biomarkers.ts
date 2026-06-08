import type { SciencePillar, FutureFeature } from '@/types';

export const sciencePillars: SciencePillar[] = [
  {
    id: 'biomarker',
    icon: 'Dna',
    title: 'Biomarker Analysis',
    description: '60+ markers analyzed across metabolic, hormonal, inflammatory, and nutritional domains.',
    detail: 'HbA1c, Insulin, Thyroid panel, CRP, Homocysteine, Vitamin D, B12, Iron studies & more',
  },
  {
    id: 'nutrition',
    icon: 'Salad',
    title: 'Nutrition Science',
    description: 'Personalized nutrition protocols anchored in micronutrient science and metabolic research.',
    detail: 'Glycemic response, macronutrient optimization, Indian dietary patterns, deficiency correction',
  },
  {
    id: 'lifestyle',
    icon: 'Heart',
    title: 'Lifestyle Assessment',
    description: 'Sleep, stress, activity, and environment — all integrated into your health profile.',
    detail: 'Sleep quality index, stress biomarkers, activity levels, occupational risk factors',
  },
  {
    id: 'preventive',
    icon: 'Target',
    title: 'Preventive Frameworks',
    description: 'Based on modern preventive medicine protocols validated across diverse South Asian populations.',
    detail: 'Metabolic syndrome criteria, cardiovascular risk scoring, diabetes prevention algorithms',
  },
  {
    id: 'personalized',
    icon: 'Fingerprint',
    title: 'Personalized AI',
    description: 'Recommendations adapted to your unique biology, history, goals, and Indian lifestyle context.',
    detail: 'Proprietary ML model trained on Indian health data across age, gender, and geography',
  },
];

export const futureFeatures: FutureFeature[] = [
  {
    title: 'Personalized Insights',
    description: 'Biomarker-based health intelligence tailored to you.',
    icon: 'Lightbulb',
    available: 'today',
  },
  {
    title: 'Risk Awareness',
    description: 'Early detection of metabolic and chronic disease risk.',
    icon: 'ShieldAlert',
    available: 'today',
  },
  {
    title: 'Wellness Plans',
    description: 'Actionable nutrition and lifestyle guidance.',
    icon: 'ClipboardList',
    available: 'today',
  },
  {
    title: 'AI Health Coach',
    description: 'A 24/7 intelligent health companion that learns from you.',
    icon: 'Bot',
    available: 'tomorrow',
  },
  {
    title: 'Continuous Monitoring',
    description: 'Real-time biomarker tracking through wearables and at-home tests.',
    icon: 'Activity',
    available: 'tomorrow',
  },
  {
    title: 'Disease Prediction',
    description: 'Probabilistic disease forecasting years in advance.',
    icon: 'TrendingUp',
    available: 'tomorrow',
  },
  {
    title: 'Longevity Optimization',
    description: 'Protocols to extend healthspan and biological age reversal.',
    icon: 'Infinity',
    available: 'tomorrow',
  },
];
