import React, { memo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Utilisation de memo pour éviter les re-rendus inutiles
const MemoizedHeader = memo(Header);
const MemoizedFeatures = memo(Features);
const MemoizedDemo = memo(Demo);
const MemoizedTestimonials = memo(Testimonials);
const MemoizedCTA = memo(CTA);
const MemoizedFooter = memo(Footer);

function App() {
  // Données statiques extraites pour faciliter la maintenance
  const stats = [
    { number: "40%", label: "Gain de productivité" },
    { number: "1000+", label: "Développeurs actifs" },
    { number: "24/7", label: "Support IA" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <MemoizedHeader />
      <Hero stats={stats} />
      <MemoizedFeatures />
      <MemoizedDemo />
      <MemoizedTestimonials />
      <MemoizedCTA />
      <MemoizedFooter />
    </div>
  );
}

export default App;
