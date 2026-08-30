import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="w-full bg-white border-t border-neutral-200 py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div id="footer-brand-info" className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-semibold text-neutral-900">Modern Web Page</div>
          <div className="text-xs text-neutral-700">
            Crafted with clean typography, responsive layout &amp; purposeful interactions.
          </div>
        </div>

        <div id="footer-actions" className="flex items-center gap-4">
          <button
            id="btn-scroll-top"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
