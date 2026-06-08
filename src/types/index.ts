// =============================================
// SHARED TYPE DEFINITIONS
// =============================================

export interface WaitlistEntry {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  createdAt: string;
}

export interface WaitlistFormData {
  fullName: string;
  email: string;
  mobile: string;
}

export interface RoadmapStep {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  source: string;
}

export interface ComparisonItem {
  feature: string;
  traditional: boolean | string;
  orra: boolean | string;
}

export interface TrustPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SciencePillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
}

export interface FutureFeature {
  title: string;
  description: string;
  icon: string;
  available: 'today' | 'tomorrow';
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface NavLink {
  label: string;
  href: string;
}
