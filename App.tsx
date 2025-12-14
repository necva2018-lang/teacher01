import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { TargetAudience } from './components/TargetAudience.tsx';
import { Process } from './components/Process.tsx';
import { CTA } from './components/CTA.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <TargetAudience />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;