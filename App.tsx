import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Discography from './components/Discography';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Music } from 'lucide-react';

const App: React.FC = () => {
  // A simple loading screen effect could be added here, but we'll keep it streamlined
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Bio />
        <Discography />
        <Downloads />
        <Contact />
      </main>

      <Footer />

      {/* Floating Music Indicator (Decorative) */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 bg-slate-900/80 backdrop-blur p-3 rounded-full border border-slate-800 shadow-lg">
         <div className="h-8 w-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
           <Music className="h-4 w-4 text-slate-900" />
         </div>
         <span className="text-xs font-medium pr-2 text-slate-300">Now Streaming: Neon Rain</span>
      </div>
    </div>
  );
};

export default App;