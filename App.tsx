import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TargetAudience } from './components/TargetAudience';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

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