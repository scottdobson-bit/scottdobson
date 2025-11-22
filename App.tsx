
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Discography from './components/Discography';
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
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
