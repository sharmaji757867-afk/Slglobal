import React, { useState } from 'react';
import { Layers, Type, Sliders, CheckCircle2 } from 'lucide-react';

const principles = [
  {
    id: 'p-typography',
    icon: Type,
    title: 'Typographic Contrast',
    badge: 'Legibility',
    description:
      'Pairing distinctive display serif letterforms with a neutral sans-serif body creates natural optical weight and effortless hierarchy.',
    bulletPoints: [
      'Scale step ratio of 1.25+ for clean optical separation',
      'Optimal reading line width between 60–75 characters',
      'Comfortable 1.6 baseline line-height for effortless scanning',
    ],
  },
  {
    id: 'p-layout',
    icon: Layers,
    title: 'Harmonic Spatial Rhythms',
    badge: 'Proportion',
    description:
      'Eliminating visual clutter through deliberate negative space, consistent margin calculations, and cohesive border radius geometry.',
    bulletPoints: [
      'Container padding strictly exceeds internal element spacing',
      'Mathematical nested corner radius alignment',
      'Zero arbitrary floating borders or uncalibrated dropshadows',
    ],
  },
  {
    id: 'p-interaction',
    icon: Sliders,
    title: 'Tactile Direct Feedback',
    badge: 'Usability',
    description:
      'Interactive elements provide immediate, predictable states with crisp transitions, reliable touch targets, and accessible color contrast.',
    bulletPoints: [
      'Minimum 44px touch targets on mobile touch devices',
      'Subtle hover and active states without visual lag',
      'Color contrast meeting or exceeding WCAG AA standards',
    ],
  },
];

export const Highlights: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string>(principles[0].id);

  const activeItem = principles.find((p) => p.id === selectedPrinciple) || principles[0];
  const ActiveIcon = activeItem.icon;

  return (
    <section id="principles" className="py-16 border-b border-neutral-200 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-3 mb-10">
          <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Architecture & Principles
          </div>
          <h2 id="principles-heading" className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
            Foundations of <span className="font-serif italic font-medium">deliberate</span> interface design.
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl leading-relaxed">
            Every element on this page serves a distinct visual and structural purpose, crafted without generic templates or artificial decoration.
          </p>
        </div>

        {/* Tab selection */}
        <div id="principle-tabs" className="flex flex-wrap gap-2 pb-6 border-b border-neutral-200">
          {principles.map((p) => {
            const isSelected = p.id === selectedPrinciple;
            return (
              <button
                key={p.id}
                id={`btn-principle-tab-${p.id}`}
                onClick={() => setSelectedPrinciple(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-750 hover:bg-neutral-200'
                }`}
              >
                <p.icon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Principle Content */}
        <div id="principle-active-card" className="mt-8 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-xs">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 id="active-principle-title" className="text-xl font-semibold text-neutral-900 tracking-tight">
                  {activeItem.title}
                </h3>
                <span className="text-xs font-medium text-neutral-700">{activeItem.badge}</span>
              </div>
            </div>
          </div>

          <p id="active-principle-desc" className="text-neutral-700 text-base leading-relaxed mb-6 max-w-2xl">
            {activeItem.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="text-xs font-semibold text-neutral-750 uppercase tracking-wider">
              Key Guidelines
            </div>
            <ul className="space-y-2.5">
              {activeItem.bulletPoints.map((point, index) => (
                <li key={index} id={`active-principle-point-${index}`} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
