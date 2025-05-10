import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Leaderboard from './components/Leaderboard';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Roadmap />
        <Leaderboard />
        <Testimonials />
        <Faq />
      </main>
    </div>
  );
}

export default App;