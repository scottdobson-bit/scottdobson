import React from 'react';
import SectionTitle from './SectionTitle';
import { DISCOGRAPHY } from '../constants';
import { Disc, Calendar } from 'lucide-react';

const Discography: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Discography" subtitle="A Sonic Journey" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISCOGRAPHY.map((album) => (
            <div key={album.id} className="group bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden rounded-lg flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Disc className="h-16 w-16 text-amber-500 animate-spin-slow" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {album.title}
                  </h3>
                  <span className="flex items-center text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    <Calendar className="h-3 w-3 mr-1" /> {album.year}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {album.description}
                </p>
                <div className="space-y-2">
                  {album.tracks.map((track, index) => (
                    <div key={track.id} className="flex justify-between text-sm text-slate-500 border-b border-slate-900 pb-1 last:border-0">
                      <span>{index + 1}. {track.title}</span>
                      <span>{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;