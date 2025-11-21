import React from 'react';
import SectionTitle from './SectionTitle';
import { ARTIST_NAME } from '../constants';

const Bio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="The Artist" subtitle="Behind the Sound" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-amber-500 opacity-20 transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt={ARTIST_NAME} 
              className="relative w-full rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white text-xl">Scott Dobson</strong> is not just a musician; he is an architect of atmosphere. 
              Based in the vibrant musical landscape of the Pacific Northwest, Scott has spent over a decade refining a sound 
              that bridges the gap between organic instrumentation and digital synthesis.
            </p>
            <p>
              Born into a family of classical pianists, Scott rebelled early, trading Bach for synthesizers and drum machines. 
              However, the discipline of his upbringing remains evident in his complex compositions and meticulous production style.
            </p>
            <p>
              His work has been described as "cinematic," "evocative," and "hauntingly beautiful." Whether performing solo with 
              a loop pedal and a guitar or conducting a full electronic ensemble, Scott brings an intensity to the stage that 
              captivates audiences worldwide.
            </p>
            <div className="pt-6">
              <h3 className="text-amber-500 font-bold uppercase tracking-wide mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {['Electronic Jazz', 'Ambient', 'Alternative Rock', 'Synthwave', 'Neoclassical'].map((genre) => (
                  <span key={genre} className="bg-slate-900 text-slate-400 px-3 py-1 text-sm border border-slate-800 rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;