import React from 'react';
import { ArrowUpRight, Sparkles, Globe } from 'lucide-react';

interface HeaderProps {
  readingMode: boolean;
  onToggleReadingMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ readingMode, onToggleReadingMode }) => {
  return (
    <header id="site-header" className="w-full border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div id="header-branding" className="flex items-center gap-3">
          <div id="header-logo-icon" className="w-7 h-7 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center font-medium text-sm">
            W
          </div>
          <div className="flex flex-col">
            <span id="site-title-text" className="font-semibold text-neutral-900 text-sm tracking-tight">Modern Web</span>
            <span id="site-subtitle-text" className="text-xs text-neutral-700 hidden sm:inline">Edition 2026</span>
          </div>
        </div>

        <nav id="header-nav" className="flex items-center gap-6 text-sm">
          <a
            id="nav-link-overview"
            href="#overview"
            className="text-neutral-600 hover:text-neutral-900 transition-colors hidden md:inline-block font-medium"
          >
            Overview
          </a>
          <a
            id="nav-link-principles"
            href="#principles"
            className="text-neutral-600 hover:text-neutral-900 transition-colors hidden md:inline-block font-medium"
          >
            Principles
          </a>
          <a
            id="nav-link-interactive"
            href="#interactive"
            className="text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:inline-block font-medium"
          >
            Interactive
          </a>

          <button
            id="btn-toggle-reading-mode"
            onClick={onToggleReadingMode}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              readingMode
                ? 'bg-neutral-900 text-neutral-50 border-neutral-900'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{readingMode ? 'Editorial View' : 'Focus Mode'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
