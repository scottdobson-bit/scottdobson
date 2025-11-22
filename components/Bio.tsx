
import React from 'react';
import SectionTitle from './SectionTitle';
import { ARTIST_NAME } from '../constants';

const Bio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About The Artist" subtitle="Man & Machine" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column - Wrapped in flex justify-center to ensure perfect centering */}
          <div className="flex justify-center w-full">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-4 border-2 border-amber-500 opacity-20 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="/profile.jpg" 
                alt={ARTIST_NAME} 
                loading="eager"
                className="relative w-full rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            <p className="first-letter:text-5xl first-letter:text-amber-500 first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              Music is evolving, and <strong className="text-white">Scott Dobson</strong> stands at the frontier. 
            </p>
            <p>
              Merging the soul of traditional composition with the infinite possibilities of generative AI, Scott creates soundscapes that challenge the definition of authorship. His work spans two distinct worlds: the polished, emotive releases found on <strong>Spotify</strong>, and the raw, algorithmic experiments cultivated on <strong>Suno</strong>.
            </p>
            <p>
              Whether he is curating neural network outputs or recording live instrumentation, the goal remains the same: to evoke emotion through sound. Scott invites listeners to explore this hybrid landscape, where human intent guides digital chaos into harmony.
            </p>
            
            <div className="pt-8 border-t border-slate-800 mt-8">
              <h3 className="text-white font-bold uppercase tracking-wide mb-4 text-sm">Creative Focus</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm text-slate-400">Generative Audio</span>
                <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm text-slate-400">Suno AI</span>
                <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm text-slate-400">Composition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
