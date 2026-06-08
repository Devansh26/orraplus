import { lazy, Suspense } from 'react';
import { PageLayout } from '@/layouts/PageLayout';
import { Hero } from '@/sections/Hero';

// Lazy load below-fold sections for performance
const Problem = lazy(() =>
  import('@/sections/Problem').then((m) => ({ default: m.Problem })),
);
const Solution = lazy(() =>
  import('@/sections/Solution').then((m) => ({ default: m.Solution })),
);
const Roadmap = lazy(() =>
  import('@/sections/Roadmap').then((m) => ({ default: m.Roadmap })),
);
const FounderStory = lazy(() =>
  import('@/sections/FounderStory').then((m) => ({ default: m.FounderStory })),
);
const Comparison = lazy(() =>
  import('@/sections/Comparison').then((m) => ({ default: m.Comparison })),
);
const Science = lazy(() =>
  import('@/sections/Science').then((m) => ({ default: m.Science })),
);
const FutureVision = lazy(() =>
  import('@/sections/FutureVision').then((m) => ({ default: m.FutureVision })),
);
const Waitlist = lazy(() =>
  import('@/sections/Waitlist').then((m) => ({ default: m.Waitlist })),
);
const TrustSection = lazy(() =>
  import('@/sections/TrustSection').then((m) => ({ default: m.TrustSection })),
);

// Minimal section skeleton while loading
function SectionSkeleton() {
  return (
    <div
      className="h-64 animate-pulse"
      style={{ background: 'rgba(255,255,255,0.02)' }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <PageLayout>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-brand-500 text-white px-4 py-2 rounded-lg font-semibold text-sm"
      >
        Skip to main content
      </a>

      {/* Section 1: Hero — loaded eagerly (above fold) */}
      <Hero />

      {/* Sections 2–10: lazy loaded for performance */}
      <Suspense fallback={<SectionSkeleton />}>
        <Problem />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Solution />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Roadmap />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FounderStory />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Comparison />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Science />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FutureVision />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Waitlist />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TrustSection />
      </Suspense>
    </PageLayout>
  );
}

export default App;
