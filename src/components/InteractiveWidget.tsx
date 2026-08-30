import React, { useState } from 'react';
import { Copy, Check, SlidersHorizontal, RefreshCw, MessageSquare, Send } from 'lucide-react';
import { FeedbackEntry } from '../types';

export const InteractiveWidget: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(20);
  const [lineHeight, setLineHeight] = useState<number>(1.6);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [previewText, setPreviewText] = useState<string>(
    'Good typography makes reading effortless, guiding the reader with natural hierarchy and rhythm.'
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Quick feedback state
  const [feedbackAuthor, setFeedbackAuthor] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackList, setFeedbackList] = useState<FeedbackEntry[]>([
    {
      id: 'fb-1',
      author: 'Editorial Review',
      message: 'Crisp, high-contrast serif and sans-serif pairing with balanced negative space.',
      timestamp: 'Just now',
    },
  ]);

  const handleCopyCSS = () => {
    const cssString = `font-size: ${fontSize}px;\nline-height: ${lineHeight};\nletter-spacing: ${letterSpacing}px;`;
    navigator.clipboard.writeText(cssString).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFontSize(20);
    setLineHeight(1.6);
    setLetterSpacing(0);
    setPreviewText('Good typography makes reading effortless, guiding the reader with natural hierarchy and rhythm.');
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    const newEntry: FeedbackEntry = {
      id: 'fb-' + Date.now(),
      author: feedbackAuthor.trim() || 'Reader',
      message: feedbackText.trim(),
      timestamp: 'Just now',
    };

    setFeedbackList([newEntry, ...feedbackList]);
    setFeedbackText('');
  };

  return (
    <section id="interactive" className="py-16 border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Interactive Inspector
          </div>
          <h2 id="inspector-heading" className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
            Live typography <span className="font-serif italic font-medium">&amp; layout</span> controls.
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl leading-relaxed">
            Adjust typographic variables below to inspect real-time optical rendering and copy the generated styling parameters.
          </p>
        </div>

        {/* The Live Interactive Sandbox */}
        <div id="inspector-sandbox-card" className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-neutral-200">
            {/* Font Size Slider */}
            <div id="control-font-size" className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700">
                <label htmlFor="input-font-size">Font Size</label>
                <span className="font-mono text-neutral-900">{fontSize}px</span>
              </div>
              <input
                id="input-font-size"
                type="range"
                min="14"
                max="36"
                step="1"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-neutral-900 cursor-pointer"
              />
            </div>

            {/* Line Height Slider */}
            <div id="control-line-height" className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700">
                <label htmlFor="input-line-height">Line Height</label>
                <span className="font-mono text-neutral-900">{lineHeight}</span>
              </div>
              <input
                id="input-line-height"
                type="range"
                min="1.1"
                max="2.2"
                step="0.05"
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full accent-neutral-900 cursor-pointer"
              />
            </div>

            {/* Letter Spacing Slider */}
            <div id="control-letter-spacing" className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700">
                <label htmlFor="input-letter-spacing">Tracking</label>
                <span className="font-mono text-neutral-900">{letterSpacing}px</span>
              </div>
              <input
                id="input-letter-spacing"
                type="range"
                min="-1"
                max="3"
                step="0.25"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                className="w-full accent-neutral-900 cursor-pointer"
              />
            </div>
          </div>

          {/* Textarea for preview text */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-750 uppercase tracking-wider">
                Live Canvas
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="btn-reset-preview"
                  onClick={handleReset}
                  className="px-2.5 py-1 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
                <button
                  id="btn-copy-css"
                  onClick={handleCopyCSS}
                  className="px-3 py-1 text-xs font-medium bg-neutral-900 text-white hover:bg-neutral-800 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied CSS' : 'Copy CSS'}</span>
                </button>
              </div>
            </div>

            {/* Live Render Area */}
            <div
              id="live-rendered-preview-box"
              className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 min-h-[140px] flex items-center transition-all"
            >
              <p
                id="live-rendered-paragraph"
                className="text-neutral-900 font-serif"
                style={{
                  fontSize: `${fontSize}px`,
                  lineHeight: lineHeight,
                  letterSpacing: `${letterSpacing}px`,
                }}
              >
                {previewText}
              </p>
            </div>

            {/* Editable input to change preview text */}
            <div className="pt-2">
              <label htmlFor="input-custom-preview" className="block text-xs font-medium text-neutral-700 mb-1.5">
                Edit Sample Content
              </label>
              <input
                id="input-custom-preview"
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300 text-sm text-neutral-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="Type any sentence to test..."
              />
            </div>
          </div>
        </div>

        {/* Reader Notes / Interactive Feedback Block */}
        <div id="interactive-notes-section" className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-neutral-100 text-neutral-900">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 id="notes-title" className="text-lg font-semibold text-neutral-900">
                Visitor Notes &amp; Thoughts
              </h3>
              <p className="text-xs text-neutral-700">Leave a direct note or thought on this web page.</p>
            </div>
          </div>

          <form id="form-submit-note" onSubmit={handleSubmitFeedback} className="space-y-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="input-note-author" className="block text-xs font-medium text-neutral-700 mb-1">
                  Name / Handle
                </label>
                <input
                  id="input-note-author"
                  type="text"
                  value={feedbackAuthor}
                  onChange={(e) => setFeedbackAuthor(e.target.value)}
                  placeholder="e.g., Alex, Reader"
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="input-note-message" className="block text-xs font-medium text-neutral-700 mb-1">
                Your Note
              </label>
              <textarea
                id="input-note-message"
                rows={2}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Write a thought or feedback..."
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
              />
            </div>

            <button
              id="btn-submit-note"
              type="submit"
              disabled={!feedbackText.trim()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Note</span>
            </button>
          </form>

          {/* Notes list */}
          <div id="notes-list-container" className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="text-xs font-semibold text-neutral-750 uppercase tracking-wider mb-2">
              Recent Notes ({feedbackList.length})
            </div>
            {feedbackList.map((entry) => (
              <div
                key={entry.id}
                id={`note-item-${entry.id}`}
                className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900">{entry.author}</span>
                  <span className="text-neutral-600">{entry.timestamp}</span>
                </div>
                <p className="text-neutral-700 leading-relaxed">{entry.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
