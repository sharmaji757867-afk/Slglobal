import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  readingMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ readingMode }) => {
  return (
    <section id="overview" className="pt-16 pb-14 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div id="hero-badge-container" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Design, Typography & Precision Layout</span>
          </div>

          <h1
            id="hero-main-title"
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 leading-[1.15]"
          >
            The art of <span className="font-serif italic font-medium">purposeful</span> digital craft.
          </h1>

          <p
            id="hero-lead-paragraph"
            className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl"
          >
            A minimal, thoughtfully formatted web space engineered with intentional contrast, harmonious proportions, and instant client responsiveness.
          </p>

          {!readingMode && (
            <motion.div
              id="hero-actions-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                id="hero-cta-primary"
                href="#interactive"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-colors text-sm font-medium whitespace-nowrap shadow-xs"
              >
                <span>Explore Interactive Tool</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-secondary"
                href="#principles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors text-sm font-medium whitespace-nowrap"
              >
                <span>Read Principles</span>
              </a>
            </motion.div>
          )}

          <div
            id="hero-stats-row"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200/80 text-sm"
          >
            <div id="stat-item-1" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">100% Responsive</div>
                <div className="text-xs text-neutral-700">Adaptive viewport scaling</div>
              </div>
            </div>

            <div id="stat-item-2" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Zero Latency</div>
                <div className="text-xs text-neutral-700">Client-side execution</div>
              </div>
            </div>

            <div id="stat-item-3" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">WCAG AA Standard</div>
                <div className="text-xs text-neutral-700">High-contrast accessibility</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
