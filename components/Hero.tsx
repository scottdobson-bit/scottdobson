import React from 'react';
import { ARTIST_NAME } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-white tracking-tighter mb-6 animate-fade-in-up">
          {ARTIST_NAME.toUpperCase()}
        </h1>
        <p className="text-xl md:text-3xl text-amber-500 font-light tracking-widest mb-10 uppercase">
          Composer . Performer . Visionary
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#discography" 
            className="px-8 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 font-bold uppercase tracking-wider rounded-none"
          >
            Latest Music
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 transition-all duration-300 font-bold uppercase tracking-wider rounded-none"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ChevronDown className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;