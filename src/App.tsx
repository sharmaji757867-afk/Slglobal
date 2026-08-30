/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { InteractiveWidget } from './components/InteractiveWidget';
import { Footer } from './components/Footer';

export default function App() {
  const [readingMode, setReadingMode] = useState<boolean>(false);

  const toggleReadingMode = () => {
    setReadingMode((prev) => !prev);
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
      <Header readingMode={readingMode} onToggleReadingMode={toggleReadingMode} />
      <main id="main-content" className="flex-1">
        <Hero readingMode={readingMode} />
        <Highlights />
        <InteractiveWidget />
      </main>
      <Footer />
    </div>
  );
}
