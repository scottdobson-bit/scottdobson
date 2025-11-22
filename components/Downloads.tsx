
import React from 'react';
import SectionTitle from './SectionTitle';
import { ALL_DOWNLOADS } from '../constants';
import { Download, FileAudio, Lock, Sparkles } from 'lucide-react';

const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Experimental Archives" subtitle="Suno Sketches & Demos" />
        
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-6 bg-slate-800/50 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
                The Lab
              </h3>
              <p className="text-sm text-slate-400 mt-1">Generative drafts and unreleased experiments.</p>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
              Exclusive Access
            </span>
          </div>

          <div className="divide-y divide-slate-800/50">
            {ALL_DOWNLOADS.map((track) => (
              <div key={track.id} className="p-4 sm:p-6 hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded overflow-hidden flex-shrink-0 bg-slate-800">
                    <img src={track.albumCover} alt={track.albumTitle} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <FileAudio className="h-6 w-6 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg group-hover:text-amber-500 transition-colors">{track.title}</h4>
                    <p className="text-sm text-slate-500">{track.albumTitle} • {track.duration}</p>
                  </div>
                </div>
                
                <a 
                  href={track.fileUrl} 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-100 text-slate-300 hover:text-slate-900 rounded-lg text-sm transition-all duration-300 font-bold group/btn border border-slate-700 hover:border-slate-100"
                  onClick={(e) => e.preventDefault()} // Mock download
                >
                  <span>Download</span>
                  <Download className="h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-slate-950/30 text-center border-t border-slate-800">
            <p className="text-xs text-slate-600 uppercase tracking-wide">
              Generated content subject to platform usage rights. © {new Date().getFullYear()} Scott Dobson.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
