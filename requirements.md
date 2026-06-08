# ORRA+ Landing Page - Master Specification

## Role

You are a Staff Frontend Engineer, Principal Product Designer, Growth Marketer, and UI Architect.

Your task is to build a production-ready one-page landing website for ORRA+.

This is not a generic startup website.

The final result should look like a venture-backed health technology company valued at $100M+.

Design inspiration:

* Apple
* Stripe
* Linear
* Levels Health
* WHOOP
* Ramp

The website should immediately communicate:

* Trust
* Scientific credibility
* Premium quality
* Future-focused healthcare
* Preventive health intelligence

---

# Brand

## Name

ORRA+

## Tagline

The Future of Everyday Health

## Mission

Help Indians detect health risks early, understand their bodies better, and make personalized health decisions before disease develops.

## Core Promise

Transform health from reactive treatment to proactive prevention.

---

# Business Goals

The website must:

1. Build trust and credibility
2. Explain the ORRA+ vision
3. Capture waitlist registrations
4. Position ORRA+ as a premium health-tech company

Primary KPI:

Waitlist conversions

Secondary KPI:

Brand trust

---

# Technical Requirements

Build using:

* React 19
* TypeScript
* Vite
* TailwindCSS
* Framer Motion
* Lucide Icons

Architecture:

src/
├── components/
├── sections/
├── hooks/
├── utils/
├── assets/
├── data/
├── layouts/
└── types/

Requirements:

* Responsive
* Mobile-first
* Accessibility compliant
* SEO optimized
* Lighthouse > 95
* Dark mode support
* Smooth scrolling
* Performance optimized
* Production ready

---

# Design Direction

Style:

Premium
Minimal
Scientific
Trustworthy
Future-focused

Avoid:

* Medical clinic appearance
* Generic supplement branding
* Cheap wellness aesthetics
* Stock fitness imagery

Visual Feel:

Apple × Levels Health × WHOOP

---

# Color System

Background:
#FFFFFF

Dark:
#0F172A

Primary Green:
#10B981

Secondary Green:
#34D399

Accent:
Gradient Green → Emerald

Neutral:
Tailwind Slate Palette

---

# Typography

Font:

Inter

Hierarchy:

Large Hero Headlines
Strong Section Titles
Comfortable Reading Widths

Premium spacing throughout.

---

# Animation System

Use Framer Motion.

Include:

* Scroll reveal
* Stagger animations
* Hover interactions
* Floating elements
* Gradient motion
* Smooth transitions

Animations should feel premium and subtle.

Never distracting.

---

# Section 1 — Hero

Headline:

The Future of Everyday Health

Subheadline:

ORRA+ combines biomarker insights, nutrition science, and personalized health recommendations to help you stay healthier for longer.

CTA Buttons:

Primary:
Join Waitlist

Secondary:
Take Health Assessment

Hero Visual:

Build a custom futuristic health dashboard.

Display:

* Health Score
* Biomarker Trends
* Nutrition Insights
* Health Risks
* Personalized Recommendations

Do NOT use stock images.

Create dashboard using React components.

Add glassmorphism cards.

Add floating UI elements.

---

# Section 2 — Problem

Headline:

Most Indians Don't Know They're Getting Sick Until It's Too Late.

Explain:

* Prediabetes
* Metabolic dysfunction
* Nutrient deficiencies
* Chronic inflammation

Create:

* Animated metric cards
* Visual disease progression
* Timeline visualization

Goal:

Create urgency without fear.

---

# Section 3 — Solution

Headline:

Health, Personalized To Your Biology.

Step 1

Analyze Key Health Biomarkers

Step 2

Decode Your Health

Step 3

Take Personalized Action

Design:

Interactive roadmap cards.

Each card includes:

* SVG illustration
* Hover animation
* Premium layout

Add animated connecting path.

---

# Section 4 — Health Intelligence Roadmap

This should become the centerpiece section.

Create a premium horizontal roadmap.

Journey:

1. Blood Test & Biomarkers

2. AI Analysis Engine

3. Health Risk Detection

4. Personalized Recommendations

5. Continuous Monitoring

6. Longevity Optimization

Requirements:

* Scroll-triggered animations
* Progress indicator
* Interactive milestones
* Desktop timeline
* Mobile vertical roadmap

Must feel like an Apple product launch graphic.

---

# Section 5 — Founder Story

Headline:

Why We Started ORRA+

Story:

Many Indians watch family members struggle with diabetes, obesity, stress, and lifestyle diseases.

The challenge is not healthcare access.

The challenge is understanding health early enough to take action.

ORRA+ exists to move healthcare from treatment to prevention.

Design:

Editorial storytelling layout.

Large typography.

Premium spacing.

Subtle gradients.

---

# Section 6 — Comparison

Headline:

Beyond Generic Health Advice

Create a premium comparison table.

Traditional Healthcare:

* Reactive
* Generic Recommendations
* Complex Reports
* Treatment Focused

ORRA+:

* Preventive
* Personalized Insights
* Actionable Guidance
* Wellness Focused

Use premium hover effects.

---

# Section 7 — Science & Trust

Headline:

Built On Data. Guided By Science.

Pillars:

* Biomarker Analysis
* Nutrition Science
* Lifestyle Assessment
* Preventive Frameworks
* Personalized Recommendations

Visuals:

* Floating icons
* Scientific grid background
* Animated trust indicators

---

# Section 8 — Future Vision

Headline:

Building The Future Of Preventive Healthcare

Today:

* Personalized Insights
* Risk Awareness
* Wellness Plans

Tomorrow:

* AI Health Coach
* Continuous Monitoring
* Disease Prediction
* Longevity Optimization

Create futuristic visual treatment.

---

# Section 9 — Waitlist

Headline:

Be Among The First To Experience ORRA+

Fields:

* Full Name
* Email
* Mobile Number

Requirements:

Use React Hook Form.

Implement:

* Validation
* Loading State
* Success State
* Error State

For now:

Store submissions in localStorage.

Structure code so backend integration can be added easily.

---

# Section 10 — Trust

Headline:

Built With Privacy, Security, And Science At Its Core

Trust Cards:

* Evidence-Based Recommendations
* Privacy First Design
* Secure Data Handling
* Expert Guided Methodology

---

# Footer

Include:

* About
* Privacy Policy
* Terms
* Contact

Mission Statement:

ORRA+ is building the future of preventive healthcare for India.

---

# SEO

Implement:

* Meta Tags
* OpenGraph
* Twitter Cards
* Structured Data
* robots.txt
* sitemap.xml

Target keywords:

* preventive healthcare India
* health biomarkers
* personalized health insights
* health risk assessment
* longevity health platform

---

# Performance

Requirements:

* Code splitting
* Lazy loading
* Tree shaking
* Optimized bundle
* Lighthouse > 95

---

# GitHub Actions

Create:

.github/workflows/deploy.yml

Requirements:

* Deploy on push to main
* GitHub Pages
* Dependency caching
* Build validation
* Production deployment

---

# Deliverables

Generate:

1. Complete folder structure
2. Full React source code
3. Tailwind configuration
4. TypeScript configuration
5. Framer Motion implementation
6. Reusable components
7. SEO files
8. GitHub Actions workflow
9. README
10. Deployment guide

Output all files one by one.

Do not output pseudo code.

Generate production-ready code only.
