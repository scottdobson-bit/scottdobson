import React from 'react';
import SectionTitle from './SectionTitle';
import { ALL_DOWNLOADS } from '../constants';
import { Download, Play, FileAudio } from 'lucide-react';

const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Downloads" subtitle="Get the Music Direct" />
        
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
            <h3 className="text-white font-medium flex items-center gap-2">
              <FileAudio className="h-5 w-5 text-amber-500" />
              Available Tracks
            </h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider">{ALL_DOWNLOADS.length} Tracks Free</span>
          </div>

          <div className="divide-y divide-slate-800">
            {ALL_DOWNLOADS.map((track) => (
              <div key={track.id} className="p-4 hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded overflow-hidden flex-shrink-0">
                    <img src={track.albumCover} alt={track.albumTitle} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                       <Play className="h-5 w-5 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-amber-500 transition-colors">{track.title}</h4>
                    <p className="text-xs text-slate-500">{track.albumTitle} • {track.duration}</p>
                  </div>
                </div>
                
                <a 
                  href={track.fileUrl} 
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white rounded text-sm transition-all duration-300 font-medium group/btn"
                  onClick={(e) => e.preventDefault()} // Mock download
                >
                  <span className="hidden sm:inline">Download</span>
                  <Download className="h-4 w-4 group-hover/btn:animate-bounce" />
                </a>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-800/30 text-center">
            <p className="text-xs text-slate-500">All tracks are available for personal listening. For commercial licensing, please contact me.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;